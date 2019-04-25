import { Richang as rc } from "../../src/index"
const GobFactory = rc.gob.GobFactory

function getSample() {
    return {
        a: 1,
        b: 2,
        c: { d: { p: 1 } },
        k: 123
    }
}

describe("GobFactory", () => {
    test("包装后对象还可以普通修改", () => {
        let ob = getSample()
        let gob = GobFactory(ob)

        gob.a = 123
        expect(gob.a).toBe(123)

        gob.c.d.p = 123
        expect(gob.c.d.p).toBe(123)

        delete gob.a
        expect(gob.a).toBe(undefined)

        delete gob.c.d.p
        expect(gob.c.d.p).toBe(undefined)
    })

    test("包装后可以添加属性", () => {
        let ob = getSample()
        let gob = GobFactory(ob)

        gob.a = 123
        expect(gob.a).toBe(123)

        gob.c.d.p = 123
        expect(gob.c.d.p).toBe(123)

        delete gob.a
        expect(gob.a).toBe(undefined)

        delete gob.c.d.p
        expect(gob.c.d.p).toBe(undefined)
    })

    test("可以处理循环依赖：取值", () => {
        let root: any = {}

        root.a = {
            v: "a",
            p: root
        }

        root.a.b = {
            v: "b",
            p: root.a,
            root: root
        }

        let gob = GobFactory(root)

        expect(gob.a.v).toBe("a")
        expect(gob.a.b.v).toBe("b")
        expect(gob.a.b.p.v).toBe("a")
        expect(gob.a.b.p.b.v).toBe("b")
        expect(gob.a.b.p.b.root).toBe(gob)
        expect(gob.a.b.p.b.root.a.v).toBe("a")
    })

    test("可以处理循环依赖：赋值", () => {
        let root: any = {}
        root.a = {
            v: "a",
            p: root
        }

        root.a.b = {
            v: "b",
            p: root.a,
            root: root
        }

        let gob = GobFactory(root)

        gob.a.v = "aooo"
        expect(gob.a.v).toBe("aooo")
        gob.a.b.p.v = "aiii"
        expect(gob.a.v).toBe("aiii")
        gob.a.b.p = { o: 123 }
        expect(gob.a.b.p.o).toBe(123)
    })
})
