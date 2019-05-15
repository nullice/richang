import { promises, WriteFileOptions } from "fs"
import { writeFile, glob, escapeGlob, isExists, readFile } from "../nodeFile"
import { fromJson, toJson } from "../../stringify/stringify"

const fsex = require("fs-extra")
const path = require("path")
const open = require("open")

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
    async writeFile(subPath: string, data: any, option?: WriteFileOptions) {
        let filePath = path.join(this.mianDir, subPath)
        fsex.ensureFileSync(filePath)
        await writeFile(filePath, data, option)
        return filePath
    }

    /**
     * 在目录中读取一个文件
     * @param subPath
     * @param option
     */
    async readFile(subPath: string, option?: { encoding?: null; flag?: string }) {
        let filePath = path.join(this.mianDir, subPath)
        let re = await readFile(filePath, option)
        return re
    }

    /**
     * 在目录中读取一个文件，并转为字符串返回
     * @param subPath
     */
    async readText(subPath: string) {
        let re = await this.readFile(subPath)
        return re.toString()
    }

    /**
     * 在目录中读取一个 Json 文件，并反序列化为对象
     * @param subPath
     */
    async readJson(subPath: string): Promise<object> {
        let re = await this.readText(subPath)
        return fromJson(re)
    }

    /**
     * 把对象序列化为 Json 字符串并写入文件
     * @param subPath
     * @param object
     */
    async writeJson(subPath: string, object: object) {
        let re = await this.writeFile(subPath, toJson(object))
        return re
    }

    /**
     * 在目录中删除一个文件或者文件夹
     * @param subPath
     */
    async remove(subPath: string) {
        let filePath = path.join(this.mianDir, subPath)
        return await fsex.remove(filePath)
    }

    /**
     * 把目录显示在系统文件管理器中
     */
    async openInSystem() {
        open(this.mianDir)
    }

    /**
     * 在目录中匹配文件，可指定只返回文件或文件夹
     *
     * @example
     *
     * // 目录下所有文件
     * dirManager.glob("*")
     *
     * // 目录和子目录下所有文件
     * dirManager.glob("**")
     *
     * @param patterns
     * @param olnyType
     * @param ignoreDot
     */
    async glob(patterns: string, olnyType: "all" | "file" | "dir" = "all", ignoreDot = false) {
        // 使用 escapeGlob() 转义 mianDir 路径中的 "[]()*+" 等特殊字符
        patterns = path.join(escapeGlob(this.mianDir), patterns)
        let re = await glob(patterns, olnyType)
        return re
    }

    /**
     * 判断目录中一个文件是否存在
     * @param subPath
     */
    async isExists(subPath: string) {
        let filePath = path.join(this.mianDir, subPath)
        let re = isExists(filePath)
        return re
    }

    /**
     * 获取目录下全部文件的路径
     */
    async getAllFiles() {
        return await this.glob("**", "file")
    }

    /**
     * 获取目录下全部文件夹的路径
     */
    async getAllDirs() {
        let re = await this.glob("**", "dir")
        // 删除当前目录
        re.shift()
        return re
    }
}
