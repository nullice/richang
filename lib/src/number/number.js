/**
 * 检查一个数是否在范围内
 * @param inNum 要检查的数
 * @param range 范围数组 （如[0,1]）
 * @param openInterval 是否用开区间判断（即用 > 而不是默认的 >= ）
 * @return {boolean}
 */
export function inRange(inNum, range, openInterval = false) {
    return inNum >= range[0] && inNum <= range[1];
}
/**
 * 数值归一化/标准化。把数值变为目标区间范围的数，默认为归一化（[0,1]）
 * @param inNum 原数
 * @param inRange 原数所在区间
 * @param [outRange] 目标区间
 * @return {number}
 */
export function normaliz(inNum, inRange, outRange = [0, 1]) {
    let newNum;
    let inMin = inRange[0];
    let inMax = inRange[1];
    let outMin = outRange[0];
    let outMax = outRange[1];
    newNum = ((inNum - inMin) * outMax) / inMax + outMin;
    return newNum;
}
//# sourceMappingURL=number.js.map