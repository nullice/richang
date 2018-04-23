// Created by nullice on 2018/04/23 - 11:21 

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
//               · Url ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

/**
 * URL 链接相关模块
 * @type {{getType: TypeTYP.getType}}
 */

import urlParse from "url-parse"
import qs from "qs"

var Url = {

    /**
     * 移除 Url 的 Query，即使在 # 后的也可以移除
     * @param url
     */
    removeQuery: function (url)
    {
        const reg = /\?.*$/
        url = url + ""
        return url.replace(/\?.*$/, "")
    },

    /**
     * 获取链接的 Query，即使在 # 后的也可以获取
     * @param {{string}} url
     * @param  {{boolean}} getObject 是否解析成对象
     * @returns {string}
     */
    getQuery: function (url, getObject)
    {
        const reg = /\?.*/
        var re = reg.exec(url)
        if (re)
        {
            var query = re[0]
            if (getObject)
            {
                return qs.parse(query.slice(1))
            } else
            {
                return query.slice(1)
            }
        }
    },
    urlParse: function ()
    {

    },

}

/**
 * @exports Url
 */
export default Url
