/**
 * 从 url 载入一张图片，返回 ImageData
 * @param url
 * @returns {Promise<ImageData>}
 */
import { async } from "../index"
import { blobToArrayBuffer, isBlob } from "../binary/binary"

/**
 * 根据 URL 获取一张图片，返回其 ImageData
 * @param url
 * @return {Promise<ImageData>}
 */
export async function fetchImageAsImageData(url: string) {
    const img = await fetchImage(url)
    const canvas = document.createElement("canvas")
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext("2d")
    if (ctx === null) throw new Error("[fetchImage] canvas.getContext;")
    ctx.drawImage(img, 0, 0)
    let data = ctx.getImageData(0, 0, img.width, img.height)
    return data
}

/**
 * 根据 URL 获取一张图片，返回 Image（HTMLImageElement）对象
 * @param url
 */
export async function fetchImage(url: string): Promise<HTMLImageElement> {
    const img = new Image()
    img.decoding = "async"
    img.src = url
    const loaded = new Promise((resolve, reject) => {
        img.onload = () => resolve()
        img.onerror = () => reject(Error("[fetchImage] Image load."))
    })
    // 保证图片解码完成
    if (img.decode) {
        // 来自 squoosh 的兼容性处理
        // Nice off-thread way supported in Safari/Chrome.
        // Safari throws on decode if the source is SVG.
        // https://bugs.webkit.org/show_bug.cgi?id=188347
        await img.decode().catch(() => null)
    }
    await loaded
    return img
}

/**
 * 把 ImageData 编码成二进制数据（Blob）
 *  ImageData 是包含图片像素数据数组和宽高信息的对象
 * @param data ImageData
 * @param type 图片格式如 image/gif, image/png, image/jpeg, image/webp
 * @param quality 质量参数 0~1（toDataURL 为 jpeg, webp 用的的质量参数）
 * @return {Promise<Blob>}
 */
export async function imageEncode(data: ImageData, type = "image/png", quality?: number) {
    const canvas = document.createElement("canvas")
    canvas.width = data.width
    canvas.height = data.height
    const ctx = canvas.getContext("2d")
    if (!ctx) throw Error("[imageEncode] canvas init failed")
    ctx.putImageData(data, 0, 0)

    let blob: Blob | null

    if ("toBlob" in canvas) {
        blob = await new Promise<Blob | null>(re => canvas.toBlob(re, type, quality))
    } else {
        // Windows Edge
        const dataUrl = (canvas as HTMLCanvasElement).toDataURL(type, quality)
        const result = /data:([^;]+);base64,(.*)$/.exec(dataUrl)

        if (!result) throw Error("Data URL reading failed")

        const outputType = result[1]
        const binaryStr = atob(result[2])
        const data = new Uint8Array(binaryStr.length)

        for (let i = 0; i < data.length; i += 1) {
            data[i] = binaryStr.charCodeAt(i)
        }

        blob = new Blob([data], { type: outputType })
    }

    if (!blob) throw Error("Encoding failed")
    return blob
}

/**
 * 图片解码把一个浏览器支持格式的图片 Blob 解码成 ImageData
 * @param imageBlob
 * @return {Promise<ImageData>}
 */
export async function imageDecode(imageBlob: Blob) {
    let imageDate: ImageData
    let canvas = await toCanvas(imageBlob)
    let ctx = canvas.getContext("2d")
    if (ctx === null) throw new Error("[fetchImage] canvas.getContext;")
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    return imageData
}

/**
 * 检查一个图片 Blob 的格式，返回 MimeType
 * @param blob
 * @return {Promise<any>}
 */
export async function checkImageType(blob: Blob) {
    const magicNumberToMimeType = new Map<RegExp, string>([
        [/^%PDF-/, "application/pdf"],
        [/^GIF87a/, "image/gif"],
        [/^GIF89a/, "image/gif"],
        [/^\x89PNG\x0D\x0A\x1A\x0A/, "image/png"],
        [/^\xFF\xD8\xFF/, "image/jpeg"],
        [/^BM/, "image/bmp"],
        [/^I I/, "image/tiff"],
        [/^II*/, "image/tiff"],
        [/^MM\x00*/, "image/tiff"],
        [/^RIFF....WEBPVP8[LX ]/, "image/webp"]
    ])

    const head = await blobToArrayBuffer(blob.slice(0, 16))
    const firstChunkString = Array.from(new Uint8Array(head))
        .map(v => String.fromCodePoint(v))
        .join("")

    for (const [detector, mimeType] of magicNumberToMimeType) {
        if (detector.test(firstChunkString)) {
            return mimeType
        }
    }
    return ""
}

/**
 * 把图片的 Blob 转换为 Image 对象
 * @param blob
 * @return {Promise<HTMLImageElement>}
 */
export async function blobToImg(blob: Blob): Promise<HTMLImageElement> {
    const URL = window.URL || <URL>(<any>window).webkitURL
    const url = URL.createObjectURL(blob)
    try {
        return await fetchImage(url)
    } finally {
        URL.revokeObjectURL(url)
    }
}

/**
 * 把任何可绘制内容放到一个 canvas 里
 * @return {Promise<HTMLCanvasElement>}
 * @param canvas 指定 canvas ，默认会创建一个新 canvas
 * @param inDrawable
 */
export async function toCanvas(
    inDrawable: string | Blob | HTMLImageElement | ImageData | ImageBitmap,
    canvas?: HTMLCanvasElement
) {
    if (!canvas) canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (ctx === null) throw new Error("[fetchImage] canvas.getContext;")

    let drawable: HTMLImageElement | ImageData | ImageBitmap

    // 如果字符串就当作链接处理，转化为 Image
    if (typeof inDrawable === "string") {
        drawable = await fetchImage(inDrawable)
    }
    // 如果 Blob 就转化为 Image 处理
    else if (isBlob(inDrawable)) {
        drawable = await blobToImg(<Blob>inDrawable)
    } else {
        drawable = <HTMLImageElement | ImageData | ImageBitmap>inDrawable
    }
    // 设置 canvas 高度
    canvas.width = drawable.width
    canvas.height = drawable.height

    if (isImageData(drawable)) {
        /**
         *
         * @type {void}
         */
        ctx.putImageData(<ImageData>drawable, 0, 0)
    } else {
        ctx.drawImage(<HTMLImageElement | ImageBitmap>drawable, 0, 0)
    }
    return canvas
}

/**
 * 判断一个对象是否可当作 ImageData 用
 * @param object
 * @return {Promise<boolean>}
 */
export function isImageData(object: any) {
    return object.data && object.height !== undefined && object.height !== undefined
}
