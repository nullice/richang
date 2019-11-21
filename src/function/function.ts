import { applyWithCache as _applyWithCache } from "./lib/applyWithCache"
export const applyWithCache = _applyWithCache

/**
 * 把一个函数变为一个可缓存的函数，在指定时间内触发相同调用（参数一致，深度比较）时不会真正执行而是直接返回上一次的缓存
 * @param func 函数
 * @param timeout 缓存过期时间 ms
 * @param thisArg 函数的 this ，与 apply 的一致
 */
export function cacheable(func: Function, timeout: number, thisArg?: any) {
    let reFunc = function(...args: any[]) {
        return applyWithCache(func, thisArg, args, { timeout })
    }
    return reFunc
}

export function isAsyncFunction(func: Function) {
    const string = func.toString().trim()
    return !!(
        // native
        (
            (<any>func)[Symbol.toStringTag] === "AsyncFunction" ||
            // native
            string.match(/^async /) ||
            // babel (this may change, but hey...)
            string.match(/return _ref[^\.]*\.apply/)
        )
    )
}
