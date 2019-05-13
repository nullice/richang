import { promises } from "fs"
import { writeFile } from "../nodeFile"

const fsex = require("fs-extra")
const path = require("path")

/**
 * 目录管理器
 */
export class DirManager {
    constructor(public mianDir: string) {
        fsex.ensureDirSync(this.mianDir)
    }

    /**
     * 在目录中写入一个文件
     * @param subPath 子文件路径
     * @param data 数据
     */
    async writeFile(subPath: string, data: any) {
        let filePath = path.join(this.mianDir, subPath)
        fsex.ensureFileSync(filePath)
        await writeFile(filePath, data)
        return filePath
    }
}
