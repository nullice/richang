const path = require("path")

module.exports = [
    {
        entry: "./src/index.node.js",
        mode: "development",
        target: "node",
        output: {
            library: "Richang",
            libraryTarget: "umd",
            libraryExport: "default",
            filename: "RichangNode.bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        // externals: nodeBuiltInList,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            // plugins: ['transform-runtime'],
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
            library: "Richang",
            libraryTarget: "umd",
            libraryExport: "default",
            filename: "RichangEs.bundle.js",
        },
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
                                    "modules": false,
                                }]],
                        },
                    },

                },
            ],

        },
    },
]
