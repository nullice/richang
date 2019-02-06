import { KeyValueCache } from "../cache/cache"

let cache!: KeyValueCache<Function, any>

export function applyWithCache(
    func: Function,
    cacheOptions: {
        maxCacheLength: number
    },
    thisArg: any,
    args: any[]
) {
    if (cache === undefined) cache = new KeyValueCache()

    func.apply(thisArg, args)
}
