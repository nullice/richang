import { IGobOperator } from "../../executor/lib/operators"
import { GobFilterProvideInfo, GobFilterType, IGobFilter, IGobFilterRecursiveType } from "../../filters/filters"
import { isEqual, normalizeKeyPath } from "../../../object/object"
import { isAsyncFunction } from "../../../function/function"
import { objectEach } from "../../../object/object"
import { assertType } from "./../GobSchema/lib/assertType"
import { GobFactory } from "../../gob"
import { setObjectValueByPath } from "../../../object/object"

/**
 * 基于 Gob 对数据管理工具
 */
export class GobSchema<T> {
    private readonly data!: T
    private filters: IGobFilter[] = []
    constructor(data: T) {
        this.data = data
    }

    /**
     * 当匹配的数据被最终修改时触发回调
     * 此时数据已经被修改，此时你已经无法通过改变 operator 来修改执行结果
     *
     * @example
     * let data = { info: { name : "aaa", phone : 123 }}
     * let settings = new GobSchema(data)
     *
     * settings.onChange("info.*", (newValue, operator, info) => {
     *     console.log("数据被修改了",operator.keyPath, newValue)
     * })
     *
     * // 修改数据, 修改结束后会触发回调
     * data.info.name = "newNmae"
     *
     * @param keyPathGlob 键名路径匹配符
     * 可使用 "*"、"\*\*" 通配符，分别匹配"同级所有项"和"所有子级";
     * 如 "a.*" 可以匹配 "a.b"、"a.c"、"a.d"，无法匹配 "a.b.e";
     * 如 "a.**" 可以匹配 "a.b"、"a.c"、"a.b.e"、"a.b.c.s.x";
     *
     * @param func 回调函数
     */
    onChange(keyPathGlob: string, func: (newValue: any, operator: IGobOperator, info: GobFilterProvideInfo) => any) {
        this.filters.push(getFilterWithGlob(GobFilterType.fin, keyPathGlob, func))
    }

    /**
     * 当匹配的数据被修改前触发回调
     * 此时数据还没有被最终修改，你可以改变这次操作的操作符 operator 来修改操作内容
     * 例如改变赋值的目标值
     *
     * operator.value = newVal

     * @param keyPathGlob 键名路径匹配符
     * 可使用 "*"、"\*\*" 通配符，分别匹配"同级所有项"和"所有子级";
     * 如 "a.*" 可以匹配 "a.b"、"a.c"、"a.d"，无法匹配 "a.b.e";
     * 如 "a.**" 可以匹配 "a.b"、"a.c"、"a.b.e"、"a.b.c.s.x";
     *
     * @param func 回调函数
     *
     * @example
     * let data = { info: { name : "aaa", phone : 123 }}
     * let settings = new GobSchema(data)
     *
     * settings.onSet("info.*", (newValue, operator, info) => {
     *     operator.value += 9
     * })
     * data.info.phone = 10
     * 
     * // 修改数据时触发回调，改变赋值的目标值，data.info.phone 最终会变成 19
     */
    onSet(keyPathGlob: string, func: (newValue: any, operator: IGobOperator, info: GobFilterProvideInfo) => any) {
        this.filters.push(getFilterWithGlob(GobFilterType.pre, keyPathGlob, func))
    }

    /**
     * 让指定数据被 set 时，如果 set 的新值与旧值没有变化时，不会赋值
     * 也就不会触发接下来的 onChnage 和 Gob 的数据改变订阅
     *
     * - 会使用 isEqual 来判断改变与否
     *
     * 会在所有 onSet 之后检查
     * [SET] -> onSet1 -> onSet2 -> NoChangeNoSet -> [CHANGE] -> onChange
     *
     * @param keyPathGlob 键名路径匹配符
     */
    defineNoChangeNoSet(keyPathGlob: string) {
        let filter = getFilterWithGlob(
            GobFilterType.pre,
            keyPathGlob,
            (newValue, operator, info) => {
                if (isEqual(newValue, info.oldValue)) {
                    return false
                }
            },
            undefined,
            999888
        )
        this.filters.push(filter)
    }

    /**
     * 限制匹配数据取值范围
     *
     * 会在普通的 onSet 之后执行（会在 NoChangeNoSet 之前执行）
     * [SET] -> onSet1 -> defineLimit -> [CHANGE] -> onChange
     *
     * @param keyPathGlob 键名路径匹配符
     * @param min 最小值，undefined 为不限制
     * @param max 最大值，undefined 为不限制
     */
    defineLimit(keyPathGlob: string, min?: number | undefined, max?: number | undefined) {
        let filter = getFilterWithGlob(
            GobFilterType.pre,
            keyPathGlob,
            (newValue, operator, info) => {
                if (min != undefined) {
                    if (operator.value < min) operator.value = min
                }

                if (max != undefined) {
                    if (operator.value > max) operator.value = max
                }
            },
            undefined,
            999
        )
        this.filters.push(filter)
    }

    /**
     * 指定数据的类型，如果赋值时类型不对会终止后续流程
     * 会在普通的 onSet 之前执行
     * [SET] -> defineType -> onSet1 -> onSet2 -> [CHANGE] -> onChange
     *
     * @param keyPathGlob 键名路径匹配符
     * @param type 类型（构造函数，如 String、Number、Symbol）
     * @param throwError 是否要抛出错误
     */
    defineType(keyPathGlob: string, type: Function, throwError = true) {
        let filter = getFilterWithGlob(
            GobFilterType.pre,
            keyPathGlob,
            (newValue, operator, info) => {
                let re = assertType(operator.value, type)

                if (re.valid) {
                    return true
                } else {
                    if (throwError)
                        throw new Error(
                            `[GobSchema] err [defineType] data: ${operator.keyPath.join(".")}  should be ${
                                re.expectedType
                            }. `
                        )

                    return false
                }
            },
            undefined,
            10
        )
        this.filters.push(filter)
    }

    /**
     * 对指定数据的修改进行验证，验证函数返回 false 时，会终止后续流程
     * @param keyPathGlob 键名路径匹配符
     * @param verifyFuc 验证函数，如果验证失败会
     */
    defineVerify(keyPathGlob: string, verifyFuc: (value: any, keyPath: string[]) => boolean) {
        let filter = getFilterWithGlob(GobFilterType.pre, keyPathGlob, (newValue, operator, info) => {
            return verifyFuc(newValue, operator.keyPath)
        })
        this.filters.push(filter)
    }

    /**
     * 返回当前 GobSchema 的 data 和对应 filters，可以用其创建 Gob
     *
     * 如果要直接或得 Gob 请使用 gobSchema.getGob()
     * @param prefixKeyPath
     */
    getGobSource(
        prefixKeyPath?: string[]
    ): {
        data: T
        filters: IGobFilter[]
    } {
        let data = {}
        objectEach(
            this.data,
            (value, key, info, CONTOL) => {
                let subData = value
                if (value && value instanceof GobSchema) {
                    subData = value.getGobSource(info.keyPath)
                    info.parent[key] = subData.data
                    this.filters = this.filters.concat(subData.filters)
                }
                setObjectValueByPath(data, <string[]>info.keyPath, subData)
            },
            { needKeyPath: true }
        )

        this.filters.forEach(filter => {
            if (prefixKeyPath) {
                filter.keyPath = [...prefixKeyPath, ...filter.keyPath]
            }
        })
        return {
            data: this.data,
            filters: this.filters
        }
    }

    /**
     * 创建当前 GobSchema 的 Gob 对象
     */
    getGob(): T {
        let gs = this.getGobSource()
        let gob = GobFactory(gs.data)
        let gobCore = GobFactory.getGobCore(gob)
        gs.filters.forEach(filter => gobCore.filters.addFilter(filter))

        return gob
    }

    /**
     * 返回对象自己，但是类型是 <T> ，构建 GobSchema 对象树时让编辑器有类型提示
     *
     *
     * let s = {
     *     loser: 21
     *     yas: gobSchema.getSelf()
     * }
     *
     *
     */
    getSelf(): T {
        return <T>(<any>this)
    }
}

/**
 * 根据 keyPathGlob 生成一个 Filter
 * @param type 过滤器类型 "pre", "fin"
 * @param keyPathGlob
 * @param func
 * @param async 是否是异步过滤器
 * @param level 过滤器执行优先级
 */
function getFilterWithGlob(
    type: GobFilterType,
    keyPathGlob: string,
    func: (newValue: any, operator: IGobOperator, info: GobFilterProvideInfo) => any,
    async?: boolean,
    level?: number
) {
    let keyPath = normalizeKeyPath(keyPathGlob)
    let recursive: IGobFilterRecursiveType | boolean = false

    if (keyPath[keyPath.length - 1] === "*") {
        recursive = IGobFilterRecursiveType.once
        keyPath.pop()
    } else if (keyPath[keyPath.length - 1] === "**") {
        recursive = IGobFilterRecursiveType.all
        keyPath.pop()
    }

    let isAsync = isAsyncFunction(func)

    let filter: IGobFilter = {
        type,
        func,
        level,
        keyPath,
        async: async || isAsync,
        recursive: recursive,
        name: ""
    }

    return filter
}
