// Created by nullice on 2019/01/21 - 01:12 


window.a={a:123,b:{c:123}}
window.g = richang.gob.GobFactory(a)
window.gc = richang.gob.GobFactory.getGobCore(g)

console.log("g",g)
console.log("gc",gc )
