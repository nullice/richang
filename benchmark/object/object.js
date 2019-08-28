// Created by nullice on 2019/08/06 - 11:24

let Benchmark = require("benchmark")

let suite = new Benchmark.Suite()

// add tests

suite
    .add("typeof s", {
        fn: function(e) {
            if (typeof "s" === "string") {
            }
        },
        setup: () => {}
    })
    .add("typeof {}", function() {
        if (typeof {} === "object") {
        }
    })
    .add("{}.type)", function() {
       if({}.type === "item")
       {

       }

    })
    .on("cycle", function(event) {
        console.log(String(event.target))
    })
    .on("complete", function() {
        console.log("Fastest is " + this.filter("fastest").map("name"))
    })
    .run({ async: false })
