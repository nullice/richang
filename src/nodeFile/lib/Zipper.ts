import yazl from "yazl"
import yauzl from "yauzl"
import streamBuffers from "stream-buffers"
import fs from "fs"
import path from "path"
import { streamToBuffer } from "../nodeFile"

/**
 * ZIP 压缩包创建工具
 *
 * @example
 *
 * let zip = new Zipper
 * let ps = zip.getOutputBufferPromise()
 * zip.addBuffer("txtx😄txtx","dir/file1.txt")
 * zip.addBuffer("666","dir/文件.txt")
 * zip.end()
 * let buffer = await ps
 *
 */
export class Zipper extends yazl.ZipFile {
    private buffers: Buffer[] = []

    /**
     * 设置要输出的文件
     * @param path
     */
    setOutputFile(path: string) {
        return new Promise((resolve, reject) => {
            this.outputStream.pipe(fs.createWriteStream(path)).on("close", function() {
                resolve(true)
            })
        })
    }

    /**
     * 获取输出数据的 buffer
     */
    getOutputBufferPromise(): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            streamToBuffer(this.outputStream).then(buffer => resolve(buffer))
        })
    }

    /**
     * 添加文本
     * @param text
     * @param metadataPath
     */
    addText(text: string, metadataPath: string) {
        return this.addBuffer(Buffer.from(text), metadataPath)
    }
}

/**
 * ZIP 压缩包解压工具
 */
export class Unzipper {
    static yauzl = yauzl
    public items: UnzipableData[] = []
    public filse: { [filseName: string]: UnzipableData } = {}
    public ready: Promise<boolean>
    private zipfile!: yauzl.ZipFile
    constructor(zipBuffer: Buffer) {
        this.ready = this.init(zipBuffer)
    }
    async init(zipBuffer: Buffer): Promise<boolean> {
        return new Promise((resolve, reject) => {
            yauzl.fromBuffer(zipBuffer, { lazyEntries: true }, (err, zipfile) => {
                if (err) throw err
                if (!zipfile) throw new Error("[Unzipper] no zipfile.")

                this.zipfile = zipfile

                zipfile.readEntry()
                zipfile.on("entry", entry => {
                    if (/\/$/.test(entry.fileName)) {
                        // 文件夹
                        entry.isDir = true
                        let unzipableData = new UnzipableData(zipfile, entry)
                        this.items.push(unzipableData)
                        this.filse[unzipableData.fileName] = unzipableData
                        zipfile.readEntry()
                    } else {
                        // 文件
                        entry.isDir = false
                        let unzipableData = new UnzipableData(zipfile, entry)
                        this.filse[unzipableData.fileName] = unzipableData
                        this.items.push(unzipableData)
                        zipfile.readEntry()
                    }
                })

                zipfile.on("end", () => {
                    resolve(true)
                })
            })
        })
    }

    static async fromBuffer(zipBuffer: Buffer) {
        let unzipper = new Unzipper(zipBuffer)
        await unzipper.ready
        return unzipper
    }
}

class UnzipableData {
    /**
     * 数据长度
     */
    size: number
    /**
     * 压缩后数据长度
     */
    zipSize: number
    /**
     * 文件名
     */
    fileName: string

    /**
     * 是否是文件夹
     */
    isDir: boolean

    constructor(private zipfile: yauzl.ZipFile, public raw: any) {
        this.size = this.raw.uncompressedSize
        this.zipSize = this.raw.compressedSize
        this.fileName = this.raw.fileName
        this.isDir = this.raw.isDir
    }

    /**
     * 获取这个文件的 Buffer
     */
    async getBuffer() {
        return new Promise((resolve, reject) => {
            this.zipfile.openReadStream(this.raw, function(err, readStream) {
                if (err) throw err
                if (readStream) {
                    streamToBuffer(readStream).then(b => resolve(b))
                }
            })
        })
    }

    /**
     * 把这个文件当作文本文件，获取文本内容
     */
    async getText(): Promise<string> {
        let buffer = await this.getBuffer()
        if (buffer && buffer.toString) {
            return buffer.toString()
        } else {
            throw new Error("[Unzipper] getText:no buffer.")
        }
    }
}
