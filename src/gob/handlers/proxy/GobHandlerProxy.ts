import { GobCore } from "../../gob"
import { IGobHandler } from "../GobHandler"
import { getObjectValueByPath, isObject, objectEach, setObjectValueByPath } from "../../../object/object"
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
                if (isObject(value)) {
                    creatGate(value, gobCore, <string[]>info.keyPath)
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
                    // console.log("checkCycleCallback", { value, key, info })
                    creatCycleGate(value, gobCore, <string[]>info.keyPath, <string[]>info.firstKeyPath)
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
            return gobCore.executor.exec(GobOperatorType.set, key, value, nowKeyPath, localContext)
            // return set(key, value, nowKeyPath, gobCore, localContext)
        },
        get(target: any, key: any) {
            if (key === "$$$GobCore") return gobCore
            let nowKeyPath = [...keyPath, key]
            // console.log("[get]", { target, key })
            return gobCore.executor.exec(GobOperatorType.get, key, undefined, nowKeyPath, localContext)
            // return get(key, nowKeyPath, gobCore, localContext)
        },
        deleteProperty(target: any, key: any) {
            let nowKeyPath = [...keyPath, key]
            // console.log("[deleteProperty]", { target, key })
            return gobCore.executor.exec(GobOperatorType.delete, key, undefined, nowKeyPath, localContext)
            // return del(key, nowKeyPath, gobCore, localContext)
        }
    }
}

function creatGate(target: any, gobCore: GobCore, keyPath: string[]): any {
    let gate: GobGate = {}
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
