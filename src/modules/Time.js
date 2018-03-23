// Created by nullice on 2018/03/21 - 11:30
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
//        |   Richang  JSEX   |
//        +-------------------+
//              · Time ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT


var moment = require('moment');
/**
 * 时间日期操作相关模块
 * @type {{genTimestamp: Time.genTimestamp, parseTimestamp: Time.parseTimestamp}}
 */
var Time = {


    /**
     * 生成时间戳（当前时间的 32 进制）
     *
     * @param {{boolean}} [raw] - 获取原始格式，比如 1521602474428
     */
    genTimestamp: function (raw) {
        var timeInt = (new Date()).getTime()
        if (raw)
        {
            return timeInt
        } else
        {
            return timeInt.toString(36).toUpperCase()
        }
    },



    /**
     * 解析一个时间戳返回 date
     * @param timestamp
     * @returns {Date}
     */
    parseTimestamp:function (timestamp) {

        if(Number.isInteger(+timestamp))
        {

            return new  Date(+timestamp)
        }else
        {
            return new  Date(parseInt(timestamp,36) )
        }

    },


}


/**
 * @exports Time
 */
export default Time
