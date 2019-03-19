import { RichangNode as rcn } from "../../src/node"


describe("checkPort", () => {
    test("端口没有占用", async () => {
       let used = await rcn.nodeServer.checkPortFree(39221)
        expect(used).toBeTruthy()
    })
})
