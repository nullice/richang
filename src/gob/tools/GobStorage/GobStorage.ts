import { GobFactory } from "../../gob"
import { IndexedDBStorage } from "./lib/indexedDBStorage"
import debounce from "lodash/debounce"
import { GobSchema } from "../GobSchema/GobSchema"
import { IGobFilter } from "../../../gob/filters/filters"

/**
 * GobStorage 本地存储工具
 * 创建一个 Gob 对象，并且对其操作会通过 indexedDB 存储在浏览器本地
 *
 * @example
 * let settingsStorage =  new GobStorage("settings")
 * settingsStorage.data.myItem = 123
 *
 */
export class GobStorage {
    private gobData: any
    private gobCore: any
    private raw: any
    private storage!: IndexedDBStorage
    private waitSaveKeys: string[] = []
    private defaultData!: object | GobSchema<any>

    // 存储名称，通过这个名称存储到本地
    name: string

    // 存储对象，通过这个对象操作数据
    get data() {
        return this.gobData
    }
    set data(value) {
        if (typeof value === "object") {
            Object.assign(this.gobData, value)
        } else {
            throw new Error("[GobStorage] data must be object.")
        }
    }

    /** 禁止保存 */
    public disableSave = false

    // 是否初始化完成
    readonly ready: Promise<boolean>


    /**
     * 打开/创建一个 GobStorage 并等待其初始化完成，相当于是 new GobStorage 的简便方法
     * @param name
     * @param defaultData
     */
    static async open(name = "GobStorage_normal", defaultData?: object | GobSchema<any>) {
        let gs = new GobStorage(name, defaultData)
        await gs.ready
        return gs
    }

    /**
     *
     * @param name 存储名称，通过这个名称存储到本地
     * @param defaultData 默认数据
     */
    constructor(name = "GobStorage_normal", defaultData?: object | GobSchema<any>) {
        this.name = name
        this.storage = new IndexedDBStorage(name)
        this.ready = this.init()
        if (defaultData) this.defaultData = defaultData
    }

    private async init() {
        let readly = await this.storage.ready
        // console.log("[GobStorage]")
        if (!readly) throw Error("[GobStorage] err storage ready.")
        let localData = await this.storage.getAll()
        if (localData === undefined) localData = {}
        let initGobFilters: IGobFilter[] = []

        // console.log("localData", JSON.stringify(localData))

        if (this.defaultData) {
            if (this.defaultData instanceof GobSchema) {
                let gs = this.defaultData.getGobSource()
                initGobFilters = gs.filters
                localData = Object.assign({}, gs.data, localData)
            } else {
                localData = Object.assign({}, this.defaultData, localData)
            }
        }

        this.raw = localData
        let gobData = GobFactory(localData)
        let gobCore = GobFactory.getGobCore(gobData)
        this.gobCore = gobCore
        this.gobData = gobData
        this.data = gobData

        // 添加 Gob 初始过滤器
        initGobFilters.forEach(filter => gobCore.filters.addFilter(filter))

        // 通过 Gob 订阅数据变更来触发数据到本地记录
        gobCore.recorder.subscribe(operator => {
            // 禁止保存的时候，直接跳过
            if(this.disableSave) return

            let key = operator.keyPath[0]
            this.waitSaveKeys.push(key)
            this.tick()
        })

        return true
    }

    private tick = debounce(function(this: GobStorage) {
        // console.time("[GobStorage] save")
        let ps = []
        while (this.waitSaveKeys.length > 0) {
            let key = this.waitSaveKeys.pop()
            if (key) {
                let value = this.gobCore.data[key]
                if (value === undefined) {
                    ps.push(this.storage.delete(key))
                } else {
                    ps.push(this.storage.set(key, value))
                }
            }
        }

        // Promise.all(ps).then(()=>{
        //     // console.timeEnd("[GobStorage] save")
        // })
    }, 50)
}
