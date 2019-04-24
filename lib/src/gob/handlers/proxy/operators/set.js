import { GobHandlerProxy } from "../GobHandlerProxy";
import { isObject, setObjectValueByPath } from "../../../../object/object";
export function set(key, value, keyPath, gobCore, localContext) {
    // 有 handler 上下文
    if (localContext) {
        localContext.localData[key] = value;
    }
    else {
        setObjectValueByPath(gobCore.data, keyPath, value);
    }
    if (isObject(value)) {
        if (localContext) {
            GobHandlerProxy.wrapData(value, gobCore, keyPath, localContext.localData, localContext.localGate);
        }
    }
}
//# sourceMappingURL=set.js.map