"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by bgllj on 2017/03/10.
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
//              · File ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT


var fileFIL = {};
var fs = require("fs");

/**
 * 去除一个字符串中不符合成为文件名的字符
 * @param name
 * @param fix 非法字符替代
 * @returns {*}
 */
fileFIL.filterFileName = function (name, fix) {
    if (name != undefined && name.length != undefined) {
        var reg = /[\\/:*?"<>]/g;
        name = name.replace(reg, fix || "");
        return name;
    } else {
        return null;
    }
};

exports.default = fileFIL;