import dayjs from "dayjs"

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
