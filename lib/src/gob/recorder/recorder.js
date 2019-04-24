/**
 * Gob 的操作录放器
 * 对 Gob 对象对操作通过 handler 转换为一个个 GobOperator ，而 GobRecorder 把 GobOperator 执行或者记录下来
 *
 */
export class GobRecorder {
    constructor(gobCore) {
        this.gobCore = gobCore;
        this.memory = new GobOperatorMemory();
    }
    push() {
    }
}
class GobOperatorMemory {
    constructor() {
        this.changes = [];
        this.visits = [];
        this.indexes = { set: 0, get: 0, delete: 0, all: 0 };
        this.latestOperator = null;
    }
}
//# sourceMappingURL=recorder.js.map