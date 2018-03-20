// Created by nullice on 2018/03/16 - 14:06


require("babel-polyfill")



test('require (RichangNode)', () => {
    var RichangEs = require("../../dist/RichangNode.js")
    expect(typeof RichangEs.Type).toBe("object");
    expect(typeof RichangEs.Array).toBe("object");
    expect(typeof RichangEs.NodeTool).toBe("object");
    expect( RichangEs.Tool.checkUUID(RichangEs.Tool.genUUID_v4())).toBe(4);
    expect(RichangEs.Type.getType(10)).toBe("number");
});



import  RichangEs1  from  "../../dist/RichangEs"
test('import RichangEs', () => {
    expect(typeof RichangEs1.Type).toBe("object");
    expect(typeof RichangEs1.Array).toBe("object");
    expect(typeof RichangEs1.NodeTool).toBe("undefined");
    expect(RichangEs1.Type.getType(10)).toBe("number");
});



test('require (RichangEs.bundle)', () => {
    var RichangEs = require("../../dist/RichangEs.bundle")
    expect(typeof RichangEs.Type).toBe("object");
    expect(typeof RichangEs.Array).toBe("object");
    expect(typeof RichangEs.NodeTool).toBe("undefined");
    expect( RichangEs.Tool.checkUUID(RichangEs.Tool.genUUID_v4())).toBe(4);
    expect(RichangEs.Type.getType(10)).toBe("number");
});



test('require (RichangNode.bundle)', () => {
    var RichangNode = require("../../dist/RichangNode.bundle")
    expect(typeof RichangNode.Type).toBe("object");
    expect(typeof RichangNode.NodeDebug).toBe("object");
    expect(typeof RichangNode.NodeTool).toBe("object");
    expect( RichangNode.Tool.checkUUID(RichangNode.Tool.genUUID_v4())).toBe(4);
    expect(RichangNode.Type.getType(10)).toBe("number");
});




import  RichangEs0  from  "../../dist/RichangEs.bundle"
test('import RichangEs.bundle', () => {
    expect(typeof RichangEs0.Type).toBe("object");
    expect(typeof RichangEs0.Array).toBe("object");
    expect(typeof RichangEs0.NodeTool).toBe("undefined");
    expect( RichangEs0.Tool.checkUUID(RichangEs0.Tool.genUUID_v4())).toBe(4);
    expect(RichangEs0.Type.getType(10)).toBe("number");
});




import  RichangEs2  from  "../../dist/Richang"
test('import Richang', () => {
    expect(typeof RichangEs2.Type).toBe("object");
    expect(typeof RichangEs2.Array).toBe("object");
    expect(typeof RichangEs2.NodeTool).toBe("undefined");
    expect( RichangEs2.Tool.checkUUID(RichangEs2.Tool.genUUID_v4())).toBe(4);
    expect(RichangEs2.Type.getType(10)).toBe("number");
});
