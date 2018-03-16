


``` js
//      ___                       ___           ___           ___           ___           ___
//     /\  \                     /\__\         /\  \         /\  \         /\  \         /\__\
//    /::\  \       ___         /:/  /         \:\  \       /::\  \        \:\  \       /:/ _/_
//   /:/\:\__\     /\__\       /:/  /           \:\  \     /:/\:\  \        \:\  \     /:/ /\  \
//  /:/ /:/  /    /:/__/      /:/  /  ___   ___ /::\  \   /:/ /::\  \   _____\:\  \   /:/ /::\  \
// /:/_/:/__/___ /::\  \     /:/__/  /\__\ /\  /:/\:\__\ /:/_/:/\:\__\ /::::::::\__\ /:/__\/\:\__\
// \:\/:::::/  / \/\:\  \__  \:\  \ /:/  / \:\/:/  \/__/ \:\/:/  \/__/ \:\~~\~~\/__/ \:\  \ /:/  /
//  \::/~~/~~~~   ~~\:\/\__\  \:\  /:/  /   \::/__/       \::/__/       \:\  \        \:\  /:/  /
//   \:\~~\          \::/  /   \:\/:/  /     \:\  \        \:\  \        \:\  \        \:\/:/  /
//    \:\__\         /:/  /     \::/  /       \:\__\        \:\__\        \:\__\        \::/  /
//     \/__/         \/__/       \/__/         \/__/         \/__/         \/__/         \/__/
//
//
//                日常
//        +-------------------+
//        |   Richang  JSEX   |
//        +-------------------+



## Install

```bash
npm i -S richang.js
```

### 无 Node 模块
```js
// ES6 modules
import Richang from "richang.js"

// Node.js (CJS) modules
var Richang =  require ("richang.js")

// 载入纯 ES6 modules
import Richang from "richang.js/dist/RichangEs.js"

```

### 有 Node 模块
```js
// 依赖在 node_modules 中
var Richang =  require ("richang.js/dist/RichangNode.js")


// 捆绑所有依赖 without node_modules
var Richang =  require ("richang.js/dist/RichangNode.bundle.js")
```

### Node 直接使用





// 载入捆绑了所有 Node 依赖（ node_modules 中的内容），并 bable 转换目标为 Node 1.2 的模块
import Richang require ("richang.js/dist/RichangNode.bundle.js")






```
