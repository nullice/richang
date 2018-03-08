## Members

<dl>
<dt><a href="#objectOBJ">objectOBJ</a></dt>
<dd><p>Created by bgllj on 2016/10/26.</p>
</dd>
<dt><a href="#stringSTR">stringSTR</a> : <code>Object</code></dt>
<dd><p>字符串相关功能模块</p>
</dd>
<dt><a href="#typeTYP">typeTYP</a></dt>
<dd><p>Created by bgllj on 2016/12/11.</p>
</dd>
<dt><a href="#arrayARR">arrayARR</a> : <code>Object</code></dt>
<dd><p>数组相关功能模块</p>
</dd>
</dl>

<a name="objectOBJ"></a>

## objectOBJ
Created by bgllj on 2016/10/26.

**Kind**: global variable  

* [objectOBJ](#objectOBJ)
    * [.isEmptyObject(obj)](#objectOBJ.isEmptyObject) ⇒ <code>boolean</code>
    * [.objectCopyToObject(ob1, ob2, func_allowCopy, func_rename, func_valueFiter, func_for)](#objectOBJ.objectCopyToObject)
    * [.setObjectValueByNames(object, names, value)](#objectOBJ.setObjectValueByNames)

<a name="objectOBJ.isEmptyObject"></a>

### objectOBJ.isEmptyObject(obj) ⇒ <code>boolean</code>
对象是否为空

**Kind**: static method of [<code>objectOBJ</code>](#objectOBJ)  

| Param |
| --- |
| obj | 

<a name="objectOBJ.objectCopyToObject"></a>

### objectOBJ.objectCopyToObject(ob1, ob2, func_allowCopy, func_rename, func_valueFiter, func_for)
复制对象。可控制要复制的属性，复制后的属性名，处理新属性值

**Kind**: static method of [<code>objectOBJ</code>](#objectOBJ)  

| Param | Description |
| --- | --- |
| ob1 | 源对象 |
| ob2 | 目标对象 |
| func_allowCopy | 判断是否允许复制的函数，返回真允许复制 func_allowCopy(属性名,属性值)。可空 |
| func_rename | 重命名复制到目标对象上的属性名， 返回新属性名 func_rename(属性名,属性值)。可空 |
| func_valueFiter | 处理复制到目标对象上的属性值，返回处理后的属性值 func_rename(属性名,属性值)。可空 |
| func_for | 每次循环执行的函数 func_for(ob1,ob2,x)。可空 |

<a name="objectOBJ.setObjectValueByNames"></a>

### objectOBJ.setObjectValueByNames(object, names, value)
根据属性名路径列表（names）对对象属性赋值

**Kind**: static method of [<code>objectOBJ</code>](#objectOBJ)  

| Param | Description |
| --- | --- |
| object | 对象 |
| names | 属性名路径列表，如 [position,enableAssigns,y] |
| value | 值 |

<a name="stringSTR"></a>

## stringSTR : <code>Object</code>
字符串相关功能模块

**Kind**: global variable  

* [stringSTR](#stringSTR) : <code>Object</code>
    * [.left(str, offset)](#stringSTR.left) ⇒ <code>\*</code>
    * [.right(str, offset)](#stringSTR.right) ⇒ <code>\*</code>
    * [.insert(str, start, offset, inStr)](#stringSTR.insert) ⇒ <code>\*</code>

<a name="stringSTR.left"></a>

### stringSTR.left(str, offset) ⇒ <code>\*</code>
取字符串左边
****依赖 stringSTR.right()***

**Kind**: static method of [<code>stringSTR</code>](#stringSTR)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 原文 |
| offset | <code>Number</code> | 偏移值 |

<a name="stringSTR.right"></a>

### stringSTR.right(str, offset) ⇒ <code>\*</code>
取字符串右边。
****依赖 stringSTR.left()***

**Kind**: static method of [<code>stringSTR</code>](#stringSTR)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 原文 |
| offset | <code>Number</code> | 偏移值 |

<a name="stringSTR.insert"></a>

### stringSTR.insert(str, start, offset, inStr) ⇒ <code>\*</code>
插入文本到指定位置

**Kind**: static method of [<code>stringSTR</code>](#stringSTR)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 原文 |
| start | <code>Number</code> | 开始位置 |
| offset | <code>Number</code> | 偏移值 |
| inStr | <code>String</code> | 要插入的文本 |

<a name="typeTYP"></a>

## typeTYP
Created by bgllj on 2016/12/11.

**Kind**: global variable  
<a name="typeTYP.getType"></a>

### typeTYP.getType(value) ⇒ <code>\*</code>
得到指定值的数据类型。返回数据类型名称字符串，如 "boolean","object","string" 。

**Kind**: static method of [<code>typeTYP</code>](#typeTYP)  

| Param |
| --- |
| value | 

<a name="arrayARR"></a>

## arrayARR : <code>Object</code>
数组相关功能模块

**Kind**: global variable  

* [arrayARR](#arrayARR) : <code>Object</code>
    * [.symDifference(a, b)](#arrayARR.symDifference) ⇒ <code>Array</code>
    * [.symDifference_ObjectArray(a, b, key)](#arrayARR.symDifference_ObjectArray) ⇒ <code>Array</code>
    * [.difference(a, b)](#arrayARR.difference) ⇒ <code>Array</code>
    * [.union(a, b)](#arrayARR.union) ⇒ <code>Array</code>
    * [.intersection()](#arrayARR.intersection) ⇒ <code>Array</code>
    * [.remove(arr, removeRule, isMutator)](#arrayARR.remove) ⇒ <code>\*</code>
    * [.hasMember(arr, memberValue, equalFunc)](#arrayARR.hasMember) ⇒ <code>boolean</code>
    * [.getByKey(objectArr, key, keyValue, equalRule)](#arrayARR.getByKey) ⇒ <code>\*</code>
    * [.deleteByKey(objectArr, key, keyValue, equalRule)](#arrayARR.deleteByKey) ⇒ <code>\*</code>
    * [.sortObjectArray(arr, key, bigFront)](#arrayARR.sortObjectArray)

<a name="arrayARR.symDifference"></a>

### arrayARR.symDifference(a, b) ⇒ <code>Array</code>
对称差。（不支持对象数组）---
a:[1,2,3] b:[1,2,4]  a△b => [3,4]

**Kind**: static method of [<code>arrayARR</code>](#arrayARR)  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 
| b | <code>Array</code> | 

<a name="arrayARR.symDifference_ObjectArray"></a>

### arrayARR.symDifference_ObjectArray(a, b, key) ⇒ <code>Array</code>
对称差。对象数组。
 a:[{key:1}, {key:2}]  b:[{key:2}, {key:3}]  a△b => [{key:1},{key:3}]

**Kind**: static method of [<code>arrayARR</code>](#arrayARR)  

| Param | Description |
| --- | --- |
| a |  |
| b |  |
| key | 对象关键属性 |

<a name="arrayARR.difference"></a>

### arrayARR.difference(a, b) ⇒ <code>Array</code>
差集。（不支持对象数组）
a:[1,2,3] b:[1,2,4]   a-b => [3]

**Kind**: static method of [<code>arrayARR</code>](#arrayARR)  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 
| b | <code>Array</code> | 

<a name="arrayARR.union"></a>

### arrayARR.union(a, b) ⇒ <code>Array</code>
并集。（不支持对象数组）
a:[1,2,3] b:[1,2,4]   a∪b => [1,2,3,4]

**Kind**: static method of [<code>arrayARR</code>](#arrayARR)  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 
| b | <code>Array</code> | 

<a name="arrayARR.intersection"></a>

### arrayARR.intersection() ⇒ <code>Array</code>
交集。（不支持对象数组）
a:[1,2,3] b:[1,2,4]   a∩b => [1,2]

**Kind**: static method of [<code>arrayARR</code>](#arrayARR)  
<a name="arrayARR.remove"></a>

### arrayARR.remove(arr, removeRule, isMutator) ⇒ <code>\*</code>
从数组中移除元素，默认是非变异的。

**Kind**: static method of [<code>arrayARR</code>](#arrayARR)  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| removeRule | <code>function</code> | 可以给定值或者一个判断函数 function(x){ return x>3;} |
| isMutator | <code>Boolean</code> | 变异模式，为真会改变原数组 |

<a name="arrayARR.hasMember"></a>

### arrayARR.hasMember(arr, memberValue, equalFunc) ⇒ <code>boolean</code>
数组是否拥有指定成员
arr:["A","B","C"] => hasMember(arr, "C") => true

**Kind**: static method of [<code>arrayARR</code>](#arrayARR)  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| memberValue |  | 指定成员值 |
| equalFunc |  | 比较函数，boolean equalFunc( arr[i], memberValue)。可空。 |

<a name="arrayARR.getByKey"></a>

### arrayARR.getByKey(objectArr, key, keyValue, equalRule) ⇒ <code>\*</code>
对象数组查找
从对象数组中提取出一个对象，根据对象的一个属性值。
arr: [{name:a},{name:b}] getByKey(arr,"name","b") => return {name:b}

**Kind**: static method of [<code>arrayARR</code>](#arrayARR)  

| Param | Type | Description |
| --- | --- | --- |
| objectArr | <code>Array.&lt;Object&gt;</code> | 对象数组 |
| key | <code>String</code> | 关键属性 |
| keyValue |  | 欲提取的关键属性值 |
| equalRule |  | 值比较函数，可空 |

<a name="arrayARR.deleteByKey"></a>

### arrayARR.deleteByKey(objectArr, key, keyValue, equalRule) ⇒ <code>\*</code>
对象数组删除
从对象数组中找到出一个对象元素，并删除这个元素。
arr: [{name:a},{name:b}] deleteByKey(arr,"name","b") => arr: [{name:a}]

**Kind**: static method of [<code>arrayARR</code>](#arrayARR)  

| Param | Type | Description |
| --- | --- | --- |
| objectArr | <code>Array.&lt;Object&gt;</code> | 对象数组 |
| key | <code>String</code> | 关键属性 |
| keyValue |  | 欲提取的关键属性值 |
| equalRule |  | 值比较函数，可空 |

<a name="arrayARR.sortObjectArray"></a>

### arrayARR.sortObjectArray(arr, key, bigFront)
排序对象数组

**Kind**: static method of [<code>arrayARR</code>](#arrayARR)  

| Param | Type | Description |
| --- | --- | --- |
| arr |  | 数组 |
| key | <code>a:12</code> | 对象排序的键值，如 [, {a:33}] , key 为 "a" 则以 a 排序 |
| bigFront |  | 大值在前 |

