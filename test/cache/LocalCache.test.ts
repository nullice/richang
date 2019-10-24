import { Richang as rc } from "../../src/index"
import { sleep } from "../../src/async/async"

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

describe("LocalFastCache", () => {
    test("读写缓存", () => {
        let localCache = new rc.cache.LocalFastCache("test_user")

        localCache.set("bar1", { name: "bar1", v: 100 })
        localCache.set("bar2", { name: "bar2", v: 100 })
        expect(localCache.get("bar1")).toEqual({ name: "bar1", v: 100 })
        expect(localCache.get("bar2")).toEqual({ name: "bar2", v: 100 })

        localCache.set("bar1", { name: "bar1", v: 200 })
        localCache.set("bar2", { name: "bar2", v: 200 })

        expect(localCache.has("bar1")).toBeTruthy()
        expect(localCache.has("bar2")).toBeTruthy()

        expect(localCache.get("bar1")).toEqual({ name: "bar1", v: 200 })
        expect(localCache.get("bar2")).toEqual({ name: "bar2", v: 200 })

        expect(localCache.getAll()).toEqual({
            bar1: { name: "bar1", v: 200 },
            bar2: { name: "bar2", v: 200 }
        })

        // 删除
        localCache.delete("bar1")

        expect(localCache.has("bar1")).toBeFalsy()
        expect(localCache.has("bar2")).toBeTruthy()

        expect(localCache.get("bar1")).toEqual(undefined)
        expect(localCache.get("bar2")).toEqual({ name: "bar2", v: 200 })
    })

    test("带 SubName 的读写", () => {
        let localCache = new rc.cache.LocalFastCache("test_user")

        localCache.set("bar1", { name: "bar1", v: 100 }, "projectA")
        expect(localCache.get("bar1", "projectA")).toEqual({ name: "bar1", v: 100 })

        localCache.set("bar1", { name: "bar1", v: 200 }, "projectB")
        localCache.set("bar2", { name: "bar2", v: 200 }, "projectB")

        expect(localCache.get("bar1", "projectA")).toEqual({ name: "bar1", v: 100 })
        expect(localCache.get("bar2", "projectA")).toEqual(undefined)

        expect(localCache.get("bar1", "projectB")).toEqual({ name: "bar1", v: 200 })
        expect(localCache.get("bar2", "projectB")).toEqual({ name: "bar2", v: 200 })
    })

    test("读不存在的 key", () => {
        let localCache = new rc.cache.LocalFastCache("test_user")

        expect(localCache.get("ssxxx")).toBe(undefined)
    })

    test("读取过期缓存", async () => {
        let localCache = new rc.cache.LocalFastCache("test_user")

        localCache.set("bar1", { name: "bar1", v: 100 }, undefined, 100)
        expect(localCache.get("bar1")).toEqual({ name: "bar1", v: 100 })

      await  rc.async.sleep(110)

        expect(localCache.get("bar1")).toEqual(undefined)
    })
})
