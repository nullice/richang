import { GobRecorder } from "./recorder/recorder"
import { IGobHandler } from "./handlers/GobHandler"
import { GobExecutor } from "./executor/executor"
import { GobHandlerProxy } from "./handlers/proxy/GobHandlerProxy"

export class GobCore {
    gate: any
    data: any
    recorder: GobRecorder
    handler: IGobHandler
    executor: GobExecutor

    constructor() {
        this.data = {}
        this.gate = {}
        this.recorder = new GobRecorder(this)
        this.executor = new GobExecutor(this)
        this.handler = GobHandlerProxy

    }
}

interface IGobData {
    $on: 123
}

/**
 * 把一个对象包装起来，提供改动监控和拦截等功能
 * @param target
 * @constructor
 */
export function GobFactory<T>(target: T): T & IGobData {
    // 创建一个 GobCore
    let gobCore = new GobCore()

    // 把要托管的数据通过 handler 包装
    let warpData = gobCore.handler.wrapData(target, gobCore, [], gobCore.data, gobCore.gate)

    return warpData

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
