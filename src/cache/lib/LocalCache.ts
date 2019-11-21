import { IndexedDBStorage } from "./../../gob/tools/GobStorage/lib/IndexedDBStorage"
import { parseMs } from "./../../time/time"
/**
 * 缓存单元
 */
export interface ILocalCacheItem<V = any> {
    /** 键名 */
    key: keyof V
    /** 子分类名 */
    subName?: string
    /** 数据 */
    data: V[keyof V]
    /** 创建时间 ms */
    creatTime: number
    /** 寿命 ms */
    life?: number
}

const DVCHAR = "-∷-"
const VOID = { void: true }

/**
 * 本地缓存
 * 数据存储在 indexedDb
 */
export class LocalCache<V = any> {
    private db: IndexedDBStorage
    ready: Promise<boolean>
    name: string

    constructor(name: string) {
        this.name = name
        this.db = new IndexedDBStorage("LocalCache—" + name)
        this.ready = this.db.ready
    }

    /**
     * 清空所有缓存
     */
    async claer() {
        return await this.db.deleteAll()
    }

    /**
     * 设置值
     * @param key 键名
     * @param value 值
     * @param subName 子分类名
     * @param life 缓存寿命（ms），除了直接指定毫秒数还可以是时间字符串如（"5s","10h", "1h", "3day"）
     */
    async set<K extends keyof V>(key: K, value: V[keyof V], subName = "0", life?: number | string) {
        let timestamp = new Date().getTime()

        let lifeMs = typeof life === "string" ? parseMs(life) : life

        let item: ILocalCacheItem<V> = {
            key,
            subName,
            data: value,
            creatTime: timestamp,
            life: lifeMs
        }

        let realKey = `${subName}${DVCHAR}${key}`
        return await this.db.set(realKey, item)
    }

    /**
     * 根据 key 获取一个缓存
     * @param key
     * @param value
     * @param subName
     */
    async get<K extends keyof V>(key: K, subName = "0"): Promise<V[K] | undefined> {
        let realKey = `${subName}${DVCHAR}${key}`
        let re = await this._checkCache(realKey)
        if (re) return <V[K]>re.data
    }

    /**
     * 根据 key 检查一个缓存是否存在
     * @param key
     * @param subName
     * @return {Promise<boolean>}
     */
    async has<K extends keyof V>(key: string, subName = "0") {
        let realKey = `${subName}${DVCHAR}${key}`
        let re = await this._checkCache(realKey)
        return re != undefined
    }

    /**
     * 获取全部值
     * @param subName
     */
    async getAll(subName = "0"): Promise<V> {
        let keys = await this.db.getAllKeys()
        let startStr = `${subName}${DVCHAR}`
        keys = keys.filter(key => key.slice(0, startStr.length) === startStr)

        let allValues: V = <V>{}

        for (let realKey of keys) {
            let item = await this._checkCache(realKey)
            if (item != undefined) {
                allValues[item.key] = item.data
            }
        }
        return allValues
    }

    /**
     * 根据 key 检查一个缓存是否存在
     * @param key
     * @param subName
     */
    async delete<K extends keyof V>(key: K, subName = "0") {
        let realKey = `${subName}${DVCHAR}${key}`
        return await this.db.delete(realKey)
    }

    /**
     * 检查一个 cache 的有效性，有效则返回缓存 item，如果过期会删除
     * @param realKey
     * @private
     */
    private async _checkCache(realKey: string) {
        if (!this.db.has(realKey)) return undefined

        let item = <ILocalCacheItem<V>>await this.db.get(realKey)
        if (item) {
            // 检查是否过期
            if (item.life != undefined && this._checkItemTimeout(item)) {
                // 如果过期则删除
                await this.db.delete(realKey)
                return undefined
            } else {
                return item
            }
        }
        return undefined
    }

    /**
     * 检查一个缓存是否过期
     * @param item
     * @private
     */
    private _checkItemTimeout(item: ILocalCacheItem) {
        if (item.life != undefined) {
            let finTimeout = <number>item.life
            let nowTimestamp = new Date().getTime()
            let d = nowTimestamp - item.creatTime
            return d > finTimeout
        } else {
            return false
        }
    }

    /**
     * 清除所有过期的缓存
     */
    async clearDeadCache() {
        let keys = await this.db.getAllKeys()

        for (let key of keys) {
            await this._checkCache(key)
        }
    }
}
