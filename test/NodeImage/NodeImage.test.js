import NodeImage from "../../src/modules/NodeImage.js"

var fs = require("fs")
var file = fs.readFileSync("test/NodeImage/23x23.png")

test("getPngData", async () => {

    expect((await  NodeImage.getPngData(file)).length).toBe(2116)
})

test("ARGB_BufferToPngFileBuffer", async () => {

    var data =await  NodeImage.getPngData(file)
    var fileBuffer = await  NodeImage.ARGB_BufferToPngFileBuffer(data, 4, {w: 23, h: 23})
    expect(fileBuffer.length > 1000).toBe(true)
})











