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
//            · NodeTool ·
//
//       By nullice ui@nullice.com
//             nullice.com
//            license: MIT

var nodeCrypto = require("crypto")
/**
 *  Node 工具
 * @type {{}}
 */
var NodeTool = {

    /**
     * 获取数据的 MD5 值 -
     * getMD5("白色的空曲奇在发热") => 3b81233f69cc6dbf83899148b888f0db
     * @param {buffer|string} inData 输入的数据
     * @returns {*|PromiseLike<ArrayBuffer>}
     */
    getMD5: function (inData) {
        var md5 = nodeCrypto.createHash("md5")
        md5.update(inData)
        var str = md5.digest("hex")
        return str
    },

    /**
     * 获取数据的 getSHA256 值 -
     * getSHA256("白色的空曲奇在发热") => 5be124e39cb90f3144fba1a798ab3a8472c24a44c0f9efc305f76c1e34de848f
     * @param {buffer|string} inData 输入的数据
     * @returns {*|PromiseLike<ArrayBuffer>}
     */
    getSHA256: function (inData) {
        var md5 = nodeCrypto.createHash("sha256")
        md5.update(inData)
        var str = md5.digest("hex")
        return str
    },




    /**
     *  ArrayBuffer to Buffer
     * @param {arrayBuffer} arrayBuffer
     * @returns {Buffer}
     */
    arrayBuffertoBuffer: function (arrayBuffer) {
        var buf = new Buffer(arrayBuffer.byteLength)
        var view = new Uint8Array(arrayBuffer)
        for (var i = 0; i < buf.length; ++i)
        {
            buf[i] = view[i]
        }
        return buf
    },

}

console.log(NodeTool.getSHA256("白色的空曲奇在发热"))
// export default NodeTool
