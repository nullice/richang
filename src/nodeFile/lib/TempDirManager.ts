import { genTimestampText, timeDiffDay } from "./../../time/time"
import { rollString } from "../../crypto/crypto"
const os = require("os")
const fsex = require("fs-extra")
const fs = require("fs")
const path = require("path")


/**
 * 临时目录管理器
 *
 * 能方便到到生产临时文件路径、写入临时文件
 *
 * 用 tempDirManager.clear([day:number]) 能按删除指定天数之前到临时文件
 *
 */
export class TempDirManager {
    // 系统临时目录
    sysTempDir: string
    // 主临时目录（一般为应用级，方便清空当前应用产生的临时文件）
    mianTempDir: string
    // 临时目录
    tempDir: string
    // 临时目录创建时间
    timestamp: string

    constructor(name: string, sysTempDir?: string) {
        this.sysTempDir = sysTempDir ? sysTempDir : os.tmpdir()

        // 创建主临时文件夹
        this.mianTempDir = path.join(this.sysTempDir, name)
        fsex.ensureDirSync(this.mianTempDir)

        // 创建实例临时文件夹
        this.timestamp = genTimestampText()
        this.tempDir = path.join(this.mianTempDir, this.timestamp)
        fsex.ensureDirSync(this.tempDir)
    }

    /**
     * 销毁临时目录
     */
    destroy() {
        fsex.removeSync(this.tempDir)
    }

    /**
     * 申请一个临时文件路径
     * @example
     * newTempFilePath() // => "c:/temp/xd123fs43aew"
     * // 可用提供一个子文件夹名
     * genTempFilePath("static") // => "c:/temp/static/xd123fs43aew"
     * @param subDir 子文件夹名
     * @return {any}
     */
    newTempFilePath(subDir?: string) {
        let genName: () => any = () => {
            let name = rollString(12)
            let filePath
            if (subDir) {
                filePath = path.join(this.tempDir, subDir, name)
            } else {
                filePath = path.join(this.tempDir, name)
            }

            if (fsex.pathExistsSync(filePath)) {
                return genName()
            } else {
                return filePath
            }
        }
        return genName()
    }

    /**
     * 清除过时的临时实例文件夹
     * @param day 清除这个天数（包括）之前的文件夹
     */
    clear(day = 0) {
        let now = new Date()
        let dirs = fs.readdirSync(this.mianTempDir)
        for (let i = 0; i < dirs.length; i++) {
            let itemDir = dirs[i]
            if (itemDir != this.timestamp) {
                // 不清除
                let itemPath = path.join(this.mianTempDir, itemDir)
                let stat = fs.statSync(itemPath)
                let diffDay = timeDiffDay(now, stat.mtime)

                if (diffDay >= day) {
                    fsex.remove(itemPath)
                }
            }
        }
    }


    /**
     * 写一个文件到临时目录，并且返回其文件名
     * @param data 数据
     * @param subPath 子文件夹名
     */
    writeFile(data: any, subPath?: string) {
        let path = this.newTempFilePath(subPath)
        fs.writeFileSync(path, data)
        return path
    }
}
