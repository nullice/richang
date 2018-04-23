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
    isEmptyObject: function (obj)
    {
        for (var name in obj)
        {
            return false
        }
        return true
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

    objectCopyToObject: function (ob1, ob2, func_allowCopy, func_rename, func_valueFiter, func_for)
    {

        if (ob2 == undefined)
        {return}
        for (var x in ob1)
        {

            if (func_for != undefined)
            {
                func_for(ob1, ob2, x)
            }

            var _allowCopy = true
            if (func_allowCopy != undefined)
            {
                _allowCopy = func_allowCopy(x, ob1[x])
            }

            var name = x
            if (func_rename != undefined)
            {
                name = func_rename(x, ob1[x])
            }

            if (ob1[x] != undefined && ob1[x].constructor === Object)
            {
                if (typeof ob2[name] !== "object")
                {
                    ob2[name] = {}
                }

                this.objectCopyToObject(ob1[x], ob2[name], func_allowCopy, func_rename, func_valueFiter)
            } else
            {

                if (func_valueFiter != undefined)
                {
                    ob2[name] = func_valueFiter(x, ob1[x])

                } else
                {

                    ob2[name] = ob1[x]
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
    getObjectValueByNames: function (object, names, aheadEndTime)
    {
        var nowValue
        for (var i = 0; i < (names.length - (aheadEndTime || 0)); i++)
        {
            if (i == 0)
            {
                if (object[names[i]] != undefined)
                {
                    nowValue = object[names[i]]
                } else
                {
                    return undefined
                }

            } else
            {

                if (nowValue[names[i]] != undefined)
                {
                    nowValue = nowValue[names[i]]
                }
                else
                {
                    return undefined
                }

            }

        }

        return nowValue
    },

    /**
     * 根据属性名路径列表（names）对对象属性赋值
     * @param object 对象
     * @param names 属性名路径列表，如 [position,enableAssigns,y]
     * @param value 值
     */
    setObjectValueByNames: function (object, names, value)
    {
        var nowObject

        if (names.length == 1)
        {
            object[names[0]] = value
            return
        }

        for (var i = 0; i < (names.length); i++)
        {
            if (i == 0 && names.length > 2)
            {
                if (object[names[0]] == undefined)
                {
                    object[names[0]] = {}
                }
                nowObject = object[names[0]]
            }
            else if (i < names.length - 2 && names.length > 2)
            {
                if (nowObject[names[i]] == undefined)
                {
                    nowObject[names[i]] = {}
                }

                nowObject = nowObject[names[i]]
            }
            else if (i == names.length - 2)
            {
                if (names.length == 2)
                {
                    if (object[names[0]] == undefined)
                    {
                        object[names[0]] = {}
                    }
                    nowObject = object[names[0]]

                    nowObject[names[1]] = value
                    return

                }
                else
                {

                    if (nowObject[names[i]] == undefined)
                    {
                        nowObject[names[i]] = {}
                    }

                    nowObject = nowObject[names[i]]
                    nowObject[names[i + 1]] = value
                    return
                }

            }
        }
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
    treeFind: function (objectArr, match, childrenKey, findAll, depthFirst)
    {

        if (typeof match == "function")
        {
            // 使用输入的匹配 function
            var matchFunc = match
        } else
        {
            var matchFunc = function (ob)
            {
                return (ob.id == match)
            }
        }

        function once (objectArr, match, childrenKey, findAll, depthFirst)
        {
            var reslut = []
            var children = []
            for (var i = 0; i < objectArr.length; i++)
            {
                var item = objectArr[i]

                if (matchFunc(item))
                {
                    reslut.push(item)
                    if (!findAll)
                    {
                        return reslut
                    }
                }

                if (item[childrenKey])
                {
                    if (depthFirst)
                    {
                        var re = once(item[childrenKey], match, childrenKey, findAll, depthFirst)
                        if (!findAll && re.length > 0)
                        {
                            return re
                        }
                        reslut = reslut.concat(re)

                    } else
                    {
                        children.push(item[childrenKey])
                    }
                }
            }

            if (!depthFirst)
            {
                for (var i = 0; i < children.length; i++)
                {
                    var re = once(children[i], match, childrenKey, findAll, depthFirst)
                    if (!findAll && re.length > 0)
                    {
                        return re
                    }
                    reslut = reslut.concat(re)
                }
            }

            return reslut
        }

        var re = once(objectArr, matchFunc, childrenKey, findAll, depthFirst)
        if (!findAll)
        {
            return re.length > 0 ? re[0] : null
        } else
        {
            return re
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
    treeEach: function (objectArr, eachFunc, childrenKey, depthFirst)
    {
        var deepLengths = []
        var count = 0
        var deepAll = 0

        if (!eachFunc)
        {eachFunc = (o) => {}}

        once(objectArr, eachFunc, childrenKey, depthFirst, 0)
        return {struct: deepLengths, deep: deepAll + 1, total: count}

        function once (objectArr, eachFunc, childrenKey, depthFirst, deep)
        {
            if (deep > deepAll)
            {
                deepAll = deep
            }

            var children = []
            for (var i = 0; i < objectArr.length; i++)
            {
                count++
                if (deepLengths[deep] == undefined)
                {
                    deepLengths[deep] = 1
                } else
                {
                    deepLengths[deep]++
                }

                var item = objectArr[i]
                if (eachFunc(item, deep, deepLengths[deep], count, objectArr, i))
                {
                    return
                }

                if (item[childrenKey])
                {
                    if (depthFirst)
                    {
                        var re = once(item[childrenKey], eachFunc, childrenKey, depthFirst, deep + 1)
                        if (re)
                        {
                            return
                        }
                    } else
                    {
                        children.push(item[childrenKey])
                    }
                }
            }

            if (!depthFirst)
            {
                for (var i = 0; i < children.length; i++)
                {
                    var re = once(children[i], eachFunc, childrenKey, depthFirst, deep + 1)
                    if (re)
                    {
                        return
                    }
                }
            }
            return
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
    pathEach (object, eachFunc, checkCycle)
    {

        if (checkCycle)
        {
            var useCycleCallback = typeof checkCycle === "function"
            var cycleCache = new WeakMap()

            cycleCache.set(object, useCycleCallback ? [] : true)
        }

        _each(object, [], 0)

        function _each (object, path = [], deep = 0)
        {
            for (var key in object)
            {
                var item = object[key]

                // 检查循环引用
                if (checkCycle && typeof item === "object")
                {
                    if (cycleCache.get(item))
                    {
                        if (useCycleCallback)
                        {
                            checkCycle(item, path, cycleCache.get(item))
                        }
                        continue // >_< 忽略循环引用
                    } else
                    {
                        if (useCycleCallback)
                        {
                            cycleCache.set(item, [...path, key])
                        } else
                        {
                            cycleCache.set(item, true)
                        }

                    }
                }

                var nowPath = [...path, key]
                eachFunc(item, nowPath, deep)

                if (typeof  item === "object")
                {
                    _each(item, nowPath, deep + 1)
                }
            }
        }
    },

}

/**
 * @exports ObjectOBJ
 */
export default ObjectOBJ
