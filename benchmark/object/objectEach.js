// Created by nullice on 2019/08/06 - 11:31

let richang = require("./../../lib/richang.node").default

function fn1() {
    console.log("\n ---[only for] ")
    let ob = richang.object.objectGen()

    console.time("cast")
    let ids = []

    function fn(ob) {
        for (let key in ob) {
            let item = ob[key]
            ids.push(item.id)
            if (item.children) {
                fn(item.children)
            }
        }
    }
    fn(ob)
    console.timeEnd("cast")
    console.log("ids", ids.length)
}

function fn2() {


    console.log("\n ---[richang] ")
    let ob = richang.object.objectGen()

    console.time("cast")
    let ids = []

    richang.object.objectEach(
        { children: ob },
        (value, key, info, CONTOL) => {
            ids.push(value.id)
        },
        {
            childrenKey: "children",
            depthFirst: true
        }
    )

    console.timeEnd("cast")
    console.log("ids", ids.length)
}

fn1()
fn2()
