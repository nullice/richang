import { GobCore } from "../../../gob"
import { GOB_PROXY_KEY, GobHandlerProxy, ILocalContext } from "../GobHandlerProxy"
import {
    deleteObjectValueByPath,
    getObjectValueByPath,
    isObject,
    setObjectValueByPath
} from "../../../../object/object"

export function del(key: string, keyPath: string[], gobCore: GobCore, localContext?: ILocalContext) {
    if (localContext) {
        let re = delete localContext.localData[key]
        if (localContext.localGate[key]) delete localContext.localGate[key]
        return re
    } else {
        let re = deleteObjectValueByPath(gobCore.data, keyPath)
        deleteObjectValueByPath(gobCore.gate, keyPath)
        return re
    }
}
