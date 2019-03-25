import rc from "../../src/node"

test("readdirWithType", async () => {
    let re = await rc.nodeFile.readdirWithType(__dirname)
    expect(Array.isArray(re)).toBeTruthy()
    expect(typeof re[0].isFile).toBe("function")
})

test("readdir", async () => {
    let re = await rc.nodeFile.readdir(__dirname)
    expect(Array.isArray(re)).toBeTruthy()
    expect(typeof re[0]).toBe("string")
})

test("exists", async () => {
    expect( rc.nodeFile.isExists(__filename))
})
