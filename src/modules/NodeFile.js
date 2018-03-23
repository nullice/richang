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

const fs = require("fs")
const path = require("path")
const fsex = require("fs-extra")

const os = require("os")
import Time from "./Time.js"
import Tool from "./Tool.js"

var moment = require("moment")
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
    getTempDirManager: function (name) {
        var sysTempDir = os.tmpdir()

        // 创建主临时文件夹
        var mianTempDir = path.join(sysTempDir, name)
        fsex.ensureDirSync(mianTempDir)

        // 创建实例临时文件夹
        var timestamp = Time.genTimestamp()
        var tempDir = path.join(mianTempDir, timestamp)
        fsex.ensureDirSync(tempDir)

        var tempDirManager = {
            tempDir: tempDir,
            timestamp: timestamp,
            /**
             * 销毁临时目录
             */
            destroy ()
            {
                fsex.removeSync(this.tempDir)
            },

            /**
             * 清除过时的临时实例文件夹
             * @param day 清除这个天数（包括）之前的文件夹
             */
            clean (day = 0)
            {
                var now = new Date()
                var dirs = fs.readdirSync(this.mianTempDir)
                for (var i = 0; i < dirs.length; i++)
                {
                    if (dirs != timestamp) // 不清除
                    {
                        var itemDir = dirs[i]
                        var itemPath = path.join(this.mianTempDir, itemDir)
                        var stat = fs.statSync(itemPath)
                        var diffDay = moment(now).diff(stat.mtime, "days")

                        if (diffDay >= day)
                        {
                            fsex.remove(itemPath)
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
            genTempFilePath (subDir)
            {
                var genName = () => {
                    var rollName = Tool.rollString(12)
                    var name = rollName

                    if (subDir)
                    {
                        var filePath = path.join(this.tempDir, subDir, name)

                    } else
                    {
                        var filePath = path.join(this.tempDir, name)
                    }

                    if (fsex.pathExistsSync(filePath))
                    {
                        return genName()
                    } else
                    {
                        return filePath
                    }
                }
                return genName()

            },
        }
        return tempDirManager

    },

}

/**
 * @exports NodeFile
 */
export default NodeFile
