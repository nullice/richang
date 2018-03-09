'use strict';

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

var chalk = require("chalk");

var NodeDebug = {

    /**
     * 在终端打出红色 log
     * @param text
     */
    logRed: function logRed(text) {
        console.log(chalk.red(text));
    },

    /**
     * 在终端打出蓝色 log
     * @param text
     */
    logBlue: function logBlue(text) {
        console.log(chalk.blue(text));
    },

    /**
     * 在终端打出绿色 log
     * @param text
     */
    logGreen: function logGreen(text) {
        console.log(chalk.green(text));
    },

    /**
     * 在终端打出灰色 log
     * @param text
     */
    logGray: function logGray(text) {
        console.log(chalk.gray(text));
    },
    /**
     * 在终端打出黄色 log
     * @param text
     */
    logYellow: function logYellow(text) {
        console.log(chalk.yellow(text));
    },

    /**
     * 在终端打出红色标签 log
     * @param text
     */
    logLableRed: function logLableRed(text) {
        console.log(chalk.black.bgRed(text));
    },

    /**
     * 在终端打出黄色标签 log
     * @param text
     */
    logLableYellow: function logLableYellow(text) {
        console.log(chalk.black.bgYellow(text));
    },

    /**
     * 在终端打出蓝绿色标签 log
     * @param text
     */
    logLableCyan: function logLableCyan(text) {
        console.log(chalk.black.bgCyan(text));
    },

    /**
     * 在终端打出白色色标签 log
     * @param text
     */
    logLableWhite: function logLableWhite(text) {
        console.log(chalk.black.bgCyan(text));
    }
};

/**
 * Created by bgllj on 2017/09/5.
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
//              · Console ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

/**
 * 控制台相关功能模块
 * @type {{}}
 */
var consoleCON = {

  /**
   * 控制台颜色
   * 用法：
   *   console.log("%c test", CSS_POST)
   */
  CSS_POST: "background: rgb(44, 132, 226);border-radius: 2px 25px 25px 2px;padding: 2px 8px;color: rgba(255, 255, 255, 1);display: inline-block;min-width: 100px;",
  CSS_POST_RESULT: "background: rgb(51, 197, 138);border-radius: 25px 2px 2px 25px;padding: 2px 8px;color: rgba(255, 255, 255, 1);display: inline-block;min-width: 100px;"

};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

/**
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
 * @type {{isEmptyObject: objectOBJ.isEmptyObject, objectCopyToObject: objectOBJ.objectCopyToObject, getObjectValueByNames: objectOBJ.getObjectValueByNames, setObjectValueByNames: objectOBJ.setObjectValueByNames}}
 */
var objectOBJ = {

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
 * @type {{left: stringSTR.left, right: stringSTR.right, insert: stringSTR.insert}}
 */
var stringSTR = {
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

/**
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


var typeTYP = {

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

};

/**
 * Created by bgllj on 2016/10/10.
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
//             · Aarry ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT


/**
 * 数组相关功能模块
 * @type {{}}
 */
var arrayARR = {

    /**
     * 对称差。（不支持对象数组）---
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
     * @param {[Object]} objectArr 对象数组
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
     * @param {[Object]} objectArr 对象数组
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

};

var RichangNode = {
    Object: objectOBJ,
    String: stringSTR,
    Type: typeTYP,
    Array: arrayARR,
    Rect: Rect,
    Console: consoleCON,
    File: fileFIL,
    NodeDebug: NodeDebug
    /**
     * @export RichangNode
     */
};module.exports = RichangNode;
