import dayjs from "dayjs"
const msTool = require("ms")

/**
 * 创建一个秒表函数，秒表函数每次执行会返回执行时到创建时的时差
 *
 * @example
 * let st = stopwatch()
 * await sleep(100)
 * st() // 100
 * await sleep(100)
 * st() // 200
 *
 * @return {() => number}
 */
export function stopwatch() {
    let start = new Date().getTime()
    return function() {
        let now = new Date().getTime()
        return now - start
    }
}

/**
 * 生成时间戳
 *
 * @example
 * genTimestamp()    //=> 1521602474428
 * @return {number}
 */
export function genTimestamp() {
    return new Date().getTime()
}

/**
 * 生成时间戳文本
 * @example
 * genTimestampText()  //=>  "JTJWZRH3"
 * @return {string}
 */
export function genTimestampText() {
    return genTimestamp()
        .toString(36)
        .toUpperCase()
}

/**
 * 从时间戳/时间戳文本解析出 Date 对象
 * @param timestamp
 * @return {Date}
 */
export function parseTimestamp(timestamp: string | number): Date {
    if (Number.isInteger(+timestamp)) {
        return new Date(+timestamp)
    } else {
        return new Date(parseInt(<string>timestamp, 36))
    }
}
// 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'date'

type TimeUnitType = "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year" | "date"

/**
 * 计算 2 个 Date 的时差
 * @param date
 * @param oldDate
 * @param unit 时差单位
 * @return {number}
 */
export function timeDiff(date: Date, oldDate: Date = new Date(), unit: TimeUnitType = "millisecond") {
    let time1 = dayjs(date)
    let time2 = dayjs(oldDate)
    return time1.diff(time2, unit)
}

/**
 * 计算 2 个 Date 的时差（天）
 * @param date
 * @param oldDate
 * @return {number}
 */
export function timeDiffDay(date: Date, oldDate: Date = new Date()) {
    return timeDiff(date, oldDate, "day")
}

/**
 * 计算 2 个 Date 的时差（分钟）
 * @param date
 * @param oldDate
 * @return {number}
 */
export function timeDiffMinute(date: Date, oldDate: Date = new Date()) {
    return timeDiff(date, oldDate, "minute")
}

/**
 * 获取高精度的时间戳，毫秒
 */
export function getHTime() {
    if (typeof process !== "undefined" && process.hrtime) {
        let hrtime = process.hrtime()
        const nanoseconds = hrtime[0] * 1e9 + hrtime[1]
        const milliseconds = nanoseconds / 1e6

        return milliseconds
    } else {
        return performance.now()
    }
}

/**
 * 从时间文本中返回毫秒
 *
 * @example
 * ms('2 days')  // 172800000
 * ms('1d')      // 86400000
 * ms('10h')     // 36000000
 * ms('2.5 hrs') // 9000000
 * ms('2h')      // 7200000
 * ms('1m')      // 60000
 * ms('5s')      // 5000
 * ms('1y')      // 31557600000
 * ms('100')     // 100
 * ms('-3 days') // -259200000
 * ms('-1h')     // -3600000
 * ms('-200')    // -200
 *
 */
export function parseMs(time: string) {
    if (typeof time !== "string") time = "" + time
    return msTool(time)
}
