import { KeyValueCache } from "../../cache/cache"
import { toJson } from "../../stringify/stringify"

let cache_funcs!: KeyValueCache<Function, KeyValueCache<string, any>>

/**
 * 执行一个函数（类似 Function.apply），会记录缓存，相同函数相同参数多次执行会执行返回缓存结果，可以指定缓存过期时间
 * @param func
 * @param thisArg
 * @param args
 * @param cacheOptions
 * @return {any}
 */
export function applyWithCache(
    func: Function,
    thisArg: any,
    args: any[],
    cacheOptions: {
        timeout?: number
    }
) {
    if (cache_funcs === undefined) cache_funcs = new KeyValueCache()
    let funcCache: KeyValueCache<string, any> = cache_funcs.get(func)
    let argSign = toJson(args) || ""

    if (!funcCache) {
        funcCache = new KeyValueCache({ disablRemoveTimeoutCache: true })
        cache_funcs.set(func, funcCache)
    }

    let hasApplyCache = funcCache.has(argSign, { timeout: cacheOptions.timeout })
    if (hasApplyCache) {
        return funcCache.get(argSign, { timeout: cacheOptions.timeout })
    } else {
        return exec()
    }

    function exec() {
        let re = func.apply(thisArg, args)
        funcCache.set(argSign, re)
        return re
    }
}

export function functinCache() {}
