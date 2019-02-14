export interface IRunnerTask {
    id: number
    timestamp: number
    promise: Promise<any>
    // state: RunnerTaskState
    error?: any
    isFailed?: boolean
    isOver?: boolean
}

enum RunnerTaskState {
    // 就绪，待运行
    readly,
    // 运行
    running,
    // 完成，待分类
    complete,
    // 完成，成功
    success,
    // 完成，失败
    failed
}

interface IRunnerFunc {
    func: Function
    args?: any[]
    thisArgs?: any
}

/**
 * 异步任务运行器
 */
export class Runner {
    // 正在运行的任务
    running: IRunnerTask[] = []

    // 已结束的任务
    finally: IRunnerTask[] = []

    // 成功的任务
    success: IRunnerTask[] = []

    // 失败的任务
    failed: IRunnerTask[] = []

    // 同时运行任务数
    track!: number

    // 被暂停
    isPause: boolean = false

    // 结束后待分拣的任务
    private standby: IRunnerTask[] = []

    // 任务池
    taskPool: IRunnerFunc[] = []

    // 任务 id 索引
    private idIndex: number = 0

    private runResolve!: Function | void
    private runReject!: Function | void

    /**
     * 运行多个异步函数（或非异步），可以控制同时运行任务的数量、超时时间、暂停等操作
     * @param taskPool
     * @param track
     */
    constructor(taskFuncs: Function[] | IRunnerFunc[], track: number = 3) {
        this.add(taskFuncs)
        this.track = track
    }

    /**
     * 运行
     * @return {Promise<any>}
     */
    run() {
        return new Promise((resolve, reject) => {
            while (this.taskPool.length > 0 && this.running.length < this.track) {
                this.runOnce(<IRunnerFunc>this.taskPool.shift())
            }
            this.runResolve = resolve
            this.runReject = reject
        })
    }

    /**
     * 暂停
     */
    pause() {
        this.isPause = true
    }

    /**
     * 继续
     */
    resume() {
        this.isPause = false
        this.updateRunning()
    }

    /**
     * 添加任务到任务池
     * @param task
     */
    add(taskFunc: Function | Function[] | IRunnerFunc | IRunnerFunc[]) {
        if (Array.isArray(taskFunc)) {
            ;(<any[]>taskFunc).forEach(x => {
                this.taskPool.push(once(<Function | IRunnerFunc>x))
            })
        } else {
            this.taskPool.push(once(<Function | IRunnerFunc>taskFunc))
        }

        function once(func: Function | IRunnerFunc): IRunnerFunc {
            if (typeof taskFunc === "function") {
                return { func: <Function>func, args: undefined }
            } else if ((<any>func).func) {
                return <IRunnerFunc>func
            } else {
                throw Error("[Runner] add invalid <Function> or <IRunnerFunc> as task. typeof:" + typeof func)
            }
        }
    }

    /**
     * 清空全部任务与状态
     */
    clear() {
        this.taskPool = []
        this.running = []
        this.success = []
        this.failed = []
        this.finally = []
        this.standby = []
        this.runReject = undefined
        this.runReject = undefined
        this.isPause = false
    }

    /**
     * 运行一个任务
     * @param task
     */
    private runOnce(runnerFunc: IRunnerFunc) {
        let id = this.idIndex++
        let timestamp = new Date().getTime()
        let runnerTask: IRunnerTask

        let promise = new Promise(async (resolve, reject) => {
            try {
                await runnerFunc.func.apply(runnerFunc.thisArgs, runnerFunc.args)
                runnerTask.isFailed = false
                this.standby.push(runnerTask)
            } catch (e) {
                runnerTask.isFailed = true
                runnerTask.error = e
                this.standby.push(runnerTask)
            }
            runnerTask.isOver = true
            this.updateRunning()
            resolve()
        })

        runnerTask = { id, timestamp, promise }
        this.running.push(runnerTask)
        return runnerTask
    }

    /**
     * 更新运行状态
     */
    private updateRunning() {
        console.log("----- [updateRunning] -----")
        // 暂停时，不更新
        if (this.isPause) return

        // 已结束任务分拣
        while (this.standby.length > 0) {
            let task = this.standby.shift()
            if (task) {
                let index = this.running.indexOf(task)
                if (index > -1) this.running.splice(index, 1)

                this.finally.push(task)
                if (task.isFailed) {
                    this.failed.push(task)
                } else {
                    this.success.push(task)
                }
            }
        }

        // 如果任务池有任务，且跑道未满，把任务放入跑道
        while (this.taskPool.length > 0 && this.running.length < this.track) {
            let task = <IRunnerFunc>this.taskPool.shift()
            console.log("runOnce:", task)
            this.runOnce(task)
        }

        // 任务全部完成
        if (this.running.length === 0 && this.taskPool.length === 0 && this.standby.length === 0) {
            if (this.runResolve) this.runResolve()
        }
    }
}
