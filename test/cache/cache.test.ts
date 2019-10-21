import { Richang as rc } from "../../src/index"
import { sleep } from "../../src/async/async"

describe("KeyValueCache", () => {
    test("非字符串 key 缓存", () => {
        let cache = new rc.cache.KeyValueCache()
        let k1 = () => {}
        let k2 = () => {}
        let ob = { ob: 123 }

        cache.set(ob, ob)
        cache.set(k1, "k1")
        cache.set(k2, "k2")

        expect(cache.get(k1)).toEqual("k1")
        expect(cache.get(k2)).toEqual("k2")
        expect(cache.get(ob)).toEqual(ob)
    })

    test("timeout 过期时间", async () => {
        let cache = new rc.cache.KeyValueCache({ timeout: 200 })
        let k1 = () => {}
        let k2 = () => {}
        let ob = { ob: 123 }

        cache.set(ob, ob)
        cache.set(k1, "k1")
        cache.set(k2, "k2")

        expect(cache.get(k1)).toEqual("k1")
        expect(cache.get(k2)).toEqual("k2")
        expect(cache.get(ob)).toEqual(ob)
        expect(cache.has(k1)).toBeTruthy()
        expect(cache.has(k2)).toBeTruthy()
        expect(cache.has(ob)).toBeTruthy()

        await sleep(250)
        expect(cache.get(k1)).toEqual(undefined)
        expect(cache.get(k2)).toEqual(undefined)
        expect(cache.get(ob)).toEqual(undefined)
        expect(cache.has(k1)).toBeFalsy()
        expect(cache.has(k2)).toBeFalsy()
        expect(cache.has(ob)).toBeFalsy()
    })

    test("timeout 过期不删除", async () => {
        let cache = new rc.cache.KeyValueCache({ timeout: 200, disablRemoveTimeoutCache: true })
        let ob = { ob: 123 }

        cache.set(ob, ob)
        expect(cache.get(ob)).toEqual(ob)

        await sleep(333)

        expect(cache.get(ob)).toEqual(undefined)
        expect(cache.has(ob)).toBeFalsy()

        expect(cache.get(ob, { timeout: 500 })).toEqual(ob)
        expect(cache.has(ob, { timeout: 500 })).toBeTruthy()

        expect(cache.get(ob, { timeout: 111 })).toEqual(undefined)
        expect(cache.has(ob, { timeout: 111 })).toBeFalsy()
    })

    test("timeout 过期不删除（无默认时间）", async () => {
        let cache = new rc.cache.KeyValueCache({ disablRemoveTimeoutCache: true })
        let ob = { ob: 123 }

        cache.set(ob, ob)
        expect(cache.get(ob)).toEqual(ob)

        await sleep(200)

        expect(cache.get(ob)).toEqual(ob)
        expect(cache.has(ob)).toBeTruthy()

        expect(cache.get(ob, { timeout: 500 })).toEqual(ob)
        expect(cache.has(ob, { timeout: 500 })).toBeTruthy()

        expect(cache.get(ob, { timeout: 111 })).toEqual(undefined)
        expect(cache.has(ob, { timeout: 111 })).toBeFalsy()
    })
})

describe("LocalCache", () => {
    test("读写缓存", async () => {
        let localCache = new rc.cache.LocalCache("test_user")
        // 等待启动
        await localCache.ready

        await localCache.set("bar1", { name: "bar1", v: 100 })
        await localCache.set("bar2", { name: "bar2", v: 100 })
        expect(await localCache.get("bar1")).toEqual({ name: "bar1", v: 100 })
        expect(await localCache.get("bar2")).toEqual({ name: "bar2", v: 100 })

        await localCache.set("bar1", { name: "bar1", v: 200 })
        await localCache.set("bar2", { name: "bar2", v: 200 })

        expect(await localCache.has("bar1")).toBeTruthy()
        expect(await localCache.has("bar2")).toBeTruthy()

        expect(await localCache.get("bar1")).toEqual({ name: "bar1", v: 200 })
        expect(await localCache.get("bar2")).toEqual({ name: "bar2", v: 200 })

        expect(await localCache.getAll()).toEqual({
            bar1: { name: "bar1", v: 200 },
            bar2: { name: "bar2", v: 200 }
        })

        // 删除
        await localCache.delete("bar1")

        expect(await localCache.has("bar1")).toBeFalsy()
        expect(await localCache.has("bar2")).toBeTruthy()

        expect(await localCache.get("bar1")).toEqual(undefined)
        expect(await localCache.get("bar2")).toEqual({ name: "bar2", v: 200 })
    })

    test("带 SubName 的读写", async () => {
        let localCache = new rc.cache.LocalCache("test_user")
        // 等待启动
        await localCache.ready

        await localCache.set("bar1", { name: "bar1", v: 100 }, "projectA")
        expect(await localCache.get("bar1", "projectA")).toEqual({ name: "bar1", v: 100 })

        await localCache.set("bar1", { name: "bar1", v: 200 }, "projectB")
        await localCache.set("bar2", { name: "bar2", v: 200 }, "projectB")

        expect(await localCache.get("bar1", "projectA")).toEqual({ name: "bar1", v: 100 })
        expect(await localCache.get("bar2", "projectA")).toEqual(undefined)

        expect(await localCache.get("bar1", "projectB")).toEqual({ name: "bar1", v: 200 })
        expect(await localCache.get("bar2", "projectB")).toEqual({ name: "bar2", v: 200 })
    })

    test("读不存在的 key", async () => {
        let localCache = new rc.cache.LocalCache("test_user")
        // 等待启动
        await localCache.ready
        expect(await localCache.get("ssxxx")).toBe(undefined)
    })

    test("读取过期缓存", async () => {
        let localCache = new rc.cache.LocalCache("test_user")
        // 等待启动
        await localCache.ready

        await localCache.set("bar1", { name: "bar1", v: 100 }, undefined, 100)
        expect(await localCache.get("bar1")).toEqual({ name: "bar1", v: 100 })

        await rc.async.sleep(110)

        expect(await localCache.get("bar1")).toEqual(undefined)
    })
})
