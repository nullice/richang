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


var Rect = {}


/**
 * 坐标转换
 * 把 {right, left, top, bottom} 转化为 {x, y , w, h}
 * @param boundsInfo
 * @returns {{x: null, y: null, w: null, h: null}}
 */
Rect.rltb2xywh = function (boundsInfo) {
    var newBoundsInfo = {x: null, y: null, w: null, h: null};
    newBoundsInfo.x = boundsInfo.left;
    newBoundsInfo.y = boundsInfo.top;
    newBoundsInfo.h = boundsInfo.bottom - boundsInfo.top;
    newBoundsInfo.w = boundsInfo.right - boundsInfo.left;
    return newBoundsInfo;
}


/**
 * 坐标转换
 * 把 {x, y , w, h} 转化为 {right, left, top, bottom}
 * @param boundsInfo
 * @returns {{left: null, right: null, top: null, bottom: null}}
 */
Rect.xywh2rltb = function (boundsInfo) {
    var newBoundsInfo = {left: null, right: null, top: null, bottom: null};
    newBoundsInfo.left = boundsInfo.x;
    newBoundsInfo.top = boundsInfo.y;
    newBoundsInfo.right = boundsInfo.x + boundsInfo.w;
    newBoundsInfo.bottom = boundsInfo.y + boundsInfo.h;
    return newBoundsInfo;
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

    var range = {left: 0, right: 0, top: 0, bottom: 0};
    for (var i = 0; i < xywhs.length; i++)
    {
        var rltb = Rect.xywh2rltb(xywhs[i])
        if (rltb.left < range.left) range.left = rltb.left
        if (rltb.top < range.top) range.top = rltb.top
        if (rltb.right > range.right) range.right = rltb.right
        if (rltb.bottom > range.bottom) range.bottom = rltb.bottom
    }

    return Rect.rltb2xywh(range)
}




export default Rect


















