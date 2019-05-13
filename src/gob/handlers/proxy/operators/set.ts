import { GobHandlerProxy, ILocalContext } from "../GobHandlerProxy"
import { isObject, setObjectValueByPath, isObjectWithoutFunction } from "../../../../object/object"
import { GobCore } from "../../../gob"

export function set(key: string, value: any, keyPath: string[], gobCore: GobCore, localContext?: ILocalContext) {
    // console.log("[x:set]", { key, keyPath, value, localContext })
    // 有 handler 上下文
    if (localContext) {
        localContext.localData[key] = value
    } else {
        setObjectValueByPath(gobCore.data, keyPath, value)
    }

    if (isObjectWithoutFunction(value)) {
        if (localContext) {
            GobHandlerProxy.wrapData(value, gobCore, keyPath, localContext.localData, localContext.localGate)
        }
    }

    return true
}
