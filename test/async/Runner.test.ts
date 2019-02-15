import { Runner, IRunnerTask } from "../../src/async/Runner"
import { sleep } from "../../src/async/async"
import { stopwatch } from "../../src/time/time"
import { toJson } from "../../src/stringify/stringify"
import { inRange } from "../../src/number/number"

describe("Runner 流程", async () => {
    let newTasks = () => {
        return [
            {
                func: sleep,
                args: [50]
            },
            {
                func: sleep,
                args: [50]
            },
            {
                func: sleep,
                args: [100]
            },
            {
                func: sleep,
                args: [200]
            }
        ]
    }

    test("耗时估计( track 1)", async () => {
        let tasks = newTasks()
        let st = stopwatch()
        let runner = new Runner(tasks, 1)
        await runner.run()
        let t = st()
        expect(inRange(t, [350, 450])).toBeTruthy()
    })

    test("耗时估计( track 2)", async () => {
        let tasks = newTasks()
        let st = stopwatch()
        let runner = new Runner(tasks, 2)
        await runner.run()
        let t = st()
        expect(inRange(t, [250, 350])).toBeTruthy()
    })
})

describe("Runner 执行任务", async () => {
    let newTestKit = () => {
        let log: any = []
        let tasks = [
            async () => {
                await sleep(50)
                log.push(0)
            },
            async () => {
                await sleep(50)
                log.push(1)
            },
            async () => {
                await sleep(100)
                log.push(2)
            },
            async () => {
                await sleep(200)
                log.push(3)
            }
        ]
        return { log, tasks }
    }

    test("确定顺序 ( track 1)", async () => {
        let { tasks, log } = newTestKit()
        let runner = new Runner(tasks, 3)
        await runner.run()
        expect(runner.isRunning).toBeFalsy()
        expect(runner.running.length).toBe(0)
        expect(runner.failed.length).toBe(0)
        expect(runner.success.length).toBe(4)
        expect(runner.taskPool.length).toBe(0)
        expect(log).toEqual([0, 1, 2, 3])
    })

    test("超时", async () => {
        let { tasks, log } = newTestKit()
        let runner = new Runner(tasks, 3, { timeout: 60 })
        let st = stopwatch()
        await runner.run()
        let t = st()
        expect(runner.isRunning).toBeFalsy()
        expect(runner.running.length).toBe(0)
        expect(runner.failed.length).toBe(2)
        expect(runner.success.length).toBe(2)
        expect(runner.taskPool.length).toBe(0)
        expect(inRange(t, [80, 120])).toBeTruthy()
    })

    test("暂停", async () => {
        let { tasks, log } = newTestKit()
        let runner = new Runner(tasks, 3)

        // 当 2 个任务时暂停
        runner.onTaskFinal((info: { task: IRunnerTask; runner: Runner }) => {
            if (runner.finally.length == 2) {
                runner.pause()
            }
        })

        runner.run()
        await sleep(200)

        expect(runner.isRunning).toBeFalsy()
        expect(runner.isPause).toBeTruthy()
        expect(runner.success.length).toBe(2)

        runner.resume()
        await sleep(200)
        expect(runner.isRunning).toBeFalsy()
        expect(runner.isPause).toBeFalsy()
        expect(runner.success.length).toBe(4)

    })
})
