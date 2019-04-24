import { GOB_PROXY_KEY } from "../GobHandlerProxy";
import { getObjectValueByPath, isObject } from "../../../../object/object";
export function get(key, keyPath, gobCore, localContext) {
    console.log({ key, keyPath, gobCore, localContext });
    // 获取原始值
    let value;
    if (localContext) {
        value = localContext.localData[key];
    }
    else {
        value = getObjectValueByPath(gobCore.data, keyPath);
    }
    // 如果值是对象，找到相应对 gata 从 gata 中取值
    if (isObject(value)) {
        let gate;
        if (localContext) {
            gate = localContext.localGate[key];
        }
        else {
            gate = getObjectValueByPath(gobCore.gate, keyPath);
        }
        return gate[GOB_PROXY_KEY];
    }
    else {
        return value;
    }
}
//# sourceMappingURL=get.js.map