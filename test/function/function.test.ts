import { Richang as rc } from "../../src/index"
import { sleep } from "../../src/async/async"

describe("applyWithCache", () => {
    function roll(str: string) {
        return Math.random()
    }
    test("普通执行", async () => {
        let hiTime = 0
        function hi(str: string) {
            hiTime++
            return str
        }

        let re
        re = rc.func.applyWithCache(hi, null, ["sss"], { timeout: 100 })
        expect(re).toEqual("sss")

        re = rc.func.applyWithCache(hi, null, ["sss"], { timeout: 100 })
        expect(re).toEqual("sss")

        expect(hiTime).toEqual(1)

        await sleep(200)

        re = rc.func.applyWithCache(hi, null, ["sss"], { timeout: 100 })
        expect(re).toEqual("sss")

        expect(hiTime).toEqual(2)
    })

    test("换值分别执行", async () => {
        let hiTime = 0
        function hi(str: string) {
            hiTime++
            return str
        }

        let re
        re = rc.func.applyWithCache(hi, null, ["sss"], { timeout: 100 })
        expect(re).toEqual("sss")

        re = rc.func.applyWithCache(hi, null, ["xxx"], { timeout: 100 })
        expect(re).toEqual("xxx")

        expect(hiTime).toEqual(2)

        await sleep(200)

        re = rc.func.applyWithCache(hi, null, ["sss"], { timeout: 100 })
        expect(re).toEqual("sss")

        re = rc.func.applyWithCache(hi, null, ["xxx"], { timeout: 100 })
        expect(re).toEqual("xxx")

        expect(hiTime).toEqual(4)
    })

    test("确认缓存结果", async () => {
        let re1 = rc.func.applyWithCache(roll, null, [], { timeout: 100 })
        await sleep(200)

        let re2 = rc.func.applyWithCache(roll, null, [], { timeout: 500 })
        let re3 = rc.func.applyWithCache(roll, null, [], { timeout: 100 })
        expect(re1).toEqual(re2)
        expect(re1).not.toEqual(re3)
    })

    test("异步", async () => {
        let hiTime = 0
        async function hi(str: string) {
            hiTime++
            await sleep(100)
            return str
        }

        let re1 = await rc.func.applyWithCache(hi, null, ["xx22"], { timeout: 100 })

        expect(hiTime).toEqual(1)
        expect(re1).toEqual("xx22")
    })
})

describe("cacheable", () => {
    test("普通执行", async () => {
        let hiTime = 0
        function hi(str: string, options: { pre: string; fin: string }) {
            hiTime++
            return options.pre + str + options.fin
        }
        let hi2 = rc.func.cacheable(hi, 150)

        let re1 = hi2("123", { pre: "[", fin: "]" })
        let re2 = hi2("123", { pre: "[", fin: "]" })

        expect(re1).toEqual("[123]")
        expect(re2).toEqual("[123]")
        expect(hiTime).toEqual(1)

        await sleep(200)
        let reB1 = hi2("123", { pre: "《", fin: "》" })
        let reB2 = hi2("123", { pre: "《", fin: "》" })
        let re3 = hi2("123", { pre: "[", fin: "]" })

        expect(reB1).toEqual("《123》")
        expect(reB2).toEqual("《123》")
        expect(re3).toEqual("[123]")
        expect(hiTime).toEqual(3)
    })

    test("异步", async () => {
        let hiTime = 0
        async function hi(str: string) {
            await sleep(50)
            hiTime++
            return str
        }

        let hi2 = rc.func.cacheable(hi, 150)

        let re1 = await hi2("123")
        expect(re1).toEqual("123")
        expect(hiTime).toEqual(1)

        let re2 = await hi2("222")
        expect(re2).toEqual("222")
        expect(hiTime).toEqual(2)
    })
})
