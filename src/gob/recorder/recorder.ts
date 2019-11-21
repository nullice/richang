import { GobCore } from "../gob"

import { GobOperatorType, IGobOperator } from "../executor/lib/operators"
import { EventHub } from "../../../src/event/event"
import { cloneDeep } from "../../object/object"

/**
 * Gob 的操作录放器
 * 对 Gob 对象对操作通过 handler 转换为一个个 GobOperator ，而 GobRecorder 把 GobOperator 执行或者记录下来
 *
 */
export class GobRecorder {
    gobCore: GobCore
    preMemory: IGobOperatorMemory
    finMemory: IGobOperatorMemory

    // 开启预操作录制
    enablePreRecod: boolean = true
    // 开启终操作录制
    enableFinRecod: boolean = true

    // 订阅功能
    // 订阅用消息总线
    private eventHub: EventHub
    // 启用订阅
    private enableSubscribe = false
    // 启用访问操作（get）的的订阅
    private enableVisitsSubscribe = false

    constructor(gobCore: GobCore) {
        this.gobCore = gobCore
        this.preMemory = new GobOperatorMemory()
        this.finMemory = new GobOperatorMemory()
        this.eventHub = new EventHub()
    }
    push(operator: IGobOperator, fin = false): IGobOperator {
        // 订阅功能
        if (fin && this.enableSubscribe) {
            this.publishOperatorEvent(operator)
        }
        // 如果没有激活录制会提前退出
        if (fin && !this.enableFinRecod) {
            return operator
        } else if (!fin && !this.enablePreRecod) {
            return operator
        }

        let memory = fin ? this.finMemory : this.preMemory
        memory.latestOperator = operator

        operator = cloneDeep(operator)
        // console.log("[rec]", operator)

        switch (operator.type) {
            case GobOperatorType.get: {
                memory.visits.push(operator)
                memory.indexes.get++
                break
            }
            case GobOperatorType.set: {
                memory.changes.push(operator)
                memory.indexes.set++
                break
            }
            case GobOperatorType.delete: {
                memory.changes.push(operator)
                memory.indexes.delete++
                break
            }
        }

        memory.indexes.all++

        return operator
    }

    // 发布订阅消息 访问操作（get）
    private publishOperatorEvent(operator: IGobOperator) {
        if (this.gobCore.pauseSubscribe) return

        if (operator.type === GobOperatorType.get) {
            if (this.enableVisitsSubscribe) this.eventHub.emit("visits", operator)
        } else {
            this.eventHub.emit("changes", operator)
        }
    }

    /**
     * 订阅消息
     * @param func
     * @param subscribeVisits 订阅
     */
    subscribe(func: (operator: IGobOperator) => void, subscribeVisits = false) {
        // 只有当有订阅时，才会打开订阅功能
        // 如果没有开启订阅，会打开订阅功能
        if (!this.enableSubscribe) this.enableSubscribe = true
        // 如果订阅了 visits 但是没有开启 visits 订阅，会打开 visits 订阅
        if (subscribeVisits && !this.enableVisitsSubscribe) this.enableVisitsSubscribe = true

        this.eventHub.on("changes", func)
        if (subscribeVisits) this.eventHub.on("visits", func)
    }

    /**
     * 取消订阅
     * @param func
     */
    unsubscribe(func: (operator: IGobOperator) => void) {
        this.eventHub.off("changes", func)
        this.eventHub.off("visits", func)
    }
}

// 操作符记录对象
export interface IGobOperatorMemory {
    // 记录编辑型操作符
    changes: IGobOperator[]
    // 记录浏览型操作符
    visits: IGobOperator[]
    // 不同类型操作符符的数量索引，每次操作符被执行，相应的值递增
    indexes: { set: number; get: number; delete: number; all: number; [propName: string]: number }
    // 最后一次执行的操作符
    latestOperator: IGobOperator | null
}

class GobOperatorMemory implements IGobOperatorMemory {
    changes: IGobOperator[]
    visits: IGobOperator[]
    indexes: { set: number; get: number; delete: number; all: number; [propName: string]: number }
    latestOperator: IGobOperator | null

    constructor() {
        this.changes = []
        this.visits = []
        this.indexes = { set: 0, get: 0, delete: 0, all: 0 }
        this.latestOperator = null
    }
}
