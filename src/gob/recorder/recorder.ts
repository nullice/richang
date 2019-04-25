import { GobCore } from "../gob"
import { IGobOperator } from "../operators/operator"

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
    push(){
    }
}

export interface IGobOperatorMemory {

    changes: IGobOperator[]
    visits: IGobOperator[]
    indexes: { set: number; get: number; delete: number; all: number; [propName: string]: number }
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
