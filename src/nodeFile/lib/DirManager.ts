import { promises } from "fs"
import { writeFile, glob, escapeGlob } from "../nodeFile"

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

    /**
     * 在目录中删除一个文件或者文件夹
     * @param subPath
     */
    async remove(subPath: string) {
        let filePath = path.join(this.mianDir, subPath)
        return await fsex.remove(filePath)
    }

    async glob(patterns: string, olnyType: "all" | "file" | "dir" = "all", ignoreDot = false) {
        // 使用 escapeGlob() 转义 mianDir 路径中的 "[]()*+" 等特殊字符
        patterns = path.join(escapeGlob(this.mianDir), patterns)
        let re = await glob(patterns, olnyType)
        return re
    }
}
