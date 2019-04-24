import { Richang as rc } from "../../src/index";
describe("arraySymDifference", () => {
    test("普通对象数组", () => {
        let re = rc.array.arraySymDifference([1, 2, 3], [1, 2, 4]);
        expect(re).toEqual([3, 4]);
    });
    test("对象数组 equal", () => {
        let re = rc.array.arraySymDifference([{ a: 1 }, { a: 2 }, { a: 3 }], [{ a: 1 }, { a: 2 }, { a: 4 }], {
            equal: true
        });
        expect(re).toEqual([{ a: 3 }, { a: 4 }]);
    });
    test("对象数组 idKey", () => {
        let re = rc.array.arraySymDifference([{ key: 1 }, { key: 2 }, { key: 3 }], [{ key: 1 }, { key: 2 }, { key: 4 }], { idKey: "key" });
        expect(re).toEqual([{ key: 3 }, { key: 4 }]);
    });
});
describe("arrayUnion", () => {
    test("普通对象数组", () => {
        let re = rc.array.arrayUnion([1, 2, 3], [1, 2, 4]);
        expect(re).toEqual([1, 2, 3, 4]);
    });
    test("对象数组 equal", () => {
        let re = rc.array.arrayUnion([{ a: 1 }, { a: 2 }, { a: 3 }], [{ a: 1 }, { a: 2 }, { a: 4 }], {
            equal: true
        });
        expect(re).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]);
    });
    test("对象数组 idKey", () => {
        let re = rc.array.arrayUnion([{ key: 1 }, { key: 2 }, { key: 3 }], [{ key: 1 }, { key: 2 }, { key: 4 }], {
            idKey: "key"
        });
        expect(re).toEqual([{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }]);
    });
});
describe("arrayIntersection", () => {
    test("普通对象数组", () => {
        let re = rc.array.arrayIntersection([1, 2, 3], [1, 2, 4]);
        expect(re).toEqual([1, 2]);
    });
    test("对象数组 equal", () => {
        let re = rc.array.arrayIntersection([{ a: 1 }, { a: 2 }, { a: 3 }], [{ a: 1 }, { a: 2 }, { a: 4 }], {
            equal: true
        });
        expect(re).toEqual([{ a: 1 }, { a: 2 }]);
    });
    test("对象数组 idKey", () => {
        let re = rc.array.arrayIntersection([{ key: 1 }, { key: 2 }, { key: 3 }], [{ key: 1 }, { key: 2 }, { key: 4 }], {
            idKey: "key"
        });
        expect(re).toEqual([{ key: 1 }, { key: 2 }]);
    });
});
describe("arraySubtract", () => {
    test("普通对象数组", () => {
        let re = rc.array.arraySubtract([1, 2, 3], [1, 2, 4]);
        expect(re).toEqual([3]);
    });
    test("对象数组 equal", () => {
        let re = rc.array.arraySubtract([{ a: 1 }, { a: 2 }, { a: 3 }], [{ a: 1 }, { a: 2 }, { a: 4 }], {
            equal: true
        });
        expect(re).toEqual([{ "a": 3 }]);
    });
    test("对象数组 idKey", () => {
        let re = rc.array.arraySubtract([{ key: 1 }, { key: 2 }, { key: 3 }], [{ key: 1 }, { key: 2 }, { key: 4 }], {
            idKey: "key"
        });
        expect(re).toEqual([{ key: 3 }]);
    });
});
//# sourceMappingURL=array.test.js.map