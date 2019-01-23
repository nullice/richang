import { EventHub } from "@/event/event"

describe("EventHub 监听与解绑", () => {
    let evetnHub = new EventHub()
    let a = 0,
        b = 0,
        c = 0

    let func = (data: any) => {
        a = data
    }

    test("event on", () => {
        evetnHub.on("a", func)
        evetnHub.on("b", data => {
            b = data
        })
        evetnHub.on("cc", data => {
            c = data
        })
        evetnHub.emit("a", 1)
        expect(a).toEqual(1)
        expect(b).toEqual(0)
        expect(c).toEqual(0)

        evetnHub.emit("b", 2)
        expect(a).toEqual(1)
        expect(b).toEqual(2)
        expect(c).toEqual(0)

        evetnHub.emit("cc", 44)
        expect(a).toEqual(1)
        expect(b).toEqual(2)
        expect(c).toEqual(44)
    })
    test("event offAll", () => {
        ;(a = 0), (b = 0), (c = 0)
        evetnHub.on("a", func)
        evetnHub.emit("a", 3)
        expect(a).toEqual(3)
        // 移除
        evetnHub.offAll()

        // 移除后触发应该失效
        evetnHub.emit("a", 6)
        expect(a).toEqual(3)

        // 移除后还应能添加新监听
        evetnHub.on("a", func)
        evetnHub.emit("a", 7)
        expect(a).toEqual(7)
    })

    test("event off", () => {
        ;(a = 0), (b = 0), (c = 0)
        evetnHub.on("ax1", func)
        evetnHub.on("ccx", func)
        evetnHub.off("ax1", func)
        evetnHub.emit("ccx", 55)
        expect(a).toEqual(55)
        evetnHub.emit("ax1", 2)
        expect(a).toEqual(55)
        expect(b).toEqual(0)
        expect(c).toEqual(0)
    })

    test("event closer", () => {
        ;(a = 0), (b = 0), (c = 0)
        let closerA = evetnHub.on("a00", func)
        evetnHub.on("cc00", func)
        // @ts-ignore
        closerA()
        evetnHub.emit("cc00", 55)
        evetnHub.emit("a00", 2)
        expect(a).toEqual(55)
        expect(b).toEqual(0)
        expect(c).toEqual(0)
    })
})

describe("EventHub typepath", () => {
    let evetnHub = new EventHub()
    let logData: any = {}

    let wLog = (data: any) => {
        return (input: any) => {
            if (!logData[data]) {
                logData[data] = 1
            } else {
                logData[data]++
            }
        }
    }

    test("typepath on", () => {
        evetnHub.on("board/click", wLog("board/click"))
        evetnHub.on("board/dbclick", wLog("board/dbclick"))
        evetnHub.on("board/dbclick/right", wLog("board/dbclick/right"))
        evetnHub.on("board/drag", wLog("board/drag"))
        evetnHub.on("board", wLog("board"))
        evetnHub.on("dbclick", wLog("dbclick"))
        evetnHub.on("drag", wLog("drag"))
        evetnHub.on("click", wLog("click"))

        evetnHub.emit("board/click")
        expect(logData["board/click"]).toEqual(1)
        expect(logData["board"]).toEqual(1)
        expect(logData["click"]).toEqual(undefined)
        evetnHub.emit("board/click")
        expect(logData["board/click"]).toEqual(2)
        expect(logData["board"]).toEqual(2)
        expect(logData["click"]).toEqual(undefined)

        logData = {}
        evetnHub.emit("board/dbclick/right")
        evetnHub.emit("board/dbclick/right")
        evetnHub.emit("board/dbclick/right")
        expect(logData["board/dbclick/right"]).toEqual(3)
        expect(logData["board/dbclick"]).toEqual(3)
        expect(logData["board"]).toEqual(3)
        expect(logData["click"]).toEqual(undefined)
    })

    test("typepath off", () => {
        logData = {}
        evetnHub = new EventHub()
        let funcA = wLog("board/dbclick/right")
        evetnHub.on("board", wLog("board"))
        evetnHub.on("board/dbclick", wLog("board/dbclick"))
        evetnHub.on("board/dbclick/right", funcA)

        evetnHub.emit("board/dbclick/right")
        expect(logData["board/dbclick/right"]).toEqual(1)
        expect(logData["board/dbclick"]).toEqual(1)
        expect(logData["board"]).toEqual(1)

        logData = {}
        evetnHub.off("board/dbclick/right", funcA)
        evetnHub.emit("board/dbclick/right")
        expect(logData["board/dbclick/right"]).toEqual(undefined)
        expect(logData["board/dbclick"]).toEqual(1)
        expect(logData["board"]).toEqual(1)
    })
})
