import rc from "../../src/node"

describe("DirManager", () => {
    let dirManage = new rc.nodeFile.DirManager(__dirname + "/DirTestFiles")
    console.log(dirManage.mianDir)
    test("全部子目录", async () => {
        let files = await dirManage.glob("**")
        expect(files.length).toBe(9)
    })

    test("当前目录", async () => {
        let files = await dirManage.glob("*")
        expect(files.length).toBe(5)
    })

    test("仅返回文件夹", async () => {
        let files = await dirManage.glob("./**","dir")
        expect(files.length).toBe(3)
    })

    test("仅返回文件", async () => {
        let files = await dirManage.glob("**","file")
        expect(files.length).toBe(6)
    })
})
