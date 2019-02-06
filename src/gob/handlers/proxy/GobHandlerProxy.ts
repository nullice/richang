import { GobCore } from "../../gob"
import { IGobHandler } from "../GobHandler"
import { isObject, objectEach, setObjectValueByPath } from "../../../object/object"

// todo test
import { set } from "./operators/set"
import { get } from "./operators/get"
import { del } from "./operators/del"


export const GobHandlerProxy: IGobHandler = {
    wrapData(target: any, gobCore: GobCore, keyPath: string[], localData: any, localGate: any) {
       let gate =  creatGate(target, gobCore, keyPath)
        objectEach(
            target,
            (value, key, info, CONTOL) => {
                if (isObject(value)) {
                    creatGate(value, gobCore, <string[]>info.keyPath)
                }
            },
            {
                needKeyPath: true
            }
        )

        return gate[GOB_PROXY_KEY]
    },
    del:del,
    get:get,
    set:set

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
            console.log("[set]", { target, key, value })
            set(key, value, nowKeyPath, gobCore, localContext)
            return false
        },
        get(target: any, key: any) {
            let nowKeyPath = [...keyPath, key]
            // console.log("[get]", { target, key })
           return get(key, nowKeyPath, gobCore, localContext)
        },
        deleteProperty(target: any, key: any) {
            let nowKeyPath = [...keyPath, key]
            console.log("[deleteProperty]", { target, key })
            return false
        }
    }
}

function creatGate(target: any, gobCore: GobCore, keyPath: string[]): any {
    let gate: GobGate = {}
    let proxy = new Proxy(target, giveHandler(target, gobCore, keyPath, target, gate))
    gate[GOB_PROXY_KEY] = proxy

    console.log("[creatGate]",{target,keyPath ,gobCore,gate})

    if (keyPath.length === 0) {
        gobCore.gate = gate
    } else {
        setObjectValueByPath(gobCore.gate, keyPath, gate)
    }
    return gate
}
