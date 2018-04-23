
# Richang.js

[![npm](https://img.shields.io/badge/By%20%20nullice-2016~2018-51cc5d.svg)](https://nullice.com)
[![GitHub package version](https://img.shields.io/github/package-json/v/nullice/Richang.js.svg)](https://github.com/nullice/Richang.js)
[![npm](https://img.shields.io/npm/v/richang.js.svg)](https://npmjs.com/package/richang.js)

[![npm](https://img.shields.io/npm/dt/richang.js.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/nullice/Richang.js/badge.svg?branch=master)](https://coveralls.io/github/nullice/Richang.js?branch=master)
[![Build Status](https://travis-ci.org/nullice/Richang.js.svg?branch=master)](https://travis-ci.org/nullice/Richang.js)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)
](./LICENSE)

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

```


## Install

```bash
npm i -S richang.js
```


### 不使用 Node 相关模块
```js
// ES6 modules
import Richang from "richang.js"

// Node.js (CJS) modules
var Richang =  require ("richang.js")

// 载入纯 ES6 modules
import Richang from "richang.js/dist/RichangEs.js"

// 捆绑了所有 node_modules 依赖
import Richang from "richang.js/dist/RichangEs.bundle.js"
```

### 使用 Node 相关模块
```js
// 依赖在 node_modules 中
var Richang =  require ("richang.js/dist/RichangNode.js")

// 捆绑了所有 node_modules 依赖(bable 目标 Node 1.2 的模块, transform-runtime)
var Richang =  require ("richang.js/dist/RichangNode.bundle.js")

// 如果项目没有使用 babel, 可能需要单独使用 babel-polyfill
require("babel-polyfill")
var Richang =  require ("richang.js/dist/RichangNode.bundle.js")

```













