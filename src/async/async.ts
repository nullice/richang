/**
 * 异步延时
 * @param ms 毫秒
 */
export async function sleep(ms: number) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

/**
 *  等待条件判断
 *  提供一个函数，会每隔一段时间执行它，当判断为真时，返回
 *
 *  @example
 *  await when(()=>window.isOk == true)
 *
 * @param ms 毫秒
 */
export async function when(tryFunc: () => boolean, ms = 50) {
    return new Promise(async function(resolve, reject) {
        while (!tryFunc()) {
            await sleep(50)
        }
        resolve()
    })
}

import { Runner as _Runner } from "./lib/Runner"
export const Runner = _Runner
