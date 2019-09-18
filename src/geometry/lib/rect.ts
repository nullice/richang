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
//              · rect ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

import { IXy } from "./point"

export interface IRltb {
    right: number
    left: number
    top: number
    bottom: number
}

export interface IXywh {
    x: number
    y: number
    w: number
    h: number
}

// 矩形，可以是 IXywh 或者 IRltb 形式
export type Rect = IRltb | IXywh

/**
 * 矩形描述转换
 * 把 {right, left, top, bottom} 转化为 {x, y , w, h}
 * @param rltb
 * @return {IXywh}
 */
export function rltb2xywh(rltb: IRltb) {
    let xyhw: IXywh = <IXywh>{}

    xyhw.x = rltb.left
    xyhw.y = rltb.top
    xyhw.h = rltb.bottom - rltb.top
    xyhw.w = rltb.right - rltb.left
    return xyhw
}

/**
 * 矩形描述转换
 * 把 {x, y , w, h} 转化为 {right, left, top, bottom}
 * @param xywh
 * @return {IRltb}
 */
export function xywh2rltb(xywh: IXywh) {
    let rltb: IRltb = <IRltb>{}

    rltb.left = xywh.x
    rltb.top = xywh.y
    rltb.right = xywh.x + xywh.w
    rltb.bottom = xywh.y + xywh.h
    return rltb
}

/**
 * 给 Rltb 添加内边距
 * @param rltb
 * @param padding 内边距，支持类似 CSS 的数组形式
 *
 * @example
 * paddingRltb(xywh, 5)
 * paddingRltb(xywh, [3,4,5,10])
 *
 * @return {IRltb}
 */
export function paddingRltb(rltb: IRltb, padding: number | number[]) {
    if (typeof padding === "number") {
        rltb.left -= padding
        rltb.top -= padding
        rltb.right += padding
        rltb.bottom += padding
    } else if (padding.length && padding.length == 4) {
        rltb.left -= padding[0]
        rltb.top -= padding[1]
        rltb.right += padding[2]
        rltb.bottom += padding[3]
    }
    return rltb
}

/**
 * 给 Xywh 添加内边距
 * @param xywh
 * @param padding 内边距，支持类似 CSS 的数组形式
 *
 * @example
 * paddingXywh(xywh, 5)
 * paddingXywh(xywh, [3,4,5,10])
 */
export function paddingXywh(xywh: IXywh, padding: number | number[]) {
    let rltb = xywh2rltb(xywh)
    let reRltb = paddingRltb(rltb, padding)
    return rltb2xywh(reRltb)
}

/**
 * 给 Rect 添加内边距
 * @param rect
 * @param padding 内边距，支持类似 CSS 的数组形式
 *
 * @example
 * paddingRect(xywh, 5)
 * paddingRect(rltb, [3,4,5,10])
 */
export function paddingRect(rect: Rect, padding: number | number[]) {
    if (rectIsRltb(rect)) {
        return paddingRltb(<IRltb>rect, padding)
    } else {
        return paddingXywh(<IXywh>rect, padding)
    }
}

/**
 * 矩形对象是否是 IXywh 的描述形式
 * @param rect
 */
export function rectIsXywh(rect: Rect) {
    return (
        (<IXywh>rect).x !== undefined &&
        (<IXywh>rect).y !== undefined &&
        (<IXywh>rect).h !== undefined &&
        (<IXywh>rect).w !== undefined
    )
}

/**
 * 矩形对象是否是 IRltb 的描述形式
 * @param rect
 */
export function rectIsRltb(rect: Rect) {
    return (
        (<IRltb>rect).top !== undefined &&
        (<IRltb>rect).bottom !== undefined &&
        (<IRltb>rect).left !== undefined &&
        (<IRltb>rect).right !== undefined
    )
}

/**
 * 计算多个 rltb 矩形的边界
 *
 * getRltbsRange([xywh])
 * @returns {IRltb}
 * @param rltbs
 */
export function getRltbsRange(rltbs: IRltb[]) {
    let rangeRltb: IRltb = { left: 0, right: 0, top: 0, bottom: 0 }

    // 空 rltbs 数组，直接返回
    if (rltbs.length <= 0) return rangeRltb
    // 从第一个 rltb 初始化
    rangeRltb.left = rltbs[0].left
    rangeRltb.top = rltbs[0].top
    rangeRltb.right = rltbs[0].right
    rangeRltb.bottom = rltbs[0].bottom

    for (let i = 1, len = rltbs.length; i < len; i++) {
        let rltb = rltbs[i]
        if (rltb.left < rangeRltb.left) rangeRltb.left = rltb.left
        if (rltb.top < rangeRltb.top) rangeRltb.top = rltb.top
        if (rltb.right > rangeRltb.right) rangeRltb.right = rltb.right
        if (rltb.bottom > rangeRltb.bottom) rangeRltb.bottom = rltb.bottom
    }

    return rangeRltb
}

/**
 * 计算多个 xywh 矩形的边界
 *
 * getXywhsRange([xywh])
 * @param xywhs
 * @returns {IRltb}
 */
export function getXywhsRange(xywhs: IXywh[]) {
    let rltbs = xywhs.map(xywh => xywh2rltb(xywh))
    return getRltbsRange(rltbs)
}

/**
 * 整体移动多个 xywh 到某点，保留原 xywhs 相对位置。
 * 会改变 xywhs 里每个 xywh 对象的 x，y 值。
 * @param xywhs
 * @param xy
 * @return {IXywh[]}
 */
export function moveXywhs(xywhs: IXywh[], xy: IXy) {
    let range = getXywhsRange(xywhs)
    let offsetX = xy.x - range.left
    let offsetY = xy.y - range.top

    for (let i = 0, len = xywhs.length; i < len; i++) {
        let xywh = xywhs[i]
        xywh.x = xywh.x + offsetX
        xywh.y = xywh.y + offsetY
    }

    return xywhs
}

/**
 * 判断 2 个 rltb 是否有重叠
 * @param rltbA
 * @param rltbB
 * @returns {boolean}
 */
export function rltbHasOverlap(rltbA: IRltb, rltbB: IRltb) {
    let hasOverlap = !!(
        rltbA.left <= rltbB.right &&
        rltbA.right >= rltbB.left &&
        rltbA.top <= rltbB.bottom &&
        rltbA.bottom >= rltbB.top
    )
    return hasOverlap
}

/**
 * 判断 2 个 xywh 是否有重叠
 * @param xywhA
 * @param xywhB
 * @return {boolean}
 */
export function xywhHasOverlap(xywhA: IXywh, xywhB: IXywh) {
    let rltbA = xywh2rltb(xywhA)
    let rltbB = xywh2rltb(xywhB)

    return rltbHasOverlap(rltbA, rltbB)
}

/**
 * 判断点是否在区域内
 * @param point
 * @param rltb
 */
export function rltbHasPoint(point: IXy, rltb: IRltb) {
    return point.x > rltb.left && point.x < rltb.right && (point.y > rltb.top && point.y < rltb.bottom)
}

/**
 * 判断点是否在区域内
 * @param point
 * @param rltb
 */
export function xywhHasPoint(point: IXy, xywh: IXywh) {
    let rltb = xywh2rltb(xywh)
    return rltbHasPoint(point, rltb)
}

/**
 *  rect 转换到 html rect
 * @param rect
 */
export function rect2HtmlRect(rect: Rect) {
    let htmlRect: any = {}
    if (rectIsRltb(rect)) {
        Object.assign(htmlRect, rect)
        let xywh = rltb2xywh(<IRltb>rect)
        htmlRect.height = xywh.h
        htmlRect.width = xywh.w
        htmlRect.x = xywh.w
        htmlRect.y = xywh.y
    } else {
        htmlRect = xywh2rltb(<IXywh>rect)
        htmlRect.height = (<IXywh>rect).h
        htmlRect.width = (<IXywh>rect).w
        htmlRect.x = (<IXywh>rect).w
        htmlRect.y = (<IXywh>rect).y
    }
    return htmlRect
}
