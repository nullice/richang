import { GobCore } from "./../gob"
import { ILocalContext } from "../handlers/proxy/GobHandlerProxy"
import { GobOperatorType, IGobOperator } from "./lib/operators"
import { GobFilterType } from "../filters/filters"

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
        let operator: IGobOperator

        // 判断是否是 2 个操作事件
        if (arguments.length === 1) {
            operator = type
            key = operator.keyPath[operator.keyPath.length - 1]
        } else {
            operator = {
                type,
                keyPath: keyPath || [],
                value,
                origin
            }
        }

        // 异常处理
        if (!keyPath) throw Error("[gob] error keyPath")
        if (key === undefined) throw Error("[gob] error undefined key")

        // 直接操作不经过过滤器或者记录器
        let isDirect = operator.origin && operator.origin.$$$GobDirectSet

        // 记录预操作
        if (!isDirect) this.gobCore.recorder.push(operator)

        let runRe
        // 执行 pre 过滤器 IGobOperator
        if (!isDirect && operator.type !== GobOperatorType.get) {
            runRe = this.gobCore.filters.runFilters(GobFilterType.pre, operator)
        }

        // 是否异步执行
        let re
        // 异步执行
        if (runRe && runRe.async) {
            runRe.async.then(op => {
                this.reallyExec(op.type, op.keyPath[op.keyPath.length - 1], op.value, op.keyPath, localContext)
                if (!isDirect) {
                    this.execFin(op)
                }
            })
            re = true
        }
        // 同步执行
        else {
            // 操作执行与分发
            re = this.reallyExec(
                operator.type,
                operator.keyPath[operator.keyPath.length - 1],
                operator.value,
                operator.keyPath,
                localContext
            )

            if (!isDirect) {
                this.execFin(operator)
            }
        }

        return re
        // console.log("[gob]  [exec]", { inType, keyPath, value, origin })
    }

    private execFin(operator: IGobOperator) {
        // 执行 fin 过滤器
        if (operator.type !== GobOperatorType.get) {
            this.gobCore.filters.runFilters(GobFilterType.fin, operator)
        }

        // 记录 recorder
        this.gobCore.recorder.push(operator, true)
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
