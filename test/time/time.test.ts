import { Richang as rc } from "../../src/index"

describe("timeDiff", () => {
    test("timeDiff millisecond", () => {
        let t1 = new Date("2019-03-22T12:08:52.595Z")
        let t2 = new Date("2019-03-22T12:08:51.595Z")
        let d = rc.time.timeDiff(t1, t2)
        expect(d).toBe(1000)
    })

    test("timeDiffDay 天", () => {
        let t1 = new Date("2019-03-22T12:08:52.595Z")
        let t2 = new Date("2019-03-21T12:08:51.595Z")
        let d = rc.time.timeDiffDay(t1, t2)
        expect(d).toBe(1)
    })

    test("timeDiffDay 分钟", () => {
        let t1 = new Date("2019-03-22T12:10:51.595Z")
        let t2 = new Date("2019-03-22T12:08:51.595Z")
        let d = rc.time.timeDiffMinute(t1, t2)
        expect(d).toBe(2)
    })
})

test("parseMs", () => {
    {
        expect(rc.time.parseMs("1000ms")).toBe(1000)
        expect(rc.time.parseMs("20s")).toBe(1000 * 20)
        expect(rc.time.parseMs("1day")).toBe(86400000)
    }
})
