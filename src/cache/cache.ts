interface ICacheItem {
    data: any
    latestTimestamp: number
    timestamp: number
    visit: number
}

export interface KeyValueCacheOptions {
    // 缓存过期时间
    timeout: number
}

/**
 * 键值对缓存
 */
export class KeyValueCache<K, V> {
    caches: Map<K, ICacheItem>
    options: KeyValueCacheOptions

    constructor(options?: KeyValueCacheOptions) {
        this.options = Object.assign({ timeout: null }, options)
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

    get(key: K) {
        let item = this.checkCache(key)
        if (item) return item.data
    }

    has(key: K) {
        let item = this.checkCache(key)
        return item !== undefined
    }

    // 检查一个 cache 对有效性，有效则返回缓存 item
    private checkCache(key: K) {
        let item = this.caches.get(key)
        if (item) {
            // 如果过期则删除
            if (this.checkItemTimeout(item)) {
                this.caches.delete(key)
            } else {
                return item
            }
        }
    }

    private checkItemTimeout(item: ICacheItem) {
        if (this.options.timeout) {
            let nowTimestamp = new Date().getTime()
            let d = nowTimestamp - item.timestamp
            return d > this.options.timeout
        }
    }
}
