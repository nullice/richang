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

var PNGJS = require("pngjs").PNG
var fs = require("fs")
var stream = require("stream")
var streamToBuffer = require("stream-to-buffer")


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
    getPngData: async function (data) {
        return new Promise(function (resolve, reject) {
            if (stream.PassThrough)
            {
                var bufferStream = new stream.PassThrough()
                bufferStream.end(data)
                bufferStream.pipe(new PNGJS({
                    filterType: 4,
                })).on("parsed", function () {
                    resolve(this.data)
                })
            } else
            {
                new PNGJS({filterType: 4}).parse(data, function (error, png) {
                    if (error)
                    {
                        reject("err pngParseAsync:", error)
                    }
                    resolve(png.data)
                })
            }
        })
    },

    /**
     * 把 ARGB 格式的像素 buffer 转化为可直接写入文件的 PNG buffer
     * @param {buffer} argbBuffer - argb
     * @param {number} channelCount - 通道数量 1-4
     * @param {object} wh - 高宽 {w, h}
     * @returns {Promise<buufer>}
     * @constructor
     */
    ARGB_BufferToPngFileBuffer: function (argbBuffer, channelCount, wh) {

        return new Promise((resove, reject) => {

            var len = argbBuffer.length
            var channels = channelCount || 4

            // convert from ARGB to RGBA, we do this every 4 pixel values (channelCount)
            for (var i = 0; i < len; i += channels)
            {
                var a = argbBuffer[i]
                argbBuffer[i] = argbBuffer[i + 1]
                argbBuffer[i + 1] = argbBuffer[i + 2]
                argbBuffer[i + 2] = argbBuffer[i + 3]
                argbBuffer[i + 3] = a
            }

            // init a new PNG
            var png = new PNGJS({
                width: wh.w,
                height: wh.h,
            })

            // set pixel data
            png.data = argbBuffer
            streamToBuffer(png.pack(), function (err, buffer) {
                if (err)
                {
                    reject(err)
                }
                resove(buffer)
            })

        })

    },

}


/**
 * @exports NodeImage
 */
export default NodeImage



