import { GobRecorder } from "./recorder/recorder";
import { GobHandlerProxy } from "./handlers/proxy/GobHandlerProxy";
export class GobCore {
    constructor() {
        this.data = {};
        this.recorder = new GobRecorder(this);
        this.handler = GobHandlerProxy;
        this.gate = {};
    }
}
export function GobFactory(target) {
    // 创建一个 GobCore
    let gobCore = new GobCore();
    let warpData = gobCore.handler.wrapData(target, gobCore, [], gobCore.data, gobCore.gate);
    return warpData;
    // 创建一个代理
    // let proxy: GobProxy = new Proxy(gobCore.data,
    //     giveHandler(gobCore.data, gobCore.gate, [], {
    //         coreData: gobCore.data,
    //         coreGate: gobCore.gate,
    //         gobCore,
    //         GOB_CORE_NAME
    //     })
    // )
}
//# sourceMappingURL=gob.js.map