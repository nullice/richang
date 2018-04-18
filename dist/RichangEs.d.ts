/**
 * 对象操作相关操作
 * @type {{isEmptyObject: ObjectOBJ.isEmptyObject, objectCopyToObject: ObjectOBJ.objectCopyToObject, getObjectValueByNames: ObjectOBJ.getObjectValueByNames, setObjectValueByNames: ObjectOBJ.setObjectValueByNames, treeFind: ObjectOBJ.treeFind, treeEach: function(Object[], Function, string, boolean): {struct: Array, deep: number, total: number}, pathEach(Object, Function): void}}
 */
declare var ObjectOBJ: {
    isEmptyObject: (obj: any) => boolean;
    objectCopyToObject: (ob1: any, ob2: any, func_allowCopy: any, func_rename: any, func_valueFiter: any, func_for: any) => void;
    getObjectValueByNames: (object: any, names: any, aheadEndTime: any) => any;
    setObjectValueByNames: (object: any, names: any, value: any) => void;
    treeFind: (objectArr: any, match: any, childrenKey: any, findAll: any, depthFirst: any) => any;
    treeEach: (objectArr: any, eachFunc: any, childrenKey: any, depthFirst: any) => {
        struct: any[];
        deep: number;
        total: number;
    };
    pathEach: (object: any, eachFunc: any) => void;
};
/**
 * Created by bgllj on 2016/9/8.
 */
/**
 * 字符串相关功能模块
 * @type {{left: StringSTR.left, right: StringSTR.right, insert: StringSTR.insert}}
 */
declare var StringSTR: {
    left: (str: any, offset: any) => any;
    right: (str: any, offset: any) => any;
    insert: (str: any, start: any, offset: any, inStr: any) => any;
};
/**
 * 类型相关模块
 * @type {{getType: TypeTYP.getType}}
 */
declare var TypeTYP: {
    getType: (value: any) => any;
};
/**
 * 数组相关功能模块
 * @type {{symDifference: AarryArr.symDifference, symDifference_ObjectArray: AarryArr.symDifference_ObjectArray, difference: AarryArr.difference, union: AarryArr.union, intersection: AarryArr.intersection, remove: AarryArr.remove, hasMember: AarryArr.hasMember, getByKey: AarryArr.getByKey, deleteByKey: AarryArr.deleteByKey, sortObjectArray: AarryArr.sortObjectArray}}
 */
declare var AarryArr: {
    symDifference: (a: any, b: any) => any[];
    symDifference_ObjectArray: (a: any, b: any, key: any) => any[];
    difference: (a: any, b: any) => any[];
    union: (a: any, b: any) => any[];
    intersection: (a: any, b: any) => any[];
    remove: (arr: any, removeRule: any, isMutator: any) => any;
    hasMember: (arr: any, memberValue: any, equalFunc: any) => boolean;
    getByKey: (objectArr: any, key: any, keyValue: any, equalRule: any) => any;
    deleteByKey: (objectArr: any, key: any, keyValue: any, equalRule: any) => void;
    sortObjectArray: (arr: any, key: any, bigFront: any) => any;
};
/**
 * 矩形处理相关模块
 * @type {{}}
 */
declare var Rect: {
    rltb2xywh: (boundsInfo: any) => {
        x: any;
        y: any;
        w: any;
        h: any;
    };
    xywh2rltb: (boundsInfo: any) => {
        left: any;
        right: any;
        top: any;
        bottom: any;
    };
    paddingXywh: (xywh: any, padding: any) => {
        x: any;
        y: any;
        w: any;
        h: any;
    };
    getXywhsRange: (xywhs: any) => {
        x: any;
        y: any;
        w: any;
        h: any;
    };
    moveXywhs: (xywhs: any, xy: any) => any;
    xywhHasCover: (xywhA: any, xywhB: any) => boolean;
};
/**
 * 控制台相关功能模块
 * @type {{CSS_POST: string, CSS_POST_RESULT: string}}
 */
declare var ConsoleCON: {
    CSS_POST: string;
    CSS_POST_RESULT: string;
};
/**
 * 通用工具相关模块
 * @type {{genUUID_v4: Tool.genUUID_v4, genUUID_v5: Tool.genUUID_v5, genSHA1: Tool.genSHA1, formatUUID: Tool.formatUUID, checkUUID: Tool.checkUUID, roll: Tool.roll, rollString: Tool.rollString}}
 */
declare var Tool: {
    genUUID_v4: () => any;
    genUUID_v5: (name: any) => any;
    genSHA1: (str: any) => any;
    formatUUID: (str: any) => string;
    checkUUID: (uuid: any) => number;
    roll: () => number;
    rollString: (length: any, dict: any) => string;
};
/**
 * 计算相关功能模块
 * @type {{}}
 */
declare var Calc: {};
/**
 * 文件操作相关模块
 * @type {{filterFileName: FileFIL.filterFileName}}
 */
declare var FileFIL: {
    filterFileName: (name: any, fix: any) => any;
};
declare var Richang: {
    Object: {
        isEmptyObject: (obj: any) => boolean;
        objectCopyToObject: (ob1: any, ob2: any, func_allowCopy: any, func_rename: any, func_valueFiter: any, func_for: any) => void;
        getObjectValueByNames: (object: any, names: any, aheadEndTime: any) => any;
        setObjectValueByNames: (object: any, names: any, value: any) => void;
        treeFind: (objectArr: any, match: any, childrenKey: any, findAll: any, depthFirst: any) => any;
        treeEach: (objectArr: any, eachFunc: any, childrenKey: any, depthFirst: any) => {
            struct: any[];
            deep: number;
            total: number;
        };
        pathEach: (object: any, eachFunc: any) => void;
    };
    String: {
        left: (str: any, offset: any) => any;
        right: (str: any, offset: any) => any;
        insert: (str: any, start: any, offset: any, inStr: any) => any;
    };
    Type: {
        getType: (value: any) => any;
    };
    Array: {
        symDifference: (a: any, b: any) => any[];
        symDifference_ObjectArray: (a: any, b: any, key: any) => any[];
        difference: (a: any, b: any) => any[];
        union: (a: any, b: any) => any[];
        intersection: (a: any, b: any) => any[];
        remove: (arr: any, removeRule: any, isMutator: any) => any;
        hasMember: (arr: any, memberValue: any, equalFunc: any) => boolean;
        getByKey: (objectArr: any, key: any, keyValue: any, equalRule: any) => any;
        deleteByKey: (objectArr: any, key: any, keyValue: any, equalRule: any) => void;
        sortObjectArray: (arr: any, key: any, bigFront: any) => any;
    };
    Rect: {
        rltb2xywh: (boundsInfo: any) => {
            x: any;
            y: any;
            w: any;
            h: any;
        };
        xywh2rltb: (boundsInfo: any) => {
            left: any;
            right: any;
            top: any;
            bottom: any;
        };
        paddingXywh: (xywh: any, padding: any) => {
            x: any;
            y: any;
            w: any;
            h: any;
        };
        getXywhsRange: (xywhs: any) => {
            x: any;
            y: any;
            w: any;
            h: any;
        };
        moveXywhs: (xywhs: any, xy: any) => any;
        xywhHasCover: (xywhA: any, xywhB: any) => boolean;
    };
    Console: {
        CSS_POST: string;
        CSS_POST_RESULT: string;
    };
    Tool: {
        genUUID_v4: () => any;
        genUUID_v5: (name: any) => any;
        genSHA1: (str: any) => any;
        formatUUID: (str: any) => string;
        checkUUID: (uuid: any) => number;
        roll: () => number;
        rollString: (length: any, dict: any) => string;
    };
    File: {
        filterFileName: (name: any, fix: any) => any;
    };
    Calc: {};
};
export default Richang;
export { ObjectOBJ as Object, StringSTR as String, TypeTYP as Type, AarryArr as Array, Rect, ConsoleCON as Console, Tool, FileFIL as File, Calc };
