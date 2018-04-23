// Created by nullice on 2018/04/23 - 12:45 

import Url from "../../src/modules/Url.js"

console.log(Url.getQuery(`https://lanhuapp.com/web/#/item/board?pid=fsdafas%E9%98%BF%E6%96%AF%E9%A1%BF%E5%8F%91%E9%A1%BA%E4%B8%B0`, true))



test("Url.getQuery() string", () =>
{
    expect(Url.getQuery(`https://lanhuapp.com/web/#/item/board?pid=fsdafas%E9%98%BF%E6%96%AF%E9%A1%BF%E5%8F%91%E9%A1%BA%E4%B8%B0`)).toBe("pid=fsdafas%E9%98%BF%E6%96%AF%E9%A1%BF%E5%8F%91%E9%A1%BA%E4%B8%B0")
    expect(Url.getQuery(`http://nullice.com?name=123`)).toBe("name=123")
    expect(Url.getQuery(`nullice.com?name=123`)).toBe("name=123")
})

test("Url.getQuery() object", () =>
{
    expect(Url.getQuery(`https://lanhuapp.com/web/#/item/board?pid=fsdafas%E9%98%BF%E6%96%AF%E9%A1%BF%E5%8F%91%E9%A1%BA%E4%B8%B0`, true)).toEqual({pid: "fsdafas阿斯顿发顺丰"})
})


test("Url.removeQuery() string", () =>
{
    expect(Url.removeQuery(`https://lanhuapp.com/web/#/item/board?pid=fsdafas%E9%98%BF%E6%96%AF%E9%A1%BF%E5%8F%91%E9%A1%BA%E4%B8%B0`, true)).toBe("https://lanhuapp.com/web/#/item/board")
    expect(Url.removeQuery(`https://lanhuapp.com/web/?pid=fsdafas%E9%98%BF%E6%96%AF%E9%A1%BF%E5%8F%91%E9%A1%BA%E4%B8%B0`, true)).toBe("https://lanhuapp.com/web/")
})




