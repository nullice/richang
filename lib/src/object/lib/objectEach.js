import { isObject } from "../object";
var EachControl;
(function (EachControl) {
    // 终止全部遍历
    EachControl[EachControl["exit"] = -1] = "exit";
    // 终止当层遍历
    EachControl[EachControl["break"] = -2] = "break";
    // 跳到下一个遍历
    EachControl[EachControl["continue"] = -3] = "continue";
})(EachControl || (EachControl = {}));
const EachControls = { exit: EachControl.exit, break: EachControl.break, continue: EachControl.continue };
/**
 * 对象遍历, 遍历对象的每一个键
 *
 * @param object
 * @param eachFunc 遍历函数。返回 -1 时终止遍历（exit）；返回 -2 时终止当层遍历（break）; 返回 -3 跳到下一个遍历（continue）
 * @param options
 */
export function objectEach(object, eachFunc, options = {
    checkCycle: false,
    depthFirst: false,
    needKeyPath: false,
    childrenKey: undefined // 默认不指定子树 key ，会遍历对象每一个 key
}) {
    // 是否使用循环依赖回调
    let useCycleCallback;
    // 循环依赖检查缓存
    let cycleCache;
    // 循环依赖检查初始化
    if (options.checkCycle) {
        useCycleCallback = typeof options.checkCycleCallback === "function";
        cycleCache = new WeakMap();
        cycleCache.set(object, useCycleCallback ? [] : true);
    }
    // 遍历入口
    eachOnce(object, 0, options.needKeyPath ? [] : undefined);
    function eachOnce(object, deep, path) {
        let nextEachList;
        // 如果是不是深度优先而是广度优先，则初始化欲遍历队列
        if (!options.depthFirst) {
            nextEachList = [];
        }
        // 遍历目标
        let target;
        // 是否只遍历指定子节点
        if (options.childrenKey) {
            target = object[options.childrenKey];
        }
        else {
            target = object;
        }
        for (let key in target) {
            let value = target[key];
            let nowKeyPath = path ? [...path, key] : undefined;
            let hasNext = isObject(value);
            // 执行 each 函数
            let control = eachFunc(value, key, {
                parent: object,
                deep: deep,
                keyPath: nowKeyPath,
                end: !hasNext
            }, EachControls);
            if (control === EachControl.exit)
                return EachControl.exit;
            if (control === EachControl.break)
                break;
            if (control === EachControl.continue)
                continue;
            // 判断是需要遍历的项
            if (hasNext) {
                // 检查循环依赖
                if (options.checkCycle) {
                    if (cycleCache.get(value)) {
                        // 循环依赖回调
                        if (useCycleCallback && options.checkCycleCallback) {
                            options.checkCycleCallback(value, key, {
                                parent: object,
                                keyPath: path,
                                firstKeyPath: cycleCache.get(value)
                            });
                        }
                        // 忽略循环依赖
                        continue;
                    }
                    else {
                        // 如果使用循环依赖回调，cycleCache 里会保存路径
                        if (useCycleCallback) {
                            cycleCache.set(value, nowKeyPath || true);
                        }
                        else {
                            cycleCache.set(value, true);
                        }
                    }
                }
                if (options.depthFirst) {
                    // 深度优先遍历
                    let re = eachOnce(value, deep + 1, nowKeyPath);
                    // 提前终止
                    if (re === EachControl.exit)
                        return EachControl.exit;
                    if (options.depthReboundFunc) {
                        // 执行 depthReboundFunc 函数
                        options.depthReboundFunc(value, key, {
                            parent: object,
                            deep: deep,
                            keyPath: nowKeyPath
                        });
                    }
                }
                else {
                    ;
                    nextEachList.push({ value, key, nowKeyPath });
                }
            }
        }
        // 广度优先遍历
        if (!options.depthFirst) {
            let re = nextEachList.every(item => eachOnce(item.value, deep + 1, item.nowKeyPath) !== -1);
            // 提前终止
            if (!re)
                return EachControl.exit;
        }
    }
}
//# sourceMappingURL=objectEach.js.map