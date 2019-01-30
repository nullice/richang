/*
 * Created by bgllj on 2016/10/26.
 */

//      ___                       ___           ___           ___           ___           ___
//     /\  \                     /\__\         /\  \         /\  \         /\  \         /\__\
//    /::\  \       ___         /:/  /         \:\  \       /::\  \        \:\  \       /:/ _/_
//   /:/\:\__\     /\__\       /:/  /           \:\  \     /:/\:\  \        \:\  \     /:/ /\  \
//  /:/ /:/  /    /:/__/      /:/  /  ___   ___ /::\  \   /:/ /::\  \   _____\:\  \   /:/ /::\  \
// /:/_/:/__/___ /::\  \     /:/__/  /\__\ /\  /:/\:\__\ /:/_/:/\:\__\ /::::::::\__\ /:/__\/\:\__\
// \:\/:::::/  / \/\:\  \__  \:\  \ /:/  / \:\/:/  \/__/ \:\/:/  \/__/ \:\~~\~~\/__/ \:\  \ /:/  /
//  \::/~~/~~~~   ~~\:\/\__\  \:\  /:/  /   \::/__/       \::/__/       \:\  \        \:\  /:/  /
//   \:\~~\          \::/  /   \:\/:/  /     \:\  \        \:\  \        \:\  \        \:\/:/  /
//    \:\__\         /:/  /     \::/  /       \:\__\        \:\__\        \:\__\        \::/  /
//     \/__/         \/__/       \/__/         \/__/         \/__/         \/__/         \/__/
//
//
//                日常
//        +-------------------+
//        |      Richang      |
//        +-------------------+
//             · object ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

/**
 * 对象是否为空
 * @returns {boolean}
 * @param object
 */
export function isEmptyObject(object: object) {
    for (let key in object) {
        return false
    }
    return true
}

/**
 * 判断一个值是否是对象（可遍历键值）
 * 函数是对象，null 不是对象
 * @example
 * isObject(null) // false
 * isObject(()=>{})) // true
 * @param value
 * @return {boolean}
 */
export function isObject(value: object) {
    let type = typeof value
    return value !== null && (type === "object" || type === "function")
}

/**
 * 数组化键名路径
 */
export type KeyPath = string[]

/**
 * 规范化键名路径
 *
 * @example
 * normalizeKeyPath("foo.bar") // => ["foo","bar"]
 * normalizeKeyPath("foo/bar") // => ["foo","bar"]
 * normalizeKeyPath(["foo","bar"]) // => ["foo","bar"]
 *
 * @param inPath
 * @return {string[]}
 */
export function normalizeKeyPath(inPath: string | string[]): KeyPath {
    if (typeof inPath === "string") {
        return inPath.split(/[\/\.]/g)
    } else if (Array.isArray(inPath)) {
        return inPath
    } else {
        return []
    }
}

/**
 * 比较 2 个键名路径是否相等。可以是数组形式的 keyPath 也可以是路径字符串
 * @param keyPathA
 * @param keyPathB
 * @return {boolean}
 */
export function keyPathEqual(keyPathA: string | string[], keyPathB: string | string[]) {
    let aIsArray = Array.isArray(keyPathA)
    let bIsArray = Array.isArray(keyPathB)
    if (aIsArray && bIsArray) {
        return isEqual(keyPathA, keyPathB)
    } else if (!aIsArray && !bIsArray) {
        return aIsArray === bIsArray
    } else {
        return isEqual(normalizeKeyPath(keyPathA), normalizeKeyPath(keyPathB))
    }
}

/**
 * 根据键名路径获取对象值
 *
 * @param object 对象
 * @param path 键名路径
 * @return {any}
 */
export function getObjectValueByPath(object: object, path: string | string[]) {
    let keyPath = normalizeKeyPath(path)
    let cursor: any = object

    keyPath.every((key, index) => {
        cursor = cursor[key]
        if (cursor == undefined) return false
        return true
    })
    return cursor
}

/**
 * 根据键名路径给对象赋值，成功返回 true
 * 当路径在目标对象中不存在时会自动创建对象，可以通过给 disableAutoMakeObject 传 true 来禁止这个机制
 *
 * @param object 对象
 * @param path 键名路径
 * @param value 值
 * @param overwrite 覆盖，当路径不存在或路径中存在不可赋值项时自动创建对象
 *
 * @example
 * let obj = {a:{b:1}}
 * setObjectValueByPath(a,"a.b",3) // obj => {a:{b:3}}
 * setObjectValueByPath(a,"a.b.d.e",5) // obj => {a:{b:{c:{d:5}}}}
 * @return {any}
 */
export function setObjectValueByPath(object: object, path: string | string[], value: any, overwrite = false) {
    let keyPath = normalizeKeyPath(path)
    let cursor: any = object

    // keyPath 为空数组直接返回 false
    if (keyPath.length <= 0) return false

    for (let i = 0, len = keyPath.length; i < len; i++) {
        let key = keyPath[i]

        // 最后一个key
        if (i == len - 1) {
            cursor[key] = value
            return true
        } else {
            // 路径不存在的情况
            if (!isObject(cursor[key])) {
                if (overwrite) {
                    cursor[key] = {}
                } else {
                    return false
                }
            }
            cursor = cursor[key]
        }
    }

    return false
}

/**
 * 根据键名路径删除对象
 * @param object
 * @param path
 */
export function deleteObjectValueByPath(object: object, path: string | string[]) {
    let keyPath = normalizeKeyPath(path)
    let lastKey = keyPath.pop()

    let lastObject = getObjectValueByPath(object, keyPath)
    if (isObject(lastObject)) {
        return delete lastObject[<any>lastKey]
    }
}

interface IObjectEachOptions {
    // 遍历时深度优先，为 false 时为广度优先
    depthFirst?: boolean
    /**
     *  深度遍历的回弹（出栈）遍历函数
     *  eachFunc 相当于在入栈时执行，而 depthReboundFunc 在出栈时执行
     *  执行时意味着所有子节点已经遍历完了
     *
     * @param value
     * @param key
     * @param info
     */
    depthReboundFunc?: (
        value: any,
        key: string,
        info: {
            // 父级对象
            parent: any
            // 遍历深度
            deep: number
            // keyPath
            keyPath?: string[]
        }
    ) => any
    // 是否检查循环依赖
    checkCycle?: boolean
    /**
     * 循环依赖回调
     * @param value
     * @param key
     * @param parent
     * @param keyPath
     * @param firstPath 出现循环依赖的对象第一次出现的 keyPath
     */
    checkCycleCallback?: (
        value: any,
        key: string,
        info: { parent: any; keyPath?: string[]; firstKeyPath?: string[] }
    ) => void
    // 是否需要 KeyPath
    needKeyPath?: boolean

    /**
     仅遍历指定 key 的 children
     * @example
     * {children:{
     *      item1:{value:1, children:{
     *             item2:{value:1}
     *      } }
     * }}
     */
    childrenKey?: string
    // 异步遍历，允许 eachFunc 使用 async 函数，或者 Promise 实例
}

/**
 * 对象遍历, 遍历对象的每一个键
 *
 * @param object
 * @param eachFunc 遍历函数。返回 -1 时终止遍历（ruturn）；返回 -2 时终止当层遍历（break）; 返回 -3 跳到下一个遍历（continue）
 * @param options
 */
export function objectEach(
    object: any,
    eachFunc: (
        value: any,
        key: string,
        info: {
            // 父级对象
            parent: any
            // 遍历深度
            deep: number
            // 是否是遍历的末端（没有子节点了）
            end: boolean
            // keyPath
            keyPath?: string[]
        }
    ) => void | -1 | -2 | -3,
    options: IObjectEachOptions = {
        checkCycle: false, // 默认不检查循环依赖
        depthFirst: false, // 默认广度优先遍历
        needKeyPath: false, // 默认不需要 KeyPath
        childrenKey: undefined // 默认不指定子树 key ，会遍历对象每一个 key
    }
) {
    // 是否使用循环依赖回调
    let useCycleCallback: boolean
    // 循环依赖检查缓存
    let cycleCache: WeakMap<any, any>

    // 循环依赖检查初始化
    if (options.checkCycle) {
        useCycleCallback = typeof options.checkCycleCallback === "function"
        cycleCache = new WeakMap()
        cycleCache.set(object, useCycleCallback ? [] : true)
    }

    // 遍历入口
    eachOnce(object, 0, options.needKeyPath ? [] : undefined)

    function eachOnce(object: any, deep: number, path?: string[]): any {
        let nextEachList

        // 如果是不是深度优先而是广度优先，则初始化欲遍历队列
        if (!options.depthFirst) {
            nextEachList = []
        }

        // 遍历目标
        let target
        // 是否只遍历指定子节点
        if (options.childrenKey) {
            target = object[options.childrenKey]
        } else {
            target = object
        }

        for (let key in target) {
            let value = target[key]
            let nowKeyPath = path ? [...path, key] : undefined
            let hasNext = isObject(value)

            // 执行 each 函数
            let control = eachFunc(value, key, {
                parent: object,
                deep: deep,
                keyPath: nowKeyPath,
                end: !hasNext
            })

            if (control === -1) return -1
            if (control === -2) break
            if (control === -3) continue

            // 判断是需要遍历的项
            if (hasNext) {
                // 检查循环依赖
                if (options.checkCycle) {
                    if (cycleCache.get(value)) {
                        // 循环依赖回调
                        if (useCycleCallback && options.checkCycleCallback) {
                            options.checkCycleCallback(value, key, {
                                parent: object,
                                keyPath: path,
                                firstKeyPath: cycleCache.get(value)
                            })
                        }
                        // 忽略循环依赖
                        continue
                    } else {
                        // 如果使用循环依赖回调，cycleCache 里会保存路径
                        if (useCycleCallback) {
                            cycleCache.set(value, nowKeyPath || true)
                        } else {
                            cycleCache.set(value, true)
                        }
                    }
                }

                if (options.depthFirst) {
                    // 深度优先遍历
                    let re = eachOnce(value, deep + 1, nowKeyPath)
                    // 提前终止
                    if (re === -1) return -1
                    if (options.depthReboundFunc) {
                        // 执行 depthReboundFunc 函数
                        options.depthReboundFunc(value, key, {
                            parent: object,
                            deep: deep,
                            keyPath: nowKeyPath
                        })
                    }
                } else {
                    ;(<any[]>nextEachList).push({ value, key, nowKeyPath })
                }
            }
        }

        // 广度优先遍历
        if (!options.depthFirst) {
            let re = (<any[]>nextEachList).every(item => eachOnce(item.value, deep + 1, item.nowKeyPath) !== -1)
            // 提前终止
            if (!re) return -1
        }
    }
}
import _cloneDeep from "lodash/cloneDeep"
import isEqual from "lodash/isEqual"

/**
 * 深度克隆一个对象
 * @param object
 */
export let cloneDeep: (obejct: any) => any = _cloneDeep

export interface IMappingRule {
    [key: string]: any | [string, Function, Function] | IMappingRule
}
/**
 * 对象映射。
 * 通过定义的映射规则（mappingRule）把源对象转换成另一个新对象
 * 映射规则：定影新对象的结构，新对象中值根据映射规则中的“键名路径”从源对象获取
 * 映射规则
 *
 * @example
 * // 源对象
 * {
 *     user_name:"a",
 *     info:{
 *         id:123,
 *     }
 * }
 *
 * // 规则
 * {
 *     name:"user_name"
 *     id:"info.id"
 * }
 *
 *
 * // 新对象
 * {
 *     name:"a"
 *     id:123
 * }
 *
 * // 规则处理字符串的键名路径外还可以提供处理函数： [路径, 处理函数, 逆向处理函数]
 * {
 *     updateDate:["update_date", (x)=>{new Date(x)}, (x)=>{JSON.stringify(x)}]
 * }
 *
 * // 如果不提供的处理函数而是 undefined，产生的新对象将没有这个键
 * {
 *     updateDate:["update_date", (x)=>{new Date(x)}, undefined }]
 * }
 *
 * @param objectSource 原对象
 * @param mappingRule 映射规则
 * @param reverse 逆向映射
 * @return {any}
 */

export function mappingObject(objectSource: any, mappingRule: IMappingRule, reverse?: boolean) {
    let forMap = cloneDeep(mappingRule)
    let reverseOb: any
    if (reverse) reverseOb = {}

    objectEach(
        forMap,
        (value, key, info) => {
            let valueIsArray = Array.isArray(value)
            if (info.end || valueIsArray) {
                if (valueIsArray) {
                    let rawKeyPath = value[0]
                    let func = value[1]
                    let reverseFunc = value[2]

                    if (reverse) {
                        let rawValue = getObjectValueByPath(objectSource, <string[]>info.keyPath)

                        // 处理函数
                        if (reverseFunc) rawValue = reverseFunc(rawValue)
                        else {
                            deleteObjectValueByPath(reverseOb, <string[]>rawKeyPath)
                            return -2
                        }

                        setObjectValueByPath(reverseOb, <string[]>rawKeyPath, rawValue)
                    } else {
                        let rawValue = getObjectValueByPath(objectSource, rawKeyPath)

                        // 处理函数
                        if (func) rawValue = func(rawValue)
                        else {
                            delete info.parent[key]
                            return -2
                        }

                        info.parent[key] = rawValue
                    }

                    return -2
                } else {
                    if (reverse) {
                        let rawValue = getObjectValueByPath(objectSource, <string[]>info.keyPath)
                        setObjectValueByPath(reverseOb, value, rawValue)
                    } else {
                        info.parent[key] = getObjectValueByPath(objectSource, value)
                    }
                }
            }
        },
        { needKeyPath: reverse }
    )

    if (reverse) {
        return reverseOb
    } else {
        return forMap
    }
}
