import rc from "../../src/node"

describe("Zipper", () => {
    let zip = new rc.nodeFile.Zipper()
    let zipBuffer: Buffer
    test("压缩", async () => {
        zip.addBuffer(Buffer.from("一段内容呀"), "1.txt")
        zip.addBuffer(Buffer.from("一段内容呀2"), "haihai/2.txt")
        zip.addBuffer(Buffer.from("又是一段内容呀"), "haihai/3.txt")
        let s = Buffer.alloc(1024 * 1024 * 30, "hi")
        zip.addBuffer(s, "big/bin")
        zip.end()

        zipBuffer = await zip.getOutputBufferPromise()
        console.log(zipBuffer.byteLength)
        expect(zipBuffer.byteLength > 30000).toBeTruthy()
    })

    test("解压缩", async () => {
        let unzip = await rc.nodeFile.Unzipper.fromBuffer(zipBuffer)
        console.log(unzip)
        expect(unzip.items.length).toBe(4)
        expect(await unzip.filse["1.txt"].getText()).toBe("一段内容呀")
        expect(await unzip.filse["haihai/3.txt"].getText()).toBe("又是一段内容呀")
    })
})
