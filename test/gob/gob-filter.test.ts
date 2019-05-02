import { Richang as rc } from "../../src/index"
import { GobFilterType } from "src/gob/filters/filters"
import { cloneDeep } from "../../src/object/object"

const GobFactory = rc.gob.GobFactory

function getSample() {
    return {
        a: 1,
        b: 2,
        c: { d: { p: 1 } },
        k: 123
    }
}

describe("Gob - subscribe", () => {
    test("subscribe get", () => {
        let ob = getSample()
        let gob = GobFactory(ob)
        let gobCore = GobFactory.getGobCore(gob)
        let log: any[] = []
        gobCore.subscribe(o => {
            log.push(o)
        }, true)

        gob.a
        expect(log[0].type).toBe("get")
        expect(log[0].keyPath).toEqual(["a"])

        log = []
        gob.c.d.p
        expect(log.length).toBe(3)
    })

    test("subscribe cahnge", () => {
        let ob = getSample()
        let gob = GobFactory(ob)
        let gobCore = GobFactory.getGobCore(gob)
        let log: any[] = []
        gobCore.subscribe(o => {
            log.push(o)
        }, true)

        gob.a = 33
        expect(log[0].type).toBe("set")
        expect(log[0].value).toEqual(33)

        log = []
        gob.c.d.p = 99
        expect(log[log.length - 1].value).toBe(99)

        log = []
        delete gob.b
        expect(gob.b).toBe(undefined)
        expect(log[0].type).toBe("delete")
        expect(log[0].value).toBe(undefined)
    })
})

describe("Gob - filters", () => {
    test("filters set", () => {
        let ob = getSample()
        let gob = GobFactory(ob)
        let gobCore = GobFactory.getGobCore(gob)
        let log: any[] = []

        gobCore.filters.addFilter({
            type: GobFilterType.pre,
            func: (newVal, operator, info) => {
                console.log("[Filter]", newVal, operator, info.oldValue)
                log.push(cloneDeep(operator))
                operator.value = operator.value + 100
            },
            name: "",
            keyPath: [],
            recursive: true
        })

        gob.a = 111
        expect(gobCore.filters.preFilters.length).toEqual(1)
        expect(log[0].keyPath).toEqual(["a"])
        expect(log[0].value).toEqual(111)
        expect(gob.a).toEqual(211)

        log = []
        gob.c.d.p = 66
        expect(log[0].keyPath.join(".")).toEqual("c.d.p")
        expect(log[0].value).toEqual(66)
        expect(gob.c.d.p).toEqual(166)
    })

    test("filters addPreFilter", () => {
        let ob = getSample()
        let gob = GobFactory(ob)
        let gobCore = GobFactory.getGobCore(gob)
        let log: any[] = []

        gobCore.filters.addPreFilter("a", (value, operator, info) => {
            operator.value = operator.value + 1
        })
        gobCore.filters.addPreFilter("c.d.p", (value, operator, info) => {
            operator.value = operator.value + 1
        })
        gob.a = 1
        expect(gob.a).toEqual(2)

        gob.c.d.p = 3
        expect(gob.c.d.p).toEqual(4)
    })
})
