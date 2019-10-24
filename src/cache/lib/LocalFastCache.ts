import { parseMs } from "./../../time/time"
import { ILocalCacheItem } from "./LocalCache"
const DVCHAR = "-∷-"
const VOID = { void: true }

/**
 * 本地快速缓存
 * 数据存储在 localStorage
 * 读写是同步的，速度可控，尤其是页面启动时速度比 indexedDb 要快许多
 * 但是 localStorage 有 5MB 大小限制，indexedDb 一般为 50 ～ 200 MB
 */
export class LocalFastCache<V = any> {
    name: string
    fixName: string

    constructor(name: string) {
        this.name = name
        this.fixName = "LFCache—" + name
    }

    /**
     * 清空所有缓存
     */
    claer() {
        let keys = this.getAllRealKeys()
        keys.forEach(key => localStorage.removeItem(key))
        return
    }

    /**
     * 设置值
     * @param key 键名
     * @param value 值
     * @param subName 子分类名
     * @param life 缓存寿命（ms），除了直接指定毫秒数还可以是时间字符串如（"5s","10h", "1h", "3day"）
     */
    set(key: string, value: V, subName = "0", life?: number | string) {
        let timestamp = new Date().getTime()

        let lifeMs = typeof life === "string" ? parseMs(life) : life

        let item: ILocalCacheItem<V> = {
            key,
            subName,
            data: value,
            creatTime: timestamp,
            life: lifeMs
        }

        let realKey = `${this.fixName}${DVCHAR}${subName}${DVCHAR}${key}`
        return localStorage.setItem(realKey, JSON.stringify(item))
    }

    /**
     * 根据 key 获取一个缓存
     * @param key
     * @param value
     * @param subName
     */
    get(key: string, subName = "0") {
        let realKey = `${this.fixName}${DVCHAR}${subName}${DVCHAR}${key}`
        let re = this._checkCache(realKey)
        if (re) return re.data
    }

    /**
     * 根据 key 检查一个缓存是否存在
     * @param key
     * @param subName
     * @return {Promise<boolean>}
     */
    has(key: string, subName = "0") {
        let realKey = `${this.fixName}${DVCHAR}${subName}${DVCHAR}${key}`
        let re = this._checkCache(realKey)
        return re != undefined
    }

    /**
     * 获取全部值
     * @param subName
     */
    getAll(subName = "0"): { [key: string]: V } {
        let keys = this.getAllRealKeys()

        let allValues: { [key: string]: V } = {}
        for (let realKey of keys) {
            let item = this._checkCache(realKey)
            if (item != undefined) {
                allValues[item.key] = item.data
            }
        }
        return allValues
    }

    /**
     * 获取全部的原始 key
     * @param subName
     */
    getAllRealKeys(subName = "0"): string[] {
        let keys = Object.keys(localStorage)
        let startStr = `${this.fixName}${DVCHAR}${subName}`
        keys = keys.filter(key => key.slice(0, startStr.length) === startStr)
        return keys
    }

    /**
     * 根据 key 检查一个缓存是否存在
     * @param key
     * @param subName
     */
    delete(key: string, subName = "0") {
        let realKey = `${this.fixName}${DVCHAR}${subName}${DVCHAR}${key}`
        return localStorage.removeItem(realKey)
    }

    /**
     * 检查一个 cache 的有效性，有效则返回缓存 item，如果过期会删除
     * @param realKey
     * @private
     */
    private _checkCache(realKey: string) {
        let raw = localStorage.getItem(realKey)
        if (raw == undefined) return
        let item = <ILocalCacheItem<V>>(<any>JSON.parse(raw))

        if (item) {
            // 检查是否过期
            if (item.life != undefined && this._checkItemTimeout(item)) {
                // 如果过期则删除
                localStorage.removeItem(realKey)
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
        let keys = this.getAllRealKeys()

        for (let key of keys) {
            await this._checkCache(key)
        }
    }
}
