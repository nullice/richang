// Created by nullice on 2018/05/04 - 11:58 

var child_process = require("child_process")
var fs = require("fs")
var fileNameList = fs.readdirSync("./dist/modules/")

fileNameList.forEach((x) =>
{
    if (/.js$/.test(x))
    {
        var x = `dtsmake -s ./dist/modules/${x}`
        console.log(x)
        child_process.exec(x)
    }

})
