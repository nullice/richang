/**
 * 创建一个秒表函数，秒表函数每次执行会返回执行时到创建时的时差
 *
 * @example
 * let st = stopwatch()
 * await sleep(100)
 * st() // 100
 * await sleep(100)
 * st() // 200
 *
 * @return {() => number}
 */
export function stopwatch() {
    let start = new Date().getTime()
    return function() {
        let now = new Date().getTime()
        return now - start
    }
}
