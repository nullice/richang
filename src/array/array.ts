// Created by bgllj on 2016/10/10.

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
//              · array ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

import { getObjectHash, isObject } from "../object/object"

import _natsort from "./lib/natsort"

/**
 * 自然排序函数
 */
export const natsort = _natsort

/**
 *  对象比较方法
 *  - equal: boolean 内容比较
 *  - idKey: string id 比较，指定一个 key 作为对象的 id
 */
export interface IObjectEqualMethod {
    equal?: boolean
    idKey?: string
}

/**
 * △ 数组求对称差
 * a:[1,2,3]  b:[1,2,4]  a△b => [3,4]
 *
 * （可选支持对象数组）
 * @example
 * a = [{key:1}, {key:2}]
 * b = [{key:2}, {key:3}]
 * arraySymDifference(a,b,{idKey:"key"}) => [{key:1},{key:3}]
 *
 *
 * @param a
 * @param b
 * @param equalMethod 对象比较方法，默认直接比较（===）, {equal:true}：比较对象内容; {idKey:"id"}：用对象的指定 key 作为 id 比较
 * @return {any}
 */
export function arraySymDifference(
    a: any[],
    b: any[],
    equalMethod?: {
        equal?: boolean
        idKey?: string
    }
) {
    let hash = get2ArrayOverlapMap(a, b, equalMethod)
    let re: any = []

    let temp: any = { value: null, has: null }
    hash.forEach((value, key) => {
        getOverlapMapItem(value, key, temp)
        // 取出只在 a 或 b 的成员
        if (<number>temp.has < 3) {
            re.push(temp.value)
        }
    })
    return re
}

/**
 * ∪ 数组求对称差
 * a:[1,2,3]  b:[1,2,4]  a∪b => [1,2,3,4]
 * @param a
 * @param b
 * @param equalMethod
 * @return {any}
 */
export function arrayUnion(
    a: any[],
    b: any[],
    equalMethod?: {
        equal?: boolean
        idKey?: string
    }
) {
    let hash = get2ArrayOverlapMap(a, b, equalMethod)
    // console.log("hash",hash)
    let re: any = []

    let temp: any = { value: null, has: null }
    hash.forEach((value, key) => {
        getOverlapMapItem(value, key, temp)
        re.push(temp.value)
    })
    return re
}

/**
 * ∩ 数组求交集
 * a:[1,2,3]  b:[1,2,4]   a ∩ b => [1,2]
 * @param a
 * @param b
 * @param equalMethod
 * @return {any}
 */
export function arrayIntersection(
    a: any[],
    b: any[],
    equalMethod?: {
        equal?: boolean
        idKey?: string
    }
) {
    let hash = get2ArrayOverlapMap(a, b, equalMethod)
    let re: any = []

    let temp: any = { value: null, has: null }
    hash.forEach((value, key) => {
        getOverlapMapItem(value, key, temp)
        // 取出只 a b 都有的成员
        if (<number>temp.has === 3) {
            re.push(temp.value)
        }
    })
    return re
}

/**
 * - 数组集合相减
 * a:[1,2,3]  b:[1,2,4]   a - b => [3]
 * @param a
 * @param b
 * @param equalMethod
 * @return {any}
 */
export function arraySubtract(
    a: any[],
    b: any[],
    equalMethod?: {
        equal?: boolean
        idKey?: string
    }
) {
    let hash = get2ArrayOverlapMap(a, b, equalMethod)
    let re: any = []

    let temp: any = { value: null, has: null }
    hash.forEach((value, key) => {
        getOverlapMapItem(value, key, temp)
        // 取出只有 a  有的成员
        if (<number>temp.has === 1) {
            re.push(temp.value)
        }
    })
    return re
}

/**
 * 从给定 get2ArrayOverlapMap() 返回的一个 OverlapMap item  的 value, key，获得其真正的 value，与存在占位符
 * 结果写如传入对象中。
 * 存在占位符：1 是只存在数组 a，2 只在数组 b，3 数组 ab 都存在
 * @param value
 * @param key
 * @param out 用来保存结果的对象
 * @return {boolean}
 */
function getOverlapMapItem(value: any, key: any, out: { value: any; has: any }) {
    let has: number
    let raw: any
    if (typeof value === "object") {
        has = value.has
        raw = value.raw
    } else {
        has = value
        raw = key
    }
    out.value = raw
    out.has = has
    return true
}

/**
 * 把 2 个数组放进 Map 里，计算其成员是否有覆盖
 * Map Key 是 数组成员的签名（是成员值，useObjectEqual 开启后如果是值是对象，会求对象 hash 作为签名）
 * Map Value 是数组成员是否存在，1 是只存在数组 a，2 只在数组 b，3 数组 ab 都存在。useObjectEqual 开启后会是一个对象 {raw:数组成员原值，has:存在判断符}
 * @param a
 * @param b
 * @return {Map<any, any>}
 * @param equalMethod
 */
function get2ArrayOverlapMap(a: any[], b: any[], equalMethod?: IObjectEqualMethod) {
    let hash: Map<any, any> = new Map()

    const A_CODE = 1
    for (let i = 0, len = a.length; i < len; i++) {
        let item = a[i]
        let key = item
        let value: number | { raw: any; has: number } = A_CODE

        // 如果启用 useObjectEqual ，把对象根据内容生成 hash 值
        if (equalMethod && equalMethod.equal && isObject(item)) {
            value = { raw: item, has: A_CODE }
            key = getObjectHash(item)
        } else if (equalMethod && equalMethod.idKey && isObject(item)) {
            value = { raw: item, has: A_CODE }
            key = item[equalMethod.idKey]
        }
        hash.set(key, value)
    }

    const B_CODE = 2
    const AB_CODE = 3
    for (let i = 0, len = b.length; i < len; i++) {
        let item = b[i]
        let key = item
        let value: number | { raw: any; has: number } = B_CODE
        let keyIsObjectHash = equalMethod && isObject(item)
        if (keyIsObjectHash) {
            if (equalMethod && equalMethod.equal) {
                key = getObjectHash(item)
            } else if (equalMethod && equalMethod.idKey) {
                key = item[equalMethod.idKey]
            } else {
                throw new Error("equalMethod illegal options {}.")
            }
        }

        if (hash.has(key)) {
            let old = hash.get(key)
            if (typeof old === "object" && old.has !== undefined) {
                old.has = AB_CODE
            } else {
                hash.set(key, AB_CODE)
            }
        } else {
            if (keyIsObjectHash) {
                value = { raw: item, has: B_CODE }
            }
            hash.set(key, value)
        }
    }

    return hash
}
