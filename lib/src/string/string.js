/**
 * 把一段文本插入文本到指定位置
 * @param str
 * @param start
 * @param offset
 * @param inStr
 * @return {string}
 */
export function stringInsert(str, start, offset, inStr) {
    return str.slice(0, start) + inStr + str.slice(start + Math.abs(offset));
}
/**
 * 去除一个字符串中不合法字符，使其成为可用作文件名的字符串
 * @param text
 * @param fix 非法字符替代字，默认为空文本，即非法字符被移除
 * @return {string}
 */
export function normailzeFileName(text, fix = "") {
    const reg = /[\\/:*?"<>]/g;
    let name = text.replace(reg, fix);
    return name;
}
//# sourceMappingURL=string.js.map