import { GobHandlerProxy, ILocalContext } from "../../handlers/proxy/GobHandlerProxy"
import { isObject, setObjectValueByPath, isObjectWithoutFunction, getObjectValueByPath } from "../../../object/object"
import { GobCore } from "../../gob"
import { set as orgSet } from "../../handlers/proxy/operators/set"

import Vue from "vue"

export function set(key: string, value: any, keyPath: string[], gobCore: GobCore, localContext?: ILocalContext) {
    if (key === "__proto__") {
        return orgSet(key, value, keyPath, gobCore, localContext)
    }

    // 有 handler 上下文
    if (localContext) {
        Vue.set(localContext.localData, key, value)
    } else {
        let pPath = keyPath.slice(0, keyPath.length - 1)
        let p = getObjectValueByPath(gobCore.data, pPath)
        Vue.set(p, key, value)
    }

    // console.log("GobHandlerProxy.wrapData", keyPath, isObjectWithoutFunction(value), value)
    if (isObjectWithoutFunction(value)) {
        if (localContext) {
            GobHandlerProxy.wrapData(value, gobCore, keyPath, localContext.localData, localContext.localGate)
        }
    }

    return true
}
