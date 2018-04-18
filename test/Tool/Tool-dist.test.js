// Created by nullice on 2018/03/16 - 13:50

import {Tool} from "../../dist/RichangEs"

// var Tool = rc.Tool

test("Tool.genUUID_v4", () =>
{
    expect(Tool.genUUID_v4().length).toBeGreaterThanOrEqual(16)
})

test("Tool.genUUID_v5", () =>
{
    expect(Tool.genUUID_v5("Gasoft_Mobiusbug.exe", "BGLL")).toBe("8bf20468-d164-5993-9a19-8378bc0ca84a")
})

test("Tool.genSHA1", () =>
{
    expect(Tool.genSHA1("nullice")).toBe("51918a176c8e2b0af211a94c5478c58a54f239cd")
})

test("Tool.formatUUID", () =>
{
    expect(Tool.formatUUID("e9411a6f1a2e22dd2244b78ee491c616")).toBe("e9411a6f-1a2e-22dd-2244-b78ee491c616")
})

test("Tool.checkUUID(v5)", () =>
{
    expect(Tool.checkUUID(Tool.genUUID_v5("Gasoft_Mobiusbug.exe", "BGLL"))).toBe(5)
})

test("Tool.checkUUID(v4)", () =>
{
    expect(Tool.checkUUID(Tool.genUUID_v4())).toBe(4)
})

test("Tool.roll(100,125)", () =>
{

    for (var i = 0; i < 100; i++)
    {
        var i = Tool.roll(100, 125)
        expect(i).toBeGreaterThanOrEqual(100)
        expect(i).toBeLessThanOrEqual(125)
    }
})

test("Tool.rollString(100)", () =>
{

    for (var i = 0; i < 3; i++)
    {
        var i = Tool.rollString(100).length
        expect(i).toBe(100)
    }
})

test("Tool.rollString(100, \"錒都到都点\")", () =>
{

    for (var i = 0; i < 3; i++)
    {
        var s = Tool.rollString(100, "錒都到都点")
        expect(s.length).toBe(100)
        expect("錒都到都点").toContain(s[4])
    }
})
