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


