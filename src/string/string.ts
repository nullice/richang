/**
 * 把一段文本插入文本到指定位置
 * @param str
 * @param start
 * @param offset
 * @param inStr
 * @return {string}
 */
export function stringInsert(str: string, start: number, offset: number, inStr: string) {
    return str.slice(0, start) + inStr + str.slice(start + Math.abs(offset))
}

/**
 * 去除一个字符串中不合法字符，使其成为可用作文件名的字符串
 * @param text
 * @param fix 非法字符替代字，默认为空文本，即非法字符被移除
 * @return {string}
 */
export function normailzeFileName(text: string, fix = "") {
    const reg = /[\\/:*?"<>]/g
    let name = text.replace(reg, fix)
    return name
}

const hyphenateRE = /\B([A-Z])/g

/**
 * 驼峰风格转连字符风格
 * nameString => name-string
 *
 * @param str
 */
export function hyphenate(str: string) {
    return str.replace(hyphenateRE, "-$1").toLowerCase()
}

const camelizeRE = /-(\w)/g

/**
 * 连字符风格转驼峰风格
 * name-string => nameString
 * @param str
 */
export function camelize(str: string) {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""))
}

/**
 * 一个字符串是否是一个百分比字符串 "22%", "22.33%"
 */
export function isPercentText(str: string): boolean {
    const reg = /([0-9]*\.?[0-9]*)\s*%/
    return reg.test(str)
}

/**
 * 一个字符串是否是一个像素字符串 "100px", "322.2 px"
 * 可以接受一个空格间隔
 */
export function isPxText(str: string): boolean {
    const reg = /([0-9]*\.?[0-9]*\ ?)px/
    return reg.test(str)
}

/**
 * 一个字符串是否是一个 Rem字符串 "100rem", "322.2 rem"
 * 可以接受一个空格间隔
 */
export function isRemText(str: string): boolean {
    const reg = /([0-9]*\.?[0-9]*\ ?)rem/
    return reg.test(str)
}
