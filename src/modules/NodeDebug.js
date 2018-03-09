/**
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

var chalk = require("chalk")


var NodeDebug = {

    /**
     * 在终端打出红色 log
     * @param text
     */
    logRed: function (text) {
        console.log( chalk.red(text))
    },

    /**
     * 在终端打出蓝色 log
     * @param text
     */
    logBlue: function (text) {
        console.log( chalk.blue(text))
    },

    /**
     * 在终端打出绿色 log
     * @param text
     */
    logGreen: function (text) {
        console.log( chalk.green(text))
    },

    /**
     * 在终端打出灰色 log
     * @param text
     */
    logGray: function (text) {
        console.log( chalk.gray(text))
    },
    /**
     * 在终端打出黄色 log
     * @param text
     */
    logYellow: function (text) {
        console.log( chalk.yellow(text))
    },

    /**
     * 在终端打出红色标签 log
     * @param text
     */
    logLableRed: function (text) {
        console.log( chalk.black.bgRed( text))
    },

    /**
     * 在终端打出黄色标签 log
     * @param text
     */
    logLableYellow: function (text) {
        console.log( chalk.black.bgYellow(text))
    },


    /**
     * 在终端打出蓝绿色标签 log
     * @param text
     */
    logLableCyan: function (text) {
        console.log( chalk.black.bgCyan(text))
    },

    /**
     * 在终端打出白色色标签 log
     * @param text
     */
    logLableWhite: function (text) {
        console.log( chalk.black.bgCyan(text))
    },
}


export default  NodeDebug
