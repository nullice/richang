var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * 异步延时
 * @param ms 毫秒
 */
export function sleep(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    });
}
import { Runner as _Runner } from "./lib/Runner";
export const Runner = _Runner;
//# sourceMappingURL=async.js.map