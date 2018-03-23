
import NodeFile from "../../src/modules/NodeFile"

var fsex = require("fs-extra")



test("getTempDirManager", async () => {
    var tepmDM = NodeFile.getTempDirManager("siphonink")

    expect(fsex.pathExistsSync(tepmDM.tempDir)).toBe(true)
    expect(fsex.pathExistsSync(tepmDM.genTempFilePath())).toBe(false)
    tepmDM.destroy()
    expect(fsex.pathExistsSync(tepmDM.tempDir)).toBe(false)

})











