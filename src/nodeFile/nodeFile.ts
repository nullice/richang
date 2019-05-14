import { PathLike } from "fs"

const fsex = require("fs-extra")
const fs = require("fs")
const os = require("os")
const util = require("util")
const readdirEnhanced = require("readdir-enhanced")
const _escapeGlob = require("glob-escape")
const _glob = require("glob")

import { TempDirManager as _TempDirManager } from "./lib/TempDirManager"
export const TempDirManager = _TempDirManager

import { DirManager as _DirManager } from "./lib/DirManager"
export const DirManager = _DirManager

const asyncReaddir = util.promisify(fs.readdir)
const asyncWriteFile = util.promisify(fs.writeFile)
const asyncReadFile = util.promisify(fs.readFile)
const asyncStat = util.promisify(fs.stat)
const asyncAccess = util.promisify(fs.access)
const asyncEnsureFile = util.promisify(fsex.ensureFile)

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
export async function writeFile(path: any, data: any, option: WriteFileOptions = { encoding: "utf-8" }) {
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
 * 确保一个文件存在
 * @param path
 * @param data
 */
export async function ensureFile(path: any, data: any): Promise<{ encoding?: null; flag?: string }> {
    return asyncEnsureFile(path)
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

/**
 * 通配符匹配目录与文件
 *
 * @example
 * glob("*") 当前目录下所有文件、文件夹
 * glob("**") 当前目录与所有子目录下所有文件、文件夹
 * glob("ab?") 单个匹配符
 * glob(["*", "!ab"]) "!" 在开头表示排除

 * @param patterns 匹配表达式
 * @param onlyType 仅返回文件，不返回目录
 * @param ignoreDot 忽略点开头点文件（手动指定依然可以获得：".*"）
 */
export async function glob(
    patterns: string,
    onlyType: "all" | "file" | "dir" = "all",
    absolute = false,
    ignoreDot = false
): Promise<string[]> {
    return new Promise((resolve, reject) => {
        try {
            // 通过给 patterns 末尾加上 "/" 来限定文件夹
            if (onlyType === "dir") {
                if (patterns[patterns.length - 1] !== "/") patterns += "/"
            }

            let re = _glob(
                patterns,
                {
                    dot: !ignoreDot,
                    nodir: onlyType === "file",
                    absolute: absolute
                },
                (er: any, files: any) => {
                    resolve(files)
                }
            )
        } catch (e) {
            reject(e)
        }
    })
}

/**
 * 通配符转译
 */
export const escapeGlob = _escapeGlob

/**
 * 递归读取目录和其子目录下的文件
 * @param path
 */
export async function readdirDeep(path: string, deep: boolean | number = true): Promise<string[]> {
    return new Promise((resolve, reject) => {
        let re = readdirEnhanced.async(path, { deep }, (err: any, files: any) => {
            if (err) reject(err)
            resolve(files)
        })
    })
}
/**
 * 递归读取目录和其子目录下的文件和其类型
 * // 读取目录下文件，返回 INodeDirent
 * let list =await readdir("./", {withFileTypes:true}) => [Dirent,Dirent]
 * list[0].isFile()
 * list[0].isDirectory()
 * list[0].isSymbolicLink()
 *
 * @param path
 * @return {Promise<INodeDirent[]>}
 */
export async function readdirDeepWithType(path: string, deep: boolean | number = true): Promise<INodeDirent[]> {
    return new Promise((resolve, reject) => {
        let re = readdirEnhanced.async(path, { deep, withFileTypes: true }, (err: any, files: any) => {
            if (err) reject(err)
            resolve(files)
        })
    })
}

export const __glob = _glob
