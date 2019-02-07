import { KeyValueCache } from "../cache/cache"
import { toJson } from "../stringify/stringify"

let cache_funcs!: KeyValueCache<Function, KeyValueCache<string, any>>

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
