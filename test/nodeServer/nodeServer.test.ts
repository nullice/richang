import RichangNode  from "../../src/node"


describe("checkPort", () => {
    test("端口没有占用", async () => {
       let used = await RichangNode.nodeServer.checkPortFree(39221)
        expect(used).toBeTruthy()
    })
})
