var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import RichangNode from "../../src/node";
describe("checkPort", () => {
    test("端口没有占用", () => __awaiter(this, void 0, void 0, function* () {
        let used = yield RichangNode.nodeServer.checkPortFree(39221);
        expect(used).toBeTruthy();
    }));
});
//# sourceMappingURL=nodeServer.test.js.map