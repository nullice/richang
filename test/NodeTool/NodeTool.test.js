import NodeTool from "../../src/modules/NodeTool.js"

test('NodeTool.getMD5', () => {
    expect(NodeTool.getMD5("白色的空曲奇在发热")).toBe("3b81233f69cc6dbf83899148b888f0db");
});


test('NodeTool.getSHA256', () => {
    expect(NodeTool.getSHA256("白色的空曲奇在发热")).toBe("5be124e39cb90f3144fba1a798ab3a8472c24a44c0f9efc305f76c1e34de848f");
});
