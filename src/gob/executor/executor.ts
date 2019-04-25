import { GobCore } from "./../gob"
import { ILocalContext } from "../handlers/proxy/GobHandlerProxy"
import { IGobOperator, GobOperatorType } from "./lib/operators"

export class GobExecutor {
    gobCore: GobCore
    constructor(gobCore: GobCore) {
        this.gobCore = gobCore
    }

    /**
     * 按操作符执行一个操作
     * @param gobOperator
     */
    exec(gobOperator: IGobOperator): boolean
    /**
     * 执行一个一个操作
     * @param key
     * @param value
     * @param keyPath
     * @param localContext
     */
    exec(
        type: GobOperatorType,
        key: string,
        value: any,
        keyPath: string[],
        localContext?: ILocalContext,
        origin?: any
    ): boolean | any
    exec(
        type: any,
        key?: string,
        value?: any,
        keyPath?: string[],
        localContext?: ILocalContext,
        origin?: any
    ): boolean {
        let inType: GobOperatorType

        // 判断是否是 2 个操作事件
        if (arguments.length === 1 && type) {
            inType = (<IGobOperator>type).type
            keyPath = (<IGobOperator>type).keyPath
            value = (<IGobOperator>type).value
            key = keyPath[keyPath.length - 1]
        } else {
            inType = type
        }

        // 异常处理
        if (!keyPath) throw Error("[gob] error keyPath")
        if (key === undefined) throw Error("[gob] error undefined key")

        // 记录操作
        this.gobCore.recorder.push(inType, keyPath, value, origin)

        console.log("[exec]", { inType, keyPath, value, origin })
        // 操作执行与分发

        let re = this.reallyExec(inType, key, value, keyPath, localContext)

        return re
    }

    private reallyExec(
        type: GobOperatorType,
        key: string,
        value: any,
        keyPath: string[],
        localContext?: ILocalContext
    ) {
        let re: boolean | any

        switch (type) {
            case GobOperatorType.get: {
                re = this.gobCore.handler.get(key, keyPath, this.gobCore, localContext)
                break
            }

            case GobOperatorType.set: {
                re = this.gobCore.handler.set(key, value, keyPath, this.gobCore, localContext)
                break
            }

            case GobOperatorType.delete: {
                re = this.gobCore.handler.del(key, keyPath, this.gobCore, localContext)
                break
            }
        }
        return re
    }
}
