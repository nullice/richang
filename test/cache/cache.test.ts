import { Richang as rc } from "../../src/index"

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

    test("timeout 过期时间", () => {
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

        setTimeout(() => {
            expect(cache.get(k1)).toEqual(undefined)
            expect(cache.get(k2)).toEqual(undefined)
            expect(cache.get(ob)).toEqual(undefined)
            expect(cache.has(k1)).toBeFalsy()
            expect(cache.has(k2)).toBeFalsy()
            expect(cache.has(ob)).toBeFalsy()
        }, 220)
    })
})
