import { isObject } from "./object"

export interface IObjectEachOptions {
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

enum EachControl {
    // 终止全部遍历
    exit = -1,
    // 终止当层遍历
    break = -2,
    // 跳到下一个遍历
    continue = -3
}

interface IEachControls {
    exit: EachControl.exit
    break: EachControl.break
    continue: EachControl.continue
}

const EachControls: IEachControls = { exit: EachControl.exit, break: EachControl.break, continue: EachControl.continue }

/**
 * 对象遍历, 遍历对象的每一个键
 *
 * @param object
 * @param eachFunc 遍历函数。返回 -1 时终止遍历（exit）；返回 -2 时终止当层遍历（break）; 返回 -3 跳到下一个遍历（continue）
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
        },
        // 遍历控制符集
        CONTOL: IEachControls
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
            let control = eachFunc(
                value,
                key,
                {
                    parent: object,
                    deep: deep,
                    keyPath: nowKeyPath,
                    end: !hasNext
                },
                EachControls
            )

            if (control === EachControl.exit) return EachControl.exit
            if (control === EachControl.break) break
            if (control === EachControl.continue) continue

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
                    if (re === EachControl.exit) return EachControl.exit
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
            if (!re) return EachControl.exit
        }
    }
}
