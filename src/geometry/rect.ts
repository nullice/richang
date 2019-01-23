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
    let xyhw!: IXywh

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
    let rltb!: IRltb

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
 * @returns {{x: null, y: null, w: null, h: null}}
 */
export function getXywhsRange(xywhs: IXywh[]) {
    let rltbs = xywhs.map(xywh => xywh2rltb(xywh))
    return getRltbsRange(rltbs)
}
