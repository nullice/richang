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

    test("overwrite", () => {
        let ob: any = {}
        rc.object.setObjectValueByPath(ob, "name", "name", true)
        rc.object.setObjectValueByPath(ob, "a.b.c", 123, true)
        console.log("ob", ob)
        expect(ob.name).toEqual("name")
        expect(typeof ob.a).toEqual("object")
        expect(typeof ob.a.b).toEqual("object")
        expect(ob.a.b.c).toEqual(123)
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

        rc.object.objectEach(ob, (value, key, info) => {
            count++
            expect(info.parent[key]).toBe(value)
        })
        expect(count).toBe(21)
    })

    test("遍历普通对象 (深度优先)", () => {
        let ob = newOb()
        let count = 0

        rc.object.objectEach(
            ob,
            (value, key, info) => {
                count++
                expect(info.parent[key]).toBe(value)
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

        rc.object.objectEach(
            ob,
            (value, key, info) => {
                count++
                expect(info.parent[key]).toBe(value)
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

        rc.object.objectEach(
            ob,
            (value, key, info) => {
                count++
                expect(info.parent[key]).toBe(value)
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

        rc.object.objectEach(
            ob,
            (value, key, info) => {
                count++
                expect(info.parent[key]).toBe(value)
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

    test("needKeyPath for()", () => {
        let ob = {
            a: {
                key: "a",
                b: {
                    key: "a.b",
                    c: { key: "a.b.c" }
                }
            }
        }
        let count = 0
        rc.object.objectEach(
            ob,
            (value, key, info) => {
                count++
                expect(info.parent[key]).toBe(value)

                if (value.key) {
                    let keys = (<string[]>info.keyPath).join(".")
                    expect(keys).toEqual(value.key)
                }
            },
            { checkCycle: true, needKeyPath: true }
        )

        // 深度优先遍历
        rc.object.objectEach(
            ob,
            (value, key, info) => {
                count++
                expect(info.parent[key]).toBe(value)

                if (value.key) {
                    let keys = (<string[]>info.keyPath).join(".")
                    expect(keys).toEqual(value.key)
                }
            },
            { checkCycle: false, depthFirst: true, needKeyPath: true }
        )
    })

    function newchildrenOb() {
        return {
            name: "root",
            children: {
                itemA: {
                    name: "itemA",
                    children: {
                        itemA_1: {
                            name: "itemA_1",
                            children: {
                                itemA_1_1: {
                                    name: "itemA_1_1"
                                }
                            }
                        },
                        itemA_2: {
                            name: "itemA_2",
                            children: {
                                itemA_2_1: {
                                    name: "itemA_2_1"
                                }
                            }
                        }
                    }
                },

                itemB: {
                    name: "itemB",
                    children: {
                        itemB_1: {
                            name: "itemB_1",
                            children: {
                                itemB_1_1: {
                                    name: "itemB_1_1"
                                }
                            }
                        },
                        itemB_2: {
                            name: "itemB_2",
                            children: {
                                itemB_2_1: {
                                    name: "itemB_2_1"
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    test("childrenKey", () => {
        let obj = newchildrenOb()
        let count = 0
        rc.object.objectEach(
            obj,
            (value, key, info) => {
                expect(value.name).toBe(key)
                expect(info.parent.children).toBeTruthy()
                count++
            },
            { childrenKey: "children" }
        )

        expect(count).toBe(10)
    })

    test("childrenKey 深度优先+needKeyPath", () => {
        let obj = newchildrenOb()
        let count = 0
        rc.object.objectEach(
            obj,
            (value, key, info) => {
                expect(value.name).toBe(key)
                expect(info.parent.children).toBeTruthy()
                count++
            },
            { childrenKey: "children", depthFirst: true, needKeyPath: true }
        )

        expect(count).toBe(10)
    })

    test("depthReboundFunc", () => {
        let obj = newchildrenOb()
        let count = 0
        rc.object.objectEach(
            obj,
            (value, key, info) => {
                count++
            },
            {
                childrenKey: "children",
                depthFirst: true,
                needKeyPath: true,
                depthReboundFunc(value: any, key: string, info: { parent: any; deep: number; keyPath?: string[] }) {
                    // console.log("depthReboundFunc", value, key)
                    if (value.children) {
                        let cLen = 0
                        for (let key in value.children) {
                            cLen++
                            let item = value.children[key]
                            if (item.length) {
                                cLen += item.length
                            }
                        }
                        value.length = cLen
                    } else {
                        value.last = true
                    }
                }
            }
        )

        // console.log("obj", JSON.stringify(obj, null, 4))
        expect(count).toBe(10)
        expect((<any>obj.children.itemA).length).toBe(4)
        expect((<any>obj.children.itemA.children.itemA_1).length).toBe(1)
    })

    test("提前终止 广度搜索", () => {
        let count = 0
        let obj = {
            a: 1,
            b: 2,
            c: 3,
            d: { d1: 11, d2: 22, d3: { d33: 44 } }
        }

        let readeds: any = {}
        rc.object.objectEach(obj, (value, key, info) => {
            count++
            readeds[key] = value
            if (key == "d") return -1
        })

        expect(count).toBe(4)

        expect(readeds["a"]).toBeTruthy()
        expect(readeds["b"]).toBeTruthy()
        expect(readeds["c"]).toBeTruthy()
        expect(readeds["d"]).toBeTruthy()

        expect(readeds["d1"]).toBeFalsy()
        expect(readeds["d2"]).toBeFalsy()
        expect(readeds["d33"]).toBeFalsy()
    })

    test("提前终止 深度搜索", () => {
        let obj = {
            c: { c1: 11, c2: 22, c3: { c4: 44 } },
            d: { d1: 11, d2: 22, d3: { d4: 44 } }
        }
        let readeds: any = {}
        rc.object.objectEach(
            obj,
            (value, key, info) => {
                readeds[key] = value
                if (key == "d3") return -1
            },
            { depthFirst: true }
        )

        expect(readeds["d"]).toBeTruthy()
        expect(readeds["d2"]).toBeTruthy()
        expect(readeds["d3"]).toBeTruthy()
        expect(readeds["d4"]).toBeFalsy()

        expect(readeds["c"] ? readeds["c4"] : true).toBeTruthy()
    })
})
