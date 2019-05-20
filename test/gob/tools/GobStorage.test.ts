import { GobStorage } from "../../../src/gob/gob"
import { sleep } from "../../../src/async/async"
let indexedDB = require("fake-indexeddb")
;(<any>global).window = global
;(<any>global).indexedDB = indexedDB

test("GobStorage 简单读写", async () => {
    let solo = new GobStorage("solo")
    await solo.ready

    solo.data.x = 123
    expect(solo.data.x).toEqual(123)

    solo.data.str = "💊😂"
    expect(solo.data.str).toEqual("💊😂")

    solo.data.arr = [1, 2, 3]
    expect(solo.data.arr).toEqual([1, 2, 3])

    solo.data.arr.push(4)
    expect(solo.data.arr).toEqual([1, 2, 3, 4])

    solo.data.arr.splice(0, 2)
    expect(solo.data.arr).toEqual([3, 4])

    await sleep(300)
    let solo2 = new GobStorage("solo")
    await solo2.ready

    expect(solo2.data.x).toEqual(123)
    expect(solo2.data.arr).toEqual([3, 4])
})

test("GobStorage 初始值", async () => {
    let hoho = new GobStorage("hoho", {
        a: 123,
        b: 323
    })
    await hoho.ready

    expect(hoho.data.a).toEqual(123)
    expect(hoho.data.b).toEqual(323)
})



