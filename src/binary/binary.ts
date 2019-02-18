import { downloadFile as _downloadFile } from "./downloadFile"
export const downloadFile = _downloadFile

import { getReadableByteSize as _getReadableByteSize } from "./helpers"
export const getReadableByteSize = _getReadableByteSize

// todo:测试待写

/**
 * 把 uint8Array 转换为 dataURL
 * 当不再使用这个 URL 时，记得使用 URL.revokeObjectURL( url ) 释放内存
 * @param unit8Array
 * @param type
 * @return {string}
 */
export function uint8ArrayToDataURL(unit8Array: Uint8Array | Uint8ClampedArray, type?: string) {
    let blob = new Blob([unit8Array], { type: type })
    return window.URL.createObjectURL(blob)
}

/**
 * 把一个文件转换为 ArrayBuffer
 * @param file
 * @return {Promise<any>}
 */
export function fileToArrayBuffer(file: File | Blob) {
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader()
        fileReader.addEventListener("load", event => {
            if (event.target && (<any>event.target).result) {
                resolve((<any>event.target).result)
            } else {
                reject(new Error("[fileToArrayBuffer] event.target.result."))
            }
        })
        fileReader.addEventListener("error", event => {
            reject(event)
        })
        fileReader.addEventListener("abort", event => {
            reject(event)
        })

        fileReader.readAsArrayBuffer(file)
    })
}

/**
 * 把一个文件转换为 DataURL
 * @param file
 * @return {Promise<any>}
 */
export function fileToDataURL(file: File | Blob) {
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader()
        fileReader.addEventListener("load", event => {
            if (event.target && (<any>event.target).result) {
                resolve((<any>event.target).result)
            } else {
                reject(new Error("[fileToArrayBuffer] event.target.result."))
            }
        })
        fileReader.addEventListener("error", event => {
            reject(event)
        })
        fileReader.addEventListener("abort", event => {
            reject(event)
        })

        fileReader.readAsDataURL(file)
    })
}

/**
 *  dataURL 转换到 Blob
 * @param dataURL
 */
export function dataURLtoBlob(dataURL: string) {
    let byteString: string
    if (dataURL.split(",")[0].indexOf("base64") >= 0) byteString = atob(dataURL.split(",")[1])
    else byteString = unescape(dataURL.split(",")[1])

    let mimeString = dataURL
        .split(",")[0]
        .split(":")[1]
        .split(";")[0]

    let ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
    }

    return new Blob([ia], {
        type: mimeString
    })
}

/**
 * dataURL 转换到 Blob 的异步方法，理论上会更快
 * @param dataURL
 */
export async function dataURLtoBlobAsync(dataURL: string) {
    return await (await fetch(dataURL)).blob()
}

/**
 * 把 ArrayBuffer 转换为 Unit8Array
 * @param arrayBuufer
 * @return {Uint8Array}
 */
export function arrayBufferToUint8Array(arrayBuufer: ArrayBuffer) {
    return new Uint8Array(arrayBuufer)
}

/**
 * 把 ArrayBuffer 转换为 Uint8ClampedArray
 * Uint8ClampedArray 与 Unit8Array 不同在于转换时小于 0 的数会转换为 0，大于 255 的数会转换为 255；而 Unit8Array 转换时是去掉符号位的结果（即补码结果）
 * @param arrayBuufer
 * @return {Uint8ClampedArray}
 */
export function arrayBufferToUint8ClampedArray(arrayBuufer: ArrayBuffer) {
    return new Uint8ClampedArray(arrayBuufer)
}

/**
 * 把一个 ArrayBuffer, Uint8Array, dataURL 转换为一个 Blob
 */
export function toBlob(data: ArrayBuffer | string, type: string = "") {
    if (typeof data === "string") {
        return dataURLtoBlob(data)
    } else {
        return new Blob([data], { type: type })
    }
}

/**
 * 异步的把一个 ArrayBuffer, Uint8Array, dataURL 转换为一个 Blob
 */
export function toBlobAsync(data: ArrayBuffer | string, type: string = "") {
    if (typeof data === "string") {
        return dataURLtoBlobAsync(data)
    } else {
        return new Blob([data], { type: type })
    }
}
