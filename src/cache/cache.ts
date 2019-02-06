interface ICacheItem {
    data: any
    latestTimestamp: number
    timestamp: number
    visit: number
}

export interface KeyValueCacheOptions {
    // 缓存过期时间
    timeout?: number
    // 禁止移除过期缓存
    disablRemoveTimeoutCache?: boolean
}

/**
 * 键值对缓存
 */
export class KeyValueCache<K, V> {
    caches: Map<K, ICacheItem>
    options: KeyValueCacheOptions

    constructor(options?: KeyValueCacheOptions) {
        this.options = Object.assign({ timeout: null, disablRemoveTimeoutCache: false }, options)
        this.caches = new Map()
    }

    set(key: K, value: V) {
        let timestamp = new Date().getTime()
        let item: ICacheItem = {
            data: value,
            latestTimestamp: timestamp,
            timestamp: timestamp,
            visit: 0
        }
        this.caches.set(key, item)
    }

    get(key: K, options?: KeyValueCacheOptions) {
        let item = this.checkCache(key, options)
        if (item) return item.data
    }

    has(key: K, options?: KeyValueCacheOptions) {
        let item = this.checkCache(key, options)
        return item !== undefined
    }

    // 检查一个 cache 对有效性，有效则返回缓存 item
    private checkCache(key: K, options?: KeyValueCacheOptions) {
        let item = this.caches.get(key)
        if (item) {
            // 检查是否过期
            if (this.checkItemTimeout(item, options ? options.timeout : undefined)) {
                // 如果过期则删除
                if (!this.options.disablRemoveTimeoutCache) {
                    this.caches.delete(key)
                }

                return
            }

            return item
        }
    }

    private checkItemTimeout(item: ICacheItem, timeout?: number) {
        if (this.options.timeout) {
            let finTimeout = timeout !== undefined ? timeout : this.options.timeout
            let nowTimestamp = new Date().getTime()
            let d = nowTimestamp - item.timestamp
            return d > finTimeout
        }
    }
}
