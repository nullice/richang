import { GobFactory } from "../../../src/gob/gob"
import { GobSchema } from "../../../src/gob/tools/GobSchema/GobSchema"

test("GobSchema 单级", () => {
    let data: any = {
        a: 123,
        d: {
            c: "c",
            e: { d: 0 }
        },
        layers: [{ name: 123 }, { name: 2222 }]
    }

    let sc = new GobSchema(data)

    sc.onSet("a", (newValue, operator, info) => {
        operator.value = "aaa"
    })
    sc.onSet("d.*", (newValue, operator, info) => {
        operator.value = "ddd"
    })
    sc.onSet("layers.**", (newValue, operator, info) => {
        operator.value = "lll"
    })

    let changeLen = 0
    sc.onChange("a", (newValue, operator, info) => {
        operator.value = "xxx"
        changeLen++
    })
    sc.onChange("d.*", (newValue, operator, info) => {
        operator.value = "xxx"
        changeLen++
    })
    sc.onChange("layers.**", (newValue, operator, info) => {
        operator.value = "xxx"
        changeLen++
    })

    let gs = sc.getGobSource()
    let gob = GobFactory(gs.data)
    let gobCore = GobFactory.getGobCore(gob)

    // console.log(gs.filters)

    gs.filters.forEach(filter => gobCore.filters.addFilter(filter))

    gob.a = 333
    gob.d.c = 666
    gob.d.e.d = 222
    // 不触发
    gob.layers[0].name = 222

    expect(gob.a).toEqual("aaa")
    expect(gob.d.c).toEqual("ddd")
    expect(gob.layers[0].name).toEqual("lll")

    // 不触发
    expect(gob.d.e.d).toEqual(222)
    expect(changeLen).toEqual(3)
})

test("GobSchema 对象树", () => {
    let subBData: any = {
        num: 1232,
        colorR: 12,
        ob: {
            url: "http://google.com"
        },
        arr: []
    }
    let subB = new GobSchema(subBData)
    subB.defineLimit("colorR", 0, 255)
    subB.defineType("num", Number, false)
    subB.defineType("arr", Array, false)
    subB.defineVerify("ob.url", x => x.slice(0, 4) === "http")

    let subAData = {
        a: "a",
        fase: 1232,
        subB: subB.getSelf()
    }
    let subA = new GobSchema(subAData)
    subA.onSet("a", (newValue, operator, info) => {
        operator.value = "axx"
    })

    let rootData: any = {
        rootA: "rootA",
        rootB: "rootB",
        subA: subA.getSelf()
    }
    let root = new GobSchema(rootData)
    root.onSet("rootA", (newValue, operator, info) => {
        operator.value = "rootAxx"
    })

    let gob = root.getGob()

    // 嵌套
    gob.rootA = 123
    gob.rootB = 123
    expect(gob.rootA).toEqual("rootAxx")
    expect(gob.rootB).toEqual(123)

    gob.rootA = 123
    gob.rootB = 123
    expect(gob.rootA).toEqual("rootAxx")
    expect(gob.rootB).toEqual(123)

    gob.subA.a = 1232
    expect(gob.subA.a).toEqual("axx")

    // 类型

    //  defineLimit
    gob.subA.subB.colorR = 5
    expect(gob.subA.subB.colorR).toEqual(5)

    gob.subA.subB.colorR = 300
    expect(gob.subA.subB.colorR).toEqual(255)

    //  defineType
    gob.subA.subB.num = "123"
    expect(typeof gob.subA.subB.num).toEqual("number")

    gob.subA.subB.arr = [123]
    expect(Array.isArray(gob.subA.subB.arr)).toEqual(true)

    gob.subA.subB.arr = 123
    expect(Array.isArray(gob.subA.subB.arr)).toEqual(true)
})
