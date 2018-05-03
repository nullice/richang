import Cache from "../../src/modules/Cache"

describe("Cache CacheObject", () =>
{

    test("set get", async () =>
    {
        var temp = new Cache.CacheObject(8, 4)

        for (var i = 0; i < 7; i++)
        {
            temp.set("name_" + i, i)
        }
        expect(temp.size).toBe(7)
        expect(temp.get("name_3")).toBe(3)
        expect(temp.get("name_2")).toBe(2)
        expect(temp.get("name_6")).toBe(6)
        expect(temp.get("name_7")).toBe(undefined)
        temp.set("name_8", 8)
        expect(temp.get("name_8")).toBe(8)
        expect(temp.size).toBe(8)
        temp.get("name_1")
        for (var i = 0; i < 11; i++)
        {
            temp.get("name_6")
        }

        temp.set("name_9", 9)

        expect(temp.get("name_9")).toBe(9)
        expect(temp.size).toBe(5)

        for (var i = 0; i < 222; i++)
        {
            temp.get("name_6")
        }

        await  new Promise((r) => {setTimeout(() => {r(), 0})})

        console.log(temp)
        expect(temp.keyList.length).toBe(5)
        expect(temp.get("name_9")).toBe(9)
        expect(temp.size).toBe(5)
        for (var i = 0; i < 110; i++)
        {
            temp.get("name_1")
        }
        expect(temp.keyList.length).toBe(116)
        expect(temp.get("name_1")).toBe(1)
    })
    test("淘汰", () =>
    {
        var temp = new Cache.CacheObject(3, 1)
        for (var i = 1; i < 4; i++)
        {
            temp.set("name_" + i, i)
        }

        expect(temp.get("name_1")).toBe(1)
        expect(temp.get("name_2")).toBe(2)
        expect(temp.get("name_3")).toBe(3)

        temp.set("name_" + 4, 4)
        expect(temp.get("name_1")).toBe(undefined)
        expect(temp.get("name_2")).toBe(2)
        expect(temp.get("name_3")).toBe(3)
        expect(temp.get("name_4")).toBe(4)
        expect(temp.size).toBe(3)

        temp.get("name_" +2, )
        temp.set("name_" + 5, 5)


        expect(temp.get("name_3")).toBe(undefined)
        expect(temp.get("name_4")).toBe(4)
        expect(temp.get("name_2")).toBe(2)
        expect(temp.get("name_5")).toBe(5)
        expect(temp.size).toBe(3)
    })
})
