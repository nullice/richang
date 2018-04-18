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
