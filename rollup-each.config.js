/**
 * Created by nullice on 2017/4/5.
 */

/**
 * Created by nullice on 2017/4/5.
 */

import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"

var fs = require("fs")
var fileNameList = fs.readdirSync("./src/modules")

function genConfig (name)
{
    return {
        input: "src/modules/" + name,
        output: {
            file: "./dist/modules/" + name + ".cjs.js",
            format: "cjs",
            name: name,
        },
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: "node_modules/**",
                plugins: ["external-helpers"],
            }),
        ],

    }
}

let  configs = fileNameList.map(x => genConfig(x))
console.log("[configs]:",configs)

export default configs
