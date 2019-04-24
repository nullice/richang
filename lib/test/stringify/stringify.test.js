import { Richang as rc } from "../../src/index";
describe("toJson", () => {
    test("普通对象", () => {
        let ob = {
            a: 1,
            b: "b",
            d: null,
            ss: {
                s: 123
            }
        };
        let re = rc.stringify.toJson(ob, 0);
        expect(JSON.parse(re)).toEqual(ob);
    });
    test("null", () => {
        let ob = null;
        let re = rc.stringify.toJson(ob, 0);
        expect(JSON.parse(re)).toEqual(null);
    });
    test("Circular", () => {
        let obC = { name: "obC", a: 1 };
        let obCC = { name: "obCC", a: obC };
        obCC.obC = obC;
        obC.obC = obCC;
        let ob = {
            a: "123",
            obC: obC,
            s: {
                x: 33,
                oo: { obCC: obCC },
                obC: obC
            }
        };
        let re = rc.stringify.toJson(ob, 4);
        // console.log(re)
        expect(JSON.parse(re)).toEqual({
            a: "123",
            obC: {
                name: "obC",
                a: 1,
                obC: {
                    name: "obCC",
                    a: "[Circular]",
                    obC: "[Circular]"
                }
            },
            s: {
                x: 33,
                oo: {
                    obCC: "[Circular]"
                },
                obC: "[Circular]"
            }
        });
    });
    test("Circular circularReappear", () => {
        let obC = { name: "obC", a: 1 };
        let obCC = { name: "obCC", a: obC };
        obCC.obC = obC;
        obC.obC = obCC;
        let ob = {
            a: "123",
            obC: obC,
            s: {
                x: 33,
                oo: { obCC: obCC },
                obC: obC
            }
        };
        let re = rc.stringify.toJson(ob, 4, true);
        expect(JSON.parse(re)).toEqual({
            a: "123",
            obC: {
                name: "obC",
                a: 1,
                obC: {
                    name: "obCC",
                    a: "[Circular]░=obC",
                    obC: "[Circular]░=obC"
                }
            },
            s: {
                x: 33,
                oo: {
                    obCC: "[Circular]░=obC,obC"
                },
                obC: "[Circular]░=obC"
            }
        });
    });
    test("circularReappear", () => {
        let obC = { name: "obC", a: 1 };
        let ob = {
            a: "123",
            obC: obC,
            s: {
                x: 33,
                oo: 44,
                obC: obC
            }
        };
        let re = rc.stringify.toJson(ob, 0, true);
        // console.log(re)
        // expect(JSON.parse(re)).toEqual(null)
    });
});
describe("fromJson", () => {
    test("普通对象", () => {
        let ob = {
            a: 1,
            b: "b",
            d: null,
            ss: {
                s: 123
            }
        };
        let re = rc.stringify.toJson(ob, 0);
        expect(rc.stringify.fromJson(re)).toEqual(ob);
    });
    test("null", () => {
        let ob = null;
        let re = rc.stringify.toJson(ob, 0);
        expect(JSON.parse(re)).toEqual(null);
    });
    test("Circular circularReappear", () => {
        let obC = { name: "obC", a: 1 };
        let obCC = { name: "obCC", b: 2 };
        obCC.obC = obC;
        obC.obC = obCC;
        let ob = {
            obC,
            obCC
        };
        expect(ob.obC === obC);
        expect(ob.obCC === obCC);
        expect(ob.obCC.obC === obC);
        expect(ob.obC.obCC === obCC);
        // circular ob => circular json
        let reJson = rc.stringify.toJson(ob, 4, true);
        // circular json => circular ob
        let reOb = rc.stringify.fromJson(reJson, true);
        expect(reOb).toEqual(ob);
        // circular ob  => circular json
        let reReJson = rc.stringify.toJson(reOb, 4, true);
        expect(reReJson).toEqual(reJson);
        expect(ob.obC === obC);
        expect(ob.obCC === obCC);
        expect(ob.obCC.obC === obC);
        expect(ob.obC.obCC === obCC);
        expect(reOb.obC === obC);
        expect(reOb.obCC === obCC);
        expect(reOb.obCC.obC === obC);
        expect(reOb.obC.obCC === obCC);
    });
});
//# sourceMappingURL=stringify.test.js.map