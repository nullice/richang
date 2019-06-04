import { GobCore } from "../../gob"
import { IGobHandler } from "../GobHandler"
import {
    getObjectValueByPath,
    isObject,
    objectEach,
    setObjectValueByPath,
    isObjectWithoutFunction
} from "../../../object/object"
// todo test
import { set } from "./operators/set"
import { get } from "./operators/get"
import { del } from "./operators/del"
import { GobOperatorType } from "../../executor/lib/operators"

export const GobHandlerProxy: IGobHandler = {
    wrapData(target: any, gobCore: GobCore, keyPath: string[], localData: any, localGate: any) {
        let gate = creatGate(target, gobCore, keyPath)
        objectEach(
            target,
            (value, key, info, CONTOL) => {
                let nowKeyPath: string[] = keyPath.concat(<string[]>info.keyPath)
                // console.log("objectEach", nowKeyPath, isObjectWithoutFunction(value), { value, key, info })
                if (isObjectWithoutFunction(value)) {
                    creatGate(value, gobCore, nowKeyPath)
                }
            },
            {
                needKeyPath: true,
                // 处理循环依赖
                checkCycle: true,
                checkCycleCallback(
                    value: any,
                    key: string,
                    info: { parent: any; keyPath?: string[]; firstKeyPath?: string[] }
                ) {
                    let nowKeyPath: string[] = keyPath.concat(<string[]>info.keyPath)
                    let firstKeyPath: string[] = keyPath.concat(<string[]>info.firstKeyPath)
                    // console.log("checkCycleCallback", { value, key, info })
                    creatCycleGate(value, gobCore, nowKeyPath, firstKeyPath)
                }
            }
        )

        return gate[GOB_PROXY_KEY]
    },
    del: del,
    get: get,
    set: set
}

export interface ILocalContext {
    localData: any
    localGate: any
    keyPath: string[]
}

export const GOB_PROXY_KEY = "[GOB_PROXY]"

export interface GobGate {
    [GOB_PROXY_KEY]?: object
    [propName: string]: any
}

function giveHandler(
    target: any,
    gobCore: GobCore,
    keyPath: string[],
    localData: any,
    localGate: any
): ProxyHandler<any> {
    const localContext: ILocalContext = {
        localData,
        localGate,
        keyPath
    }

    return {
        set(target: any, key: any, value: any) {
            let nowKeyPath = [...keyPath, key]
            // console.log("[set]", { target, key, value })

            // 是否可枚举

            let enumerable
            if (target && target.propertyIsEnumerable) {
                enumerable = target.propertyIsEnumerable(key)
            }
            // 不可枚举的元素只使用原生方法
            if (!target.hasOwnProperty(key) || enumerable) {
                return gobCore.executor.exec(GobOperatorType.set, key, value, nowKeyPath, localContext)
            } else {
                return (target[key] = value)
            }

            // return set(key, value, nowKeyPath, gobCore, localContext)
        },
        get(target: any, key: any) {
            if (key === "$$$GobCore") return gobCore
            let nowKeyPath = [...keyPath, key]
            // console.log("[get]", { target, key })

            // 是否可枚举
            let enumerable
            if (target && target.propertyIsEnumerable) {
                enumerable = target.propertyIsEnumerable(key)
            }
            // 不可枚举的操作只使用原生方法
            if (!target.hasOwnProperty(key) || enumerable) {
                return gobCore.executor.exec(GobOperatorType.get, key, undefined, nowKeyPath, localContext)
            } else {
                return target[key]
            }

            // return get(key, nowKeyPath, gobCore, localContext)
        },
        deleteProperty(target: any, key: any) {
            let nowKeyPath = [...keyPath, key]
            // console.log("[deleteProperty]", { target, key })

            // 是否可枚举
            let enumerable
            if (target && target.propertyIsEnumerable) {
                enumerable = target.propertyIsEnumerable(key)
            }
            // 不可枚举的操作只使用原生方法
            if (!target.hasOwnProperty(key) || enumerable) {
                return gobCore.executor.exec(GobOperatorType.delete, key, undefined, nowKeyPath, localContext)
            } else {
                return delete target[key]
            }
            // return del(key, nowKeyPath, gobCore, localContext)
        }
    }
}

function creatGate(target: any, gobCore: GobCore, keyPath: string[]): any {
    let gate: GobGate = {}
    // todo: 使用 Proxy.revocable() 创建可销毁的代理
    let proxy = new Proxy(target, giveHandler(target, gobCore, keyPath, target, gate))
    gate[GOB_PROXY_KEY] = proxy
    // console.log("[creatGate]", { target, keyPath, gobCore, gate })
    if (keyPath.length === 0) {
        gobCore.gate = gate
    } else {
        setObjectValueByPath(gobCore.gate, keyPath, gate)
    }
    return gate
}

function creatCycleGate(target: any, gobCore: GobCore, keyPath: string[], cyclePath: string[]): any {
    let gate: GobGate = getObjectValueByPath(gobCore.gate, cyclePath)
    // console.log("[creatcreatCycleGateGate]", { target, keyPath,cyclePath, gobCore, gate })
    if (keyPath.length === 0) {
        gobCore.gate = gate
    } else {
        setObjectValueByPath(gobCore.gate, keyPath, gate)
    }
    return gate
}
