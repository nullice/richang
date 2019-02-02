/**
 * 把 Javascript 值序列化为 JSON 字符串
 * 能处理闭环对象（循环依赖）
 * 可以序列化闭环对象，其结果可以用 fromJson() 还原
 *
 * @param value 值
 * @param space 生成文本格式的空格
 * @param circularReappear 闭环对象重现，记录闭环对象的循环依赖信息，以便能使用 fromJson() 还原闭环对象
 * @return {string}
 */
import { cloneDeep, getObjectValueByPath, objectEach, setObjectValueByPath } from "../object/object"

const circularSymbol = "[Circular]░="

/**
 * 把 Javascript 值转换到 JSON
 * 出错或输入 undefined 会返回 undefined
 * 使用 circularReappear 参数能够把使用 toJson() 记录的带闭环对象信息的 json 还原成一个闭环对象
 *
 * @param value
 * @param space
 * @param circularReappear
 * @return {string}
 */
export function toJson(value: any, space?: number, circularReappear?: boolean) {
    let target = circularReappear ? cloneDeep(value) : value

    const replacerFactory = function() {
        if (circularReappear) {
            objectEach(target, (value, key, info) => {}, {
                needKeyPath: true,
                checkCycle: true,
                checkCycleCallback: (value, key, info) => {
                    // console.log("checkCycleCallback",{value, key, info})
                    info.parent[key] = circularSymbol + info.firstKeyPath
                }
            })
        }
        // 避免闭环对象(循环依赖)
        const seen = new WeakSet()
        return (key: string, value: any) => {
            if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                    return "[Circular]"
                }
                seen.add(value)
            }
            return value
        }
    }

    try {
        return JSON.stringify(target, replacerFactory(), space)
    } catch (e) {}
}

/**
 * 从 JSON 字符串反序列化为 Javascript 值
 * 出错或输入 undefined 会返回 undefined
 * 使用 circularReappear 参数能够把使用 toJson() 记录的带闭环对象信息的 json 还原成一个闭环对象
 *
 * @param value
 * @param circularReappear 闭环对象重现
 * @return {any}
 */
export function fromJson(value: any, circularReappear?: boolean) {
    try {
        if (!circularReappear) {
            return JSON.parse(value)
        } else {
            let ob = JSON.parse(value)
            objectEach(
                ob,
                (value, key, info) => {
                    if (typeof value === "string" && value.slice(0, circularSymbol.length) === circularSymbol) {
                        let keyPath = value.slice(circularSymbol.length, value.length)
                        // console.log("<keyPath>", keyPath)
                        info.parent[key] = getObjectValueByPath(ob, keyPath)
                    }
                },
                {
                    needKeyPath: true,
                    depthFirst: true
                }
            )
            return ob
        }
    } catch (e) {}
}
