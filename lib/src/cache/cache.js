const VOID = { void: true };
/**
 * 键值对缓存
 */
export class KeyValueCache {
    constructor(options) {
        this.options = Object.assign({ timeout: null, disablRemoveTimeoutCache: false }, options);
        this.caches = new Map();
    }
    set(key, value) {
        let timestamp = new Date().getTime();
        let item = {
            data: value,
            latestTimestamp: timestamp,
            timestamp: timestamp,
            visit: 0
        };
        this.caches.set(key, item);
    }
    get(key, options) {
        let item = this.checkCache(key, options);
        if (item && item !== VOID)
            return item.data;
    }
    has(key, options) {
        let item = this.checkCache(key, options);
        return item !== VOID;
    }
    // 检查一个 cache 对有效性，有效则返回缓存 item
    checkCache(key, options) {
        if (!this.caches.has(key))
            return VOID;
        let item = this.caches.get(key);
        if (item) {
            // 检查是否过期
            if (this.checkItemTimeout(item, options ? options.timeout : undefined)) {
                // 如果过期则删除
                if (!this.options.disablRemoveTimeoutCache) {
                    this.caches.delete(key);
                }
                return VOID;
            }
            return item;
        }
        return VOID;
    }
    checkItemTimeout(item, timeout) {
        if (this.options.timeout || timeout) {
            let finTimeout = (timeout !== undefined ? timeout : this.options.timeout);
            let nowTimestamp = new Date().getTime();
            let d = nowTimestamp - item.timestamp;
            return d > finTimeout;
        }
    }
}
//# sourceMappingURL=cache.js.map