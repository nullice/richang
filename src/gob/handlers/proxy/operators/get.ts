import { GobCore } from "../../../gob"
import { GOB_PROXY_KEY, GobHandlerProxy, ILocalContext } from "../GobHandlerProxy"
import {
    getObjectValueByPath,
    isObject,
    setObjectValueByPath,
    isObjectWithoutFunction
} from "../../../../object/object"

export function get(key: string, keyPath: string[], gobCore: GobCore, localContext?: ILocalContext) {
    // console.log({key, keyPath, gobCore, localContext})
    // 获取原始值
    let value: any
    if (localContext) {
        value = localContext.localData[key]
    } else {
        value = getObjectValueByPath(gobCore.data, keyPath)
    }

    // 如果值是对象，找到相应对 gata 从 gata 中取值
    if (isObjectWithoutFunction(value)) {
        let gate: any

        if (localContext) {
            gate = localContext.localGate[key]
        } else {
            gate = getObjectValueByPath(gobCore.gate, keyPath)
        }
        // 备选方案
        if (!gate) gate = getObjectValueByPath(gobCore.gate, keyPath)
        // console.log("gob get", { key, keyPath, localContext,"gobCore.gate":gobCore.gate, gate })
        if (!gate) {
            return
        } else {
            return gate[GOB_PROXY_KEY]
        }
    } else {
        return value
    }
}
