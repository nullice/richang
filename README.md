


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













## Members

<dl>
<dt><a href="#Time">Time</a> : <code>Object</code></dt>
<dd><p>时间日期操作相关模块</p>
</dd>
<dt><a href="#Tool">Tool</a> : <code>Object</code></dt>
<dd><p>通用工具相关模块</p>
</dd>
<dt><a href="#NodeFile">NodeFile</a> : <code>Object</code></dt>
<dd><p>文件操作相关模块</p>
</dd>
<dt><a href="#NodeDebug">NodeDebug</a> : <code>Object</code></dt>
<dd><p>Node 调试相关模块</p>
</dd>
<dt><a href="#NodeImage">NodeImage</a> : <code>Object</code></dt>
<dd><p>Node 图片相关模块</p>
</dd>
<dt><a href="#NodeTool">NodeTool</a> : <code>Object</code></dt>
<dd><p>Node 通用工具</p>
</dd>
<dt><a href="#ConsoleCON">ConsoleCON</a> : <code>Object</code></dt>
<dd><p>控制台相关功能模块</p>
</dd>
<dt><a href="#ObjectOBJ">ObjectOBJ</a> : <code>Object</code></dt>
<dd><p>对象操作相关操作</p>
</dd>
<dt><a href="#StringSTR">StringSTR</a> : <code>Object</code></dt>
<dd><p>字符串相关功能模块</p>
</dd>
<dt><a href="#Rect">Rect</a> : <code>Object</code></dt>
<dd><p>矩形处理相关模块</p>
</dd>
<dt><a href="#TypeTYP">TypeTYP</a> : <code>Object</code></dt>
<dd><p>类型相关模块</p>
</dd>
<dt><a href="#AarryArr">AarryArr</a> : <code>Object</code></dt>
<dd><p>数组相关功能模块</p>
</dd>
<dt><a href="#Calc">Calc</a> : <code>Object</code></dt>
<dd><p>计算相关功能模块</p>
</dd>
<dt><a href="#FileFIL">FileFIL</a> : <code>Object</code></dt>
<dd><p>文件操作相关模块</p>
</dd>
</dl>

<a name="Time"></a>

## Time : <code>Object</code>
时间日期操作相关模块

**Kind**: global variable  

* [Time](#Time) : <code>Object</code>
    * [.genTimestamp([raw])](#Time.genTimestamp)
    * [.parseTimestamp(timestamp)](#Time.parseTimestamp) ⇒ <code>Date</code>

<a name="Time.genTimestamp"></a>

### Time.genTimestamp([raw])
生成时间戳（当前时间的 32 进制）

**Kind**: static method of [<code>Time</code>](#Time)  

| Param | Type | Description |
| --- | --- | --- |
| [raw] | <code>Object</code> | 获取原始格式，比如 1521602474428 |

<a name="Time.parseTimestamp"></a>

### Time.parseTimestamp(timestamp) ⇒ <code>Date</code>
解析一个时间戳返回 date

**Kind**: static method of [<code>Time</code>](#Time)  

| Param |
| --- |
| timestamp | 

<a name="Tool"></a>

## Tool : <code>Object</code>
通用工具相关模块

**Kind**: global variable  

* [Tool](#Tool) : <code>Object</code>
    * [.genUUID_v4()](#Tool.genUUID_v4) ⇒ <code>string</code>
    * [.genUUID_v5(name, [namespace])](#Tool.genUUID_v5) ⇒ <code>\*</code>
    * [.genSHA1(str)](#Tool.genSHA1) ⇒ <code>\*</code>
    * [.formatUUID(str)](#Tool.formatUUID) ⇒ <code>string</code>
    * [.checkUUID(uuid)](#Tool.checkUUID) ⇒ <code>number</code>
    * [.roll(max, min)](#Tool.roll)
    * [.rollString(length, [dict])](#Tool.rollString) ⇒ <code>string</code>

<a name="Tool.genUUID_v4"></a>

### Tool.genUUID_v4() ⇒ <code>string</code>
生成一个随机的 UUIDgenUUID_v4() => 'f8061fba-842b-4cc5-9872-9348e2e06916'

**Kind**: static method of [<code>Tool</code>](#Tool)  
<a name="Tool.genUUID_v5"></a>

### Tool.genUUID_v5(name, [namespace]) ⇒ <code>\*</code>
根据一个名字和命名空间生成一个 UUID，这个 UUID 与名称+命名空间有一一对应，不随机（与标准不同，这里命名空间可不用 UUID 而是任何字符串，我们会用默认 UUID 和给命名空间生成一个 UUID）genUUID_v5("Gasoft_Mobiusbug.exe","BGLL") => '2cb20c42-026f-5d56-b33f-008e354ac8d3'

**Kind**: static method of [<code>Tool</code>](#Tool)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 名称 |
| [namespace] | <code>string</code> | 命名空间, |

<a name="Tool.genSHA1"></a>

### Tool.genSHA1(str) ⇒ <code>\*</code>
用 sha1 生成一个字符串genSHA1("nullice") => 51918a176c8e2b0af211a94c5478c58a54f239cd

**Kind**: static method of [<code>Tool</code>](#Tool)  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="Tool.formatUUID"></a>

### Tool.formatUUID(str) ⇒ <code>string</code>
把36位字符串转换成带横杠 UUID 的格式formatUUID("e9411a6f1a2e22dd2244b78ee491c616") => "e9411a6f1a2e22dd2244b78ee491c616"

**Kind**: static method of [<code>Tool</code>](#Tool)  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="Tool.checkUUID"></a>

### Tool.checkUUID(uuid) ⇒ <code>number</code>
检查一个字符串是 UUID 的版本或者是否是 UUID，返回 UUID 的版本，如果为 0 则说明不是 UUID

**Kind**: static method of [<code>Tool</code>](#Tool)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | uuid |

<a name="Tool.roll"></a>

### Tool.roll(max, min)
生成一个随机整数

**Kind**: static method of [<code>Tool</code>](#Tool)  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>number</code> | 最大值 |
| min | <code>number</code> | 最小值 |

<a name="Tool.rollString"></a>

### Tool.rollString(length, [dict]) ⇒ <code>string</code>
生成一个随机字符串

**Kind**: static method of [<code>Tool</code>](#Tool)  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>number</code> | 随机字符串长度 |
| [dict] | <code>string</code> | 随机字符字典，默认为 a—Z0-9 |

<a name="NodeFile"></a>

## NodeFile : <code>Object</code>
文件操作相关模块

**Kind**: global variable  
<a name="NodeFile.getTempDirManager"></a>

### NodeFile.getTempDirManager(name) ⇒ <code>\*</code>
生成一个临时文件夹管理器，会在系统临时目录中创建一个指定名字的临时文件夹，和一个实例临时文件夹可以用得到的 TempDirManager，申请临时文件名，和销毁临时文件夹var tepmDM = getTempDirManager("siphonink")tepmDM.genTempFilePath(subDir) - 申请一个临时文件路径,可用提供一个子文件夹名tepmDM.destroy() - 销毁临时目录tepmDM.clear(day) - 清除 day 天前的实例临时文件夹

**Kind**: static method of [<code>NodeFile</code>](#NodeFile)  

| Param |
| --- |
| name | 

<a name="NodeDebug"></a>

## NodeDebug : <code>Object</code>
Node 调试相关模块

**Kind**: global variable  

* [NodeDebug](#NodeDebug) : <code>Object</code>
    * [.logRed(text)](#NodeDebug.logRed)
    * [.cRed(text)](#NodeDebug.cRed) ⇒ <code>string</code> \| <code>\*</code>
    * [.logBlue(text)](#NodeDebug.logBlue)
    * [.cBlue(text)](#NodeDebug.cBlue) ⇒ <code>\*</code> \| <code>string</code>
    * [.logGreen(text)](#NodeDebug.logGreen)
    * [.cGreen(text)](#NodeDebug.cGreen) ⇒ <code>string</code> \| <code>\*</code>
    * [.logGray(text)](#NodeDebug.logGray)
    * [.cGray(text)](#NodeDebug.cGray) ⇒ <code>string</code> \| <code>\*</code>
    * [.logYellow(text)](#NodeDebug.logYellow)
    * [.cYellow(text)](#NodeDebug.cYellow) ⇒ <code>string</code> \| <code>\*</code>
    * [.logLableRed(text)](#NodeDebug.logLableRed)
    * [.logLableYellow(text)](#NodeDebug.logLableYellow)
    * [.logLableCyan(text)](#NodeDebug.logLableCyan)
    * [.logLableGreen(text)](#NodeDebug.logLableGreen)
    * [.logLableWhite(text)](#NodeDebug.logLableWhite)

<a name="NodeDebug.logRed"></a>

### NodeDebug.logRed(text)
在终端打出红色 log

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.cRed"></a>

### NodeDebug.cRed(text) ⇒ <code>string</code> \| <code>\*</code>
把文本标记为红色

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.logBlue"></a>

### NodeDebug.logBlue(text)
在终端打出蓝色 log

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.cBlue"></a>

### NodeDebug.cBlue(text) ⇒ <code>\*</code> \| <code>string</code>
把文本标记为蓝色

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.logGreen"></a>

### NodeDebug.logGreen(text)
在终端打出绿色 log

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.cGreen"></a>

### NodeDebug.cGreen(text) ⇒ <code>string</code> \| <code>\*</code>
把文本标记为绿色

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.logGray"></a>

### NodeDebug.logGray(text)
在终端打出灰色 log

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.cGray"></a>

### NodeDebug.cGray(text) ⇒ <code>string</code> \| <code>\*</code>
把文本标记为灰色

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.logYellow"></a>

### NodeDebug.logYellow(text)
在终端打出黄色 log

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.cYellow"></a>

### NodeDebug.cYellow(text) ⇒ <code>string</code> \| <code>\*</code>
把文本标记为黄色

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.logLableRed"></a>

### NodeDebug.logLableRed(text)
在终端打出红色标签 log

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.logLableYellow"></a>

### NodeDebug.logLableYellow(text)
在终端打出黄色标签 log

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.logLableCyan"></a>

### NodeDebug.logLableCyan(text)
在终端打出蓝绿色标签 log

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.logLableGreen"></a>

### NodeDebug.logLableGreen(text)
在终端打出绿色标签 log

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeDebug.logLableWhite"></a>

### NodeDebug.logLableWhite(text)
在终端打出白色色标签 log

**Kind**: static method of [<code>NodeDebug</code>](#NodeDebug)  

| Param |
| --- |
| text | 

<a name="NodeImage"></a>

## NodeImage : <code>Object</code>
Node 图片相关模块

**Kind**: global variable  

* [NodeImage](#NodeImage) : <code>Object</code>
    * [.ARGB_BufferToPngFileBuffer](#NodeImage.ARGB_BufferToPngFileBuffer)
        * [new ARGB_BufferToPngFileBuffer(argbBuffer, channelCount, wh)](#new_NodeImage.ARGB_BufferToPngFileBuffer_new)
    * [.getPngData](#NodeImage.getPngData) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="NodeImage.ARGB_BufferToPngFileBuffer"></a>

### NodeImage.ARGB_BufferToPngFileBuffer
**Kind**: static class of [<code>NodeImage</code>](#NodeImage)  
<a name="new_NodeImage.ARGB_BufferToPngFileBuffer_new"></a>

#### new ARGB_BufferToPngFileBuffer(argbBuffer, channelCount, wh)
把 ARGB 格式的像素 buffer 转化为可直接写入文件的 PNG buffer


| Param | Type | Description |
| --- | --- | --- |
| argbBuffer | <code>buffer</code> | argb |
| channelCount | <code>number</code> | 通道数量 1-4 |
| wh | <code>object</code> | 高宽 {w, h} |

<a name="NodeImage.getPngData"></a>

### NodeImage.getPngData ⇒ <code>Promise.&lt;Buffer&gt;</code>
获取 PNG 图片文件的像素数据 Buffer

**Kind**: static property of [<code>NodeImage</code>](#NodeImage)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>buffer</code> | PNG 文件的 buffer |

<a name="NodeTool"></a>

## NodeTool : <code>Object</code>
Node 通用工具

**Kind**: global variable  

* [NodeTool](#NodeTool) : <code>Object</code>
    * [.getMD5(inData)](#NodeTool.getMD5) ⇒ <code>\*</code> \| <code>PromiseLike.&lt;ArrayBuffer&gt;</code>
    * [.getSHA256(inData)](#NodeTool.getSHA256) ⇒ <code>\*</code> \| <code>PromiseLike.&lt;ArrayBuffer&gt;</code>
    * [.arrayBuffertoBuffer(arrayBuffer)](#NodeTool.arrayBuffertoBuffer) ⇒ <code>Buffer</code>

<a name="NodeTool.getMD5"></a>

### NodeTool.getMD5(inData) ⇒ <code>\*</code> \| <code>PromiseLike.&lt;ArrayBuffer&gt;</code>
获取数据的 MD5 值getMD5("白色的空曲奇在发热") => 3b81233f69cc6dbf83899148b888f0db

**Kind**: static method of [<code>NodeTool</code>](#NodeTool)  

| Param | Type | Description |
| --- | --- | --- |
| inData | <code>buffer</code> \| <code>string</code> | 输入的数据 |

<a name="NodeTool.getSHA256"></a>

### NodeTool.getSHA256(inData) ⇒ <code>\*</code> \| <code>PromiseLike.&lt;ArrayBuffer&gt;</code>
获取数据的 getSHA256 值getSHA256("白色的空曲奇在发热") => 5be124e39cb90f3144fba1a798ab3a8472c24a44c0f9efc305f76c1e34de848f

**Kind**: static method of [<code>NodeTool</code>](#NodeTool)  

| Param | Type | Description |
| --- | --- | --- |
| inData | <code>buffer</code> \| <code>string</code> | 输入的数据 |

<a name="NodeTool.arrayBuffertoBuffer"></a>

### NodeTool.arrayBuffertoBuffer(arrayBuffer) ⇒ <code>Buffer</code>
ArrayBuffer to Buffer

**Kind**: static method of [<code>NodeTool</code>](#NodeTool)  

| Param | Type |
| --- | --- |
| arrayBuffer | <code>arrayBuffer</code> | 

<a name="ConsoleCON"></a>

## ConsoleCON : <code>Object</code>
控制台相关功能模块

**Kind**: global variable  
<a name="ConsoleCON.CSS_POST"></a>

### ConsoleCON.CSS_POST
控制台颜色用法：  console.log("%c test", CSS_POST)

**Kind**: static property of [<code>ConsoleCON</code>](#ConsoleCON)  
<a name="ObjectOBJ"></a>

## ObjectOBJ : <code>Object</code>
对象操作相关操作

**Kind**: global variable  

* [ObjectOBJ](#ObjectOBJ) : <code>Object</code>
    * [.isEmptyObject(obj)](#ObjectOBJ.isEmptyObject) ⇒ <code>boolean</code>
    * [.objectCopyToObject(ob1, ob2, func_allowCopy, func_rename, func_valueFiter, func_for)](#ObjectOBJ.objectCopyToObject)
    * [.setObjectValueByNames(object, names, value)](#ObjectOBJ.setObjectValueByNames)
    * [.treeFind(objectArr, match, childrenKey, findAll, depthFirst)](#ObjectOBJ.treeFind) ⇒ <code>array</code> \| <code>null</code>
    * [.treeEach(objectArr, eachFunc, childrenKey, depthFirst)](#ObjectOBJ.treeEach) ⇒ <code>Object</code>

<a name="ObjectOBJ.isEmptyObject"></a>

### ObjectOBJ.isEmptyObject(obj) ⇒ <code>boolean</code>
对象是否为空

**Kind**: static method of [<code>ObjectOBJ</code>](#ObjectOBJ)  

| Param |
| --- |
| obj | 

<a name="ObjectOBJ.objectCopyToObject"></a>

### ObjectOBJ.objectCopyToObject(ob1, ob2, func_allowCopy, func_rename, func_valueFiter, func_for)
复制对象。可控制要复制的属性，复制后的属性名，处理新属性值

**Kind**: static method of [<code>ObjectOBJ</code>](#ObjectOBJ)  

| Param | Description |
| --- | --- |
| ob1 | 源对象 |
| ob2 | 目标对象 |
| func_allowCopy | 判断是否允许复制的函数，返回真允许复制 func_allowCopy(属性名,属性值)。可空 |
| func_rename | 重命名复制到目标对象上的属性名， 返回新属性名 func_rename(属性名,属性值)。可空 |
| func_valueFiter | 处理复制到目标对象上的属性值，返回处理后的属性值 func_rename(属性名,属性值)。可空 |
| func_for | 每次循环执行的函数 func_for(ob1,ob2,x)。可空 |

<a name="ObjectOBJ.setObjectValueByNames"></a>

### ObjectOBJ.setObjectValueByNames(object, names, value)
根据属性名路径列表（names）对对象属性赋值

**Kind**: static method of [<code>ObjectOBJ</code>](#ObjectOBJ)  

| Param | Description |
| --- | --- |
| object | 对象 |
| names | 属性名路径列表，如 [position,enableAssigns,y] |
| value | 值 |

<a name="ObjectOBJ.treeFind"></a>

### ObjectOBJ.treeFind(objectArr, match, childrenKey, findAll, depthFirst) ⇒ <code>array</code> \| <code>null</code>
在由对象数组组成的树中查找对象。如果查找全部结果会以数组返回，否则直接返回找到的对象。tree =[  {id: 1, children: [{id: 4}]},  {id: 2},]findTree (tree, 4, "children", false, false) => {id: 4}

**Kind**: static method of [<code>ObjectOBJ</code>](#ObjectOBJ)  

| Param | Type | Description |
| --- | --- | --- |
| objectArr | <code>Array.&lt;object&gt;</code> | 对象数组组成的树 |
| match | <code>function</code> | 匹配器 -  如果是字符串则是匹配对象下的 id 键，也可提供一个匹配函数，匹配函数通过参数接收遍历到的对象，返回是否匹配的 boolen (ob)={retrun ob.name=="xxx">} |
| childrenKey | <code>string</code> | 子树键名 - 通过这个名字在对象中找子树 |
| findAll | <code>boolean</code> | 是否查找全部 |
| depthFirst | <code>boolean</code> | 深度优先 - 默认是广度优先 |

<a name="ObjectOBJ.treeEach"></a>

### ObjectOBJ.treeEach(objectArr, eachFunc, childrenKey, depthFirst) ⇒ <code>Object</code>
在由对象数组组成的树中遍历处理树的每个节点。处理函数：eachFunc(单个对象, 遍历深度, 当层深度节点计数, 总节点计数, 当前子树, 当前子树位置)在 eachFunc 中 return true 可以提前终止遍历。当前子树[当前子树位置+1] 可获取下一个节点。1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111返回树的信息：{     struct:[4,2,5], // 每层节点数     deep:3,         // 树深度     total: 11       // 总节点数}

**Kind**: static method of [<code>ObjectOBJ</code>](#ObjectOBJ)  

| Param | Type | Description |
| --- | --- | --- |
| objectArr | <code>Array.&lt;object&gt;</code> | 对象数组组成的树 |
| eachFunc | <code>function</code> | 处理函数 |
| childrenKey | <code>string</code> | 子树键名 - 通过这个名字在对象中找子树 |
| depthFirst | <code>boolean</code> | 深度优先 - 默认是广度优先 |

<a name="StringSTR"></a>

## StringSTR : <code>Object</code>
字符串相关功能模块

**Kind**: global variable  

* [StringSTR](#StringSTR) : <code>Object</code>
    * [.left(str, offset)](#StringSTR.left) ⇒ <code>\*</code>
    * [.right(str, offset)](#StringSTR.right) ⇒ <code>\*</code>
    * [.insert(str, start, offset, inStr)](#StringSTR.insert) ⇒ <code>\*</code>

<a name="StringSTR.left"></a>

### StringSTR.left(str, offset) ⇒ <code>\*</code>
取字符串左边****依赖 stringSTR.right()***

**Kind**: static method of [<code>StringSTR</code>](#StringSTR)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 原文 |
| offset | <code>Number</code> | 偏移值 |

<a name="StringSTR.right"></a>

### StringSTR.right(str, offset) ⇒ <code>\*</code>
取字符串右边。****依赖 stringSTR.left()***

**Kind**: static method of [<code>StringSTR</code>](#StringSTR)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 原文 |
| offset | <code>Number</code> | 偏移值 |

<a name="StringSTR.insert"></a>

### StringSTR.insert(str, start, offset, inStr) ⇒ <code>\*</code>
插入文本到指定位置

**Kind**: static method of [<code>StringSTR</code>](#StringSTR)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 原文 |
| start | <code>Number</code> | 开始位置 |
| offset | <code>Number</code> | 偏移值 |
| inStr | <code>String</code> | 要插入的文本 |

<a name="Rect"></a>

## Rect : <code>Object</code>
矩形处理相关模块

**Kind**: global variable  

* [Rect](#Rect) : <code>Object</code>
    * [.rltb2xywh(boundsInfo)](#Rect.rltb2xywh) ⇒ <code>Object</code>
    * [.xywh2rltb(boundsInfo)](#Rect.xywh2rltb) ⇒ <code>Object</code>
    * [.paddingXywh(xywh, padding)](#Rect.paddingXywh) ⇒ <code>Object</code>
    * [.getXywhsRange(xywhs)](#Rect.getXywhsRange) ⇒ <code>Object</code>
    * [.moveXywhs(xywhs, xy)](#Rect.moveXywhs)
    * [.xywhHasCover(xywhA, xywhB)](#Rect.xywhHasCover) ⇒ <code>boolean</code>

<a name="Rect.rltb2xywh"></a>

### Rect.rltb2xywh(boundsInfo) ⇒ <code>Object</code>
坐标转换把 {right, left, top, bottom} 转化为 {x, y , w, h}

**Kind**: static method of [<code>Rect</code>](#Rect)  

| Param |
| --- |
| boundsInfo | 

<a name="Rect.xywh2rltb"></a>

### Rect.xywh2rltb(boundsInfo) ⇒ <code>Object</code>
坐标转换把 {x, y , w, h} 转化为 {right, left, top, bottom}

**Kind**: static method of [<code>Rect</code>](#Rect)  

| Param |
| --- |
| boundsInfo | 

<a name="Rect.paddingXywh"></a>

### Rect.paddingXywh(xywh, padding) ⇒ <code>Object</code>
给 xywh 添加内边距paddingXywh(xywh, 5)paddingXywh(xywh, [3,4,5,10])

**Kind**: static method of [<code>Rect</code>](#Rect)  

| Param |
| --- |
| xywh | 
| padding | 

<a name="Rect.getXywhsRange"></a>

### Rect.getXywhsRange(xywhs) ⇒ <code>Object</code>
计算多个 xywh 矩形的边界getXywhsRange([xywh])

**Kind**: static method of [<code>Rect</code>](#Rect)  

| Param |
| --- |
| xywhs | 

<a name="Rect.moveXywhs"></a>

### Rect.moveXywhs(xywhs, xy)
整体移动多个 xywh 到某点，保留原 xywhs 相对位置。会改变 xywhs 里每个 xywh 对象的 x，y 值。

**Kind**: static method of [<code>Rect</code>](#Rect)  

| Param |
| --- |
| xywhs | 
| xy | 

<a name="Rect.xywhHasCover"></a>

### Rect.xywhHasCover(xywhA, xywhB) ⇒ <code>boolean</code>
2 个 xywh 是否有重叠

**Kind**: static method of [<code>Rect</code>](#Rect)  

| Param |
| --- |
| xywhA | 
| xywhB | 

<a name="TypeTYP"></a>

## TypeTYP : <code>Object</code>
类型相关模块

**Kind**: global variable  
<a name="TypeTYP.getType"></a>

### TypeTYP.getType(value) ⇒ <code>\*</code>
得到指定值的数据类型。返回数据类型名称字符串，如 "boolean","object","string" 。

**Kind**: static method of [<code>TypeTYP</code>](#TypeTYP)  

| Param |
| --- |
| value | 

<a name="AarryArr"></a>

## AarryArr : <code>Object</code>
数组相关功能模块

**Kind**: global variable  

* [AarryArr](#AarryArr) : <code>Object</code>
    * [.symDifference(a, b)](#AarryArr.symDifference) ⇒ <code>Array</code>
    * [.symDifference_ObjectArray(a, b, key)](#AarryArr.symDifference_ObjectArray) ⇒ <code>Array</code>
    * [.difference(a, b)](#AarryArr.difference) ⇒ <code>Array</code>
    * [.union(a, b)](#AarryArr.union) ⇒ <code>Array</code>
    * [.intersection()](#AarryArr.intersection) ⇒ <code>Array</code>
    * [.remove(arr, removeRule, isMutator)](#AarryArr.remove) ⇒ <code>\*</code>
    * [.hasMember(arr, memberValue, equalFunc)](#AarryArr.hasMember) ⇒ <code>boolean</code>
    * [.getByKey(objectArr, key, keyValue, equalRule)](#AarryArr.getByKey) ⇒ <code>\*</code>
    * [.deleteByKey(objectArr, key, keyValue, equalRule)](#AarryArr.deleteByKey) ⇒ <code>\*</code>
    * [.sortObjectArray(arr, key, bigFront)](#AarryArr.sortObjectArray)

<a name="AarryArr.symDifference"></a>

### AarryArr.symDifference(a, b) ⇒ <code>Array</code>
对称差。（不支持对象数组）a:[1,2,3] b:[1,2,4]  a△b => [3,4]

**Kind**: static method of [<code>AarryArr</code>](#AarryArr)  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 
| b | <code>Array</code> | 

<a name="AarryArr.symDifference_ObjectArray"></a>

### AarryArr.symDifference_ObjectArray(a, b, key) ⇒ <code>Array</code>
对称差。对象数组。 a:[{key:1}, {key:2}]  b:[{key:2}, {key:3}]  a△b => [{key:1},{key:3}]

**Kind**: static method of [<code>AarryArr</code>](#AarryArr)  

| Param | Description |
| --- | --- |
| a |  |
| b |  |
| key | 对象关键属性 |

<a name="AarryArr.difference"></a>

### AarryArr.difference(a, b) ⇒ <code>Array</code>
差集。（不支持对象数组）a:[1,2,3] b:[1,2,4]   a-b => [3]

**Kind**: static method of [<code>AarryArr</code>](#AarryArr)  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 
| b | <code>Array</code> | 

<a name="AarryArr.union"></a>

### AarryArr.union(a, b) ⇒ <code>Array</code>
并集。（不支持对象数组）a:[1,2,3] b:[1,2,4]   a∪b => [1,2,3,4]

**Kind**: static method of [<code>AarryArr</code>](#AarryArr)  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 
| b | <code>Array</code> | 

<a name="AarryArr.intersection"></a>

### AarryArr.intersection() ⇒ <code>Array</code>
交集。（不支持对象数组）a:[1,2,3] b:[1,2,4]   a∩b => [1,2]

**Kind**: static method of [<code>AarryArr</code>](#AarryArr)  
<a name="AarryArr.remove"></a>

### AarryArr.remove(arr, removeRule, isMutator) ⇒ <code>\*</code>
从数组中移除元素，默认是非变异的。

**Kind**: static method of [<code>AarryArr</code>](#AarryArr)  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| removeRule | <code>function</code> | 可以给定值或者一个判断函数 function(x){ return x>3;} |
| isMutator | <code>Boolean</code> | 变异模式，为真会改变原数组 |

<a name="AarryArr.hasMember"></a>

### AarryArr.hasMember(arr, memberValue, equalFunc) ⇒ <code>boolean</code>
数组是否拥有指定成员arr:["A","B","C"] => hasMember(arr, "C") => true

**Kind**: static method of [<code>AarryArr</code>](#AarryArr)  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| memberValue |  | 指定成员值 |
| equalFunc |  | 比较函数，boolean equalFunc( arr[i], memberValue)。可空。 |

<a name="AarryArr.getByKey"></a>

### AarryArr.getByKey(objectArr, key, keyValue, equalRule) ⇒ <code>\*</code>
对象数组查找从对象数组中提取出一个对象，根据对象的一个属性值。arr: [{name:a},{name:b}] getByKey(arr,"name","b") => return {name:b}

**Kind**: static method of [<code>AarryArr</code>](#AarryArr)  

| Param | Type | Description |
| --- | --- | --- |
| objectArr | <code>Array.&lt;Object&gt;</code> | 对象数组 |
| key | <code>String</code> | 关键属性 |
| keyValue |  | 欲提取的关键属性值 |
| equalRule |  | 值比较函数，可空 |

<a name="AarryArr.deleteByKey"></a>

### AarryArr.deleteByKey(objectArr, key, keyValue, equalRule) ⇒ <code>\*</code>
对象数组删除从对象数组中找到出一个对象元素，并删除这个元素。arr: [{name:a},{name:b}] deleteByKey(arr,"name","b") => arr: [{name:a}]

**Kind**: static method of [<code>AarryArr</code>](#AarryArr)  

| Param | Type | Description |
| --- | --- | --- |
| objectArr | <code>Array.&lt;Object&gt;</code> | 对象数组 |
| key | <code>String</code> | 关键属性 |
| keyValue |  | 欲提取的关键属性值 |
| equalRule |  | 值比较函数，可空 |

<a name="AarryArr.sortObjectArray"></a>

### AarryArr.sortObjectArray(arr, key, bigFront)
排序对象数组

**Kind**: static method of [<code>AarryArr</code>](#AarryArr)  

| Param | Type | Description |
| --- | --- | --- |
| arr |  | 数组 |
| key | <code>a:12</code> | 对象排序的键值，如 [, {a:33}] , key 为 "a" 则以 a 排序 |
| bigFront |  | 大值在前 |

<a name="Calc"></a>

## Calc : <code>Object</code>
计算相关功能模块

**Kind**: global variable  
<a name="FileFIL"></a>

## FileFIL : <code>Object</code>
文件操作相关模块

**Kind**: global variable  
<a name="FileFIL.filterFileName"></a>

### FileFIL.filterFileName(name, fix) ⇒ <code>\*</code>
去除一个字符串中不符合成为文件名的字符

**Kind**: static method of [<code>FileFIL</code>](#FileFIL)  

| Param | Description |
| --- | --- |
| name |  |
| fix | 非法字符替代 |

