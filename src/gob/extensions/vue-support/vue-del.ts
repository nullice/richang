import { GobCore } from "../../gob"
import { GOB_PROXY_KEY, GobHandlerProxy, ILocalContext } from "../../handlers/proxy/GobHandlerProxy"
import { del as orgDel } from "../../handlers/proxy/operators/del"
import Vue from "vue"
import { deleteObjectValueByPath, getObjectValueByPath, isObject, setObjectValueByPath } from "../../../object/object"

export function del(key: string, keyPath: string[], gobCore: GobCore, localContext?: ILocalContext) {
    let re: boolean

    if (key === "__proto__") {
        return orgDel(key, keyPath, gobCore, localContext)
    }

    if (localContext) {
        Vue.delete(localContext.localData, key)
        if (localContext.localGate[key]) Vue.delete(localContext.localData, key)
    } else {
        let pPath = keyPath.slice(0, keyPath.length - 1)
        let p = getObjectValueByPath(gobCore.data, pPath)
        Vue.delete(p, key)

        let pGate = getObjectValueByPath(gobCore.gate, pPath)
        Vue.delete(pGate, key)
    }
    return true
}
