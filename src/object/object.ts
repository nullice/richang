/*
 * Created by bgllj on 2016/10/26.
 */

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
//             · object ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

import lodash_merge from "lodash/merge"

import { objectEach as _objectEach } from "./lib/objectEach"
import { objectFilter as _objectFilter } from "./lib/objectFilter"
import { objectRemove as _objectRemove } from "./lib/objectFilter"
import { objectMask as _objectMask } from "./lib/objectFilter"
import { objectGen as _objectGen } from "./lib/objectGen"
import _cloneDeep from "lodash/cloneDeep"
import _isEqual from "lodash/isEqual"
import _objectHash from "object-hash"

export const objectFilter = _objectFilter
export const objectEach = _objectEach
export const objectRemove = _objectRemove
export const objectMask = _objectMask
export const objectGen = _objectGen
export const isEqual = _isEqual

/**
 * 获取一个对象的 hash 值
 * @param object
 */
export function getObjectHash(object: any) {
    return _objectHash(object, <any>{ respectType: false })
}

/**
 * 对象是否为空
 * @returns {boolean}
 * @param object
 */
export function isEmptyObject(object: object) {
    for (let key in object) {
        return false
    }
    return true
}

export function se() {}

/**
 * 判断一个值是否是对象（可遍历键值）
 * 函数是对象，null 不是对象
 * @example
 * isObject(null) // false
 * isObject(()=>{})) // true
 * @param value
 * @return {boolean}
 */
export function isObject(value: object) {
    let type = typeof value
    return value !== null && (type === "object" || type === "function")
}

/**
 * 判断一个值是对象，并且不是函数
 * @param value
 */
export function isObjectWithoutFunction(value: object) {
    let type = typeof value
    return value !== null && type === "object"
}

/**
 * 数组化键名路径
 */
export type KeyPath = string[]

/**
 * 规范化键名路径
 *
 * @example
 * normalizeKeyPath("foo.bar") // => ["foo","bar"]
 * normalizeKeyPath("foo/bar") // => ["foo","bar"]
 * normalizeKeyPath(["foo","bar"]) // => ["foo","bar"]
 *
 * @param inPath
 * @return {string[]}
 */
export function normalizeKeyPath(inPath: string | string[]): KeyPath {
    if (typeof inPath === "string") {
        return inPath.split(/[\/\.]/g)
    } else if (Array.isArray(inPath)) {
        return inPath
    } else {
        return []
    }
}

/**
 * 比较 2 个键名路径是否相等。可以是数组形式的 keyPath 也可以是路径字符串
 * @param keyPathA
 * @param keyPathB
 * @return {boolean}
 */
export function keyPathEqual(keyPathA: string | string[], keyPathB: string | string[]) {
    let aIsArray = Array.isArray(keyPathA)
    let bIsArray = Array.isArray(keyPathB)
    if (aIsArray && bIsArray) {
        return isEqual(keyPathA, keyPathB)
    } else if (!aIsArray && !bIsArray) {
        return aIsArray === bIsArray
    } else {
        return isEqual(normalizeKeyPath(keyPathA), normalizeKeyPath(keyPathB))
    }
}

/**
 * 根据键名路径获取对象值
 *
 * @param object 对象
 * @param path 键名路径
 * @return {any}
 */
export function getObjectValueByPath(object: object, path: string | string[]) {
    let keyPath = normalizeKeyPath(path)
    let cursor: any = object

    keyPath.every((key, index) => {
        cursor = cursor[key]
        if (cursor == undefined) return false
        return true
    })
    return cursor
}

/**
 * 根据键名路径给对象赋值，成功返回 true
 * 当路径在目标对象中不存在时会自动创建对象，可以通过给 disableAutoMakeObject 传 true 来禁止这个机制
 *
 * @param object 对象
 * @param path 键名路径
 * @param value 值
 * @param overwrite 覆盖，当路径不存在或路径中存在不可赋值项时自动创建对象
 *
 * @example
 * let obj = {a:{b:1}}
 * setObjectValueByPath(a,"a.b",3) // obj => {a:{b:3}}
 * setObjectValueByPath(a,"a.b.d.e",5) // obj => {a:{b:{c:{d:5}}}}
 * @return {any}
 */
export function setObjectValueByPath(object: object, path: string | string[], value: any, overwrite = false) {
    let keyPath = normalizeKeyPath(path)
    let cursor: any = object

    // keyPath 为空数组直接返回 false
    if (keyPath.length <= 0) return false

    for (let i = 0, len = keyPath.length; i < len; i++) {
        let key = keyPath[i]

        // 最后一个key
        if (i == len - 1) {
            cursor[key] = value
            return true
        } else {
            // 路径不存在的情况
            if (!isObject(cursor[key])) {
                if (overwrite) {
                    cursor[key] = {}
                } else {
                    return false
                }
            }
            cursor = cursor[key]
        }
    }

    return false
}

/**
 * 根据键名路径删除对象
 * @param object
 * @param path
 */
export function deleteObjectValueByPath(object: object, path: string | string[]) {
    let keyPath = normalizeKeyPath(path)
    let lastKey = keyPath.pop()

    let lastObject = getObjectValueByPath(object, keyPath)
    if (isObject(lastObject)) {
        return delete lastObject[<any>lastKey]
    }
    return false
}

/**
 * 深度克隆一个对象
 * @param object
 */
export let cloneDeep: (obejct: any) => any = _cloneDeep

/**
 * @example
 * // 普通规则
 * {
 *     name:"user_name"
 *     id:"info.id"
 * }
 *
 * // 规则处理字符串的键名路径外还可以提供处理函数： [路径, 处理函数, 逆向处理函数]
 * {
 *     updateDate:["update_date", (x)=>{new Date(x)}, (x)=>{JSON.stringify(x)}]
 * }
 *
 */
export interface IMappingRule {
    [key: string]: any | [string, Function, Function] | IMappingRule
}
/**
 * 对象映射。
 * 通过定义的映射规则（mappingRule）把源对象转换成另一个新对象
 * 映射规则：定影新对象的结构，新对象中值根据映射规则中的“键名路径”从源对象获取
 * 映射规则
 *
 * @example
 * // 源对象
 * {
 *     user_name:"a",
 *     info:{
 *         id:123,
 *     }
 * }
 *
 * // 规则
 * {
 *     name:"user_name"
 *     id:"info.id"
 * }
 *
 *
 * // 新对象
 * {
 *     name:"a"
 *     id:123
 * }
 *
 * // 规则处理字符串的键名路径外还可以提供处理函数： [路径, 处理函数, 逆向处理函数]
 * {
 *     updateDate:["update_date", (x)=>{new Date(x)}, (x)=>{JSON.stringify(x)}]
 * }
 *
 * // 如果不提供的处理函数而是 undefined，产生的新对象将没有这个键
 * {
 *     updateDate:["update_date", (x)=>{new Date(x)}, undefined }]
 * }
 *
 * @param objectSource 原对象
 * @param mappingRule 映射规则
 * @param reverse 逆向映射
 * @return {any}
 */

export function mappingObject(objectSource: any, mappingRule: IMappingRule, reverse?: boolean) {
    let newObject: any = {}
    objectEach(
        mappingRule,
        (value, key, info, CONTOL) => {
            let valueIsArray = Array.isArray(value)

            if (info.end || valueIsArray) {
                // 带映射函数 [val, func, func]
                if (valueIsArray) {
                    let rawKeyPath = value[0]
                    let func = value[1]
                    let reverseFunc = value[2]

                    if (reverse) {
                        let rawValue = getObjectValueByPath(objectSource, <string[]>info.keyPath)

                        // 处理函数
                        if (reverseFunc) {
                            rawValue = reverseFunc(rawValue)
                        } else {
                            return CONTOL.continue
                        }
                        setObjectValueByPath(newObject, <string[]>rawKeyPath, rawValue, true)
                    } else {
                        let rawValue = getObjectValueByPath(objectSource, rawKeyPath)

                        // 处理函数
                        if (func) {
                            rawValue = func(rawValue)
                        } else {
                            return CONTOL.continue
                        }
                        setObjectValueByPath(newObject, <string[]>info.keyPath, rawValue, true)
                    }

                    return CONTOL.continue
                }
                // 直接映射
                else {
                    if (reverse) {
                        let rawValue = getObjectValueByPath(objectSource, <string[]>info.keyPath)
                        setObjectValueByPath(newObject, value, rawValue, true)
                    } else {
                        setObjectValueByPath(
                            newObject,
                            <string[]>info.keyPath,
                            getObjectValueByPath(objectSource, value),
                            true
                        )
                    }
                }
            }
        },
        { needKeyPath: true }
    )

    return newObject
}

/**
 * 深度合并多个对象， 相当于递归的 Object.assign()
 *
 * @param object
 * @param [sources]
 * @returns Returns `object`.
 * @example
 *
 * let users = {
 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
 * };
 *
 * let ages = {
 *   'data': [{ 'age': 36 }, { 'age': 40 }]
 * };
 *
 * assignDeep(users, ages);
 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
 */
export const assignDeep = lodash_merge

/**
 * 为对象设置一个不可枚举的属性值
 * @param target
 * @param propertyKey
 * @param value
 */
export function setValueEnumerableFalse(target: any, propertyKey: string, value: any) {
    Object.defineProperty(target, propertyKey, {
        enumerable: false,
        writable: true,
        value: value
    })
}
