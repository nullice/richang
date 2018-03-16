const path = require("path")

const nodeBuiltInList = [
    "assert",
    "async_hooks",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "constants",
    "crypto",
    "dgram",
    "dns",
    "domain",
    "events",
    "fs",
    "http",
    "http2",
    "https",
    "inspector",
    "module",
    "net",
    "os",
    "path",
    "perf_hooks",
    "process",
    "punycode",
    "querystring",
    "readline",
    "repl",
    "stream",
    "string_decoder",
    "timers",
    "tls",
    "tty",
    "url",
    "util",
    "v8",
    "vm",
    "zlib",
]

module.exports = [
    {
        entry: "./src/index.node.js",
        mode: "development",
        target: "web",
        output: {
            filename: "RichangNode.bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        externals: nodeBuiltInList,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "env", {
                                    "targets": {
                                        "node": "1.2",
                                    },
                                    "modules": false,
                                }]],
                        },
                    },

                },
            ],

        },
    },

    {
        entry: "./src/index.js",
        mode: "development",
        target: "web",
        output: {
            filename: "RichangEs.bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        externals: nodeBuiltInList,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"],
                        },
                    },

                },
            ],

        },
    },
]
