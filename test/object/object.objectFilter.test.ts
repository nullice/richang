import { Richang as rc } from "../../src/index"

function newObj() {
    return {
        i1: 123,
        i11: 122,
        i0: 2,
        i04: 4,
        ss: {
            i0: 2,
            i00: 5,
            i31: 123,
            u: undefined
        },
        u: undefined,
        str: "dfasdf"
    }
}

describe("objectFilter", () => {
    test("过滤普通对象（非变异）", () => {
        let ob = newObj()
        let re = rc.object.objectFilter(ob, value => value == 123)

        expect(re).toEqual({
            i1: 123
        })
        expect(re).not.toBe(ob)
    })

    test("过滤普通对象（变异）", () => {
        let ob = newObj()
        let re = rc.object.objectFilter(ob, value => value == 123, true)

        expect(re).toEqual({
            i1: 123
        })
        expect(ob).toEqual({
            i1: 123
        })
        expect(re).toBe(ob)
    })

    test("过滤多层对象（非变异）", () => {
        let ob = newObj()
        let re = rc.object.objectFilter(ob, value => value == undefined || rc.object.isObject(value))

        expect(re).toEqual({
            u: undefined,
            ss: { u: undefined }
        })
        expect(re).not.toBe(ob)
    })

    test("过滤多层对象（变异）", () => {
        let ob = newObj()
        let re = rc.object.objectFilter(ob, value => value == undefined|| rc.object.isObject(value), true)

        expect(re).toEqual({
            u: undefined,
            ss: { u: undefined }
        })
        expect(ob).toEqual({
            u: undefined,
            ss: { u: undefined }
        })
        expect(re).toBe(ob)
    })
})

describe("objectFilter", () => {
    test("移除普通对象（非变异）", () => {
        let ob = newObj()
        let re = rc.object.objectRemove(ob, undefined)
        // console.log("re", re)
        expect(re).not.toBe(ob)
        expect(re.hasOwnProperty("u")).toBeFalsy()
        expect(re.ss.hasOwnProperty("u")).toBeFalsy()
    })

    test("过滤普通对象（变异）", () => {
        let ob = newObj()
        let re = rc.object.objectRemove(ob, undefined, true)

        expect(re).toBe(ob)

        expect(re.hasOwnProperty("u")).toBeFalsy()
        expect(re.ss.hasOwnProperty("u")).toBeFalsy()
        expect(re.ss.i0).toBe(2)

        expect(ob.hasOwnProperty("u")).toBeFalsy()
        expect(ob.ss.hasOwnProperty("u")).toBeFalsy()
        expect(ob.ss.i0).toBe(2)
    })
})
