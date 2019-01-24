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
 * 数组化键名路径
 */
export type KeyPath = string[]

/**
 * 规范化键名路径
 *
 *
 * @example
 * normalizeKeyPath("foo.bar") // => ["foo","bar"]
 * normalizeKeyPath("foo/bar") // => ["foo","bar"]
 * normalizeKeyPath(["foo","bar"]) // => ["foo","bar"]
 *
 * @param inPath
 * @return {any}
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
            if (typeof cursor[key] !== "object") {
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

interface ITreeEachOptions {
    // 遍历时深度优先，为 false 时为广度优先
    depthFirst?: boolean
    // 是否检查循环依赖
    checkCycle?: boolean
    // 循环依赖回调
    checkCycleCallback?: (value: any, key: string, parent: any, path?: string[], firstPath?: string[]) => void
    // 是否需要 KeyPath
    needKeyPath?: boolean
}

/**
 *
 * @param object
 * @param eachFunc
 * @param childrenKey
 * @param options
 */
export function treeEach(
    object: any,
    eachFunc: (
        value: any,
        key: string,
        parent: any,
        info: {
            // 遍历深度
            deep: number
            // keyPath
            keyPath?: string[]
        }
    ) => void,
    options: ITreeEachOptions = {
        checkCycle: false, // 默认不检查循环依赖
        depthFirst: false, // 默认广度优先遍历
        needKeyPath: false // 默认不需要 KeyPath
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

    function eachOnce(object: any, deep: number, path?: string[]) {
        let nextEachList

        // 如果是不是深度优先而是广度优先，则初始化欲遍历队列
        if (!options.depthFirst) {
            nextEachList = []
        }

        for (let key in object) {
            let value = object[key]
            let nowKeyPath = path ? [...path, key] : undefined

            // 执行 each 函数
            eachFunc(value, key, object, {
                deep: deep,
                keyPath: nowKeyPath
            })

            // 判断是需要遍历的项
            if (typeof value === "object") {
                // 检查循环依赖
                if (options.checkCycle) {
                    if (cycleCache.get(value)) {
                        // 循环依赖回调
                        if (useCycleCallback && options.checkCycleCallback) {
                            options.checkCycleCallback(value, key, object, path, cycleCache.get(value))
                        }
                        // 忽略循环依赖
                        continue
                    } else {
                        // 如果使用循环依赖回调，cycleCache 里会保存路径
                        if (useCycleCallback) {
                            cycleCache.set(value, path || true)
                        } else {
                            cycleCache.set(value, true)
                        }
                    }
                }

                if (options.depthFirst) {
                    // 深度优先遍历
                    eachOnce(value, deep + 1, nowKeyPath)
                } else {
                    ;(<any[]>nextEachList).push({ value, key, nowKeyPath })
                }
            }
        }

        // 广度优先遍历
        if (!options.depthFirst) {
            ;(<any[]>nextEachList).forEach(item => eachOnce(item.value, deep + 1, item.nowKeyPath))
        }
    }
}
