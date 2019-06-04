// Created by nullice on 2019/01/21 - 01:12


window.a={a:123,b:{c:123}}
window.g = richang.gob.GobFactory({}, {vue:true})


window.gc = richang.gob.GobFactory.getGobCore(g)
window.gc.subscribe(o => console.log("[subscribe]", o))
console.log("g", g)
console.log("gc", gc)
