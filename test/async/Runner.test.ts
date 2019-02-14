import { Runner } from "../../src/async/Runner"
import { sleep } from "../../src/async/async"
import { stopwatch } from "../../src/time/time"

describe("Runner", async () => {
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

    test("异步任务耗时", async () => {
        let tasks = newTasks()
        let st = stopwatch()
        let runner = new Runner(tasks, 2)
        console.log("111",runner)
        await runner.run()
        console.log("sss",st())
        // console.log(runner)
    })
})
