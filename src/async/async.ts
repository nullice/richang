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

import { Runner as _Runner } from "./lib/Runner"
export const Runner = _Runner
