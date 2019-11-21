//@ts-ignore
import portscanner from "portscanner"

/**
 * 检查一个端口是否可用
 * @param port
 * @returns {Promise<boolean>}
 */
export function checkPortFree(port: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        portscanner.checkPortStatus(port, "127.0.0.1", function(error: any, status: any) {
            if (error) reject(error)
            resolve(status !== "open")
        })
    })
}

/**
 * 注册一个端口占用的启动错误的捕捉器
 * 当 node 应用因为端口占用而启动失败时，给出提示并且找到是那个进程占用了端口
 */
export function signPortUsedErrorCatch() {
    // 启动错误处理
    process.on("uncaughtException", function(err: any) {
        console.warn("😭 [Startup Fiald]")
        if (err.errno === "EADDRINUSE") {
            if (err.syscall === "listen" && err.port) {
                console.warn("[occupied] system port used:", err.port)
                const find = require("find-process")
                find("port", err.port).then(
                    function(list: any) {
                        console.warn("found port used info ( you should kill that ): ")
                        console.warn(JSON.stringify(list, null, 4))
                    },
                    function(err: any) {
                        console.warn(err.stack || err)
                    }
                )
            } else {
                console.error(err)
                process.exit(1)
            }
        } else {
            console.error(err)
            process.exit(1)
        }
    })
}
