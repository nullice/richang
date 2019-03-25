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
//              · crypto ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

import uuidv4 from "uuid/v4"
import uuidv5 from "uuid/v5"
import isUUID from "is-uuid"
// @ts-ignore
import sha1 from "uuid/lib/sha1-browser.js"

/**
 * 生成一个随机的 UUID
 *
 * genUUID_v4() => 'f8061fba-842b-4cc5-9872-9348e2e06916'
 * @return {string}
 */
export function genUUID_v4() {
    return uuidv4()
}

/**
 * 根据一个名字和命名空间生成一个 UUID，这个 UUID 与名称+命名空间有一一对应，不随机
 * （与标准不同，这里命名空间可不用 UUID 而是任何字符串，我们会用默认 UUID 和给命名空间生成一个 UUID）
 * @param name
 * @param namespace UUID 或者任意字符串（）
 * @return {string}
 */
export function genUUID_v5(name: string, namespace = "f8061fba-842b-4cc5-9872-9348e2e06916") {
    // 如果命名空间不是 UUID ，给定默认 UUID 生成一个命名空间的 UUID
    if (namespace.length !== 36) namespace = uuidv5(namespace, "f8061fba-842b-4cc5-9872-9348e2e06916")
    return uuidv5(name, namespace)
}

/**
 * 用 sha1 生成一个字符串
 *
 * @example
 * genSHA1("nullice") \\ => 51918a176c8e2b0af211a94c5478c58a54f239cd
 * @param str
 */
export function genSHA1(str: string) {
    function byteArraytoHexString(byteArray: string) {
        return Array.from(byteArray, function(byte: string) {
            return ("0" + (+byte & 0xff).toString(16)).slice(-2)
        }).join("")
    }

    return byteArraytoHexString(sha1(str))
}

/**
 * 把36位字符串转换成带横杠 UUID 的格式
 *
 * formatUUID("e9411a6f1a2e22dd2244b78ee491c616") => "e9411a6f1a2e22dd2244b78ee491c616"
 * @param {string}  str
 * @returns {string}
 */
export function formatUUID(str: string) {
    str = str.toLowerCase()
    let newStr = ""
    newStr += str.slice(0, 8) + "-"
    newStr += str.slice(8, 12) + "-"
    newStr += str.slice(12, 16) + "-"
    newStr += str.slice(16, 20) + "-"
    newStr += str.slice(20, 36)
    return newStr
}

/**
 * 检查一个字符串是 UUID 的版本或者是否是 UUID，返回 UUID 的版本，如果为 0 则说明不是 UUID
 * @param uuid
 * @return {number}
 */
export function checkUUID(uuid: string) {
    const funcs = [isUUID.v4, isUUID.v5, isUUID.v3, isUUID.v2, isUUID.v1]
    const index = [4, 5, 3, 2, 1]
    for (let i = 0; i < funcs.length; i++) {
        if (funcs[i](uuid)) {
            return index[i]
        }
    }
    return 0
}

/**
 * 生成一个随机整数
 * @param {number} max - 最大值
 * @param {number} min - 最小值
 * @return {number}
 */
export function roll(max = 100, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 生成一个随机字符串
 * @param {number} length - 随机字符串长度
 * @param {string} [dict] - 随机字符字典，默认为 a—Z0-9
 * @returns {string}
 */
export function rollString(
    length: number,
    dict: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) {
    let text = ""
    const possible = dict
    for (let i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text
}
