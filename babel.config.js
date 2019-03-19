module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                // useBuiltIns: "entry",
                targets: {
                    browsers: ["ie >= 8", "chrome >= 40", "safari >= 8"]
                }
            }
        ]
    ],
    plugins: ["@babel/plugin-transform-runtime"],
    env: {
        test: {
            presets: [
                [
                    "@babel/preset-env",
                    {
                        targets: { node: 8 }
                    }
                ]
            ]
            // plugins: ["@babel/plugin-syntax-dynamic-import", "@babel/plugin-proposal-class-properties"]
        }
    }
}
// "build": "cross-env  webpack --mode=production",
