import { deleteObjectValueByPath } from "../../../../object/object";
export function del(key, keyPath, gobCore, localContext) {
    if (localContext) {
        let re = delete localContext.localData[key];
        if (localContext.localGate[key])
            delete localContext.localGate[key];
        return re;
    }
    else {
        let re = deleteObjectValueByPath(gobCore.data, keyPath);
        deleteObjectValueByPath(gobCore.gate, keyPath);
        return re;
    }
}
//# sourceMappingURL=del.js.map