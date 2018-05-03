(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Richang = {})));
}(this, (function (exports) { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
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
 * @type {{isEmptyObject: ObjectOBJ.isEmptyObject, objectCopyToObject: ObjectOBJ.objectCopyToObject, getObjectValueByNames: ObjectOBJ.getObjectValueByNames, setObjectValueByNames: ObjectOBJ.setObjectValueByNames, treeFind: ObjectOBJ.treeFind, treeEach: function(Object[], Function, string, boolean): {struct: Array, deep: number, total: number}, pathEach(Object, Function): void}}
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
                var item = object[names[i]];
                if (item != undefined) {
                    nowValue = item;
                } else {
                    return undefined;
                }
            } else {
                var item = nowValue[names[i]];
                if (item != undefined) {
                    nowValue = item;
                } else {
                    return undefined;
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
        var namesLen = names.length;
        if (namesLen == 1) {
            object[names[0]] = value;
            return;
        }

        var nowObject = object;
        var nowKey = null;
        for (var i = 0; i < namesLen; i++) {
            nowKey = names[i];

            if (i == namesLen - 1) {

                nowObject[nowKey] = value;
                return;
            } else {
                // 如果路径上对象不存在则创建对象
                if (!(nowKey in nowObject)) {
                    nowObject[nowKey] = {};
                    nowObject = nowObject[nowKey];
                } else {
                    nowObject = nowObject[nowKey];
                }
            }
        }
        return;
    },
    /**
     * 根据属性名路径列表（names）对对象属性删除
     * @param object 对象
     * @param names 属性名路径列表，如 [position,enableAssigns,y]
     */
    deleteObjectValueByNames: function deleteObjectValueByNames(object, names) {
        var namesLen = names.length;
        if (namesLen == 1) {
            delete object[names[0]];
            return;
        }

        var nowObject = object;
        var nowKey = null;
        for (var i = 0; i < namesLen; i++) {
            nowKey = names[i];

            if (i == namesLen - 1) {

                delete nowObject[nowKey];
                return;
            } else {
                nowObject = nowObject[nowKey];
            }
        }
        return;
    },
    /**
     * 在由对象数组组成的树中查找对象。如果查找全部结果会以数组返回，否则直接返回找到的对象。
     *
     * tree =
     * [
     *   {id: 1, children: [{id: 4}]},
     *   {id: 2},
     * ]
     * findTree (tree, 4, "children", false, false) => {id: 4}
     *
     * @param {object[]} objectArr 对象数组组成的树
     * @param {function} match 匹配器 -  如果是字符串则是匹配对象下的 id 键，也可提供一个匹配函数，匹配函数通过参数接收遍历到的对象，返回是否匹配的 boolen (ob)={retrun ob.name=="xxx">}
     * @param {string} childrenKey 子树键名 - 通过这个名字在对象中找子树
     * @param {boolean} findAll 是否查找全部
     * @param {boolean} depthFirst 深度优先 - 默认是广度优先
     * @return {array|null}
     */
    treeFind: function treeFind(objectArr, match, childrenKey, findAll, depthFirst) {

        if (typeof match == "function") {
            // 使用输入的匹配 function
            var matchFunc = match;
        } else {
            var matchFunc = function matchFunc(ob) {
                return ob.id == match;
            };
        }

        function once(objectArr, match, childrenKey, findAll, depthFirst) {
            var reslut = [];
            var children = [];
            for (var i = 0; i < objectArr.length; i++) {
                var item = objectArr[i];

                if (matchFunc(item)) {
                    reslut.push(item);
                    if (!findAll) {
                        return reslut;
                    }
                }

                if (item[childrenKey]) {
                    if (depthFirst) {
                        var re = once(item[childrenKey], match, childrenKey, findAll, depthFirst);
                        if (!findAll && re.length > 0) {
                            return re;
                        }
                        reslut = reslut.concat(re);
                    } else {
                        children.push(item[childrenKey]);
                    }
                }
            }

            if (!depthFirst) {
                for (var i = 0; i < children.length; i++) {
                    var re = once(children[i], match, childrenKey, findAll, depthFirst);
                    if (!findAll && re.length > 0) {
                        return re;
                    }
                    reslut = reslut.concat(re);
                }
            }

            return reslut;
        }

        var re = once(objectArr, matchFunc, childrenKey, findAll, depthFirst);
        if (!findAll) {
            return re.length > 0 ? re[0] : null;
        } else {
            return re;
        }
    },

    /**
     * 在由对象数组组成的树中遍历处理树的每个节点。
     *
     * 处理函数：
     * eachFunc(单个对象, 遍历深度, 当层深度节点计数, 总节点计数, 当前子树, 当前子树位置)
     * 在 eachFunc 中 return true 可以提前终止遍历。
     * 当前子树[当前子树位置+1] 可获取下一个节点。
     * 返回树的信息：
     * {
     *      struct:[4,2,5], // 每层节点数
     *      deep:3,         // 树深度
     *      total: 11       // 总节点数
     * }
     *
     * @param {object[]} objectArr 对象数组组成的树
     * @param {function} eachFunc 处理函数
     * @param {string} childrenKey 子树键名 - 通过这个名字在对象中找子树
     * @param {boolean} depthFirst 深度优先 - 默认是广度优先
     * @return {{struct: Array, deep: number, total: number}}
     */
    treeEach: function treeEach(objectArr, eachFunc, childrenKey, depthFirst) {
        var deepLengths = [];
        var count = 0;
        var deepAll = 0;

        if (!eachFunc) {
            eachFunc = function eachFunc(o) {};
        }

        once(objectArr, eachFunc, childrenKey, depthFirst, 0);
        return { struct: deepLengths, deep: deepAll + 1, total: count };

        function once(objectArr, eachFunc, childrenKey, depthFirst, deep) {
            if (deep > deepAll) {
                deepAll = deep;
            }

            var children = [];
            for (var i = 0; i < objectArr.length; i++) {
                count++;
                if (deepLengths[deep] == undefined) {
                    deepLengths[deep] = 1;
                } else {
                    deepLengths[deep]++;
                }

                var item = objectArr[i];
                if (eachFunc(item, deep, deepLengths[deep], count, objectArr, i)) {
                    return;
                }

                if (item[childrenKey]) {
                    if (depthFirst) {
                        var re = once(item[childrenKey], eachFunc, childrenKey, depthFirst, deep + 1);
                        if (re) {
                            return;
                        }
                    } else {
                        children.push(item[childrenKey]);
                    }
                }
            }

            if (!depthFirst) {
                for (var i = 0; i < children.length; i++) {
                    var re = once(children[i], eachFunc, childrenKey, depthFirst, deep + 1);
                    if (re) {
                        return;
                    }
                }
            }
            return;
        }
    },

    /**
     * 遍历对象每一个元素，可以获取对象键名组成的 path  (["c","d","e"])
     *
     * 处理函数：
     * eachFunc(当前元素, 当前 path, 当层深度 )
     *
     * pathEach( {
     *  b:111,
     *  c:{d:{e:222}}
     * })
     *
     * @param {object} object
     * @param {function} eachFunc 处理函数
     * @param {boolean|function} [checkCycle] 是否检查循环引用，为 true 会跳过循环引用，还可以提供一个函数 checkCycleCallback(target, path, cyclePath) 来处理一些事
     */
    pathEach: function pathEach(object, eachFunc, checkCycle) {

        if (checkCycle) {
            var useCycleCallback = typeof checkCycle === "function";
            var cycleCache = new WeakMap();

            cycleCache.set(object, useCycleCallback ? [] : true);
        }

        _each(object, [], 0);

        function _each(object) {
            var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            for (var key in object) {
                var item = object[key];

                // 检查循环引用
                if (checkCycle && (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object") {
                    var nowPath = [].concat(toConsumableArray(path), [key]);

                    if (cycleCache.get(item)) {
                        if (useCycleCallback) {
                            checkCycle(item, nowPath, cycleCache.get(item));
                        }
                        continue; // >_< 忽略循环引用
                    } else {
                        if (useCycleCallback) {
                            cycleCache.set(item, nowPath);
                        } else {
                            cycleCache.set(item, true);
                        }
                    }
                }

                var nowPath = [].concat(toConsumableArray(path), [key]);
                eachFunc(item, nowPath, deep);

                if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object") {
                    _each(item, nowPath, deep + 1);
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
var Rect = {
    /**
     * 坐标转换
     * 把 {right, left, top, bottom} 转化为 {x, y , w, h}
     * @param boundsInfo
     * @returns {{x: null, y: null, w: null, h: null}}
     */
    rltb2xywh: function rltb2xywh(boundsInfo) {
        var newBoundsInfo = { x: null, y: null, w: null, h: null };
        newBoundsInfo.x = boundsInfo.left;
        newBoundsInfo.y = boundsInfo.top;
        newBoundsInfo.h = boundsInfo.bottom - boundsInfo.top;
        newBoundsInfo.w = boundsInfo.right - boundsInfo.left;
        return newBoundsInfo;
    },

    /**
     * 坐标转换
     * 把 {x, y , w, h} 转化为 {right, left, top, bottom}
     * @param boundsInfo
     * @returns {{left: null, right: null, top: null, bottom: null}}
     */
    xywh2rltb: function xywh2rltb(boundsInfo) {
        var newBoundsInfo = { left: null, right: null, top: null, bottom: null };
        newBoundsInfo.left = boundsInfo.x;
        newBoundsInfo.top = boundsInfo.y;
        newBoundsInfo.right = boundsInfo.x + boundsInfo.w;
        newBoundsInfo.bottom = boundsInfo.y + boundsInfo.h;
        return newBoundsInfo;
    },

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
    paddingXywh: function paddingXywh(xywh, padding) {

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
    },

    /**
     * 计算多个 xywh 矩形的边界
     *
     * getXywhsRange([xywh])
     * @param xywhs
     * @returns {{x: null, y: null, w: null, h: null}}
     */
    getXywhsRange: function getXywhsRange(xywhs) {

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
    },

    /**
     * 整体移动多个 xywh 到某点，保留原 xywhs 相对位置。
     * 会改变 xywhs 里每个 xywh 对象的 x，y 值。
     * @param xywhs
     * @param xy
     */
    moveXywhs: function moveXywhs(xywhs, xy) {

        var range = Rect.getXywhsRange(xywhs);
        for (var i = 0; i < xywhs.length; i++) {
            var xywh = xywhs[i];
            xywh.x = xy.x + xywh.x - range.x;
            xywh.y = xy.y + xywh.y - range.y;
        }

        return xywhs;
    },

    /**
     * 2 个 xywh 是否有重叠
     * @param xywhA
     * @param xywhB
     * @return {boolean}
     */
    xywhHasCover: function xywhHasCover(xywhA, xywhB) {

        var rltbA = Rect.xywh2rltb(xywhA);
        var rltbB = Rect.xywh2rltb(xywhB);

        var hasOverlay = !!(rltbA.left <= rltbB.right && rltbA.right >= rltbB.left && rltbA.top <= rltbB.bottom && rltbA.bottom >= rltbB.top);

        return hasOverlay;
    }

    /**
     * @exports Rect
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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var rngBrowser = createCommonjsModule(function (module) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}
});

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

var bytesToUuid_1 = bytesToUuid;

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rngBrowser)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid_1(rnds);
}

var v4_1 = v4;

function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function(hex) {
    bytes.push(parseInt(hex, 16));
  });

  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape
  var bytes = new Array(str.length);
  for (var i = 0; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes;
}

var v35 = function(name, version, hashfunc) {
  var generateUUID = function(value, namespace, buf, offset) {
    var off = buf && offset || 0;

    if (typeof(value) == 'string') value = stringToBytes(value);
    if (typeof(namespace) == 'string') namespace = uuidToBytes(namespace);

    if (!Array.isArray(value)) throw TypeError('value must be an array of bytes');
    if (!Array.isArray(namespace) || namespace.length !== 16) throw TypeError('namespace must be uuid string or an Array of 16 byte values');

    // Per 4.3
    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = (bytes[6] & 0x0f) | version;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;

    if (buf) {
      for (var idx = 0; idx < 16; ++idx) {
        buf[off+idx] = bytes[idx];
      }
    }

    return buf || bytesToUuid_1(bytes);
  };

//generateUUID.name = name;

  // Pre-defined namespaces, per Appendix C
  generateUUID.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
  generateUUID.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';

  return generateUUID;
};

// Adapted from Chris Veness' SHA1 code at

function f(s, x, y, z) {
  switch (s) {
    case 0: return (x & y) ^ (~x & z);
    case 1: return x ^ y ^ z;
    case 2: return (x & y) ^ (x & z) ^ (y & z);
    case 3: return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return (x << n) | (x>>> (32 - n));
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof(bytes) == 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
    bytes = new Array(msg.length);
    for (var i = 0; i < msg.length; i++) bytes[i] = msg.charCodeAt(i);
  }

  bytes.push(0x80);

  var l = bytes.length/4 + 2;
  var N = Math.ceil(l/16);
  var M = new Array(N);

  for (var i=0; i<N; i++) {
    M[i] = new Array(16);
    for (var j=0; j<16; j++) {
      M[i][j] =
        bytes[i * 64 + j * 4] << 24 |
        bytes[i * 64 + j * 4 + 1] << 16 |
        bytes[i * 64 + j * 4 + 2] << 8 |
        bytes[i * 64 + j * 4 + 3];
    }
  }

  M[N - 1][14] = ((bytes.length - 1) * 8) /
    Math.pow(2, 32); M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = ((bytes.length - 1) * 8) & 0xffffffff;

  for (var i=0; i<N; i++) {
    var W = new Array(80);

    for (var t=0; t<16; t++) W[t] = M[i][t];
    for (var t=16; t<80; t++) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var t=0; t<80; t++) {
      var s = Math.floor(t/20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = (H[0] + a) >>> 0;
    H[1] = (H[1] + b) >>> 0;
    H[2] = (H[2] + c) >>> 0;
    H[3] = (H[3] + d) >>> 0;
    H[4] = (H[4] + e) >>> 0;
  }

  return [
    H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff,
    H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff,
    H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff,
    H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff,
    H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff
  ];
}

var sha1Browser = sha1;

var v5 = v35('v5', 0x50, sha1Browser);

var v1Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v2Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v3Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v5Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var nilRegex = /^[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12}$/i;
var anyRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function v1(str) {
    return v1Regex.test(str);
}

function v2(str) {
    return v2Regex.test(str);
}

function v3(str) {
    return v3Regex.test(str);
}

function v4$1(str) {
    return v4Regex.test(str);
}

function v5$1(str) {
    return v5Regex.test(str);
}

function nil(str) {
    return nilRegex.test(str);
}

function anyNonNil(str) {
    return anyRegex.test(str);
}

var isUuid = {
    v1: v1,
    v2: v2,
    v3: v3,
    v4: v4$1,
    v5: v5$1,
    nil: nil,
    anyNonNil: anyNonNil
};

//      ___                       ___           ___           ___           ___           ___

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
        return v4_1();
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
            var namespace = v5(namespace, "f8061fba-842b-4cc5-9872-9348e2e06916");
        }

        return v5(name, namespace);
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

        return byteArraytoHexString(sha1Browser(str));
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

        var funcs = [isUuid.v4, isUuid.v5, isUuid.v3, isUuid.v2, isUuid.v1];
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

var utils = createCommonjsModule(function (module, exports) {

var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

exports.arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

exports.isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
});
var utils_1 = utils.arrayToObject;
var utils_2 = utils.merge;
var utils_3 = utils.assign;
var utils_4 = utils.decode;
var utils_5 = utils.encode;
var utils_6 = utils.compact;
var utils_7 = utils.isRegExp;
var utils_8 = utils.isBuffer;

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var formats = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults$1 = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify$1 = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults$1.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

var stringify_1 = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults$1.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults$1.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults$1.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults$1.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults$1.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults$1.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults$1.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify$1(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};

var has$1 = Object.prototype.hasOwnProperty;

var defaults$2 = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults$2.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults$2.decoder);
            val = options.decoder(part.slice(pos + 1), defaults$2.decoder);
        }
        if (has$1.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has$1.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has$1.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var parse$1 = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults$2.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults$2.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults$2.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults$2.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults$2.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults$2.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults$2.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults$2.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults$2.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};

var lib = {
    formats: formats,
    parse: parse$1,
    stringify: stringify_1
};

// Created by nullice on 2018/04/23 - 11:21 

var Url = {

    /**
     * 移除 Url 的 Query，即使在 # 后的也可以移除
     * @param url
     */
    removeQuery: function removeQuery(url) {
        url = url + "";
        return url.replace(/\?.*$/, "");
    },

    /**
     * 获取链接的 Query，即使在 # 后的也可以获取
     * @param {{string}} url
     * @param  {{boolean}} getObject 是否解析成对象
     * @returns {string}
     */
    getQuery: function getQuery(url, getObject) {
        var reg = /\?.*/;
        var re = reg.exec(url);
        if (re) {
            var query = re[0];
            if (getObject) {
                return lib.parse(query.slice(1));
            } else {
                return query.slice(1);
            }
        }
    },
    urlParse: function urlParse$$1() {}

    /**
     * @exports Url
     */
};

// Created by nullice on 2018/05/02 - 19:33

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
//              · Cache ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

/**
 * 缓存相关
 * @type {{}}
 */
var Cache = {

    CacheObject: function () {
        /**
         * 创建一个对象缓存
         * @param [maxSize] 缓存最大数量，达到最大数量后会清除最后的缓存（LRU 最近最少使用）
         * @param [blankSize] 预留空位，缓存满时清除末位缓存的数量，设置的大可以减少缓存清理的次数，但是过大会影响缓存可用数。
         */
        function CacheObject() {
            var maxSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 64;
            var blankSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
            classCallCheck(this, CacheObject);


            /**
             *  缓存实际存储对象
             * @type {{}}
             */
            this.cacheOb = {};
            /**
             * 键队列
             * @type {Array}
             */
            this.keyList = [];
            this.keyListOffset = 0;

            /**
             * 键映射
             * @type {{}}
             */
            this.keyMap = {};

            /**
             * 最大缓存数量
             * @type {number}
             */
            this.maxSize = maxSize;

            /**
             * 空置数量
             * @type {number}
             */
            this.blankSize = blankSize;

            /**
             * 当前缓存数量
             * @type {number}
             */
            this.size = 0;
        }

        createClass(CacheObject, [{
            key: "get",
            value: function get$$1(key) {
                var _this = this;

                // 如果 key 已在 keyList 中存在，则设置它为 undefined
                if (this.keyMap[key] !== undefined) {

                    var keyIndex = this.keyMap[key] + this.keyListOffset;
                    this.keyList[keyIndex] = undefined;
                    this.keyList.push(key);
                    var index = this.keyList.length - 1;
                    this.keyMap[key] = index - this.keyListOffset;
                }

                if (this.keyList.length > 200) {
                    setTimeout(function () {
                        _this.reMap();
                    }, 0);
                }

                return this.cacheOb[key];
            }
        }, {
            key: "set",
            value: function set$$1(key, value) {
                this.size++;

                if (this.size > this.maxSize) {
                    //开始淘汰
                    this.eliminate();
                }

                this.keyList.push(key);
                var index = this.keyList.length - 1;
                // 如果 key 已在 keyList 中存在，则设置它为 undefined
                if (this.keyMap[key] !== undefined) {
                    this.keyList[this.keyMap[key] + this.keyListOffset] = undefined;
                    this.size--;
                }
                this.keyMap[key] = index - this.keyListOffset;
                return this.cacheOb[key] = value;
            }

            /**
             * 淘汰过期缓存
             */

        }, {
            key: "eliminate",
            value: function eliminate() {
                for (var i = 0, done = 0; done < this.blankSize; i++) {
                    var key = this.keyList.shift();
                    this.keyListOffset--;
                    if (key !== undefined) {

                        delete this.cacheOb[key];
                        delete this.keyMap[key];
                        this.size--;
                        done++;
                    }
                }
            }
        }, {
            key: "reMap",
            value: function reMap() {

                var newList = [];
                for (var i = 0; i < this.keyList.length; i++) {
                    var key = this.keyList[i];
                    if (key !== undefined) {
                        newList.push(key);
                    }
                }
                this.keyList = newList;
                this.keyListOffset = 0;
                for (var i = 0; i < this.keyList.length; i++) {
                    var _key = this.keyList[i];
                    this.keyMap[_key] = i;
                }
            }

            /**
             * 清空所有缓存
             */

        }, {
            key: "clear",
            value: function clear() {
                this.cacheOb = {};
                this.keyList = [];
                this.keyMap = {};
                this.keyListOffset = 0;
                this.size = 0;
            }
        }]);
        return CacheObject;
    }()

    /**
     * @exports Cache
     */
};

var Richang = {
    Object: ObjectOBJ,
    String: StringSTR,
    Type: TypeTYP,
    Array: AarryArr,
    Rect: Rect,
    Console: ConsoleCON,
    Tool: Tool,
    File: FileFIL,
    Calc: Calc,
    Url: Url,
    Cache: Cache
};

exports.Object = ObjectOBJ;
exports.String = StringSTR;
exports.Type = TypeTYP;
exports.Array = AarryArr;
exports.Rect = Rect;
exports.Console = ConsoleCON;
exports.Tool = Tool;
exports.File = FileFIL;
exports.Calc = Calc;
exports.Url = Url;
exports.Cache = Cache;
exports.default = Richang;

Object.defineProperty(exports, '__esModule', { value: true });

})));
