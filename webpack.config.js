const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")

//  dirname  地址
let dirname = __dirname

// package.json
let packageJson = require(path.resolve(dirname, "package.json"))

// 构建 lib 目录
let BUILD_LIB = process.env.BUILD_LIB


// webpack 插件
const CopyWebpackPlugin = require("copy-webpack-plugin")
const DllReferencePlugin = require("webpack/lib/DllReferencePlugin")

// 要拷贝的目录
let copyList = [{ from: path.resolve(dirname, "debug"), to: path.resolve(dirname, "dist") }]

// 要清空的目录
let cleanList = BUILD_LIB ? [path.resolve(dirname, "lib")] : [path.resolve(dirname, "dist")]

// js dll 目录
let jsDllPath = path.resolve(dirname, "dll/vendors.dll.js")
if (fs.existsSync(jsDllPath)) copyList.push({ from: jsDllPath, to: path.resolve(dirname, "dist") })

let babelOptions = require(path.resolve(dirname, "./babel.config.js"))

let baseConfig = {
    entry: {
        index: path.resolve(dirname, "src/index.ts")
    },
    mode: "development",
    target: "web",
    output: {
        filename: "[name].js",
        path: path.resolve(dirname, "dist"),
        library: packageJson.name,
        libraryTarget: "umd",
        // libraryExport: "default",
    },
    resolve: {
        symlinks: false,
        extensions: [".js", ".vue", ".ts", ".tsx", "css"],
        alias: {
            "@": path.resolve(dirname, "src")
        }
    },
    plugins: [new CleanWebpackPlugin(cleanList), new CopyWebpackPlugin(copyList)],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{ loader: "babel-loader", options: babelOptions }, { loader: "ts-loader" }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{ loader: "babel-loader", options: babelOptions }, { loader: "ts-loader" }]
            }
        ]
    },

    externals: {}
}

if (BUILD_LIB) {
    baseConfig.output.path = path.resolve(dirname, "lib")
    baseConfig.output.filename = `${packageJson.name}.js`
}

// 载入 DLL
let jsDllManifestPath = path.resolve(dirname, "./dll/vendors.manifest.json")
if (fs.existsSync(jsDllManifestPath) && !BUILD_LIB) {
    baseConfig.plugins.push(
        new DllReferencePlugin({
            manifest: jsDllManifestPath
        })
    )
}

// 构建分析插件，分析构建结果时启用
if (process.env.ANALYZER_WEBPACK) {
    let BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
    baseConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = baseConfig
