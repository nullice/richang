var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fsex = require("fs-extra");
const fs = require("fs");
const os = require("os");
const util = require("util");
import { TempDirManager as _TempDirManager } from "./lib/TempDirManager";
export const TempDirManager = _TempDirManager;
const asyncReaddir = util.promisify(fs.readdir);
const asyncWriteFile = util.promisify(fs.writeFile);
const asyncReadFile = util.promisify(fs.readFile);
const asyncStat = util.promisify(fs.stat);
const asyncAccess = util.promisify(fs.access);
/**
 * 读取目录
 *
 * @example
 * // 读取目录下文件文件名
 * await readdir("./") => ["file1","file2"]
 *
 * @param path
 * @return {Promise<any>}
 */
export function readdir(path) {
    return __awaiter(this, void 0, void 0, function* () {
        return asyncReaddir(path);
    });
}
/**
 * 读取目录和类型
 * // 读取目录下文件，返回 INodeDirent
 * let list =await readdir("./", {withFileTypes:true}) => [Dirent,Dirent]
 * list[0].isFile()
 * list[0].isDirectory()
 * list[0].isSymbolicLink()
 *
 * @param path
 * @return {Promise<INodeDirent[]>}
 */
export function readdirWithType(path) {
    return __awaiter(this, void 0, void 0, function* () {
        return asyncReaddir(path, { withFileTypes: true });
    });
}
/**
 * 写一个文件
 * @param path
 * @param data
 * @param [option] { encoding?: string | null; mode?: number | string; flag?: string }
 */
export function writeFile(path, data, option) {
    return __awaiter(this, void 0, void 0, function* () {
        return asyncWriteFile(path, data, option);
    });
}
/**
 * 读一个文件
 * @param path
 * @param data
 * @param [option] { encoding?: string | null; mode?: number | string; flag?: string }
 */
export function readFile(path, data, option) {
    return __awaiter(this, void 0, void 0, function* () {
        return asyncWriteFile(path, data, option);
    });
}
/**
 * 读一个文件的属性
 * @param path
 * @return {Promise<INodeStats>}
 */
export function stat(path) {
    return __awaiter(this, void 0, void 0, function* () {
        return asyncStat();
    });
}
/**
 * 目标文件是否存在
 * @param path
 */
export function isExists(path) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            fs.access(path, fs.constants.F_OK, (err) => {
                if (err) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
    });
}
//# sourceMappingURL=nodeFile.js.map