import { Richang as rc } from "../../src/index"

describe("getObjectValueByPath()", () => {
    const sampleObj = {
        aaa: 111,
        bbb: 222,
        ccc: {
            c11: 1,
            c22: 2,
            c33: {
                d: { e: 2019 }
            }
        }
    }

    test("字符串 keyPath 分隔符: .", () => {
        expect(rc.object.getObjectValueByPath(sampleObj, "aaa")).toBe(111)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc")).toBe(sampleObj.ccc)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc.c11")).toBe(sampleObj.ccc.c11)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc.c22")).toBe(sampleObj.ccc.c22)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc.c33")).toBe(sampleObj.ccc.c33)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc.c33.d")).toBe(sampleObj.ccc.c33.d)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc.c33.d.e")).toBe(sampleObj.ccc.c33.d.e)
    })

    test("字符串 keyPath 分隔符: /", () => {
        expect(rc.object.getObjectValueByPath(sampleObj, "aaa")).toBe(111)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc")).toBe(sampleObj.ccc)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc/c11")).toBe(sampleObj.ccc.c11)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc/c22")).toBe(sampleObj.ccc.c22)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc/c33")).toBe(sampleObj.ccc.c33)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc/c33/d")).toBe(sampleObj.ccc.c33.d)
        expect(rc.object.getObjectValueByPath(sampleObj, "ccc/c33/d/e")).toBe(sampleObj.ccc.c33.d.e)
    })

    test("数组 keyPath", () => {
        expect(rc.object.getObjectValueByPath(sampleObj, ["aaa"])).toBe(111)
        expect(rc.object.getObjectValueByPath(sampleObj, ["ccc"])).toBe(sampleObj.ccc)
        expect(rc.object.getObjectValueByPath(sampleObj, ["ccc", "c11"])).toBe(sampleObj.ccc.c11)
        expect(rc.object.getObjectValueByPath(sampleObj, ["ccc", "c22"])).toBe(sampleObj.ccc.c22)
        expect(rc.object.getObjectValueByPath(sampleObj, ["ccc", "c33", "d", "e"])).toBe(sampleObj.ccc.c33.d.e)
    })
})

describe("setObjectValueByPath()", () => {
    function newObj() {
        return {
            aaa: 111,
            ccc: {
                c33: {
                    d: { e: 2019 }
                }
            }
        }
    }

    test("数组 keyPath", () => {
        let sampleObj = newObj()
        expect(rc.object.setObjectValueByPath(sampleObj, ["aaa"], 333)).toBeTruthy()
        expect(sampleObj.aaa).toBe(333)

        expect(rc.object.setObjectValueByPath(sampleObj, ["ccc", "c33", "d", "e"], 22333)).toBeTruthy()
        expect(sampleObj.ccc.c33.d.e).toBe(22333)

        expect(rc.object.setObjectValueByPath(sampleObj, ["ccc", "c33"], 666)).toBeTruthy()
        expect(sampleObj.ccc.c33).toBe(666)

        expect(rc.object.setObjectValueByPath(sampleObj, ["ccc", "c33", "xxx"], 9933, true)).toBeTruthy()
        expect((<any>sampleObj.ccc.c33).xxx).toBe(9933)

        expect(rc.object.setObjectValueByPath(sampleObj, ["aaa", "333", "444"], 666, true)).toBeTruthy()
        expect((<any>sampleObj).aaa["333"]["444"]).toBe(666)

        expect(rc.object.setObjectValueByPath(sampleObj, ["aaa", "ooooo", "444"], 666)).toBeFalsy()
        expect((<any>sampleObj).aaa["333"]["ooooo"]).toBe(undefined)

        let obj = { a: 123 }
        expect(rc.object.setObjectValueByPath(obj, ["b", "c", "d"], 112, true)).toBeTruthy()
        expect(obj).toEqual({ a: 123, b: { c: { d: 112 } } })
    })

    test("字符串 keyPath 分隔符: /", () => {
        let sampleObj = newObj()
        expect(rc.object.setObjectValueByPath(sampleObj, "aaa", 333)).toBeTruthy()
        expect(sampleObj.aaa).toBe(333)

        expect(rc.object.setObjectValueByPath(sampleObj, "ccc.c33.d.e", 22333)).toBeTruthy()
        expect(sampleObj.ccc.c33.d.e).toBe(22333)

        expect(rc.object.setObjectValueByPath(sampleObj, "ccc.c33", 666)).toBeTruthy()
        expect(sampleObj.ccc.c33).toBe(666)

        expect(rc.object.setObjectValueByPath(sampleObj, "ccc.c33.xxx", 9933, true)).toBeTruthy()
        expect((<any>sampleObj.ccc.c33).xxx).toBe(9933)

        expect(rc.object.setObjectValueByPath(sampleObj, "aaa.333.444", 666, true)).toBeTruthy()
        expect((<any>sampleObj).aaa["333"]["444"]).toBe(666)

        expect(rc.object.setObjectValueByPath(sampleObj, "aaa.ooooo.444", 666)).toBeFalsy()
        expect((<any>sampleObj).aaa["333"]["ooooo"]).toBe(undefined)

        let obj = { a: 123 }
        expect(rc.object.setObjectValueByPath(obj, "b.c.d", 112, true)).toBeTruthy()
        expect(obj).toEqual({ a: 123, b: { c: { d: 112 } } })
    })
})

describe("treeEach()", () => {
    function newOb() {
        return {
            a: 1,
            b: 2,
            c: 3,
            d: {
                d1: 11,
                d2: 22,
                d3: 33,
                e: {
                    e1: {},
                    e2: {
                        d: { k: 123 }
                    }
                },
                array: [1, 2, 33, 55, "123", { s1: 123, s2: 124 }]
            }
        }
    }

    test("遍历普通对象", () => {
        let ob = newOb()
        let count = 0

        rc.object.treeEach(ob, (value, key, parent, info) => {
            count++
            expect(parent[key]).toBe(value)
        })
        expect(count).toBe(21)
    })

    test("遍历普通对象 (深度优先)", () => {
        let ob = newOb()
        let count = 0

        rc.object.treeEach(
            ob,
            (value, key, parent, info) => {
                count++
                expect(parent[key]).toBe(value)
            },
            { depthFirst: true }
        )
        expect(count).toBe(21)
    })

    test("遍历循环引用对象", () => {
        let ob = newOb()
        let count = 0
        let countCycle = 0
        ;(<any>ob).cycle = ob
        ;(<any>ob).cycle2 = ob.d

        rc.object.treeEach(
            ob,
            (value, key, parent, info) => {
                count++
                expect(parent[key]).toBe(value)
            },
            { checkCycle: true, checkCycleCallback }
        )

        // 循环引用时的回调
        function checkCycleCallback(value: any, key: string, parent: any, path?: string[], firstPath?: string[]) {
            countCycle++
        }
        expect(count).toBe(23)
        expect(countCycle).toEqual(2)
    })

    test("遍历循环引用对象（深度遍历）", () => {
        let ob = newOb()
        let count = 0
        let countCycle = 0
        ;(<any>ob).cycle = ob
        ;(<any>ob).cycle2 = ob.d

        rc.object.treeEach(
            ob,
            (value, key, parent, info) => {
                count++
                expect(parent[key]).toBe(value)
            },
            { checkCycle: true, checkCycleCallback, depthFirst: true }
        )

        // 循环引用时的回调
        function checkCycleCallback(value: any, key: string, parent: any, path?: string[], firstPath?: string[]) {
            countCycle++
        }
        expect(count).toBe(23)
        expect(countCycle).toEqual(2)
    })

    test("遍历循环引用对象（使用 KeyPath）", () => {
        let ob = newOb()
        let count = 0
        let countCycle = 0
        ;(<any>ob).cycle = ob
        ;(<any>ob).cycle2 = ob.d

        rc.object.treeEach(
            ob,
            (value, key, parent, info) => {
                count++
                expect(parent[key]).toBe(value)
                // @ts-ignore
                expect(info.keyPath[info.keyPath.length - 1]).toBe(key)
            },
            { checkCycle: true, checkCycleCallback, needKeyPath: true }
        )

        // 循环引用时的回调
        function checkCycleCallback(value: any, key: string, parent: any, path?: string[], firstPath?: string[]) {
            countCycle++
        }
        expect(count).toBe(23)
        expect(countCycle).toEqual(2)
    })
})
