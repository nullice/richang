/*
 * Created by bgllj on 2018/03/9.
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
//        |   Richang  JSEX   |
//        +-------------------+
//            · NodeDebug ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

const chalk = require("chalk")

/**
 * Node 调试相关模块
 * @type {{logRed: NodeDebug.logRed, cRed: NodeDebug.cRed, logBlue: NodeDebug.logBlue, cBlue: NodeDebug.cBlue, logGreen: NodeDebug.logGreen, cGreen: NodeDebug.cGreen, logGray: NodeDebug.logGray, cGray: NodeDebug.cGray, logYellow: NodeDebug.logYellow, cYellow: NodeDebug.cYellow, logLableRed: NodeDebug.logLableRed, logLableYellow: NodeDebug.logLableYellow, logLableCyan: NodeDebug.logLableCyan, logLableGreen: NodeDebug.logLableGreen, logLableWhite: NodeDebug.logLableWhite}}
 */
var NodeDebug = {

    /**
     * 在终端打出红色 log
     * @param text
     */
    logRed: function (text, text2 = "") {
        console.log(chalk.red(text), text2)
    },

    /**
     * 把文本标记为红色
     * @param text
     * @returns {string | *}
     */
    cRed: function (text) {
        return chalk.red(text)
    },

    /**
     * 在终端打出蓝色 log
     * @param text
     */
    logBlue: function (text, text2 = "") {
        console.log(chalk.blue(text), text2)
    },

    /**
     * 把文本标记为蓝色
     * @param text
     * @returns {*|string}
     */
    cBlue: function (text) {
        return chalk.blue(text)
    },

    /**
     * 在终端打出绿色 log
     * @param text
     */
    logGreen: function (text, text2 = "") {
        console.log(chalk.green(text), text2)
    },

    /**
     * 把文本标记为绿色
     * @param text
     * @returns {string | *}
     */
    cGreen: function (text) {
        return chalk.green(text)
    },

    /**
     * 在终端打出灰色 log
     * @param text
     */
    logGray: function (text, text2 = "") {
        console.log(chalk.gray(text), text2)
    },


    /**
     * 把文本标记为灰色
     * @param text
     * @returns {string | *}
     */
   cGray: function (text) {
      return chalk.gray(text)
    },


    /**
     * 在终端打出黄色 log
     * @param text
     */
    logYellow: function (text, text2 = "") {
        console.log(chalk.yellow(text), text2)
    },


    /**
     * 把文本标记为黄色
     * @param text
     * @returns {string | *}
     */
    cYellow: function (text) {
        return chalk.yellow(text)
    },


    /**
     * 在终端打出红色标签 log
     * @param text
     */
    logLableRed: function (text, text2 = "") {
        console.log(chalk.black.bgRed(text), text2)
    },

    /**
     * 在终端打出黄色标签 log
     * @param text
     */
    logLableYellow: function (text, text2 = "") {
        console.log(chalk.black.bgYellow(text), text2)
    },

    /**
     * 在终端打出蓝绿色标签 log
     * @param text
     */
    logLableCyan: function (text, text2 = "") {
        console.log(chalk.black.bgCyan(text), text2)
    },
    /**
     * 在终端打出绿色标签 log
     * @param text
     */
    logLableGreen: function (text, text2 = "") {
        console.log(chalk.black.bgGreen(text), text2)
    },
    /**
     * 在终端打出白色色标签 log
     * @param text
     */
    logLableWhite: function (text, text2 = "") {
        console.log(chalk.black.bgWhite(text), text2)
    },

}

/**
 * @exports NodeDebug
 */
export default NodeDebug
