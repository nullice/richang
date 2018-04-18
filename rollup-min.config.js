/**
 * Created by nullice on 2017/4/5.
 */

import uglify from "rollup-plugin-uglify"
import babel from "rollup-plugin-babel"

import configs from "./rollup.config"

configs.forEach((x) =>
{
    x.plugins.push(uglify())
    x.output.file =  x.output.file.replace(/\.js$/,".min.js")
})

export default configs
