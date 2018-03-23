'use strict';

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
    genTimestamp: function genTimestamp(raw) {
        var timeInt = new Date().getTime();
        if (raw) {
            return timeInt;
        } else {
            return timeInt.toString(36).toUpperCase();
        }
    },

    /**
     * 解析一个时间戳返回 date
     * @param timestamp
     * @returns {Date}
     */
    parseTimestamp: function parseTimestamp(timestamp) {

        if (Number.isInteger(+timestamp)) {

            return new Date(+timestamp);
        } else {
            return new Date(parseInt(timestamp, 36));
        }
    }

    /**
     * @exports Time
     */
};

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
//              · Tool ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

var uuidv4 = require("uuid/v4");
var uuidv5 = require("uuid/v5");
var isUUID = require("is-uuid");
var sha1 = require("uuid/lib/sha1-browser.js");

/**
 * 通用工具相关模块
 * @type {{genUUID_v4: Tool.genUUID_v4, genUUID_v5: Tool.genUUID_v5, genSHA1: Tool.genSHA1, formatUUID: Tool.formatUUID, checkUUID: Tool.checkUUID, roll: Tool.roll, rollString: Tool.rollString}}
 */
var Tool = {

    /**
     * 生成一个随机的 UUID
     *
     * genUUID_v4() => 'f8061fba-842b-4cc5-9872-9348e2e06916'
     * @return {string}
     */
    genUUID_v4: function genUUID_v4() {
        return uuidv4();
    },

    /**
     * 根据一个名字和命名空间生成一个 UUID，这个 UUID 与名称+命名空间有一一对应，不随机
     * （与标准不同，这里命名空间可不用 UUID 而是任何字符串，我们会用默认 UUID 和给命名空间生成一个 UUID）
     *
     *genUUID_v5("Gasoft_Mobiusbug.exe","BGLL") => '2cb20c42-026f-5d56-b33f-008e354ac8d3'
     * @param  {string} name - 名称
     * @param {string} [namespace] - 命名空间,
     * @returns {*}
     */
    genUUID_v5: function genUUID_v5(name) {
        var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "f8061fba-842b-4cc5-9872-9348e2e06916";


        // 如果命名空间不是 UUID ，给定默认 UUID 生成一个命名空间的 UUID

        if (namespace.length !== 36) {
            var namespace = uuidv5(namespace, "f8061fba-842b-4cc5-9872-9348e2e06916");
        }

        return uuidv5(name, namespace);
    },

    /**
     * 用 sha1 生成一个字符串
     *
     * genSHA1("nullice") => 51918a176c8e2b0af211a94c5478c58a54f239cd
     * @param {string} str
     * @returns {*}
     */
    genSHA1: function genSHA1(str) {

        function byteArraytoHexString(byteArray) {
            return Array.from(byteArray, function (byte) {
                return ("0" + (byte & 0xFF).toString(16)).slice(-2);
            }).join("");
        }

        return byteArraytoHexString(sha1(str));
    },

    /**
     * 把36位字符串转换成带横杠 UUID 的格式
     *
     * formatUUID("e9411a6f1a2e22dd2244b78ee491c616") => "e9411a6f1a2e22dd2244b78ee491c616"
     * @param {string}  str
     * @returns {string}
     */
    formatUUID: function formatUUID(str) {
        var str = str.toLowerCase();
        var newStr = "";
        newStr += str.slice(0, 8) + "-";
        newStr += str.slice(8, 12) + "-";
        newStr += str.slice(12, 16) + "-";
        newStr += str.slice(16, 20) + "-";
        newStr += str.slice(20, 36);
        return newStr;
    },

    /**
     * 检查一个字符串是 UUID 的版本或者是否是 UUID，返回 UUID 的版本，如果为 0 则说明不是 UUID
     * @param {string} uuid - uuid
     * @return {number}
     */
    checkUUID: function checkUUID(uuid) {

        var funcs = [isUUID.v4, isUUID.v5, isUUID.v3, isUUID.v2, isUUID.v1];
        var index = [4, 5, 3, 2, 1];
        for (var i = 0; i < funcs.length; i++) {
            if (funcs[i](uuid)) {
                return index[i];
            }
        }
        return 0;
    },

    /**
     * 生成一个随机整数
     * @param {number} max - 最大值
     * @param {number} min - 最小值
     */
    roll: function roll() {
        var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    /**
     * 生成一个随机字符串
     * @param {number} length - 随机字符串长度
     * @param {string} [dict] - 随机字符字典，默认为 a—Z0-9
     * @returns {string}
     */
    rollString: function rollString(length, dict) {
        var text = "";
        var possible = dict || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }return text;
    }

    /**
     * @exports Tool
     */
};

//  Created by bgllj on 2017/03/10.
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
//             · NodeFile ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

var fs = require("fs");
var path = require("path");
var fsex = require("fs-extra");

var os = require("os");

var moment$1 = require("moment");
/**
 * 文件操作相关模块
 * @type {{getTempDirManager: NodeFile.getTempDirManager}}
 */
var NodeFile = {

    /**
     * 生成一个临时文件夹管理器，会在系统临时目录中创建一个指定名字的临时文件夹
     * 可以用得到的 TempDirManager，申请临时文件名，和销毁临时文件夹
     *
     * var tepmDM = getTempDirManager("siphonink")
     * tepmDM.genTempFilePath() - 申请一个临时文件路径
     * tepmDM.destroy() - 销毁临时目录
     *
     *
     * @param name
     * @returns {*}
     */
    getTempDirManager: function getTempDirManager(name) {
        var sysTempDir = os.tmpdir();

        // 创建主临时文件夹
        var mianTempDir = path.join(sysTempDir, name);
        fsex.ensureDirSync(mianTempDir);

        // 创建实例临时文件夹
        var timestamp = Time.genTimestamp();
        var tempDir = path.join(mianTempDir, timestamp);
        fsex.ensureDirSync(tempDir);

        var tempDirManager = {
            tempDir: tempDir,
            timestamp: timestamp,
            /**
             * 销毁临时目录
             */
            destroy: function destroy() {
                fsex.removeSync(this.tempDir);
            },


            /**
             * 清除过时的临时实例文件夹
             * @param day 清除这个天数（包括）之前的文件夹
             */
            clean: function clean() {
                var day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

                var now = new Date();
                var dirs = fs.readdirSync(this.mianTempDir);
                for (var i = 0; i < dirs.length; i++) {
                    if (dirs != timestamp) // 不清除
                        {
                            var itemDir = dirs[i];
                            var itemPath = path.join(this.mianTempDir, itemDir);
                            var stat = fs.statSync(itemPath);
                            var diffDay = moment$1(now).diff(stat.mtime, "days");

                            if (diffDay >= day) {
                                fsex.remove(itemPath);
                            }
                            // console.log("diffDay:",diffDay >= day, diffDay  )
                        }
                }
            },


            /**
             * 申请一个临时文件路径
             *
             * genTempFilePath() => "c:/temp/xd123fs43aew"
             * 可用提供一个子文件夹名
             * genTempFilePath("static") => "c:/temp/static/xd123fs43aew"
             * @param subDir 子文件夹名
             * @return {*}
             */
            genTempFilePath: function genTempFilePath(subDir) {
                var _this = this;

                var genName = function genName() {
                    var rollName = Tool.rollString(12);
                    var name = rollName;

                    if (subDir) {
                        var filePath = path.join(_this.tempDir, subDir, name);
                    } else {
                        var filePath = path.join(_this.tempDir, name);
                    }

                    if (fsex.pathExistsSync(filePath)) {
                        return genName();
                    } else {
                        return filePath;
                    }
                };
                return genName();
            }
        };
        return tempDirManager;
    }

    /**
     * @exports NodeFile
     */
};

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

var chalk = require("chalk");

/**
 * Node 调试相关模块
 * @type {{logRed: NodeDebug.logRed, cRed: NodeDebug.cRed, logBlue: NodeDebug.logBlue, cBlue: NodeDebug.cBlue, logGreen: NodeDebug.logGreen, cGreen: NodeDebug.cGreen, logGray: NodeDebug.logGray, cGray: NodeDebug.cGray, logYellow: NodeDebug.logYellow, cYellow: NodeDebug.cYellow, logLableRed: NodeDebug.logLableRed, logLableYellow: NodeDebug.logLableYellow, logLableCyan: NodeDebug.logLableCyan, logLableGreen: NodeDebug.logLableGreen, logLableWhite: NodeDebug.logLableWhite}}
 */
var NodeDebug = {

    /**
     * 在终端打出红色 log
     * @param text
     */
    logRed: function logRed(text) {
        var text2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        console.log(chalk.red(text), text2);
    },

    /**
     * 把文本标记为红色
     * @param text
     * @returns {string | *}
     */
    cRed: function cRed(text) {
        return chalk.red(text);
    },

    /**
     * 在终端打出蓝色 log
     * @param text
     */
    logBlue: function logBlue(text) {
        var text2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        console.log(chalk.blue(text), text2);
    },

    /**
     * 把文本标记为蓝色
     * @param text
     * @returns {*|string}
     */
    cBlue: function cBlue(text) {
        return chalk.blue(text);
    },

    /**
     * 在终端打出绿色 log
     * @param text
     */
    logGreen: function logGreen(text) {
        var text2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        console.log(chalk.green(text), text2);
    },

    /**
     * 把文本标记为绿色
     * @param text
     * @returns {string | *}
     */
    cGreen: function cGreen(text) {
        return chalk.green(text);
    },

    /**
     * 在终端打出灰色 log
     * @param text
     */
    logGray: function logGray(text) {
        var text2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        console.log(chalk.gray(text), text2);
    },

    /**
     * 把文本标记为灰色
     * @param text
     * @returns {string | *}
     */
    cGray: function cGray(text) {
        return chalk.gray(text);
    },

    /**
     * 在终端打出黄色 log
     * @param text
     */
    logYellow: function logYellow(text) {
        var text2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        console.log(chalk.yellow(text), text2);
    },

    /**
     * 把文本标记为黄色
     * @param text
     * @returns {string | *}
     */
    cYellow: function cYellow(text) {
        return chalk.yellow(text);
    },

    /**
     * 在终端打出红色标签 log
     * @param text
     */
    logLableRed: function logLableRed(text) {
        var text2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        console.log(chalk.black.bgRed(text), text2);
    },

    /**
     * 在终端打出黄色标签 log
     * @param text
     */
    logLableYellow: function logLableYellow(text) {
        var text2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        console.log(chalk.black.bgYellow(text), text2);
    },

    /**
     * 在终端打出蓝绿色标签 log
     * @param text
     */
    logLableCyan: function logLableCyan(text) {
        var text2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        console.log(chalk.black.bgCyan(text), text2);
    },
    /**
     * 在终端打出绿色标签 log
     * @param text
     */
    logLableGreen: function logLableGreen(text) {
        var text2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        console.log(chalk.black.bgGreen(text), text2);
    },
    /**
     * 在终端打出白色色标签 log
     * @param text
     */
    logLableWhite: function logLableWhite(text) {
        var text2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        console.log(chalk.black.bgWhite(text), text2);
    }

    /**
     * @exports NodeDebug
     */
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

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
//            · NodeImage ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

var PNGJS = require("pngjs").PNG;
var fs$1 = require("fs");
var stream = require("stream");
var streamToBuffer = require("stream-to-buffer");

/**
 *  Node 图片相关模块
 * @type {{getPngData: NodeImage.getPngData, ARGB_BufferToPngFileBuffer: NodeImage.ARGB_BufferToPngFileBuffer}}
 */
var NodeImage = {

    /**
     * 获取 PNG 图片文件的像素数据 Buffer
     * @param {buffer} data - PNG 文件的 buffer
     * @returns {Promise<Buffer>}
     */
    getPngData: function () {
        var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.abrupt("return", new Promise(function (resolve, reject) {
                                if (stream.PassThrough) {
                                    var bufferStream = new stream.PassThrough();
                                    bufferStream.end(data);
                                    bufferStream.pipe(new PNGJS({
                                        filterType: 4
                                    })).on("parsed", function () {
                                        resolve(this.data);
                                    });
                                } else {
                                    new PNGJS({ filterType: 4 }).parse(data, function (error, png) {
                                        if (error) {
                                            reject("err pngParseAsync:", error);
                                        }
                                        resolve(png.data);
                                    });
                                }
                            }));

                        case 1:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getPngData(_x) {
            return _ref.apply(this, arguments);
        }

        return getPngData;
    }(),

    /**
     * 把 ARGB 格式的像素 buffer 转化为可直接写入文件的 PNG buffer
     * @param {buffer} argbBuffer - argb
     * @param {number} channelCount - 通道数量 1-4
     * @param {object} wh - 高宽 {w, h}
     * @returns {Promise<buufer>}
     * @constructor
     */
    ARGB_BufferToPngFileBuffer: function ARGB_BufferToPngFileBuffer(argbBuffer, channelCount, wh) {

        return new Promise(function (resove, reject) {

            var len = argbBuffer.length;
            var channels = channelCount || 4;

            // convert from ARGB to RGBA, we do this every 4 pixel values (channelCount)
            for (var i = 0; i < len; i += channels) {
                var a = argbBuffer[i];
                argbBuffer[i] = argbBuffer[i + 1];
                argbBuffer[i + 1] = argbBuffer[i + 2];
                argbBuffer[i + 2] = argbBuffer[i + 3];
                argbBuffer[i + 3] = a;
            }

            // init a new PNG
            var png = new PNGJS({
                width: wh.w,
                height: wh.h
            });

            // set pixel data
            png.data = argbBuffer;
            streamToBuffer(png.pack(), function (err, buffer) {
                if (err) {
                    reject(err);
                }
                resove(buffer);
            });
        });
    }

    /**
     * @exports NodeImage
     */
};

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
//            · NodeTool ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

var nodeCrypto = require("crypto");
/**
 *  Node 通用工具
 * @type {{getMD5: NodeTool.getMD5, getSHA256: NodeTool.getSHA256, arrayBuffertoBuffer: NodeTool.arrayBuffertoBuffer}}
 */
var NodeTool = {

    /**
     * 获取数据的 MD5 值
     *
     * getMD5("白色的空曲奇在发热") => 3b81233f69cc6dbf83899148b888f0db
     *
     * @param {buffer|string} inData 输入的数据
     * @returns {*|PromiseLike<ArrayBuffer>}
     */
    getMD5: function getMD5(inData) {
        var md5 = nodeCrypto.createHash("md5");
        md5.update(inData);
        var str = md5.digest("hex");
        return str;
    },

    /**
     * 获取数据的 getSHA256 值
     *
     * getSHA256("白色的空曲奇在发热") => 5be124e39cb90f3144fba1a798ab3a8472c24a44c0f9efc305f76c1e34de848f
     *
     * @param {buffer|string} inData 输入的数据
     * @returns {*|PromiseLike<ArrayBuffer>}
     */
    getSHA256: function getSHA256(inData) {
        var md5 = nodeCrypto.createHash("sha256");
        md5.update(inData);
        var str = md5.digest("hex");
        return str;
    },

    /**
     *  ArrayBuffer to Buffer
     * @param {arrayBuffer} arrayBuffer
     * @returns {Buffer}
     */
    arrayBuffertoBuffer: function arrayBuffertoBuffer(arrayBuffer) {
        var buf = new Buffer(arrayBuffer.byteLength);
        var view = new Uint8Array(arrayBuffer);
        for (var i = 0; i < buf.length; ++i) {
            buf[i] = view[i];
        }
        return buf;
    }

    // console.log(NodeTool.getSHA256("白色的空曲奇在发热"))

    /**
     * @exports NodeTool
     */
};

// Created by bgllj on 2017/09/5.

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
//             · Console ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

/**
 * 控制台相关功能模块
 * @type {{CSS_POST: string, CSS_POST_RESULT: string}}
 */
var ConsoleCON = {

  /**
   * 控制台颜色
   *
   * 用法：
   *   console.log("%c test", CSS_POST)
   */
  CSS_POST: "background: rgb(44, 132, 226);border-radius: 2px 25px 25px 2px;padding: 2px 8px;color: rgba(255, 255, 255, 1);display: inline-block;min-width: 100px;",
  CSS_POST_RESULT: "background: rgb(51, 197, 138);border-radius: 25px 2px 2px 25px;padding: 2px 8px;color: rgba(255, 255, 255, 1);display: inline-block;min-width: 100px;"
  /**
   * @exports ConsoleCON
   */
};

/*
 * Created by bgllj on 2016/10/26.
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
//             · Object ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

/**
 * 对象操作相关操作
 * @type {{isEmptyObject: ObjectOBJ.isEmptyObject, objectCopyToObject: ObjectOBJ.objectCopyToObject, getObjectValueByNames: ObjectOBJ.getObjectValueByNames, setObjectValueByNames: ObjectOBJ.setObjectValueByNames}}
 */
var ObjectOBJ = {

    /**
     * 对象是否为空
     * @param obj
     * @returns {boolean}
     */
    isEmptyObject: function isEmptyObject(obj) {
        for (var name in obj) {
            return false;
        }
        return true;
    },

    /**
     * 复制对象。可控制要复制的属性，复制后的属性名，处理新属性值
     * @param ob1 源对象
     * @param ob2 目标对象
     * @param func_allowCopy 判断是否允许复制的函数，返回真允许复制 func_allowCopy(属性名,属性值)。可空
     * @param func_rename 重命名复制到目标对象上的属性名， 返回新属性名 func_rename(属性名,属性值)。可空
     * @param func_valueFiter 处理复制到目标对象上的属性值，返回处理后的属性值 func_rename(属性名,属性值)。可空
     * @param func_for 每次循环执行的函数 func_for(ob1,ob2,x)。可空
     */

    objectCopyToObject: function objectCopyToObject(ob1, ob2, func_allowCopy, func_rename, func_valueFiter, func_for) {

        if (ob2 == undefined) {
            return;
        }
        for (var x in ob1) {

            if (func_for != undefined) {
                func_for(ob1, ob2, x);
            }

            var _allowCopy = true;
            if (func_allowCopy != undefined) {
                _allowCopy = func_allowCopy(x, ob1[x]);
            }

            var name = x;
            if (func_rename != undefined) {
                name = func_rename(x, ob1[x]);
            }

            if (ob1[x] != undefined && ob1[x].constructor === Object) {
                if (_typeof(ob2[name]) !== "object") {
                    ob2[name] = {};
                }

                this.objectCopyToObject(ob1[x], ob2[name], func_allowCopy, func_rename, func_valueFiter);
            } else {

                if (func_valueFiter != undefined) {
                    ob2[name] = func_valueFiter(x, ob1[x]);
                } else {

                    ob2[name] = ob1[x];
                }
            }
        }
    },

    /**
     * 根据属性名路径列表（names）获取对象属性的值
     * @param object 对象
     * @param names 属性名路径列表，如 [position,enableAssigns,y]
     * @param aheadEndTime 提取结束个数，如设置为 1 则是获取倒数第 2 个属性的值，
     * @returns {*}
     * @private
     */
    getObjectValueByNames: function getObjectValueByNames(object, names, aheadEndTime) {
        var nowValue;
        for (var i = 0; i < names.length - (aheadEndTime || 0); i++) {
            if (i == 0) {
                if (object[names[i]] != undefined) {
                    nowValue = object[names[i]];
                } else {
                    return null;
                }
            } else {

                if (nowValue[names[i]] != undefined) {
                    nowValue = nowValue[names[i]];
                } else {
                    return null;
                }
            }
        }

        return nowValue;
    },

    /**
     * 根据属性名路径列表（names）对对象属性赋值
     * @param object 对象
     * @param names 属性名路径列表，如 [position,enableAssigns,y]
     * @param value 值
     */
    setObjectValueByNames: function setObjectValueByNames(object, names, value) {
        var nowObject;

        if (names.length == 1) {
            object[names[0]] = value;
            return;
        }

        for (var i = 0; i < names.length; i++) {
            if (i == 0 && names.length > 2) {
                if (object[names[0]] == undefined) {
                    object[names[0]] = {};
                }
                nowObject = object[names[0]];
            } else if (i < names.length - 2 && names.length > 2) {
                if (nowObject[names[i]] == undefined) {
                    nowObject[names[i]] = {};
                }

                nowObject = nowObject[names[i]];
            } else if (i == names.length - 2) {
                if (names.length == 2) {
                    if (object[names[0]] == undefined) {
                        object[names[0]] = {};
                    }
                    nowObject = object[names[0]];

                    nowObject[names[1]] = value;
                    return;
                } else {

                    if (nowObject[names[i]] == undefined) {
                        nowObject[names[i]] = {};
                    }

                    nowObject = nowObject[names[i]];
                    nowObject[names[i + 1]] = value;
                    return;
                }
            }
        }
    }

    /**
     * @exports ObjectOBJ
     */
};

/**
 * Created by bgllj on 2016/9/8.
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
//              · String ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

/**
 * 字符串相关功能模块
 * @type {{left: StringSTR.left, right: StringSTR.right, insert: StringSTR.insert}}
 */
var StringSTR = {
    /**
     * 取字符串左边
     * ****依赖 stringSTR.right()***
     * @param {String} str - 原文
     * @param {Number} offset - 偏移值
     * @returns {*}
     */
    left: function left(str, offset) {

        if (offset >= 0) {
            var s = str.substr(0, offset);
            return s;
        } else {
            return this.right(str, -offset);
        }
    },
    /**
     * 取字符串右边。
     * ****依赖 stringSTR.left()***
     * @param {String} str 原文
     * @param {Number} offset 偏移值
     * @returns {*}
     */
    right: function right(str, offset) {
        if (offset >= 0) {
            var s = str.substr(str.length - offset, offset);
            return s;
        } else {
            return this.left(str, -offset);
        }
    },

    /**
     * 插入文本到指定位置
     * @param {String} str 原文
     * @param {Number} start 开始位置
     * @param {Number} offset 偏移值
     * @param {String} inStr 要插入的文本
     * @returns {*}
     */
    insert: function insert(str, start, offset, inStr) {
        return str.slice(0, start) + inStr + str.slice(start + Math.abs(offset));
    }

    /**
     * @exports StringSTR
     */
};

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
//               · Rect ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

/**
 * 矩形处理相关模块
 * @type {{}}
 */
var Rect = {};

/**
 * 坐标转换
 * 把 {right, left, top, bottom} 转化为 {x, y , w, h}
 * @param boundsInfo
 * @returns {{x: null, y: null, w: null, h: null}}
 */
Rect.rltb2xywh = function (boundsInfo) {
    var newBoundsInfo = { x: null, y: null, w: null, h: null };
    newBoundsInfo.x = boundsInfo.left;
    newBoundsInfo.y = boundsInfo.top;
    newBoundsInfo.h = boundsInfo.bottom - boundsInfo.top;
    newBoundsInfo.w = boundsInfo.right - boundsInfo.left;
    return newBoundsInfo;
};

/**
 * 坐标转换
 * 把 {x, y , w, h} 转化为 {right, left, top, bottom}
 * @param boundsInfo
 * @returns {{left: null, right: null, top: null, bottom: null}}
 */
Rect.xywh2rltb = function (boundsInfo) {
    var newBoundsInfo = { left: null, right: null, top: null, bottom: null };
    newBoundsInfo.left = boundsInfo.x;
    newBoundsInfo.top = boundsInfo.y;
    newBoundsInfo.right = boundsInfo.x + boundsInfo.w;
    newBoundsInfo.bottom = boundsInfo.y + boundsInfo.h;
    return newBoundsInfo;
};

/**
 * 给 xywh 添加内边距
 *
 * paddingXywh(xywh, 5)
 * paddingXywh(xywh, [3,4,5,10])
 *
 * @param xywh
 * @param padding
 * @returns {{x: null, y: null, w: null, h: null}}
 */
Rect.paddingXywh = function (xywh, padding) {

    var rltb = Rect.xywh2rltb(xywh);
    if (padding.length && padding.length == 4) {
        rltb.left -= padding[0];
        rltb.top -= padding[1];
        rltb.right += padding[2];
        rltb.bottom += padding[3];

        return Rect.rltb2xywh(rltb);
    }

    rltb.left -= padding;
    rltb.top -= padding;
    rltb.right += padding;
    rltb.bottom += padding;
    return Rect.rltb2xywh(rltb);
};

/**
 * 计算多个 xywh 矩形的边界
 *
 * getXywhsRange([xywh])
 * @param xywhs
 * @returns {{x: null, y: null, w: null, h: null}}
 */
Rect.getXywhsRange = function (xywhs) {

    var range = { left: null, right: null, top: null, bottom: null };
    for (var i = 0; i < xywhs.length; i++) {
        var rltb = Rect.xywh2rltb(xywhs[i]);

        if (range.left == undefined) range.left = rltb.left;
        if (range.top == undefined) range.top = rltb.top;
        if (range.right == undefined) range.right = rltb.right;
        if (range.bottom == undefined) range.bottom = rltb.bottom;

        if (rltb.left < range.left) range.left = rltb.left;
        if (rltb.top < range.top) range.top = rltb.top;
        if (rltb.right > range.right) range.right = rltb.right;
        if (rltb.bottom > range.bottom) range.bottom = rltb.bottom;
    }

    return Rect.rltb2xywh(range);
};

/**
 * 整体移动多个 xywh 到某点，保留原 xywhs 相对位置。
 * 会改变 xywhs 里每个 xywh 对象的 x，y 值。
 * @param xywhs
 * @param xy
 */
Rect.moveXywhs = function (xywhs, xy) {

    var range = Rect.getXywhsRange(xywhs);
    for (var i = 0; i < xywhs.length; i++) {
        var xywh = xywhs[i];
        xywh.x = xy.x + xywh.x - range.x;
        xywh.y = xy.y + xywh.y - range.y;
    }

    return xywhs;
};

/**
 * 2 个 xywh 是否有重叠
 * @param xywhA
 * @param xywhB
 * @return {boolean}
 */
Rect.xywhHasCover = function (xywhA, xywhB) {

    var rltbA = Rect.xywh2rltb(xywhA);
    var rltbB = Rect.xywh2rltb(xywhB);

    var hasOverlay = !!(rltbA.left <= rltbB.right && rltbA.right >= rltbB.left && rltbA.top <= rltbB.bottom && rltbA.bottom >= rltbB.top);

    return hasOverlay;
};

/*
 * Created by bgllj on 2016/12/11.
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
//              · Type ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

/**
 * 类型相关模块
 * @type {{getType: TypeTYP.getType}}
 */
var TypeTYP = {

    /**
     * 得到指定值的数据类型。返回数据类型名称字符串，如 "boolean","object","string" 。
     * @param value
     * @returns {*}
     */
    getType: function getType(value) {
        var typeList = {
            "[object Boolean]": "boolean",
            "[object Number]": "number",
            "[object String]": "string",
            "[object Function]": "function",
            "[object Array]": "array",
            "[object Date]": "date",
            "[object RegExp]": "regexp",
            "[object Object]": "object",
            "[object Error]": "error"
        };
        if (value === null) {
            return "null";
        } else if (typeof value === "undefined") {
            return "undefined";
        } else {
            return (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" || typeof value === "function" ? typeList[typeList.toString.call(value)] || "object" : typeof value === "undefined" ? "undefined" : _typeof(value);
        }
    }

    /**
     * @exports TypeTYP
     */
};

// Created by bgllj on 2016/10/10.


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
//             · Aarry ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT


/**
 * 数组相关功能模块
 * @type {{symDifference: AarryArr.symDifference, symDifference_ObjectArray: AarryArr.symDifference_ObjectArray, difference: AarryArr.difference, union: AarryArr.union, intersection: AarryArr.intersection, remove: AarryArr.remove, hasMember: AarryArr.hasMember, getByKey: AarryArr.getByKey, deleteByKey: AarryArr.deleteByKey, sortObjectArray: AarryArr.sortObjectArray}}
 */
var AarryArr = {

    /**
     * 对称差。（不支持对象数组）
     *
     * a:[1,2,3] b:[1,2,4]  a△b => [3,4]
     * @param {Array} a
     * @param {Array} b
     * @returns {Array}
     */
    symDifference: function symDifference(a, b) {
        var ob = {};
        for (var i = 0; i < a.length; i++) {
            ob[a[i]] = true;
        }

        for (var i = 0; i < b.length; i++) {
            if (ob[b[i]] == undefined) {
                ob[b[i]] = true;
            } else {
                ob[b[i]] = false;
            }
        }

        var arr = [];
        for (var x in ob) {
            if (ob[x] != false) {
                arr.push(x);
            }
        }
        return arr;
    },

    /**
     * 对称差。对象数组。
     *  a:[{key:1}, {key:2}]  b:[{key:2}, {key:3}]  a△b => [{key:1},{key:3}]
     * @param a
     * @param b
     * @param key 对象关键属性
     * @returns {Array}
     */
    symDifference_ObjectArray: function symDifference_ObjectArray(a, b, key) {
        var ob = {};
        for (var i = 0; i < a.length; i++) {
            ob[a[i][key]] = { is: true, ob: a[i] };
        }

        for (var i = 0; i < b.length; i++) {
            if (ob[b[i][key]] == undefined) {
                ob[b[i][key]] = { is: true, ob: b[i] };
            } else {
                ob[b[i][key]] = { is: false };
            }
        }

        var arr = [];
        for (var x in ob) {
            if (ob[x].is != false) {
                arr.push(ob[x].ob);
            }
        }
        return arr;
    },

    /**
     * 差集。（不支持对象数组）
     * a:[1,2,3] b:[1,2,4]   a-b => [3]
     * @param {Array} a
     * @param {Array} b
     * @returns {Array}
     */
    difference: function difference(a, b) {
        var ob = {};
        for (var i = 0; i < a.length; i++) {
            ob[a[i]] = true;
        }

        for (var i = 0; i < b.length; i++) {
            if (ob[b[i]] != undefined) {
                ob[b[i]] = false;
            }
        }

        var arr = [];
        for (var x in ob) {
            if (ob[x] != false) {
                arr.push(x);
            }
        }
        return arr;
    },

    /**
     * 并集。（不支持对象数组）
     * a:[1,2,3] b:[1,2,4]   a∪b => [1,2,3,4]
     * @param {Array} a
     * @param {Array} b
     * @returns {Array}
     */
    union: function union(a, b) {
        var ob = {};
        for (var i = 0; i < a.length; i++) {
            ob[a[i]] = true;
        }

        for (var i = 0; i < b.length; i++) {
            if (ob[b[i]] == undefined) {
                ob[b[i]] = true;
            }
        }

        var arr = [];
        for (var x in ob) {
            if (ob[x] != false) {
                arr.push(x);
            }
        }
        return arr;
    },

    /**
     * 交集。（不支持对象数组）
     * a:[1,2,3] b:[1,2,4]   a∩b => [1,2]
     * @returns {Array}
     */
    intersection: function intersection(a, b) {
        var ob = {};
        for (var i = 0; i < a.length; i++) {
            ob[a[i]] = false;
        }

        for (var i = 0; i < b.length; i++) {
            if (ob[b[i]] != undefined) {
                ob[b[i]] = true;
            }
        }

        var arr = [];
        for (var x in ob) {
            if (ob[x] != false) {
                arr.push(x);
            }
        }
        return arr;
    },

    /**
     * 从数组中移除元素，默认是非变异的。
     * @param {Array} arr
     * @param {Function} removeRule 可以给定值或者一个判断函数 function(x){ return x>3;}
     * @param {Boolean} isMutator 变异模式，为真会改变原数组
     * @returns {*}
     */
    remove: function remove(arr, removeRule, isMutator) {
        if (isMutator) {} else {
            var arr = arr.slice(0, arr.length);
        }

        for (var i = 0; i < arr.length; i++) {
            if (removeRule.constructor == Function) {
                if (removeRule(arr[i])) {
                    arr.splice(i, 1);
                    i--;
                }
            } else {
                if (arr[i] == removeRule) {
                    arr.splice(i, 1);
                    i--;
                }
            }
        }

        return arr;
    },

    /**
     * 数组是否拥有指定成员
     * arr:["A","B","C"] => hasMember(arr, "C") => true
     * @param {Array} arr
     * @param memberValue 指定成员值
     * @param equalFunc 比较函数，boolean equalFunc( arr[i], memberValue)。可空。
     * @returns {boolean}
     */
    hasMember: function hasMember(arr, memberValue, equalFunc) {
        if (equalFunc == undefined) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == memberValue) {
                    return true;
                }
            }
            return false;
        } else {
            for (var i = 0; i < arr.length; i++) {
                if (equalFunc(arr[i], memberValue)) {
                    return true;
                }
            }
            return false;
        }
    },

    /**
     * 对象数组查找
     * 从对象数组中提取出一个对象，根据对象的一个属性值。
     * arr: [{name:a},{name:b}] getByKey(arr,"name","b") => return {name:b}
     * @param {Object[]} objectArr 对象数组
     * @param {String} key 关键属性
     * @param keyValue 欲提取的关键属性值
     * @param equalRule 值比较函数，可空
     * @returns {*}
     */
    getByKey: function getByKey(objectArr, key, keyValue, equalRule) {
        for (var i = 0; i < objectArr.length; i++) {
            if (objectArr[i][key] != undefined) {
                if (equalRule != undefined) {
                    if (equalRule(objectArr[i][key], keyValue)) {
                        return objectArr[i];
                    }
                } else {
                    if (objectArr[i][key] == keyValue) {
                        return objectArr[i];
                    }
                }
            }
        }
    },

    /**
     * 对象数组删除
     * 从对象数组中找到出一个对象元素，并删除这个元素。
     * arr: [{name:a},{name:b}] deleteByKey(arr,"name","b") => arr: [{name:a}]
     * @param {Object[]} objectArr 对象数组
     * @param {String} key 关键属性
     * @param keyValue 欲提取的关键属性值
     * @param equalRule 值比较函数，可空
     * @returns {*}
     */
    deleteByKey: function deleteByKey(objectArr, key, keyValue, equalRule) {
        for (var i = 0; i < objectArr.length; i++) {
            if (objectArr[i][key] != undefined) {
                if (equalRule != undefined) {
                    if (equalRule(objectArr[i][key], keyValue)) {
                        objectArr.splice(i, 1);
                    }
                } else {
                    if (objectArr[i][key] == keyValue) {
                        objectArr.splice(i, 1);
                    }
                }
            }
        }
    },

    /**
     * 排序对象数组
     * @param arr 数组
     * @param key 对象排序的键值，如 [{a:12}, {a:33}] , key 为 "a" 则以 a 排序
     * @param bigFront 大值在前
     */
    sortObjectArray: function sortObjectArray(arr, key, bigFront) {
        if (arr != undefined && arr.sort != undefined) {

            return arr.sort(by(key));
        }

        function by(name) {
            return function (o, p) {
                var a, b;
                if ((typeof o === "undefined" ? "undefined" : _typeof(o)) === "object" && (typeof p === "undefined" ? "undefined" : _typeof(p)) === "object" && o && p) {
                    a = o[name];
                    b = p[name];
                    if (a === b) {
                        return 0;
                    }
                    if ((typeof a === "undefined" ? "undefined" : _typeof(a)) === (typeof b === "undefined" ? "undefined" : _typeof(b))) {
                        if (bigFront) {
                            return a > b ? -1 : 1;
                        } else {
                            return a < b ? -1 : 1;
                        }
                    }
                    return (typeof a === "undefined" ? "undefined" : _typeof(a)) < (typeof b === "undefined" ? "undefined" : _typeof(b)) ? -1 : 1;
                } else {
                    throw "error";
                }
            };
        }
    }

    /**
     * @exports AarryArr
     */
};

// Created by nullice on 2018/03/19 - 17:37
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
//              · Calc ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

/**
 * 计算相关功能模块
 * @type {{}}
 */
var Calc = {};

//  Created by bgllj on 2017/03/10.
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


/**
 * 文件操作相关模块
 * @type {{filterFileName: FileFIL.filterFileName}}
 */
var FileFIL = {

    /**
     * 去除一个字符串中不符合成为文件名的字符
     * @param name
     * @param fix 非法字符替代
     * @returns {*}
     */
    filterFileName: function filterFileName(name, fix) {
        if (name != undefined && name.length != undefined) {
            var reg = /[\\/:*?"<>]/g;
            name = name.replace(reg, fix || "");
            return name;
        } else {
            return null;
        }
    }
    /**
     * @exports FileFIL
     */
};

var RichangNode = {
    Object: ObjectOBJ,
    String: StringSTR,
    Type: TypeTYP,
    Array: AarryArr,
    Rect: Rect,
    Console: ConsoleCON,
    Tool: Tool,
    Calc: Calc,
    File: FileFIL,
    NodeFile: NodeFile,
    NodeDebug: NodeDebug,
    NodeTool: NodeTool,
    NodeImage: NodeImage

    // import Richang from "./index"

    /**
     * @export RichangNode
     */

    // var XXX = function app () {
    //     console.log("rc2001")
    // }

};

module.exports = RichangNode;
