import { genTimestampText, timeDiffDay } from "./../../time/time";
import { rollString } from "../../crypto/crypto";
const os = require("os");
const fsex = require("fs-extra");
const fs = require("fs");
const path = require("path");
export class TempDirManager {
    constructor(name) {
        this.sysTempDir = os.tmpdir();
        // 创建主临时文件夹
        this.mianTempDir = path.join(this.sysTempDir, name);
        fsex.ensureDirSync(this.mianTempDir);
        // 创建实例临时文件夹
        this.timestamp = genTimestampText();
        this.tempDir = path.join(this.mianTempDir, this.timestamp);
        fsex.ensureDirSync(this.tempDir);
    }
    /**
     * 销毁临时目录
     */
    destroy() {
        fsex.removeSync(this.tempDir);
    }
    /**
     * 申请一个临时文件路径
     *@example
     * newTempFilePath() // => "c:/temp/xd123fs43aew"
     * // 可用提供一个子文件夹名
     * genTempFilePath("static") // => "c:/temp/static/xd123fs43aew"
     * @param subDir
     * @return {any}
     */
    newTempFilePath(subDir) {
        let genName = () => {
            let name = rollString(12);
            let filePath;
            if (subDir) {
                filePath = path.join(this.tempDir, subDir, name);
            }
            else {
                filePath = path.join(this.tempDir, name);
            }
            if (fsex.pathExistsSync(filePath)) {
                return genName();
            }
            else {
                return filePath;
            }
        };
        return genName();
    }
    /**
     * 清除过时的临时实例文件夹
     * @param day 清除这个天数（包括）之前的文件夹
     */
    clear(day = 0) {
        let now = new Date();
        let dirs = fs.readdirSync(this.mianTempDir);
        for (let i = 0; i < dirs.length; i++) {
            let itemDir = dirs[i];
            if (itemDir != this.timestamp) {
                // 不清除
                let itemPath = path.join(this.mianTempDir, itemDir);
                let stat = fs.statSync(itemPath);
                let diffDay = timeDiffDay(now, stat.mtime);
                if (diffDay >= day) {
                    fsex.remove(itemPath);
                }
            }
        }
    }
}
//# sourceMappingURL=TempDirManager.js.map