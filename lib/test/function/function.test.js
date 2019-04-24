var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Richang as rc } from "../../src/index";
import { sleep } from "../../src/async/async";
describe("applyWithCache", () => {
    function roll(str) {
        return Math.random();
    }
    test("普通执行", () => __awaiter(this, void 0, void 0, function* () {
        let hiTime = 0;
        function hi(str) {
            hiTime++;
            return str;
        }
        let re;
        re = rc.func.applyWithCache(hi, null, ["sss"], { timeout: 100 });
        expect(re).toEqual("sss");
        re = rc.func.applyWithCache(hi, null, ["sss"], { timeout: 100 });
        expect(re).toEqual("sss");
        expect(hiTime).toEqual(1);
        yield sleep(200);
        re = rc.func.applyWithCache(hi, null, ["sss"], { timeout: 100 });
        expect(re).toEqual("sss");
        expect(hiTime).toEqual(2);
    }));
    test("换值分别执行", () => __awaiter(this, void 0, void 0, function* () {
        let hiTime = 0;
        function hi(str) {
            hiTime++;
            return str;
        }
        let re;
        re = rc.func.applyWithCache(hi, null, ["sss"], { timeout: 100 });
        expect(re).toEqual("sss");
        re = rc.func.applyWithCache(hi, null, ["xxx"], { timeout: 100 });
        expect(re).toEqual("xxx");
        expect(hiTime).toEqual(2);
        yield sleep(200);
        re = rc.func.applyWithCache(hi, null, ["sss"], { timeout: 100 });
        expect(re).toEqual("sss");
        re = rc.func.applyWithCache(hi, null, ["xxx"], { timeout: 100 });
        expect(re).toEqual("xxx");
        expect(hiTime).toEqual(4);
    }));
    test("确认缓存结果", () => __awaiter(this, void 0, void 0, function* () {
        let re1 = rc.func.applyWithCache(roll, null, [], { timeout: 100 });
        yield sleep(200);
        let re2 = rc.func.applyWithCache(roll, null, [], { timeout: 500 });
        let re3 = rc.func.applyWithCache(roll, null, [], { timeout: 100 });
        expect(re1).toEqual(re2);
        expect(re1).not.toEqual(re3);
    }));
    test("异步", () => __awaiter(this, void 0, void 0, function* () {
        let hiTime = 0;
        function hi(str) {
            return __awaiter(this, void 0, void 0, function* () {
                hiTime++;
                yield sleep(100);
                return str;
            });
        }
        let re1 = yield rc.func.applyWithCache(hi, null, ["xx22"], { timeout: 100 });
        expect(hiTime).toEqual(1);
        expect(re1).toEqual("xx22");
    }));
});
describe("cacheable", () => {
    test("普通执行", () => __awaiter(this, void 0, void 0, function* () {
        let hiTime = 0;
        function hi(str, options) {
            hiTime++;
            return options.pre + str + options.fin;
        }
        let hi2 = rc.func.cacheable(hi, 150);
        let re1 = hi2("123", { pre: "[", fin: "]" });
        let re2 = hi2("123", { pre: "[", fin: "]" });
        expect(re1).toEqual("[123]");
        expect(re2).toEqual("[123]");
        expect(hiTime).toEqual(1);
        yield sleep(200);
        let reB1 = hi2("123", { pre: "《", fin: "》" });
        let reB2 = hi2("123", { pre: "《", fin: "》" });
        let re3 = hi2("123", { pre: "[", fin: "]" });
        expect(reB1).toEqual("《123》");
        expect(reB2).toEqual("《123》");
        expect(re3).toEqual("[123]");
        expect(hiTime).toEqual(3);
    }));
    test("异步", () => __awaiter(this, void 0, void 0, function* () {
        let hiTime = 0;
        function hi(str) {
            return __awaiter(this, void 0, void 0, function* () {
                yield sleep(50);
                hiTime++;
                return str;
            });
        }
        let hi2 = rc.func.cacheable(hi, 150);
        let re1 = yield hi2("123");
        expect(re1).toEqual("123");
        expect(hiTime).toEqual(1);
        let re2 = yield hi2("222");
        expect(re2).toEqual("222");
        expect(hiTime).toEqual(2);
    }));
    test("并行异步", () => __awaiter(this, void 0, void 0, function* () {
        let hiTime = 0;
        function roll(str) {
            return __awaiter(this, void 0, void 0, function* () {
                yield sleep(100);
                hiTime++;
                return Math.random();
            });
        }
        let hi2 = rc.func.cacheable(roll, 500);
        let arr = [];
        function func() {
            return __awaiter(this, void 0, void 0, function* () {
                let re = yield hi2();
                arr.push(re);
            });
        }
        func();
        func();
        yield sleep(300);
        expect(arr.length).toEqual(2);
        expect(hiTime).toEqual(1);
        expect(arr[0]).toEqual(arr[1]);
    }));
});
//# sourceMappingURL=function.test.js.map