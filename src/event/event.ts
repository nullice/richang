//      ___                       ___           ___           ___           ___           ___
//     /\  \                     /\__\         /\  \         /\  \         /\  \         /\__\
//    /::\  \       ___         /:/  /         \:\  \       /::\  \        \:\  \       /:/ _/_
//   /:/\:\__\     /\__\       /:/  /           \:\  \     /:/\:\  \        \:\  \     /:/ /\  \
//  /:/ /:/  /    /:/__/      /:/  /  ___   ___ /::\  \   /:/ /::\  \   _____\:\  \   /:/ /::\  \
// /:/_/:/__/___ /::\  \     /:/__/  /\__\ /\  /:/\:\__\ /:/_/:/\:\__\ /::::::::\__\ /:/__\/\:\__\
// \:\/:::::/  / \/\:\  \__  \:\  \ /:/  / \:\/:/  \/__/ \:\/:/  \/__/ \:\~~\~~\/__/ \:\  \ /:/  /
//  \::/~~/~~~~   ~~\:\/\__\  \:\  /:/  /   \::/__/       \::/__/       \:\  \        \:\  /:/  /
//   \:\~~\          \::/  /   \:\/:/  /     \:\  \        \:\  \        \:\  \        \:\/:/  /
//    \:\__\         /:/  /     \::/  /       \:\__\        \:\__\        \:\__\        \::/  /
//     \/__/         \/__/       \/__/         \/__/         \/__/         \/__/         \/__/
//
//
//                日常
//        +-------------------+
//        |      Richang      |
//        +-------------------+
//              · event ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT



import EventEmitter from "event-emitter"

/**
 * 监听关闭函数
 */
type listenCloser = () => void

/**
 * 事件总线
 * 一个事件注册\监听管理器，提供 `on`、`off`、`emit` 等基本的事件模式必要的功能
 * 与一般事件模式工具的主要区别：
 * - 事件数据强制使用一个参数传递而不是任意数量参数（`emit('event', data)`），鼓励使用对象传递数据。
 * - 除了使用 `off` 来结束监听，每一次 `on` 时还会返回一个监听关闭函数，执行它会关闭这个监听。
 *
 * 注意：重复监听需要多次取消监听
 *
 * @example
 * ```
 *
 * let eventHub = new EventHub()
 * // 注册监听
 * let closer = eventHub.on("error", (e)=>{console.log(e)})
 * eventHub.emit("error", {errName:"oh!"})
 * // 关闭监听
 * closer()
 * ```
 */
export class EventHub {
    eventEmitter!: EventEmitter.Emitter
    constructor() {
        this.eventEmitter = EventEmitter({})
    }

    /**
     * 监听一个事件。
     * 会返回一个监听关闭函数，执行它会结束这个监听。
     *
     * @param typePath 事件类型，支持路径
     * @param listener 监听器
     * @param needlessCloser 不需要返回监听关闭函数
     * @return {listenCloser}
     */
    on(typePath: string, listener: (eventData: any, typePath?: string) => void, needlessCloser: boolean = false) {
        this.eventEmitter.on(typePath, listener)

        if (!needlessCloser) {
            const offFunction: listenCloser = () => {
                this.eventEmitter.off(typePath, listener)
            }
            return offFunction
        }
    }

    /**
     * 取消监听一个事件
     * @param typePath 事件类型，支持路径
     * @param listener 监听器
     * @constructor
     */
    off(typePath: string, listener: (eventData: any) => void) {
        this.eventEmitter.off(typePath, listener)
    }

    /**
     * 清空全部监听器
     */
    offAll() {
        if (Object.prototype.hasOwnProperty.call(this.eventEmitter, "__ee__")) {
            // @ts-ignore
            delete this.eventEmitter.__ee__
        }
    }

    /**
     * 触发监听
     * @param typePath
     * @param eventData
     */
    emit(typePath: string, eventData?: any) {
        let emitArray = []
        if (typePath && typePath.length && typePath.search("/")) {
            let pathArray = typePath.split("/")
            let pathT = ""
            for (let i = 0; i < pathArray.length; i++) {
                pathT = pathT + (i > 0 ? "/" : "") + pathArray[i]
                emitArray.push(pathT)
            }
        } else {
            emitArray.push(typePath)
        }

        for (let i = 0; i < emitArray.length; i++) {
            this.eventEmitter.emit(emitArray[i], eventData, typePath)
        }
    }
}
