import { getHTime } from "../time/time"
/**
 * 连续执行一个函数，然后获得执行速度报告
 * @param testFunc
 * @param time
 */
export async function benchmarkOnce(testFunc: Function, time = 1000) {
    // @ts-ignore
    let startTime = getHTime()

    for (let i = 0; i < time; i++) {
        await testFunc(i)
    }
    let endTime = getHTime()

    let td = endTime - startTime

    return {
        ms: td,
        timeEverySec: Math.round((time / td) * 1000),
        onceMs: td / time
    }
}
