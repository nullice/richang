import { GobCore } from "../gob"
import { GobOperatorType, IGobOperator } from "../executor/lib/operators"

/**
 * Gob 的操作录放器
 * 对 Gob 对象对操作通过 handler 转换为一个个 GobOperator ，而 GobRecorder 把 GobOperator 执行或者记录下来
 *
 */
export class GobRecorder {
    gobCore: GobCore
    memory: IGobOperatorMemory
    constructor(gobCore: GobCore) {
        this.gobCore = gobCore
        this.memory = new GobOperatorMemory()
    }
    push(type: GobOperatorType, keyPath: string[], value: any, origin: any) {
        let operator: IGobOperator = {
            type,
            keyPath,
            value,
            origin
        }

        this.memory.latestOperator = operator

        switch (operator.type) {
            case GobOperatorType.get: {
                this.memory.visits.push(operator)
                this.memory.indexes.get++
            }
            case GobOperatorType.set: {
                this.memory.changes.push(operator)
                this.memory.indexes.set++
            }
            case GobOperatorType.delete: {
                this.memory.changes.push(operator)
                this.memory.indexes.delete++
            }
            default: {
                this.memory.indexes.all++
            }
        }
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
