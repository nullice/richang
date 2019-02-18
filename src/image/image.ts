/**
 * 从 url 载入一张图片，返回 ImageData
 * @param url
 * @returns {Promise<ImageData>}
 */
import { async } from "../index"

export async function fetchImageAsImageData(url: string) {
    const img = await fetchImage(url)
    const canvas = document.createElement("canvas")
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext("2d")
    if (ctx === null) throw new Error("[fetchImage] canvas.getContext;")
    ctx.drawImage(img, 0, 0)
    return ctx.getImageData(0, 0, img.width, img.height)
}

/**
 * 从 url 载入一张图片，返回 Image 对象
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
    ;(canvas as any) = null
    ;(ctx as any) = null
    return blob
}

export async function imageDecode(img: string | Blob) {
    let imageDate: ImageData
    if (typeof img === "string") {
        imageDate = await fetchImageAsImageData(img)
    } else {
    }
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

interface ICropOptions {
    // 设置画布宽度
    width?: number
    // 设置画布高度
    height?: number
    // 图像来源 X
    sx?: number
    // 图像来源 Y
    sy?: number
    // 图像来源 W
    sw?: number
    // 图像来源 H
    sh?: number
    // 绘制在画布中的 X
    dx?: number
    // 绘制在画布中的 Y
    dy?: number
    // 绘制在画布中的 W
    dw?: number
    // 绘制在画布中的 H
    dh?: number
}

/**
 * 把任何可绘制内容放到一个 canvas 里
 * @return {ImageData}
 * @param drawable 可绘制内容
 * @param canvas 指定 canvas ，默认会创建一个新 canvas
 */
export async function toCanvas(
    drawable: string | Blob | HTMLImageElement | ImageData | ImageBitmap,
    canvas?: HTMLCanvasElement,
    cropOptions?: ICropOptions
) {
    if (!canvas) canvas = document.createElement("canvas")

    // 如果字符串就当作链接处理
    if (typeof drawable === "string") {
        drawable = await fetchImage(drawable)
    }

    // const {
    //     width = drawable.width,
    //     height = drawable.height,
    //     sx = 0,
    //     sy = 0,
    //     sw = drawable.width,
    //     sh = drawable.height,
    // } = opts;

    let canDraw = false
    if (canDraw) {
    }

    canvas.width = width
    canvas.height = height
    // Draw image onto canvas
    const ctx = canvas.getContext("2d")
    if (!ctx) throw new Error("Could not create canvas context")
    ctx.drawImage(drawable, sx, sy, sw, sh, 0, 0, width, height)
    return ctx.getImageData(0, 0, width, height)
}

/**
 * 判断一个对象是否可当作 ImageData 用
 * @param object
 * @return {Promise<boolean>}
 */
export function isImageData(object: any) {
    return object.data && object.height !== undefined && object.height !== undefined
}
