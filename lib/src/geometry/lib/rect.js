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
/**
 * 矩形描述转换
 * 把 {right, left, top, bottom} 转化为 {x, y , w, h}
 * @param rltb
 * @return {IXywh}
 */
export function rltb2xywh(rltb) {
    let xyhw;
    xyhw.x = rltb.left;
    xyhw.y = rltb.top;
    xyhw.h = rltb.bottom - rltb.top;
    xyhw.w = rltb.right - rltb.left;
    return xyhw;
}
/**
 * 矩形描述转换
 * 把 {x, y , w, h} 转化为 {right, left, top, bottom}
 * @param xywh
 * @return {IRltb}
 */
export function xywh2rltb(xywh) {
    let rltb;
    rltb.left = xywh.x;
    rltb.top = xywh.y;
    rltb.right = xywh.x + xywh.w;
    rltb.bottom = xywh.y + xywh.h;
    return rltb;
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
export function paddingRltb(rltb, padding) {
    if (typeof padding === "number") {
        rltb.left -= padding;
        rltb.top -= padding;
        rltb.right += padding;
        rltb.bottom += padding;
    }
    else if (padding.length && padding.length == 4) {
        rltb.left -= padding[0];
        rltb.top -= padding[1];
        rltb.right += padding[2];
        rltb.bottom += padding[3];
    }
    return rltb;
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
export function paddingXywh(xywh, padding) {
    let rltb = xywh2rltb(xywh);
    let reRltb = paddingRltb(rltb, padding);
    return rltb2xywh(reRltb);
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
export function paddingRect(rect, padding) {
    if (rectIsRltb(rect)) {
        return paddingRltb(rect, padding);
    }
    else {
        return paddingXywh(rect, padding);
    }
}
/**
 * 矩形对象是否是 IXywh 的描述形式
 * @param rect
 */
export function rectIsXywh(rect) {
    return (rect.x !== undefined &&
        rect.y !== undefined &&
        rect.h !== undefined &&
        rect.w !== undefined);
}
/**
 * 矩形对象是否是 IRltb 的描述形式
 * @param rect
 */
export function rectIsRltb(rect) {
    return (rect.top !== undefined &&
        rect.bottom !== undefined &&
        rect.left !== undefined &&
        rect.right !== undefined);
}
/**
 * 计算多个 rltb 矩形的边界
 *
 * getRltbsRange([xywh])
 * @returns {IRltb}
 * @param rltbs
 */
export function getRltbsRange(rltbs) {
    let rangeRltb = { left: 0, right: 0, top: 0, bottom: 0 };
    // 空 rltbs 数组，直接返回
    if (rltbs.length <= 0)
        return rangeRltb;
    // 从第一个 rltb 初始化
    rangeRltb.left = rltbs[0].left;
    rangeRltb.top = rltbs[0].top;
    rangeRltb.right = rltbs[0].right;
    rangeRltb.bottom = rltbs[0].bottom;
    for (let i = 1, len = rltbs.length; i < len; i++) {
        let rltb = rltbs[i];
        if (rltb.left < rangeRltb.left)
            rangeRltb.left = rltb.left;
        if (rltb.top < rangeRltb.top)
            rangeRltb.top = rltb.top;
        if (rltb.right > rangeRltb.right)
            rangeRltb.right = rltb.right;
        if (rltb.bottom > rangeRltb.bottom)
            rangeRltb.bottom = rltb.bottom;
    }
    return rangeRltb;
}
/**
 * 计算多个 xywh 矩形的边界
 *
 * getXywhsRange([xywh])
 * @param xywhs
 * @returns {IRltb}
 */
export function getXywhsRange(xywhs) {
    let rltbs = xywhs.map(xywh => xywh2rltb(xywh));
    return getRltbsRange(rltbs);
}
/**
 * 整体移动多个 xywh 到某点，保留原 xywhs 相对位置。
 * 会改变 xywhs 里每个 xywh 对象的 x，y 值。
 * @param xywhs
 * @param xy
 * @return {IXywh[]}
 */
export function moveXywhs(xywhs, xy) {
    let range = getXywhsRange(xywhs);
    let offsetX = xy.x - range.left;
    let offsetY = xy.y - range.top;
    for (let i = 0, len = xywhs.length; i < len; i++) {
        let xywh = xywhs[i];
        xywh.x = xywh.x + offsetX;
        xywh.y = xywh.y + offsetY;
    }
    return xywhs;
}
/**
 * 判断 2 个 rltb 是否有重叠
 * @param rltbA
 * @param rltbB
 * @returns {boolean}
 */
export function rltbHasOverlap(rltbA, rltbB) {
    let hasOverlap = !!(rltbA.left <= rltbB.right &&
        rltbA.right >= rltbB.left &&
        rltbA.top <= rltbB.bottom &&
        rltbA.bottom >= rltbB.top);
    return hasOverlap;
}
/**
 * 判断 2 个 xywh 是否有重叠
 * @param xywhA
 * @param xywhB
 * @return {boolean}
 */
export function xywhHasOverlap(xywhA, xywhB) {
    let rltbA = xywh2rltb(xywhA);
    let rltbB = xywh2rltb(xywhB);
    return rltbHasOverlap(rltbA, rltbB);
}
//# sourceMappingURL=rect.js.map