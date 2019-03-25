import { PathLike } from "fs"

const fsex = require("fs-extra")
const fs = require("fs")
const os = require("os")
const util = require("util")

import { TempDirManager as _TempDirManager } from "./lib/TempDirManager"
export const TempDirManager = _TempDirManager

const asyncReaddir = util.promisify(fs.readdir)
const asyncWriteFile = util.promisify(fs.writeFile)
const asyncReadFile = util.promisify(fs.readFile)
const asyncStat = util.promisify(fs.stat)
const asyncAccess = util.promisify(fs.access)

interface INodeDirent {
    isFile(): boolean
    isDirectory(): boolean
    isBlockDevice(): boolean
    isCharacterDevice(): boolean
    isSymbolicLink(): boolean
    isFIFO(): boolean
    isSocket(): boolean
    name: string
}

interface INodeStats {
    isFile(): boolean
    isDirectory(): boolean
    isBlockDevice(): boolean
    isCharacterDevice(): boolean
    isSymbolicLink(): boolean
    isFIFO(): boolean
    isSocket(): boolean
    dev: number
    ino: number
    mode: number
    nlink: number
    uid: number
    gid: number
    rdev: number
    size: number
    blksize: number
    blocks: number
    atimeMs: number
    mtimeMs: number
    ctimeMs: number
    birthtimeMs: number
    atime: Date
    mtime: Date
    ctime: Date
    birthtime: Date
}

type WriteFileOptions = { encoding?: string | null; mode?: number | string; flag?: string } | string | null

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
export async function readdir(path: any): Promise<string> {
    return asyncReaddir(path)
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
export async function readdirWithType(path: any): Promise<INodeDirent[]> {
    return asyncReaddir(path, { withFileTypes: true })
}

/**
 * 写一个文件
 * @param path
 * @param data
 * @param [option] { encoding?: string | null; mode?: number | string; flag?: string }
 */
export async function writeFile(path: any, data: any, option: WriteFileOptions) {
    return asyncWriteFile(path, data, option)
}

/**
 * 读一个文件
 * @param path
 * @param data
 * @param [option] { encoding?: string | null; mode?: number | string; flag?: string }
 */
export async function readFile(
    path: any,
    data: any,
    option?: { encoding?: null; flag?: string }
): Promise<{ encoding?: null; flag?: string }> {
    return asyncWriteFile(path, data, option)
}

/**
 * 读一个文件的属性
 * @param path
 * @return {Promise<INodeStats>}
 */
export async function stat(path: string): Promise<INodeStats> {
    return asyncStat()
}

/**
 * 目标文件是否存在
 * @param path
 */
export async function isExists(path: string) {
    return new Promise((resolve, reject) => {
        fs.access(path, fs.constants.F_OK, (err: any) => {
            if (err) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })
}
