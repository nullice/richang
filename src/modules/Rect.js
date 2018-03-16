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
//        |   Richang  JSEX   |
//        +-------------------+
//               · Rect ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

/**
 * 矩形处理相关模块
 * @type {{}}
 */
var Rect = {}

/**
 * 坐标转换
 * 把 {right, left, top, bottom} 转化为 {x, y , w, h}
 * @param boundsInfo
 * @returns {{x: null, y: null, w: null, h: null}}
 */
Rect.rltb2xywh = function (boundsInfo) {
    var newBoundsInfo = {x: null, y: null, w: null, h: null}
    newBoundsInfo.x = boundsInfo.left
    newBoundsInfo.y = boundsInfo.top
    newBoundsInfo.h = boundsInfo.bottom - boundsInfo.top
    newBoundsInfo.w = boundsInfo.right - boundsInfo.left
    return newBoundsInfo
}

/**
 * 坐标转换
 * 把 {x, y , w, h} 转化为 {right, left, top, bottom}
 * @param boundsInfo
 * @returns {{left: null, right: null, top: null, bottom: null}}
 */
Rect.xywh2rltb = function (boundsInfo) {
    var newBoundsInfo = {left: null, right: null, top: null, bottom: null}
    newBoundsInfo.left = boundsInfo.x
    newBoundsInfo.top = boundsInfo.y
    newBoundsInfo.right = boundsInfo.x + boundsInfo.w
    newBoundsInfo.bottom = boundsInfo.y + boundsInfo.h
    return newBoundsInfo
}

/**
 * 给 xywh 添加内边距
 *
 * paddingXywh(xywh, 5)
 * paddingXywh(xywh, [3,4,5,10])
 *
 * @param xywh
 * @param padding
 * @returns {{x: null, y: null, w: null, h: null}}
 */
Rect.paddingXywh = function (xywh, padding) {

    var rltb = Rect.xywh2rltb(xywh)
    if (padding.length && padding.length == 4)
    {
        rltb.left -= padding[0]
        rltb.top -= padding[1]
        rltb.right += padding[2]
        rltb.bottom += padding[3]

        return Rect.rltb2xywh(rltb)
    }

    rltb.left -= padding
    rltb.top -= padding
    rltb.right += padding
    rltb.bottom += padding
    return Rect.rltb2xywh(rltb)
}

/**
 * 计算多个 xywh 矩形的边界
 *
 * getXywhsRange([xywh])
 * @param xywhs
 * @returns {{x: null, y: null, w: null, h: null}}
 */
Rect.getXywhsRange = function (xywhs) {

    var range = {left: null, right: null, top: null, bottom: null}
    for (var i = 0; i < xywhs.length; i++)
    {
        var rltb = Rect.xywh2rltb(xywhs[i])

        if (range.left == undefined) range.left = rltb.left
        if (range.top == undefined) range.top = rltb.top
        if (range.right == undefined) range.right = rltb.right
        if (range.bottom == undefined) range.bottom = rltb.bottom

        if (rltb.left < range.left) range.left = rltb.left
        if (rltb.top < range.top) range.top = rltb.top
        if (rltb.right > range.right) range.right = rltb.right
        if (rltb.bottom > range.bottom) range.bottom = rltb.bottom
    }

    return Rect.rltb2xywh(range)
}

/**
 * 整体移动多个 xywh 到某点，保留原 xywhs 相对位置。
 * 会改变 xywhs 里每个 xywh 对象的 x，y 值。
 * @param xywhs
 * @param xy
 */
Rect.moveXywhs = function (xywhs, xy) {

    var range = Rect.getXywhsRange(xywhs)
    for (var i = 0; i < xywhs.length; i++)
    {
        var xywh = xywhs[i]
        xywh.x = xy.x + xywh.x - range.x
        xywh.y = xy.y + xywh.y - range.y
    }

    return xywhs
}

/**
 * 2 个 xywh 是否有重叠
 * @param xywhA
 * @param xywhB
 * @return {boolean}
 */
Rect.xywhHasCover = function (xywhA, xywhB) {

    var rltbA = Rect.xywh2rltb(xywhA)
    var rltbB = Rect.xywh2rltb(xywhB)

    var hasOverlay = !!(
        rltbA.left <= rltbB.right &&
        rltbA.right >= rltbB.left &&
        rltbA.top <= rltbB.bottom &&
        rltbA.bottom >= rltbB.top
    )

    return hasOverlay

}

/**
 * @exports Rect
 */
export default Rect


















