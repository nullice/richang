// 构建 DLL 模块
// 把第三方模块单独构建

const path = require("path")
const fs = require("fs")
var webpack = require("webpack")
const DllPlugin = require("webpack/lib/DllPlugin")


// 确定要处理的目录
let dirname = __dirname
let packageJson = require(path.resolve(dirname, "package.json"))

module.exports = {
    mode: "production",
    entry: {
        // 第三方模块：
        vendors: Object.keys(packageJson.dependencies)
    },
    resolve: {
        modules: [path.resolve(dirname, 'node_modules'), 'node_modules']
    },
    output: {
        path: path.resolve(dirname, "dll"),
        filename: "[name].dll.js",
        library: "_dll_[name]"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        // 接入 DllPlugin
        new DllPlugin({
            context: __dirname,
            // 动态链接库的全局变量名称，需要和 output.library 中保持一致
            // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
            name: "_dll_[name]",
            // 描述动态链接库的 manifest.json 文件输出时的文件名称
            path: path.join(dirname, "dll", "[name].manifest.json")
        })
        // new BundleAnalyzerPlugin()
    ]
}
