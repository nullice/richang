import { isObject, objectEach, setObjectValueByPath } from "../../../object/object";
// todo test
import { set } from "./operators/set";
import { get } from "./operators/get";
import { del } from "./operators/del";
export const GobHandlerProxy = {
    wrapData(target, gobCore, keyPath, localData, localGate) {
        let gate = creatGate(target, gobCore, keyPath);
        objectEach(target, (value, key, info, CONTOL) => {
            if (isObject(value)) {
                creatGate(value, gobCore, info.keyPath);
            }
        }, {
            needKeyPath: true
        });
        return gate[GOB_PROXY_KEY];
    },
    del: del,
    get: get,
    set: set
};
export const GOB_PROXY_KEY = "[GOB_PROXY]";
function giveHandler(target, gobCore, keyPath, localData, localGate) {
    const localContext = {
        localData,
        localGate,
        keyPath
    };
    return {
        set(target, key, value) {
            let nowKeyPath = [...keyPath, key];
            console.log("[set]", { target, key, value });
            set(key, value, nowKeyPath, gobCore, localContext);
            return false;
        },
        get(target, key) {
            let nowKeyPath = [...keyPath, key];
            // console.log("[get]", { target, key })
            return get(key, nowKeyPath, gobCore, localContext);
        },
        deleteProperty(target, key) {
            let nowKeyPath = [...keyPath, key];
            console.log("[deleteProperty]", { target, key });
            return false;
        }
    };
}
function creatGate(target, gobCore, keyPath) {
    let gate = {};
    let proxy = new Proxy(target, giveHandler(target, gobCore, keyPath, target, gate));
    gate[GOB_PROXY_KEY] = proxy;
    console.log("[creatGate]", { target, keyPath, gobCore, gate });
    if (keyPath.length === 0) {
        gobCore.gate = gate;
    }
    else {
        setObjectValueByPath(gobCore.gate, keyPath, gate);
    }
    return gate;
}
//# sourceMappingURL=GobHandlerProxy.js.map