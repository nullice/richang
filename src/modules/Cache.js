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

    CacheObject: class CacheObject {
        /**
         * 创建一个对象缓存
         * @param [maxSize] 缓存最大数量，达到最大数量后会清除最后的缓存（LRU 最近最少使用）
         * @param [blankSize] 预留空位，缓存满时清除末位缓存的数量，设置的大可以减少缓存清理的次数，但是过大会影响缓存可用数。
         */
        constructor (maxSize = 64, blankSize = 3)
        {

            /**
             *  缓存实际存储对象
             * @type {{}}
             */
            this.cacheOb = {}
            /**
             * 键队列
             * @type {Array}
             */
            this.keyList = []
            this.keyListOffset = 0

            /**
             * 键映射
             * @type {{}}
             */
            this.keyMap = {}

            /**
             * 最大缓存数量
             * @type {number}
             */
            this.maxSize = maxSize

            /**
             * 空置数量
             * @type {number}
             */
            this.blankSize = blankSize

            /**
             * 当前缓存数量
             * @type {number}
             */
            this.size = 0

        }

        get (key)
        {
            // 如果 key 已在 keyList 中存在，则设置它为 undefined
            if (this.keyMap[key] !== undefined)
            {

                let keyIndex = this.keyMap[key] + this.keyListOffset
                this.keyList[keyIndex] = undefined
                this.keyList.push(key)
                let index = this.keyList.length - 1
                this.keyMap[key] = index - this.keyListOffset
            }


            if (this.keyList.length > 200)
            {
                setTimeout(() =>
                {
                    this.reMap()
                }, 0)
            }

            return this.cacheOb[key]
        }

        set (key, value)
        {
            this.size++

            if (this.size > this.maxSize)
            {
                //开始淘汰
                this.eliminate()
            }

            this.keyList.push(key)
            let index = this.keyList.length - 1
            // 如果 key 已在 keyList 中存在，则设置它为 undefined
            if (this.keyMap[key] !== undefined)
            {
                this.keyList[this.keyMap[key] + this.keyListOffset] = undefined
                this.size--
            }
            this.keyMap[key] = index - this.keyListOffset
            return this.cacheOb[key] = value
        }

        /**
         * 淘汰过期缓存
         */
        eliminate ()
        {
            for (var i = 0, done = 0; done < this.blankSize; i++)
            {
                var key = this.keyList.shift()
                this.keyListOffset--
                if (key !== undefined)
                {

                    delete  this.cacheOb[key]
                    delete  this.keyMap[key]
                    this.size--
                    done++
                }
            }
        }

        reMap ()
        {

            let newList = []
            for (var i = 0; i < this.keyList.length; i++)
            {
                let key = this.keyList[i]
                if (key !== undefined)
                {
                    newList.push(key)
                }
            }
            this.keyList = newList
            this.keyListOffset = 0
            for (var i = 0; i < this.keyList.length; i++)
            {
                let key = this.keyList[i]
                this.keyMap[key] = i
            }

        }

        /**
         * 清空所有缓存
         */
        clear ()
        {
            this.cacheOb = {}
            this.keyList = []
            this.keyMap = {}
            this.keyListOffset = 0
            this.size = 0
        }

    },

}

/**
 * @exports Cache
 */
export default Cache
