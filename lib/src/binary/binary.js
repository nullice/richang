var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { downloadFile as _downloadFile } from "./lib/downloadFile";
export const downloadFile = _downloadFile;
import { getReadableByteSize as _getReadableByteSize } from "./lib/helpers";
export const getReadableByteSize = _getReadableByteSize;
// todo:测试待写
/**
 * 把 uint8Array 转换为 dataURL
 * 当不再使用这个 URL 时，记得使用 URL.revokeObjectURL( url ) 释放内存
 * @param unit8Array
 * @param type
 * @return {string}
 */
export function uint8ArrayToDataURL(unit8Array, type) {
    let blob = new Blob([unit8Array], { type: type });
    return window.URL.createObjectURL(blob);
}
/**
 * 把一个文件转换为 ArrayBuffer
 * @param file
 * @return {Promise<any>}
 */
export function fileToArrayBuffer(file) {
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.addEventListener("load", event => {
            if (event.target && event.target.result) {
                resolve(event.target.result);
            }
            else {
                reject(new Error("[fileToArrayBuffer] event.target.result."));
            }
        });
        fileReader.addEventListener("error", event => {
            reject(event);
        });
        fileReader.addEventListener("abort", event => {
            reject(event);
        });
        fileReader.readAsArrayBuffer(file);
    });
}
/**
 *  把一个 blob 转换为 ArrayBuffer
 * @param blob
 * @return {Promise<ArrayBuffer>}
 */
export function blobToArrayBuffer(blob) {
    return new Response(blob).arrayBuffer();
}
/**
 * 把一个 blob 转换为 text
 * @param blob
 * @return {Promise<string>}
 */
export function blobToText(blob) {
    return new Response(blob).text();
}
/**
 * 把一个文件转换为 DataURL
 * @param file
 * @return {Promise<any>}
 */
export function fileToDataURL(file) {
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.addEventListener("load", event => {
            if (event.target && event.target.result) {
                resolve(event.target.result);
            }
            else {
                reject(new Error("[fileToArrayBuffer] event.target.result."));
            }
        });
        fileReader.addEventListener("error", event => {
            reject(event);
        });
        fileReader.addEventListener("abort", event => {
            reject(event);
        });
        fileReader.readAsDataURL(file);
    });
}
/**
 *  dataURL 转换到 Blob
 * @param dataURL
 */
export function dataURLtoBlob(dataURL) {
    let byteString;
    if (dataURL.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(dataURL.split(",")[1]);
    else
        byteString = unescape(dataURL.split(",")[1]);
    let mimeString = dataURL
        .split(",")[0]
        .split(":")[1]
        .split(";")[0];
    let ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {
        type: mimeString
    });
}
/**
 * dataURL 转换到 Blob 的异步方法，理论上会更快
 * @param dataURL
 */
export function dataURLtoBlobAsync(dataURL) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (yield fetch(dataURL)).blob();
    });
}
/**
 * 把 ArrayBuffer 转换为 Unit8Array
 * @param arrayBuufer
 * @return {Uint8Array}
 */
export function arrayBufferToUint8Array(arrayBuufer) {
    return new Uint8Array(arrayBuufer);
}
/**
 * 把 ArrayBuffer 转换为 Uint8ClampedArray
 * Uint8ClampedArray 与 Unit8Array 不同在于转换时小于 0 的数会转换为 0，大于 255 的数会转换为 255；而 Unit8Array 转换时是去掉符号位的结果（即补码结果）
 * @param arrayBuufer
 * @return {Uint8ClampedArray}
 */
export function arrayBufferToUint8ClampedArray(arrayBuufer) {
    return new Uint8ClampedArray(arrayBuufer);
}
/**
 * 把一个 ArrayBuffer, Uint8Array, dataURL 转换为一个 Blob
 */
export function toBlob(data, type = "") {
    if (typeof data === "string") {
        return dataURLtoBlob(data);
    }
    else {
        return new Blob([data], { type: type });
    }
}
/**
 * 异步的把一个 ArrayBuffer, Uint8Array, dataURL 转换为一个 Blob
 */
export function toBlobAsync(data, type = "") {
    if (typeof data === "string") {
        return dataURLtoBlobAsync(data);
    }
    else {
        return new Blob([data], { type: type });
    }
}
/**
 * 判断一个对象是否是 Blob
 * @param data
 */
export function isBlob(data) {
    if (typeof Blob === "undefined") {
        return false;
    }
    return data instanceof Blob || Object.prototype.toString.call(data) === "[object Blob]";
}
//# sourceMappingURL=binary.js.map