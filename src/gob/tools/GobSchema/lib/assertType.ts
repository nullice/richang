const regSimpleCheck = /^(String|Number|Boolean|Function|Symbol)$/

/**
 * 判断值是否是指定的类型
 * @param value 值
 * @param type 类型（构造函数，如 String、Number、Symbol）
 */
export function assertType(value: any, type: Function): { valid: boolean; expectedType: string } {
    let valid = false
    const expectedType = getTypeName(type)

    // 预期值是基本类型，进行简单比较
    if (regSimpleCheck.test(expectedType)) {
        const valueType = typeof value
        valid = valueType === expectedType.toLowerCase()
        // 如果是值是对象类型，判断值是否是基本类型构造函数创建的
        if (!valid && valueType === "object") {
            valid = value instanceof type
        }
    }
    // 预期值是对象
    else if (expectedType === "Object") {
        valid = isPlainObject(value)
    }
    // 预期值是数组
    else if (expectedType === "Array") {
        valid = Array.isArray(value)
    }
    // 其他情况，如 Function 或者 class
    else {
        valid = value instanceof type
    }

    return {
        valid,
        expectedType
    }
}

function getTypeName(fn: Function) {
    const match = fn && fn.toString().match(/^\s*function (\w+)/)
    return match ? match[1] : ""
}

export function isPlainObject(obj: any): boolean {
    return Object.prototype.toString.call(obj) === "[object Object]"
}
