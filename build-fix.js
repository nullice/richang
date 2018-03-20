// Created by nullice on 2018/03/20 - 12:32 

const fs = require("fs")

// uuid 模块有 generateUUID.name = name 重新设置 function name 的语句，这个在 bundle 打包时会出错，故注释掉
var text = fs.readFileSync("./node_modules/uuid/lib/v35.js").toString()
if (text.search(/  generateUUID.name = name;/) >= 0)
{
    text = text.replace(/  generateUUID.name = name;/, "//generateUUID.name = name;")
    fs.writeFileSync("./node_modules/uuid/lib/v35.js", text)
}


