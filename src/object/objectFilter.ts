import { IObjectEachOptions, objectEach } from "./objectEach"
import { cloneDeep, getObjectValueByPath, isObject, keyPathEqual, setObjectValueByPath } from "./object"

/**
 * 过滤一个对象，提供过滤函数遍历对象每一个属性（会递归子对象），过滤函数返回真属性则保留。
 * 可以是变异原对象的也可以返回新对象
 * @param object
 * @param filterFunc 过滤函数，如果返回真，遍历的值将被保留否则被抛弃
 * @param mutation 是否修改对象本身。默认为否会返回新对象
 * @param eachOptions
 */
export function objectFilter(
    object: any,
    filterFunc: (
        value: any,
        key: string,
        info: {
            // 父级对象
            parent: any
            // 遍历深度
            deep: number
            // 是否是遍历的末端（没有子节点了）
            end: boolean
            // keyPath
            keyPath?: string[]
        }
    ) => boolean,
    mutation = false,
    eachOptions: IObjectEachOptions = {
        checkCycle: false, // 默认不检查循环依赖
        depthFirst: false, // 默认广度优先遍历
        needKeyPath: false, // 默认不需要 KeyPath
        childrenKey: undefined // 默认不指定子树 key ，会遍历对象每一个 key
    }
) {
    let newObject: any
    if (!mutation) {
        newObject = {}
        eachOptions = Object.assign({}, eachOptions, { needKeyPath: true })
    }
    objectEach(
        object,
        (value, key, info, CONTOL) => {
            let re = filterFunc(value, key, info)
            // console.log("filterFunc", re, { value, key, info })
            // 变异的
            if (mutation) {
                if (!re) {
                    delete info.parent[key]
                    return CONTOL.continue
                }
            }
            // 非变异的
            else {
                if (re) {
                    if (isObject(value)) {
                        setObjectValueByPath(newObject, <string[]>info.keyPath, {})
                    } else {
                        setObjectValueByPath(newObject, <string[]>info.keyPath, value)
                    }
                } else {
                    return CONTOL.continue
                }
            }
        },
        eachOptions
    )

    if (mutation) {
        return object
    } else {
        return newObject
    }
}

/**
 * 从对象中删除拥有指定值的属性
 * @param obejct 对象
 * @param value 指定的值（会进行 === 比较）
 * @param mutation  是否修改对象本身。默认为否会返回新对象
 */
export function objectRemove(obejct: any, value: any, mutation = false) {
    return objectFilter(obejct, v => !(value === v), mutation, {
        checkCycle: true
    })
}

/**
 * 对象蒙版，把一个对象根据蒙版对象裁剪属性。源对象会变成和蒙版对象一样的结构。
 *
 *@example
 *
 * let obj ={a:5, b:5, c:{c1: 4, c2:4}}
 * let mask = {a:1, c:{c1:1}}
 * objectMask(obj, mask) // =>  {a:5, c:{c1:4}}
 *
 *
 * @param obejct 源对象
 * @param maskObject 蒙版对象
 * @param mutation 是否修改对象本身。默认为否会返回新对象
 * @return {any}
 */
export function objectMask(obejct: any, maskObject: any, mutation = false) {
    if (mutation) {
        return objectFilter(
            obejct,
            (v, key, info) => {
                let maskHas = getObjectValueByPath(maskObject, <string[]>info.keyPath)
                // console.log(">", info.keyPath, maskHas)
                return isObject(v) || maskHas !== undefined
            },
            true,
            {
                needKeyPath: true,
                checkCycle: true
            }
        )
    } else {
        let newOb = cloneDeep(maskObject)
        objectEach(
            newOb,
            (value, key, info, CONTOL) => {
                if (info.end) {
                    info.parent[key] = getObjectValueByPath(obejct, <string[]>info.keyPath)
                }
            },
            {
                needKeyPath: true,
                checkCycle: true
            }
        )
        return newOb
    }
}
