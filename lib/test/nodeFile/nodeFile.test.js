var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import rc from "../../src/node";
test("readdirWithType", () => __awaiter(this, void 0, void 0, function* () {
    let re = yield rc.nodeFile.readdirWithType(__dirname);
    expect(Array.isArray(re)).toBeTruthy();
    expect(typeof re[0].isFile).toBe("function");
}));
test("readdir", () => __awaiter(this, void 0, void 0, function* () {
    let re = yield rc.nodeFile.readdir(__dirname);
    expect(Array.isArray(re)).toBeTruthy();
    expect(typeof re[0]).toBe("string");
}));
test("exists", () => __awaiter(this, void 0, void 0, function* () {
    expect(rc.nodeFile.isExists(__filename));
}));
//# sourceMappingURL=nodeFile.test.js.map