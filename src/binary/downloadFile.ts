import { clickElement } from "../dom/dom"

/**
 * 调用一个浏览器下载一个 File 或者 Blob
 * @param file
 * @param name
 */
export function downloadFile(file: File | Blob, name?: string) {
    const URL = window.URL || <URL>(<any>window).webkitURL

    let a = document.createElement("a")
    let fileName: string = name ? name : (<File>file).name
    a.download = fileName
    a.rel = "noopener"
    a.href = URL.createObjectURL(file)

    // 40s 后回收 ObjectURL
    setTimeout(() => {
        URL.revokeObjectURL(a.href)
        ;(a as any) = null
    }, 40000)

    setTimeout(() => {
        clickElement(a)
    }, 0)
}
