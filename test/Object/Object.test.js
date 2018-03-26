import rcObject from "../../src/modules/Object.js"
import _ from "lodash"

test("Object.isEmptyObject({}) === true （对象是否为空）", () => {
    expect(rcObject.isEmptyObject({})).toBe(true)
})

var tree = [
    {
        "id": 2380,
        "index": 182,
        "type": "layerSection",
        "name": "组 20",
        "bounds": {
            "top": 674,
            "left": 0,
            "bottom": 1334,
            "right": 750,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 2277,
                "index": 181,
                "type": "layerSection",
                "name": "1",
                "bounds": {
                    "top": 732,
                    "left": 34,
                    "bottom": 1188,
                    "right": 716,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layers": [
                    {
                        "id": 2341,
                        "index": 180,
                        "type": "layerSection",
                        "name": "text",
                        "bounds": {
                            "top": 903,
                            "left": 42,
                            "bottom": 1188,
                            "right": 707,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2294,
                                "index": 179,
                                "type": "textLayer",
                                "name": "定时关闭",
                                "bounds": {
                                    "top": 903,
                                    "left": 606,
                                    "bottom": 928,
                                    "right": 707,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "text": true,
                            },
                            {
                                "id": 2290,
                                "index": 178,
                                "type": "textLayer",
                                "name": "订阅专辑",
                                "bounds": {
                                    "top": 903,
                                    "left": 418,
                                    "bottom": 928,
                                    "right": 520,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "text": true,
                            },
                            {
                                "id": 2289,
                                "index": 177,
                                "type": "textLayer",
                                "name": "下载音频",
                                "bounds": {
                                    "top": 903,
                                    "left": 230,
                                    "bottom": 928,
                                    "right": 332,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "text": true,
                            },
                            {
                                "id": 2288,
                                "index": 176,
                                "type": "textLayer",
                                "name": "分享音频",
                                "bounds": {
                                    "top": 903,
                                    "left": 43,
                                    "bottom": 928,
                                    "right": 145,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "text": true,
                            },
                            {
                                "id": 2316,
                                "index": 175,
                                "type": "textLayer",
                                "name": "投诉举报",
                                "bounds": {
                                    "top": 1163,
                                    "left": 605,
                                    "bottom": 1188,
                                    "right": 707,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "text": true,
                            },
                            {
                                "id": 2315,
                                "index": 174,
                                "type": "textLayer",
                                "name": "发表评论",
                                "bounds": {
                                    "top": 1163,
                                    "left": 418,
                                    "bottom": 1188,
                                    "right": 521,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "text": true,
                            },
                            {
                                "id": 2313,
                                "index": 173,
                                "type": "textLayer",
                                "name": "关注作者",
                                "bounds": {
                                    "top": 1163,
                                    "left": 230,
                                    "bottom": 1188,
                                    "right": 332,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "text": true,
                            },
                            {
                                "id": 2312,
                                "index": 172,
                                "type": "textLayer",
                                "name": "ta的主页",
                                "bounds": {
                                    "top": 1163,
                                    "left": 42,
                                    "bottom": 1188,
                                    "right": 152,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "text": true,
                            },
                        ],
                    },
                    {
                        "id": 2339,
                        "index": 170,
                        "type": "layerSection",
                        "name": "举报",
                        "bounds": {
                            "top": 992,
                            "left": 596,
                            "bottom": 1112,
                            "right": 716,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2331,
                                "index": 169,
                                "type": "layer",
                                "name": "举报",
                                "bounds": {
                                    "top": 1032,
                                    "left": 632,
                                    "bottom": 1073,
                                    "right": 681,
                                },
                                "visible": true,
                                "clipped": false,
                                "pixels": true,
                                "generatorSettings": false,
                            },
                            {
                                "id": 2282,
                                "index": 168,
                                "type": "shapeLayer",
                                "name": "椭圆 1 拷贝 6",
                                "bounds": {
                                    "top": 992,
                                    "left": 596,
                                    "bottom": 1112,
                                    "right": 716,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 255,
                                        "green": 255,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "ellipse",
                                                "bounds": {
                                                    "top": 992,
                                                    "left": 596,
                                                    "bottom": 1112,
                                                    "right": 716,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 992,
                                        "left": 596,
                                        "bottom": 1112,
                                        "right": 716,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                    {
                        "id": 2333,
                        "index": 166,
                        "type": "layerSection",
                        "name": "评论",
                        "bounds": {
                            "top": 992,
                            "left": 409,
                            "bottom": 1112,
                            "right": 529,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2337,
                                "index": 165,
                                "type": "layer",
                                "name": "组 19",
                                "bounds": {
                                    "top": 1033,
                                    "left": 446,
                                    "bottom": 1072,
                                    "right": 492,
                                },
                                "visible": true,
                                "clipped": false,
                                "pixels": true,
                                "generatorSettings": false,
                            },
                            {
                                "id": 2281,
                                "index": 164,
                                "type": "shapeLayer",
                                "name": "椭圆 1 拷贝 6",
                                "bounds": {
                                    "top": 992,
                                    "left": 409,
                                    "bottom": 1112,
                                    "right": 529,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 255,
                                        "green": 255,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "ellipse",
                                                "bounds": {
                                                    "top": 992,
                                                    "left": 409,
                                                    "bottom": 1112,
                                                    "right": 529,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 992,
                                        "left": 409,
                                        "bottom": 1112,
                                        "right": 529,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                    {
                        "id": 2310,
                        "index": 162,
                        "type": "layerSection",
                        "name": "关注作者",
                        "bounds": {
                            "top": 992,
                            "left": 221,
                            "bottom": 1112,
                            "right": 341,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2305,
                                "index": 161,
                                "type": "layerSection",
                                "name": "关注Ta",
                                "bounds": {
                                    "top": 1030,
                                    "left": 259,
                                    "bottom": 1074,
                                    "right": 304,
                                },
                                "visible": true,
                                "clipped": false,
                                "blendOptions": {
                                    "mode": "passThrough",
                                },
                                "generatorSettings": false,
                                "layers": [
                                    {
                                        "id": 2304,
                                        "index": 160,
                                        "type": "shapeLayer",
                                        "name": "矩形 8 拷贝",
                                        "bounds": {
                                            "top": 1054,
                                            "left": 294,
                                            "bottom": 1071,
                                            "right": 297,
                                        },
                                        "visible": true,
                                        "clipped": false,
                                        "fill": {
                                            "color": {
                                                "red": 51.9992,
                                                "green": 51.9992,
                                                "blue": 51.9992,
                                            },
                                            "class": "solidColorLayer",
                                        },
                                        "generatorSettings": false,
                                        "path": {
                                            "pathComponents": [
                                                {
                                                    "origin": {
                                                        "type": "rect",
                                                        "bounds": {
                                                            "top": 1054,
                                                            "left": 294,
                                                            "bottom": 1071,
                                                            "right": 297,
                                                        },
                                                    },
                                                },
                                            ],
                                            "bounds": {
                                                "top": 1054,
                                                "left": 294,
                                                "bottom": 1071,
                                                "right": 297,
                                            },
                                            "defaultFill": false,
                                        },
                                    },
                                    {
                                        "id": 2303,
                                        "index": 159,
                                        "type": "shapeLayer",
                                        "name": "矩形 8",
                                        "bounds": {
                                            "top": 1061,
                                            "left": 287,
                                            "bottom": 1064,
                                            "right": 304,
                                        },
                                        "visible": true,
                                        "clipped": false,
                                        "fill": {
                                            "color": {
                                                "red": 51.9992,
                                                "green": 51.9992,
                                                "blue": 51.9992,
                                            },
                                            "class": "solidColorLayer",
                                        },
                                        "generatorSettings": false,
                                        "path": {
                                            "pathComponents": [
                                                {
                                                    "origin": {
                                                        "type": "rect",
                                                        "bounds": {
                                                            "top": 1061,
                                                            "left": 287,
                                                            "bottom": 1064,
                                                            "right": 304,
                                                        },
                                                    },
                                                },
                                            ],
                                            "bounds": {
                                                "top": 1061,
                                                "left": 287,
                                                "bottom": 1064,
                                                "right": 304,
                                            },
                                            "defaultFill": false,
                                        },
                                    },
                                    {
                                        "id": 2302,
                                        "index": 158,
                                        "type": "shapeLayer",
                                        "name": "椭圆 2 拷贝",
                                        "bounds": {
                                            "top": 1052.41,
                                            "left": 259,
                                            "bottom": 1074,
                                            "right": 280.5,
                                        },
                                        "visible": true,
                                        "clipped": false,
                                        "fill": {
                                            "color": {
                                                "red": 51.9992,
                                                "green": 51.9992,
                                                "blue": 51.9992,
                                            },
                                            "class": "solidColorLayer",
                                        },
                                        "strokeStyle": {
                                            "strokeStyleVersion": 2,
                                            "strokeEnabled": true,
                                            "fillEnabled": false,
                                            "strokeStyleLineWidth": 3,
                                            "strokeStyleLineDashOffset": {
                                                "value": 0,
                                                "units": "pointsUnit",
                                            },
                                            "strokeStyleMiterLimit": 100,
                                            "strokeStyleLineCapType": "strokeStyleButtCap",
                                            "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                                            "strokeStyleLineAlignment": "strokeStyleAlignInside",
                                            "strokeStyleScaleLock": false,
                                            "strokeStyleStrokeAdjust": false,
                                            "strokeStyleBlendMode": "normal",
                                            "strokeStyleOpacity": {
                                                "value": 100,
                                                "units": "percentUnit",
                                            },
                                            "strokeStyleContent": {
                                                "color": {
                                                    "red": 51.9992,
                                                    "green": 51.9992,
                                                    "blue": 51.9992,
                                                },
                                            },
                                            "strokeStyleResolution": 72,
                                        },
                                        "generatorSettings": false,
                                        "path": {
                                            "pathComponents": [
                                                {
                                                    "origin": {
                                                        "type": "unknown",
                                                        "bounds": {
                                                            "top": 1052.41,
                                                            "left": 259,
                                                            "bottom": 1074,
                                                            "right": 280.5,
                                                        },
                                                    },
                                                },
                                            ],
                                            "bounds": {
                                                "top": 1052.41,
                                                "left": 259,
                                                "bottom": 1074,
                                                "right": 280.5,
                                            },
                                            "defaultFill": false,
                                        },
                                    },
                                    {
                                        "id": 2301,
                                        "index": 157,
                                        "type": "shapeLayer",
                                        "name": "椭圆 2",
                                        "bounds": {
                                            "top": 1030,
                                            "left": 268.094,
                                            "bottom": 1054.91,
                                            "right": 292.906,
                                        },
                                        "visible": true,
                                        "clipped": false,
                                        "fill": {
                                            "color": {
                                                "red": 51.9992,
                                                "green": 51.9992,
                                                "blue": 51.9992,
                                            },
                                            "class": "solidColorLayer",
                                        },
                                        "strokeStyle": {
                                            "strokeStyleVersion": 2,
                                            "strokeEnabled": true,
                                            "fillEnabled": false,
                                            "strokeStyleLineWidth": 3,
                                            "strokeStyleLineDashOffset": {
                                                "value": 0,
                                                "units": "pointsUnit",
                                            },
                                            "strokeStyleMiterLimit": 100,
                                            "strokeStyleLineCapType": "strokeStyleButtCap",
                                            "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                                            "strokeStyleLineAlignment": "strokeStyleAlignInside",
                                            "strokeStyleScaleLock": false,
                                            "strokeStyleStrokeAdjust": false,
                                            "strokeStyleBlendMode": "normal",
                                            "strokeStyleOpacity": {
                                                "value": 100,
                                                "units": "percentUnit",
                                            },
                                            "strokeStyleContent": {
                                                "color": {
                                                    "red": 51.9992,
                                                    "green": 51.9992,
                                                    "blue": 51.9992,
                                                },
                                            },
                                            "strokeStyleResolution": 72,
                                        },
                                        "generatorSettings": false,
                                        "path": {
                                            "pathComponents": [
                                                {
                                                    "origin": {
                                                        "type": "ellipse",
                                                        "bounds": {
                                                            "top": 1030,
                                                            "left": 268.094,
                                                            "bottom": 1054.91,
                                                            "right": 292.906,
                                                        },
                                                    },
                                                },
                                            ],
                                            "bounds": {
                                                "top": 1030,
                                                "left": 268.094,
                                                "bottom": 1054.91,
                                                "right": 292.906,
                                            },
                                            "defaultFill": false,
                                        },
                                    },
                                ],
                            },
                            {
                                "id": 2280,
                                "index": 155,
                                "type": "shapeLayer",
                                "name": "椭圆 1 拷贝 6",
                                "bounds": {
                                    "top": 992,
                                    "left": 221,
                                    "bottom": 1112,
                                    "right": 341,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 255,
                                        "green": 255,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "ellipse",
                                                "bounds": {
                                                    "top": 992,
                                                    "left": 221,
                                                    "bottom": 1112,
                                                    "right": 341,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 992,
                                        "left": 221,
                                        "bottom": 1112,
                                        "right": 341,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                    {
                        "id": 2306,
                        "index": 153,
                        "type": "layerSection",
                        "name": "她的主页",
                        "bounds": {
                            "top": 992,
                            "left": 34,
                            "bottom": 1112,
                            "right": 154,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2299,
                                "index": 152,
                                "type": "layer",
                                "name": "Ta的主页",
                                "bounds": {
                                    "top": 1030,
                                    "left": 73,
                                    "bottom": 1074,
                                    "right": 116,
                                },
                                "visible": true,
                                "clipped": false,
                                "pixels": true,
                                "generatorSettings": false,
                            },
                            {
                                "id": 2279,
                                "index": 151,
                                "type": "shapeLayer",
                                "name": "椭圆 1 拷贝 6",
                                "bounds": {
                                    "top": 992,
                                    "left": 34,
                                    "bottom": 1112,
                                    "right": 154,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 255,
                                        "green": 255,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "ellipse",
                                                "bounds": {
                                                    "top": 992,
                                                    "left": 34,
                                                    "bottom": 1112,
                                                    "right": 154,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 992,
                                        "left": 34,
                                        "bottom": 1112,
                                        "right": 154,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                    {
                        "id": 2308,
                        "index": 149,
                        "type": "layerSection",
                        "name": "定时关闭黑色",
                        "bounds": {
                            "top": 732,
                            "left": 596,
                            "bottom": 852,
                            "right": 716,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2293,
                                "index": 148,
                                "type": "layer",
                                "name": "定时 拷贝",
                                "bounds": {
                                    "top": 767,
                                    "left": 634,
                                    "bottom": 816,
                                    "right": 683,
                                },
                                "boundsWithFX": {
                                    "top": 767,
                                    "left": 634,
                                    "bottom": 816,
                                    "right": 683,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "layerEffects": {
                                    "solidFill": {
                                        "enabled": true,
                                        "color": {
                                            "red": 51.0031,
                                            "green": 51.0031,
                                            "blue": 51.9992,
                                        },
                                    },
                                },
                                "smartObject": {
                                    "ID": "0b1316bb-2f4a-11e8-aa97-f5ec47c4f71f",
                                    "placed": "0b1316ba-2f4a-11e8-aa97-f5ec47c4f71f",
                                    "crop": 1,
                                    "antiAliasType": 16,
                                    "type": 2,
                                    "transform": [
                                        634,
                                        767,
                                        683,
                                        767,
                                        683,
                                        816,
                                        634,
                                        816,
                                    ],
                                    "comp": -1,
                                    "compInfo": {
                                        "compID": -1,
                                        "originalCompID": -1,
                                    },
                                },
                            },
                            {
                                "id": 2272,
                                "index": 147,
                                "type": "shapeLayer",
                                "name": "椭圆 1 拷贝 5",
                                "bounds": {
                                    "top": 732,
                                    "left": 596,
                                    "bottom": 852,
                                    "right": 716,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 255,
                                        "green": 255,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "ellipse",
                                                "bounds": {
                                                    "top": 732,
                                                    "left": 596,
                                                    "bottom": 852,
                                                    "right": 716,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 732,
                                        "left": 596,
                                        "bottom": 852,
                                        "right": 716,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                    {
                        "id": 2291,
                        "index": 145,
                        "type": "layerSection",
                        "name": "订阅",
                        "bounds": {
                            "top": 732,
                            "left": 409,
                            "bottom": 852,
                            "right": 529,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2287,
                                "index": 144,
                                "type": "layer",
                                "name": "心",
                                "bounds": {
                                    "top": 772,
                                    "left": 446,
                                    "bottom": 815,
                                    "right": 493,
                                },
                                "boundsWithFX": {
                                    "top": 772,
                                    "left": 446,
                                    "bottom": 815,
                                    "right": 493,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "layerEffects": {
                                    "solidFillMulti": [
                                        {
                                            "enabled": true,
                                            "color": {
                                                "red": 51.0031,
                                                "green": 51.0031,
                                                "blue": 51.9992,
                                            },
                                        },
                                        {
                                            "color": {
                                                "red": 51.0031,
                                                "green": 51.0031,
                                                "blue": 51.9992,
                                            },
                                        },
                                        {
                                            "color": {
                                                "red": 51.0031,
                                                "green": 51.0031,
                                                "blue": 51.9992,
                                            },
                                        },
                                        {
                                            "color": {
                                                "red": 99.0024,
                                                "green": 97.9985,
                                                "blue": 99.0024,
                                            },
                                        },
                                        {
                                            "color": {
                                                "red": 51.0031,
                                                "green": 51.0031,
                                                "blue": 51.9992,
                                            },
                                        },
                                    ],
                                },
                                "smartObject": {
                                    "ID": "0b144f0c-2f4a-11e8-aa97-f5ec47c4f71f",
                                    "placed": "0b1316b5-2f4a-11e8-aa97-f5ec47c4f71f",
                                    "crop": 1,
                                    "antiAliasType": 16,
                                    "type": 2,
                                    "transform": [
                                        443,
                                        767,
                                        496,
                                        767,
                                        496,
                                        820,
                                        443,
                                        820,
                                    ],
                                    "comp": -1,
                                    "compInfo": {
                                        "compID": -1,
                                        "originalCompID": -1,
                                    },
                                },
                            },
                            {
                                "id": 2271,
                                "index": 143,
                                "type": "shapeLayer",
                                "name": "椭圆 1 拷贝 4",
                                "bounds": {
                                    "top": 732,
                                    "left": 409,
                                    "bottom": 852,
                                    "right": 529,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 255,
                                        "green": 255,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "ellipse",
                                                "bounds": {
                                                    "top": 732,
                                                    "left": 409,
                                                    "bottom": 852,
                                                    "right": 529,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 732,
                                        "left": 409,
                                        "bottom": 852,
                                        "right": 529,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                    {
                        "id": 2285,
                        "index": 141,
                        "type": "layerSection",
                        "name": "下载",
                        "bounds": {
                            "top": 732,
                            "left": 221,
                            "bottom": 852,
                            "right": 341,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2198,
                                "index": 140,
                                "type": "layer",
                                "name": "下载(1)",
                                "bounds": {
                                    "top": 770,
                                    "left": 259,
                                    "bottom": 815,
                                    "right": 303,
                                },
                                "boundsWithFX": {
                                    "top": 770,
                                    "left": 259,
                                    "bottom": 815,
                                    "right": 303,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "layerEffects": {
                                    "solidFillMulti": [
                                        {
                                            "enabled": true,
                                            "color": {
                                                "red": 51.0031,
                                                "green": 51.0031,
                                                "blue": 51.9992,
                                            },
                                        },
                                        {
                                            "color": {
                                                "red": 157.998,
                                                "green": 163.997,
                                                "blue": 177.997,
                                            },
                                        },
                                    ],
                                },
                                "smartObject": {
                                    "ID": "0b144f0b-2f4a-11e8-aa97-f5ec47c4f71f",
                                    "placed": "0b12db03-2f4a-11e8-aa97-f5ec47c4f71f",
                                    "crop": 1,
                                    "antiAliasType": 16,
                                    "type": 2,
                                    "transform": [
                                        256,
                                        768,
                                        306,
                                        768,
                                        306,
                                        818,
                                        256,
                                        818,
                                    ],
                                    "comp": -1,
                                    "compInfo": {
                                        "compID": -1,
                                        "originalCompID": -1,
                                    },
                                },
                            },
                            {
                                "id": 2270,
                                "index": 139,
                                "type": "shapeLayer",
                                "name": "椭圆 1 拷贝 3",
                                "bounds": {
                                    "top": 732,
                                    "left": 221,
                                    "bottom": 852,
                                    "right": 341,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 255,
                                        "green": 255,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "ellipse",
                                                "bounds": {
                                                    "top": 732,
                                                    "left": 221,
                                                    "bottom": 852,
                                                    "right": 341,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 732,
                                        "left": 221,
                                        "bottom": 852,
                                        "right": 341,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                    {
                        "id": 2283,
                        "index": 137,
                        "type": "layerSection",
                        "name": "分享",
                        "bounds": {
                            "top": 732,
                            "left": 34,
                            "bottom": 852,
                            "right": 154,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2199,
                                "index": 136,
                                "type": "layer",
                                "name": "分享",
                                "bounds": {
                                    "top": 771,
                                    "left": 73,
                                    "bottom": 814,
                                    "right": 116,
                                },
                                "boundsWithFX": {
                                    "top": 771,
                                    "left": 73,
                                    "bottom": 814,
                                    "right": 116,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "layerEffects": {
                                    "solidFillMulti": [
                                        {
                                            "color": {
                                                "red": 99.0024,
                                                "green": 97.9985,
                                                "blue": 99.0024,
                                            },
                                        },
                                        {
                                            "enabled": true,
                                            "color": {
                                                "red": 51.0031,
                                                "green": 51.0031,
                                                "blue": 51.9992,
                                            },
                                        },
                                    ],
                                },
                                "smartObject": {
                                    "ID": "0b144f0a-2f4a-11e8-aa97-f5ec47c4f71f",
                                    "placed": "0b12dafe-2f4a-11e8-aa97-f5ec47c4f71f",
                                    "crop": 1,
                                    "antiAliasType": 16,
                                    "type": 2,
                                    "transform": [
                                        73,
                                        771,
                                        116,
                                        771,
                                        116,
                                        814,
                                        73,
                                        814,
                                    ],
                                    "comp": -1,
                                    "compInfo": {
                                        "compID": -1,
                                        "originalCompID": -1,
                                    },
                                },
                            },
                            {
                                "id": 2269,
                                "index": 135,
                                "type": "shapeLayer",
                                "name": "椭圆 1",
                                "bounds": {
                                    "top": 732,
                                    "left": 34,
                                    "bottom": 852,
                                    "right": 154,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 255,
                                        "green": 255,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "ellipse",
                                                "bounds": {
                                                    "top": 732,
                                                    "left": 34,
                                                    "bottom": 852,
                                                    "right": 154,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 732,
                                        "left": 34,
                                        "bottom": 852,
                                        "right": 154,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                ],
            },
            {
                "id": 2346,
                "index": 132,
                "type": "textLayer",
                "name": "取消",
                "bounds": {
                    "top": 1270,
                    "left": 336,
                    "bottom": 1304,
                    "right": 415,
                },
                "visible": true,
                "clipped": false,
                "generatorSettings": false,
                "text": true,
            },
            {
                "id": 2344,
                "index": 131,
                "type": "shapeLayer",
                "name": "矩形 517",
                "bounds": {
                    "top": 1235,
                    "left": 0,
                    "bottom": 1237,
                    "right": 750,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "opacity": {
                        "value": 50,
                        "units": "percentUnit",
                    },
                },
                "fill": {
                    "color": {
                        "red": 186,
                        "green": 186,
                        "blue": 186,
                    },
                    "class": "solidColorLayer",
                },
                "strokeStyle": {
                    "strokeStyleVersion": 2,
                    "strokeEnabled": true,
                    "fillEnabled": false,
                    "strokeStyleLineWidth": 3,
                    "strokeStyleLineDashOffset": {
                        "value": 0,
                        "units": "pointsUnit",
                    },
                    "strokeStyleMiterLimit": 100,
                    "strokeStyleLineCapType": "strokeStyleButtCap",
                    "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                    "strokeStyleLineAlignment": "strokeStyleAlignInside",
                    "strokeStyleScaleLock": false,
                    "strokeStyleStrokeAdjust": false,
                    "strokeStyleBlendMode": "normal",
                    "strokeStyleOpacity": {
                        "value": 100,
                        "units": "percentUnit",
                    },
                    "strokeStyleContent": {
                        "color": {
                            "red": 186,
                            "green": 186,
                            "blue": 186,
                        },
                    },
                    "strokeStyleResolution": 72,
                },
                "generatorSettings": false,
                "path": {
                    "pathComponents": [
                        {
                            "origin": {
                                "type": "rect",
                                "bounds": {
                                    "top": 1235,
                                    "left": 0,
                                    "bottom": 1237,
                                    "right": 750,
                                },
                            },
                        },
                    ],
                    "bounds": {
                        "top": 1235,
                        "left": 0,
                        "bottom": 1237,
                        "right": 750,
                    },
                    "defaultFill": false,
                },
            },
            {
                "id": 2267,
                "index": 130,
                "type": "shapeLayer",
                "name": "矩形 516",
                "bounds": {
                    "top": 674,
                    "left": 0,
                    "bottom": 1334,
                    "right": 750,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "opacity": {
                        "value": 98,
                        "units": "percentUnit",
                    },
                },
                "fill": {
                    "color": {
                        "red": 24.3268,
                        "green": 30.179,
                        "blue": 47,
                    },
                    "class": "solidColorLayer",
                },
                "generatorSettings": false,
                "path": {
                    "pathComponents": [
                        {
                            "origin": {
                                "type": "rect",
                                "bounds": {
                                    "top": 674,
                                    "left": 0,
                                    "bottom": 1334,
                                    "right": 750,
                                },
                            },
                        },
                        {
                            "origin": {
                                "type": "ellipse",
                                "bounds": {
                                    "top": 728,
                                    "left": 40,
                                    "bottom": 848,
                                    "right": 160,
                                },
                            },
                        },
                    ],
                    "bounds": {
                        "top": 674,
                        "left": 0,
                        "bottom": 1334,
                        "right": 750,
                    },
                    "defaultFill": false,
                },
            },
        ],
    },
    {
        "id": 2265,
        "index": 128,
        "type": "layerSection",
        "name": "tab",
        "bounds": {
            "top": 1231,
            "left": -5,
            "bottom": 1338,
            "right": 756,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 2263,
                "index": 127,
                "type": "layerSection",
                "name": "组 17",
                "bounds": {
                    "top": 1249,
                    "left": 22,
                    "bottom": 1321,
                    "right": 518,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layers": [
                    {
                        "id": 2204,
                        "index": 126,
                        "type": "textLayer",
                        "name": "不说说您的观点吗？",
                        "bounds": {
                            "top": 1272,
                            "left": 67,
                            "bottom": 1300,
                            "right": 311,
                        },
                        "visible": true,
                        "clipped": false,
                        "generatorSettings": false,
                        "text": true,
                    },
                    {
                        "id": 2203,
                        "index": 125,
                        "type": "shapeLayer",
                        "name": "圆角矩形 226",
                        "bounds": {
                            "top": 1249,
                            "left": 22,
                            "bottom": 1321,
                            "right": 518,
                        },
                        "visible": true,
                        "clipped": false,
                        "fill": {
                            "color": {
                                "red": 239,
                                "green": 241,
                                "blue": 243.996,
                            },
                            "class": "solidColorLayer",
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "radii": [
                                            36,
                                            36,
                                            36,
                                            36,
                                        ],
                                        "type": "roundedRect",
                                        "bounds": {
                                            "top": 1249,
                                            "left": 22,
                                            "bottom": 1321,
                                            "right": 518,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 1249,
                                "left": 22,
                                "bottom": 1321,
                                "right": 518,
                            },
                            "defaultFill": false,
                        },
                    },
                ],
            },
            {
                "id": 2228,
                "index": 123,
                "type": "layerSection",
                "name": "-s-心",
                "bounds": {
                    "top": 1265,
                    "left": 671,
                    "bottom": 1308,
                    "right": 718,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layers": [
                    {
                        "id": 2193,
                        "index": 122,
                        "type": "layer",
                        "name": "心",
                        "bounds": {
                            "top": 1265,
                            "left": 671,
                            "bottom": 1308,
                            "right": 718,
                        },
                        "boundsWithFX": {
                            "top": 1265,
                            "left": 671,
                            "bottom": 1308,
                            "right": 718,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "fillOpacity": {
                                "value": 0,
                                "units": "percentUnit",
                            },
                        },
                        "generatorSettings": false,
                        "layerEffects": {
                            "solidFill": {
                                "enabled": true,
                                "color": {
                                    "red": 157.998,
                                    "green": 163.997,
                                    "blue": 177.997,
                                },
                            },
                        },
                        "smartObject": {
                            "ID": "0b1316be-2f4a-11e8-aa97-f5ec47c4f71f",
                            "placed": "0b11f00b-2f4a-11e8-aa97-f5ec47c4f71f",
                            "crop": 1,
                            "antiAliasType": 16,
                            "type": 2,
                            "transform": [
                                668,
                                1260,
                                721,
                                1260,
                                721,
                                1313,
                                668,
                                1313,
                            ],
                            "comp": -1,
                            "compInfo": {
                                "compID": -1,
                                "originalCompID": -1,
                            },
                        },
                    },
                    {
                        "id": 2230,
                        "index": 121,
                        "type": "shapeLayer",
                        "name": "-slice-",
                        "bounds": {
                            "top": 1264,
                            "left": 670,
                            "bottom": 1309,
                            "right": 719,
                        },
                        "visible": false,
                        "clipped": false,
                        "blendOptions": {
                            "fillOpacity": {
                                "value": 15,
                                "units": "percentUnit",
                            },
                        },
                        "fill": {
                            "color": {
                                "red": 22,
                                "green": 208.412,
                                "blue": 255,
                            },
                            "class": "solidColorLayer",
                        },
                        "strokeStyle": {
                            "strokeStyleVersion": 2,
                            "strokeEnabled": true,
                            "fillEnabled": true,
                            "strokeStyleLineWidth": 1,
                            "strokeStyleLineDashOffset": {
                                "value": 0,
                                "units": "pointsUnit",
                            },
                            "strokeStyleMiterLimit": 100,
                            "strokeStyleLineCapType": "strokeStyleButtCap",
                            "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                            "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                            "strokeStyleScaleLock": false,
                            "strokeStyleStrokeAdjust": false,
                            "strokeStyleLineDashSet": [
                                4,
                                2,
                            ],
                            "strokeStyleBlendMode": "normal",
                            "strokeStyleOpacity": {
                                "value": 100,
                                "units": "percentUnit",
                            },
                            "strokeStyleContent": {
                                "color": {
                                    "red": 54,
                                    "green": 153.331,
                                    "blue": 255,
                                },
                            },
                            "strokeStyleResolution": 72,
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "type": "rect",
                                        "bounds": {
                                            "top": 1265,
                                            "left": 671,
                                            "bottom": 1308,
                                            "right": 718,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 1265,
                                "left": 671,
                                "bottom": 1308,
                                "right": 718,
                            },
                            "defaultFill": false,
                        },
                    },
                ],
            },
            {
                "id": 2197,
                "index": 119,
                "type": "layerSection",
                "name": "组 4",
                "bounds": {
                    "top": 1265,
                    "left": 562,
                    "bottom": 1308,
                    "right": 632,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layers": [
                    {
                        "id": 2196,
                        "index": 118,
                        "type": "textLayer",
                        "name": "99+",
                        "bounds": {
                            "top": 1265,
                            "left": 598,
                            "bottom": 1282,
                            "right": 632,
                        },
                        "visible": true,
                        "clipped": false,
                        "generatorSettings": false,
                        "text": true,
                    },
                    {
                        "id": 2231,
                        "index": 117,
                        "type": "layerSection",
                        "name": "-s-评论",
                        "bounds": {
                            "top": 1269,
                            "left": 562,
                            "bottom": 1308,
                            "right": 608,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2195,
                                "index": 116,
                                "type": "layer",
                                "name": "评论",
                                "bounds": {
                                    "top": 1269,
                                    "left": 562,
                                    "bottom": 1308,
                                    "right": 608,
                                },
                                "boundsWithFX": {
                                    "top": 1269,
                                    "left": 562,
                                    "bottom": 1308,
                                    "right": 608,
                                },
                                "visible": true,
                                "clipped": false,
                                "pixels": true,
                                "generatorSettings": false,
                                "layerEffects": {
                                    "solidFill": {
                                        "enabled": true,
                                        "color": {
                                            "red": 157.998,
                                            "green": 163.997,
                                            "blue": 177.997,
                                        },
                                    },
                                },
                            },
                            {
                                "id": 2233,
                                "index": 115,
                                "type": "shapeLayer",
                                "name": "-slice-",
                                "bounds": {
                                    "top": 1268,
                                    "left": 561,
                                    "bottom": 1309,
                                    "right": 609,
                                },
                                "visible": false,
                                "clipped": false,
                                "blendOptions": {
                                    "fillOpacity": {
                                        "value": 15,
                                        "units": "percentUnit",
                                    },
                                },
                                "fill": {
                                    "color": {
                                        "red": 22,
                                        "green": 208.412,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "strokeStyle": {
                                    "strokeStyleVersion": 2,
                                    "strokeEnabled": true,
                                    "fillEnabled": true,
                                    "strokeStyleLineWidth": 1,
                                    "strokeStyleLineDashOffset": {
                                        "value": 0,
                                        "units": "pointsUnit",
                                    },
                                    "strokeStyleMiterLimit": 100,
                                    "strokeStyleLineCapType": "strokeStyleButtCap",
                                    "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                                    "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                                    "strokeStyleScaleLock": false,
                                    "strokeStyleStrokeAdjust": false,
                                    "strokeStyleLineDashSet": [
                                        4,
                                        2,
                                    ],
                                    "strokeStyleBlendMode": "normal",
                                    "strokeStyleOpacity": {
                                        "value": 100,
                                        "units": "percentUnit",
                                    },
                                    "strokeStyleContent": {
                                        "color": {
                                            "red": 54,
                                            "green": 153.331,
                                            "blue": 255,
                                        },
                                    },
                                    "strokeStyleResolution": 72,
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "rect",
                                                "bounds": {
                                                    "top": 1269,
                                                    "left": 562,
                                                    "bottom": 1308,
                                                    "right": 608,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 1269,
                                        "left": 562,
                                        "bottom": 1308,
                                        "right": 608,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                ],
            },
            {
                "id": 2234,
                "index": 112,
                "type": "layerSection",
                "name": "-s-矩形 515",
                "bounds": {
                    "top": 1231,
                    "left": -5,
                    "bottom": 1338,
                    "right": 756,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layers": [
                    {
                        "id": 2202,
                        "index": 111,
                        "type": "shapeLayer",
                        "name": "矩形 515",
                        "bounds": {
                            "top": 1238,
                            "left": 0,
                            "bottom": 1334,
                            "right": 750,
                        },
                        "boundsWithFX": {
                            "top": 1231,
                            "left": -5,
                            "bottom": 1338,
                            "right": 756,
                        },
                        "visible": true,
                        "clipped": false,
                        "fill": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                            },
                            "class": "solidColorLayer",
                        },
                        "generatorSettings": false,
                        "layerEffects": {
                            "dropShadow": {
                                "enabled": true,
                                "mode": "normal",
                                "color": {
                                    "red": 233,
                                    "green": 233,
                                    "blue": 233,
                                },
                                "opacity": {
                                    "value": 55,
                                    "units": "percentUnit",
                                },
                                "useGlobalAngle": false,
                                "localLightingAngle": {
                                    "value": -90,
                                    "units": "angleUnit",
                                },
                                "distance": 2,
                                "chokeMatte": 2,
                                "blur": 6,
                            },
                        },
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "type": "rect",
                                        "bounds": {
                                            "top": 1238,
                                            "left": 0,
                                            "bottom": 1334,
                                            "right": 750,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 1238,
                                "left": 0,
                                "bottom": 1334,
                                "right": 750,
                            },
                            "defaultFill": false,
                        },
                    },
                    {
                        "id": 2236,
                        "index": 110,
                        "type": "shapeLayer",
                        "name": "-slice-",
                        "bounds": {
                            "top": 1230,
                            "left": -6,
                            "bottom": 1339,
                            "right": 757,
                        },
                        "visible": false,
                        "clipped": false,
                        "blendOptions": {
                            "fillOpacity": {
                                "value": 15,
                                "units": "percentUnit",
                            },
                        },
                        "fill": {
                            "color": {
                                "red": 22,
                                "green": 208.412,
                                "blue": 255,
                            },
                            "class": "solidColorLayer",
                        },
                        "strokeStyle": {
                            "strokeStyleVersion": 2,
                            "strokeEnabled": true,
                            "fillEnabled": true,
                            "strokeStyleLineWidth": 1,
                            "strokeStyleLineDashOffset": {
                                "value": 0,
                                "units": "pointsUnit",
                            },
                            "strokeStyleMiterLimit": 100,
                            "strokeStyleLineCapType": "strokeStyleButtCap",
                            "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                            "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                            "strokeStyleScaleLock": false,
                            "strokeStyleStrokeAdjust": false,
                            "strokeStyleLineDashSet": [
                                4,
                                2,
                            ],
                            "strokeStyleBlendMode": "normal",
                            "strokeStyleOpacity": {
                                "value": 100,
                                "units": "percentUnit",
                            },
                            "strokeStyleContent": {
                                "color": {
                                    "red": 54,
                                    "green": 153.331,
                                    "blue": 255,
                                },
                            },
                            "strokeStyleResolution": 72,
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "type": "rect",
                                        "bounds": {
                                            "top": 1231,
                                            "left": -5,
                                            "bottom": 1338,
                                            "right": 756,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 1231,
                                "left": -5,
                                "bottom": 1338,
                                "right": 756,
                            },
                            "defaultFill": false,
                        },
                    },
                ],
            },
        ],
    },
    {
        "id": 42,
        "index": 107,
        "type": "layerSection",
        "name": "nav",
        "bounds": {
            "top": 11,
            "left": 21,
            "bottom": 102,
            "right": 734,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 37,
                "index": 106,
                "type": "layerSection",
                "name": "nav 拷贝",
                "bounds": {
                    "top": 11,
                    "left": 21,
                    "bottom": 32,
                    "right": 734,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layers": [
                    {
                        "id": 27,
                        "index": 105,
                        "type": "layer",
                        "name": "图层 3",
                        "bounds": {
                            "top": 11,
                            "left": 685,
                            "bottom": 30,
                            "right": 734,
                        },
                        "boundsWithFX": {
                            "top": 11,
                            "left": 685,
                            "bottom": 30,
                            "right": 734,
                        },
                        "visible": true,
                        "clipped": false,
                        "pixels": true,
                        "generatorSettings": false,
                        "layerEffects": {
                            "solidFill": {
                                "enabled": true,
                                "color": {
                                    "red": 51.0031,
                                    "green": 51.0031,
                                    "blue": 51.0031,
                                },
                            },
                        },
                    },
                    {
                        "id": 26,
                        "index": 104,
                        "type": "layer",
                        "name": "状态栏 拷贝",
                        "bounds": {
                            "top": 11,
                            "left": 21,
                            "bottom": 32,
                            "right": 674,
                        },
                        "boundsWithFX": {
                            "top": 11,
                            "left": 21,
                            "bottom": 32,
                            "right": 674,
                        },
                        "visible": true,
                        "clipped": false,
                        "pixels": true,
                        "generatorSettings": false,
                        "layerEffects": {
                            "solidFill": {
                                "enabled": true,
                                "color": {
                                    "red": 51.0031,
                                    "green": 51.0031,
                                    "blue": 51.0031,
                                },
                            },
                        },
                    },
                ],
            },
            {
                "id": 22,
                "index": 102,
                "type": "layerSection",
                "name": "nav",
                "bounds": {
                    "top": 68,
                    "left": 37,
                    "bottom": 102,
                    "right": 713,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layers": [
                    {
                        "id": 2205,
                        "index": 101,
                        "type": "layerSection",
                        "name": "-s-小化",
                        "bounds": {
                            "top": 75,
                            "left": 37,
                            "bottom": 94,
                            "right": 76,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2168,
                                "index": 100,
                                "type": "shapeLayer",
                                "name": "小化",
                                "bounds": {
                                    "top": 75,
                                    "left": 37,
                                    "bottom": 94,
                                    "right": 76,
                                },
                                "boundsWithFX": {
                                    "top": 75,
                                    "left": 37,
                                    "bottom": 94,
                                    "right": 76,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 0,
                                        "green": 0,
                                        "blue": 0,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "layerEffects": {
                                    "solidFill": {
                                        "enabled": true,
                                        "color": {
                                            "red": 51.0031,
                                            "green": 51.0031,
                                            "blue": 51.0031,
                                        },
                                    },
                                },
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "unknown",
                                                "bounds": {
                                                    "top": 75,
                                                    "left": 37,
                                                    "bottom": 94,
                                                    "right": 76,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 75,
                                        "left": 37,
                                        "bottom": 94,
                                        "right": 76,
                                    },
                                    "defaultFill": false,
                                },
                            },
                            {
                                "id": 2207,
                                "index": 99,
                                "type": "shapeLayer",
                                "name": "-slice-",
                                "bounds": {
                                    "top": 74,
                                    "left": 36,
                                    "bottom": 95,
                                    "right": 77,
                                },
                                "visible": false,
                                "clipped": false,
                                "blendOptions": {
                                    "fillOpacity": {
                                        "value": 15,
                                        "units": "percentUnit",
                                    },
                                },
                                "fill": {
                                    "color": {
                                        "red": 22,
                                        "green": 208.412,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "strokeStyle": {
                                    "strokeStyleVersion": 2,
                                    "strokeEnabled": true,
                                    "fillEnabled": true,
                                    "strokeStyleLineWidth": 1,
                                    "strokeStyleLineDashOffset": {
                                        "value": 0,
                                        "units": "pointsUnit",
                                    },
                                    "strokeStyleMiterLimit": 100,
                                    "strokeStyleLineCapType": "strokeStyleButtCap",
                                    "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                                    "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                                    "strokeStyleScaleLock": false,
                                    "strokeStyleStrokeAdjust": false,
                                    "strokeStyleLineDashSet": [
                                        4,
                                        2,
                                    ],
                                    "strokeStyleBlendMode": "normal",
                                    "strokeStyleOpacity": {
                                        "value": 100,
                                        "units": "percentUnit",
                                    },
                                    "strokeStyleContent": {
                                        "color": {
                                            "red": 54,
                                            "green": 153.331,
                                            "blue": 255,
                                        },
                                    },
                                    "strokeStyleResolution": 72,
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "rect",
                                                "bounds": {
                                                    "top": 75,
                                                    "left": 37,
                                                    "bottom": 94,
                                                    "right": 76,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 75,
                                        "left": 37,
                                        "bottom": 94,
                                        "right": 76,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                    {
                        "id": 2208,
                        "index": 97,
                        "type": "layerSection",
                        "name": "-s-m",
                        "bounds": {
                            "top": 68,
                            "left": 678,
                            "bottom": 97,
                            "right": 713,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2167,
                                "index": 96,
                                "type": "layer",
                                "name": "m",
                                "bounds": {
                                    "top": 68,
                                    "left": 678,
                                    "bottom": 97,
                                    "right": 713,
                                },
                                "boundsWithFX": {
                                    "top": 68,
                                    "left": 678,
                                    "bottom": 97,
                                    "right": 713,
                                },
                                "visible": true,
                                "clipped": false,
                                "pixels": true,
                                "generatorSettings": false,
                                "layerEffects": {
                                    "solidFill": {
                                        "enabled": true,
                                        "color": {
                                            "red": 51.0031,
                                            "green": 51.0031,
                                            "blue": 51.0031,
                                        },
                                    },
                                },
                            },
                            {
                                "id": 2210,
                                "index": 95,
                                "type": "shapeLayer",
                                "name": "-slice-",
                                "bounds": {
                                    "top": 67,
                                    "left": 677,
                                    "bottom": 98,
                                    "right": 714,
                                },
                                "visible": false,
                                "clipped": false,
                                "blendOptions": {
                                    "fillOpacity": {
                                        "value": 15,
                                        "units": "percentUnit",
                                    },
                                },
                                "fill": {
                                    "color": {
                                        "red": 22,
                                        "green": 208.412,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "strokeStyle": {
                                    "strokeStyleVersion": 2,
                                    "strokeEnabled": true,
                                    "fillEnabled": true,
                                    "strokeStyleLineWidth": 1,
                                    "strokeStyleLineDashOffset": {
                                        "value": 0,
                                        "units": "pointsUnit",
                                    },
                                    "strokeStyleMiterLimit": 100,
                                    "strokeStyleLineCapType": "strokeStyleButtCap",
                                    "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                                    "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                                    "strokeStyleScaleLock": false,
                                    "strokeStyleStrokeAdjust": false,
                                    "strokeStyleLineDashSet": [
                                        4,
                                        2,
                                    ],
                                    "strokeStyleBlendMode": "normal",
                                    "strokeStyleOpacity": {
                                        "value": 100,
                                        "units": "percentUnit",
                                    },
                                    "strokeStyleContent": {
                                        "color": {
                                            "red": 54,
                                            "green": 153.331,
                                            "blue": 255,
                                        },
                                    },
                                    "strokeStyleResolution": 72,
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "rect",
                                                "bounds": {
                                                    "top": 68,
                                                    "left": 678,
                                                    "bottom": 97,
                                                    "right": 713,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 68,
                                        "left": 678,
                                        "bottom": 97,
                                        "right": 713,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                    {
                        "id": 1957,
                        "index": 93,
                        "type": "textLayer",
                        "name": "圣经故事",
                        "bounds": {
                            "top": 68,
                            "left": 304,
                            "bottom": 102,
                            "right": 446,
                        },
                        "visible": true,
                        "clipped": false,
                        "generatorSettings": false,
                        "text": true,
                    },
                ],
            },
            {
                "id": 1958,
                "index": 91,
                "type": "textLayer",
                "name": "7:05AM",
                "bounds": {
                    "top": 11,
                    "left": 333,
                    "bottom": 30,
                    "right": 417,
                },
                "visible": true,
                "clipped": false,
                "generatorSettings": false,
                "text": true,
            },
        ],
    },
    {
        "id": 2101,
        "index": 89,
        "type": "layerSection",
        "name": "1",
        "bounds": {
            "top": 147,
            "left": 120,
            "bottom": 658,
            "right": 631,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 2100,
                "index": 88,
                "type": "layer",
                "name": "grant-whitty-546453-unsplash",
                "bounds": {
                    "top": 180,
                    "left": 160,
                    "bottom": 610,
                    "right": 590,
                },
                "visible": true,
                "clipped": false,
                "pixels": true,
                "generatorSettings": false,
            },
            {
                "id": 1517,
                "index": 87,
                "type": "layerSection",
                "name": "1",
                "bounds": {
                    "top": 106,
                    "left": 0,
                    "bottom": 186,
                    "right": 750,
                },
                "visible": false,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layers": [
                    {
                        "id": 1748,
                        "index": 86,
                        "type": "textLayer",
                        "name": "已支付",
                        "bounds": {
                            "top": 131,
                            "left": 244,
                            "bottom": 159,
                            "right": 331,
                        },
                        "visible": true,
                        "clipped": false,
                        "generatorSettings": false,
                        "text": true,
                    },
                    {
                        "id": 1746,
                        "index": 85,
                        "type": "textLayer",
                        "name": "待支付",
                        "bounds": {
                            "top": 131,
                            "left": 402,
                            "bottom": 159,
                            "right": 491,
                        },
                        "visible": true,
                        "clipped": false,
                        "generatorSettings": false,
                        "text": true,
                    },
                    {
                        "id": 1514,
                        "index": 84,
                        "type": "textLayer",
                        "name": "已退款",
                        "bounds": {
                            "top": 131,
                            "left": 562,
                            "bottom": 159,
                            "right": 649,
                        },
                        "visible": true,
                        "clipped": false,
                        "generatorSettings": false,
                        "text": true,
                    },
                    {
                        "id": 1749,
                        "index": 83,
                        "type": "layerSection",
                        "name": "全部",
                        "bounds": {
                            "top": 131,
                            "left": 94,
                            "bottom": 186,
                            "right": 164,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 1512,
                                "index": 82,
                                "type": "textLayer",
                                "name": "全部",
                                "bounds": {
                                    "top": 131,
                                    "left": 100,
                                    "bottom": 159,
                                    "right": 158,
                                },
                                "visible": true,
                                "clipped": false,
                                "generatorSettings": false,
                                "text": true,
                            },
                            {
                                "id": 1888,
                                "index": 81,
                                "type": "layerSection",
                                "name": "-s-矩形 513",
                                "bounds": {
                                    "top": 182,
                                    "left": 94,
                                    "bottom": 186,
                                    "right": 164,
                                },
                                "visible": true,
                                "clipped": false,
                                "blendOptions": {
                                    "mode": "passThrough",
                                },
                                "generatorSettings": false,
                                "layers": [
                                    {
                                        "id": 1515,
                                        "index": 80,
                                        "type": "shapeLayer",
                                        "name": "矩形 513",
                                        "bounds": {
                                            "top": 182,
                                            "left": 94,
                                            "bottom": 186,
                                            "right": 164,
                                        },
                                        "visible": true,
                                        "clipped": false,
                                        "fill": {
                                            "color": {
                                                "red": 51.0031,
                                                "green": 51.0031,
                                                "blue": 51.0031,
                                            },
                                            "class": "solidColorLayer",
                                        },
                                        "generatorSettings": false,
                                        "path": {
                                            "pathComponents": [
                                                {
                                                    "origin": {
                                                        "radii": [
                                                            2,
                                                            2,
                                                            2,
                                                            2,
                                                        ],
                                                        "type": "roundedRect",
                                                        "bounds": {
                                                            "top": 182,
                                                            "left": 94,
                                                            "bottom": 186,
                                                            "right": 164,
                                                        },
                                                    },
                                                },
                                            ],
                                            "bounds": {
                                                "top": 182,
                                                "left": 94,
                                                "bottom": 186,
                                                "right": 164,
                                            },
                                            "defaultFill": false,
                                        },
                                    },
                                    {
                                        "id": 1890,
                                        "index": 79,
                                        "type": "shapeLayer",
                                        "name": "-slice-",
                                        "bounds": {
                                            "top": 181,
                                            "left": 93,
                                            "bottom": 187,
                                            "right": 165,
                                        },
                                        "visible": false,
                                        "clipped": false,
                                        "blendOptions": {
                                            "fillOpacity": {
                                                "value": 15,
                                                "units": "percentUnit",
                                            },
                                        },
                                        "fill": {
                                            "color": {
                                                "red": 22,
                                                "green": 208.412,
                                                "blue": 255,
                                            },
                                            "class": "solidColorLayer",
                                        },
                                        "strokeStyle": {
                                            "strokeStyleVersion": 2,
                                            "strokeEnabled": true,
                                            "fillEnabled": true,
                                            "strokeStyleLineWidth": 1,
                                            "strokeStyleLineDashOffset": {
                                                "value": 0,
                                                "units": "pointsUnit",
                                            },
                                            "strokeStyleMiterLimit": 100,
                                            "strokeStyleLineCapType": "strokeStyleButtCap",
                                            "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                                            "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                                            "strokeStyleScaleLock": false,
                                            "strokeStyleStrokeAdjust": false,
                                            "strokeStyleLineDashSet": [
                                                4,
                                                2,
                                            ],
                                            "strokeStyleBlendMode": "normal",
                                            "strokeStyleOpacity": {
                                                "value": 100,
                                                "units": "percentUnit",
                                            },
                                            "strokeStyleContent": {
                                                "color": {
                                                    "red": 54,
                                                    "green": 153.331,
                                                    "blue": 255,
                                                },
                                            },
                                            "strokeStyleResolution": 72,
                                        },
                                        "generatorSettings": false,
                                        "path": {
                                            "pathComponents": [
                                                {
                                                    "origin": {
                                                        "type": "rect",
                                                        "bounds": {
                                                            "top": 182,
                                                            "left": 94,
                                                            "bottom": 186,
                                                            "right": 164,
                                                        },
                                                    },
                                                },
                                            ],
                                            "bounds": {
                                                "top": 182,
                                                "left": 94,
                                                "bottom": 186,
                                                "right": 164,
                                            },
                                            "defaultFill": false,
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "id": 1510,
                        "index": 76,
                        "type": "shapeLayer",
                        "name": "圆角矩形 1 拷贝 2",
                        "bounds": {
                            "top": 106,
                            "left": 0,
                            "bottom": 186,
                            "right": 750,
                        },
                        "boundsWithFX": {
                            "top": 106,
                            "left": 0,
                            "bottom": 186,
                            "right": 750,
                        },
                        "visible": true,
                        "clipped": false,
                        "fill": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                            },
                            "class": "solidColorLayer",
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "type": "rect",
                                        "bounds": {
                                            "top": 106,
                                            "left": 0,
                                            "bottom": 186,
                                            "right": 750,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 106,
                                "left": 0,
                                "bottom": 186,
                                "right": 750,
                            },
                            "defaultFill": false,
                        },
                    },
                ],
            },
            {
                "id": 2098,
                "index": 74,
                "type": "shapeLayer",
                "name": "圆角矩形 223",
                "bounds": {
                    "top": 170,
                    "left": 150,
                    "bottom": 620,
                    "right": 600,
                },
                "boundsWithFX": {
                    "top": 147,
                    "left": 120,
                    "bottom": 658,
                    "right": 631,
                },
                "visible": true,
                "clipped": false,
                "fill": {
                    "color": {
                        "red": 255,
                        "green": 255,
                        "blue": 255,
                    },
                    "class": "solidColorLayer",
                },
                "generatorSettings": false,
                "layerEffects": {
                    "dropShadow": {
                        "enabled": true,
                        "mode": "normal",
                        "color": {
                            "red": 231.549,
                            "green": 237.553,
                            "blue": 241,
                        },
                        "opacity": {
                            "value": 100,
                            "units": "percentUnit",
                        },
                        "useGlobalAngle": false,
                        "distance": 7,
                        "chokeMatte": 7,
                        "blur": 29,
                    },
                },
                "path": {
                    "pathComponents": [
                        {
                            "origin": {
                                "radii": [
                                    10,
                                    10,
                                    10,
                                    10,
                                ],
                                "type": "roundedRect",
                                "bounds": {
                                    "top": 170,
                                    "left": 150,
                                    "bottom": 620,
                                    "right": 600,
                                },
                            },
                        },
                    ],
                    "bounds": {
                        "top": 170,
                        "left": 150,
                        "bottom": 620,
                        "right": 600,
                    },
                    "defaultFill": false,
                },
            },
        ],
    },
    {
        "id": 2147,
        "index": 72,
        "type": "layerSection",
        "name": "2",
        "bounds": {
            "top": 706,
            "left": 233,
            "bottom": 795,
            "right": 517,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 2105,
                "index": 71,
                "type": "textLayer",
                "name": "01 和合版旧约创世纪",
                "bounds": {
                    "top": 767,
                    "left": 233,
                    "bottom": 795,
                    "right": 517,
                },
                "visible": true,
                "clipped": false,
                "generatorSettings": false,
                "text": true,
            },
            {
                "id": 2104,
                "index": 70,
                "type": "textLayer",
                "name": "圣经故事",
                "bounds": {
                    "top": 706,
                    "left": 308,
                    "bottom": 738,
                    "right": 442,
                },
                "visible": true,
                "clipped": false,
                "generatorSettings": false,
                "text": true,
            },
        ],
    },
    {
        "id": 2149,
        "index": 68,
        "type": "layerSection",
        "name": "3",
        "bounds": {
            "top": 874,
            "left": 40,
            "bottom": 930,
            "right": 710,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 2123,
                "index": 67,
                "type": "textLayer",
                "name": "06:30",
                "bounds": {
                    "top": 913,
                    "left": 41,
                    "bottom": 930,
                    "right": 98,
                },
                "visible": true,
                "clipped": false,
                "generatorSettings": false,
                "text": true,
            },
            {
                "id": 2122,
                "index": 66,
                "type": "textLayer",
                "name": "12:12",
                "bounds": {
                    "top": 913,
                    "left": 655,
                    "bottom": 929,
                    "right": 709,
                },
                "visible": true,
                "clipped": false,
                "generatorSettings": false,
                "text": true,
            },
            {
                "id": 2120,
                "index": 65,
                "type": "layerSection",
                "name": "-s-button_ progress",
                "bounds": {
                    "top": 874,
                    "left": 360,
                    "bottom": 905,
                    "right": 391,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layers": [
                    {
                        "id": 2118,
                        "index": 64,
                        "type": "layerSection",
                        "name": "组 15",
                        "bounds": {
                            "top": 884,
                            "left": 368,
                            "bottom": 895,
                            "right": 383,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2117,
                                "index": 63,
                                "type": "shapeLayer",
                                "name": "圆角矩形 225 拷贝 2",
                                "bounds": {
                                    "top": 884,
                                    "left": 380,
                                    "bottom": 895,
                                    "right": 383,
                                },
                                "boundsWithFX": {
                                    "top": 884,
                                    "left": 380,
                                    "bottom": 895,
                                    "right": 383,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 69.9989,
                                        "green": 83.0026,
                                        "blue": 103.998,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "layerEffects": {
                                    "innerShadowMulti": [
                                        {
                                            "enabled": true,
                                            "mode": "normal",
                                            "color": {
                                                "red": 96.1868,
                                                "green": 115.245,
                                                "blue": 146,
                                            },
                                            "opacity": {
                                                "value": 100,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": -54,
                                                "units": "angleUnit",
                                            },
                                            "distance": 1,
                                            "blur": 1,
                                        },
                                        {
                                            "enabled": true,
                                            "mode": "normal",
                                            "color": {
                                                "red": 30.1984,
                                                "green": 38.1556,
                                                "blue": 51,
                                            },
                                            "opacity": {
                                                "value": 100,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": 124,
                                                "units": "angleUnit",
                                            },
                                            "distance": 1,
                                            "blur": 1,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 38.0973,
                                                "green": 46.9455,
                                                "blue": 67,
                                            },
                                            "opacity": {
                                                "value": 70,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": -90,
                                                "units": "angleUnit",
                                            },
                                            "distance": 2,
                                            "blur": 3,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 14.1479,
                                                "green": 23.284,
                                                "blue": 44,
                                            },
                                            "opacity": {
                                                "value": 86,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": -96,
                                                "units": "angleUnit",
                                            },
                                            "distance": 2,
                                            "chokeMatte": 3,
                                            "blur": 2,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 14.1479,
                                                "green": 23.284,
                                                "blue": 44,
                                            },
                                            "opacity": {
                                                "value": 86,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "distance": 2,
                                            "chokeMatte": 5,
                                            "blur": 2,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 14.1479,
                                                "green": 23.284,
                                                "blue": 44,
                                            },
                                            "opacity": {
                                                "value": 76,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "distance": 5,
                                            "chokeMatte": 5,
                                            "blur": 6,
                                        },
                                    ],
                                    "gradientFill": {
                                        "enabled": true,
                                        "gradient": {
                                            "name": "自定",
                                            "colors": [
                                                {
                                                    "color": {
                                                        "red": 118.879,
                                                        "green": 127.342,
                                                        "blue": 141,
                                                    },
                                                    "type": "userStop",
                                                    "location": 0,
                                                    "midpoint": 50,
                                                },
                                                {
                                                    "color": {
                                                        "red": 53.0506,
                                                        "green": 66.8016,
                                                        "blue": 89,
                                                    },
                                                    "type": "userStop",
                                                    "location": 4076,
                                                    "midpoint": 50,
                                                },
                                            ],
                                        },
                                    },
                                },
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "radii": [
                                                    1.5,
                                                    1.5,
                                                    1.5,
                                                    1.5,
                                                ],
                                                "type": "roundedRect",
                                                "bounds": {
                                                    "top": 884,
                                                    "left": 380,
                                                    "bottom": 895,
                                                    "right": 383,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 884,
                                        "left": 380,
                                        "bottom": 895,
                                        "right": 383,
                                    },
                                    "defaultFill": false,
                                },
                            },
                            {
                                "id": 2116,
                                "index": 62,
                                "type": "shapeLayer",
                                "name": "圆角矩形 225 拷贝",
                                "bounds": {
                                    "top": 884,
                                    "left": 374,
                                    "bottom": 895,
                                    "right": 377,
                                },
                                "boundsWithFX": {
                                    "top": 884,
                                    "left": 374,
                                    "bottom": 895,
                                    "right": 377,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 69.9989,
                                        "green": 83.0026,
                                        "blue": 103.998,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "layerEffects": {
                                    "innerShadowMulti": [
                                        {
                                            "enabled": true,
                                            "mode": "normal",
                                            "color": {
                                                "red": 96.1868,
                                                "green": 115.245,
                                                "blue": 146,
                                            },
                                            "opacity": {
                                                "value": 100,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": -54,
                                                "units": "angleUnit",
                                            },
                                            "distance": 1,
                                            "blur": 1,
                                        },
                                        {
                                            "enabled": true,
                                            "mode": "normal",
                                            "color": {
                                                "red": 30.1984,
                                                "green": 38.1556,
                                                "blue": 51,
                                            },
                                            "opacity": {
                                                "value": 100,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": 124,
                                                "units": "angleUnit",
                                            },
                                            "distance": 1,
                                            "blur": 1,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 38.0973,
                                                "green": 46.9455,
                                                "blue": 67,
                                            },
                                            "opacity": {
                                                "value": 70,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": -90,
                                                "units": "angleUnit",
                                            },
                                            "distance": 2,
                                            "blur": 3,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 14.1479,
                                                "green": 23.284,
                                                "blue": 44,
                                            },
                                            "opacity": {
                                                "value": 86,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": -96,
                                                "units": "angleUnit",
                                            },
                                            "distance": 2,
                                            "chokeMatte": 3,
                                            "blur": 2,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 14.1479,
                                                "green": 23.284,
                                                "blue": 44,
                                            },
                                            "opacity": {
                                                "value": 86,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "distance": 2,
                                            "chokeMatte": 5,
                                            "blur": 2,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 14.1479,
                                                "green": 23.284,
                                                "blue": 44,
                                            },
                                            "opacity": {
                                                "value": 76,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "distance": 5,
                                            "chokeMatte": 5,
                                            "blur": 6,
                                        },
                                    ],
                                    "gradientFill": {
                                        "enabled": true,
                                        "gradient": {
                                            "name": "自定",
                                            "colors": [
                                                {
                                                    "color": {
                                                        "red": 118.879,
                                                        "green": 127.342,
                                                        "blue": 141,
                                                    },
                                                    "type": "userStop",
                                                    "location": 0,
                                                    "midpoint": 50,
                                                },
                                                {
                                                    "color": {
                                                        "red": 53.0506,
                                                        "green": 66.8016,
                                                        "blue": 89,
                                                    },
                                                    "type": "userStop",
                                                    "location": 4076,
                                                    "midpoint": 50,
                                                },
                                            ],
                                        },
                                    },
                                },
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "radii": [
                                                    1.5,
                                                    1.5,
                                                    1.5,
                                                    1.5,
                                                ],
                                                "type": "roundedRect",
                                                "bounds": {
                                                    "top": 884,
                                                    "left": 374,
                                                    "bottom": 895,
                                                    "right": 377,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 884,
                                        "left": 374,
                                        "bottom": 895,
                                        "right": 377,
                                    },
                                    "defaultFill": false,
                                },
                            },
                            {
                                "id": 2115,
                                "index": 61,
                                "type": "shapeLayer",
                                "name": "圆角矩形 225",
                                "bounds": {
                                    "top": 884,
                                    "left": 368,
                                    "bottom": 895,
                                    "right": 371,
                                },
                                "boundsWithFX": {
                                    "top": 884,
                                    "left": 368,
                                    "bottom": 895,
                                    "right": 371,
                                },
                                "visible": true,
                                "clipped": false,
                                "fill": {
                                    "color": {
                                        "red": 69.9989,
                                        "green": 83.0026,
                                        "blue": 103.998,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "generatorSettings": false,
                                "layerEffects": {
                                    "innerShadowMulti": [
                                        {
                                            "enabled": true,
                                            "mode": "normal",
                                            "color": {
                                                "red": 96.1868,
                                                "green": 115.245,
                                                "blue": 146,
                                            },
                                            "opacity": {
                                                "value": 100,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": -54,
                                                "units": "angleUnit",
                                            },
                                            "distance": 1,
                                            "blur": 1,
                                        },
                                        {
                                            "enabled": true,
                                            "mode": "normal",
                                            "color": {
                                                "red": 30.1984,
                                                "green": 38.1556,
                                                "blue": 51,
                                            },
                                            "opacity": {
                                                "value": 100,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": 124,
                                                "units": "angleUnit",
                                            },
                                            "distance": 1,
                                            "blur": 1,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 38.0973,
                                                "green": 46.9455,
                                                "blue": 67,
                                            },
                                            "opacity": {
                                                "value": 70,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": -90,
                                                "units": "angleUnit",
                                            },
                                            "distance": 2,
                                            "blur": 3,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 14.1479,
                                                "green": 23.284,
                                                "blue": 44,
                                            },
                                            "opacity": {
                                                "value": 86,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "localLightingAngle": {
                                                "value": -96,
                                                "units": "angleUnit",
                                            },
                                            "distance": 2,
                                            "chokeMatte": 3,
                                            "blur": 2,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 14.1479,
                                                "green": 23.284,
                                                "blue": 44,
                                            },
                                            "opacity": {
                                                "value": 86,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "distance": 2,
                                            "chokeMatte": 5,
                                            "blur": 2,
                                        },
                                        {
                                            "mode": "normal",
                                            "color": {
                                                "red": 14.1479,
                                                "green": 23.284,
                                                "blue": 44,
                                            },
                                            "opacity": {
                                                "value": 76,
                                                "units": "percentUnit",
                                            },
                                            "useGlobalAngle": false,
                                            "distance": 5,
                                            "chokeMatte": 5,
                                            "blur": 6,
                                        },
                                    ],
                                    "gradientFill": {
                                        "enabled": true,
                                        "gradient": {
                                            "name": "自定",
                                            "colors": [
                                                {
                                                    "color": {
                                                        "red": 118.879,
                                                        "green": 127.342,
                                                        "blue": 141,
                                                    },
                                                    "type": "userStop",
                                                    "location": 0,
                                                    "midpoint": 50,
                                                },
                                                {
                                                    "color": {
                                                        "red": 53.0506,
                                                        "green": 66.8016,
                                                        "blue": 89,
                                                    },
                                                    "type": "userStop",
                                                    "location": 4076,
                                                    "midpoint": 50,
                                                },
                                            ],
                                        },
                                    },
                                },
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "radii": [
                                                    1.5,
                                                    1.5,
                                                    1.5,
                                                    1.5,
                                                ],
                                                "type": "roundedRect",
                                                "bounds": {
                                                    "top": 884,
                                                    "left": 368,
                                                    "bottom": 895,
                                                    "right": 371,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 884,
                                        "left": 368,
                                        "bottom": 895,
                                        "right": 371,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                    {
                        "id": 2114,
                        "index": 59,
                        "type": "shapeLayer",
                        "name": "圆角矩形 224",
                        "bounds": {
                            "top": 877,
                            "left": 363,
                            "bottom": 901,
                            "right": 387,
                        },
                        "boundsWithFX": {
                            "top": 874,
                            "left": 360,
                            "bottom": 905,
                            "right": 391,
                        },
                        "visible": true,
                        "clipped": false,
                        "fill": {
                            "color": {
                                "red": 69.9989,
                                "green": 83.0026,
                                "blue": 103.998,
                            },
                            "class": "solidColorLayer",
                        },
                        "generatorSettings": false,
                        "layerEffects": {
                            "dropShadow": {
                                "enabled": true,
                                "mode": "normal",
                                "color": {
                                    "red": 69.9989,
                                    "green": 83.0026,
                                    "blue": 103.998,
                                },
                                "opacity": {
                                    "value": 82,
                                    "units": "percentUnit",
                                },
                                "useGlobalAngle": false,
                                "distance": 0,
                                "chokeMatte": 2,
                                "blur": 4,
                            },
                            "innerShadowMulti": [
                                {
                                    "enabled": true,
                                    "mode": "normal",
                                    "color": {
                                        "red": 96.1868,
                                        "green": 115.245,
                                        "blue": 146,
                                    },
                                    "opacity": {
                                        "value": 100,
                                        "units": "percentUnit",
                                    },
                                    "useGlobalAngle": false,
                                    "localLightingAngle": {
                                        "value": 135,
                                        "units": "angleUnit",
                                    },
                                    "distance": 1,
                                    "blur": 2,
                                },
                                {
                                    "enabled": true,
                                    "mode": "normal",
                                    "color": {
                                        "red": 42.6459,
                                        "green": 55.0311,
                                        "blue": 75,
                                    },
                                    "opacity": {
                                        "value": 100,
                                        "units": "percentUnit",
                                    },
                                    "useGlobalAngle": false,
                                    "localLightingAngle": {
                                        "value": -63,
                                        "units": "angleUnit",
                                    },
                                    "distance": 1,
                                    "blur": 1,
                                },
                                {
                                    "mode": "normal",
                                    "color": {
                                        "red": 38.0973,
                                        "green": 46.9455,
                                        "blue": 67,
                                    },
                                    "opacity": {
                                        "value": 70,
                                        "units": "percentUnit",
                                    },
                                    "useGlobalAngle": false,
                                    "localLightingAngle": {
                                        "value": -90,
                                        "units": "angleUnit",
                                    },
                                    "distance": 2,
                                    "blur": 3,
                                },
                                {
                                    "mode": "normal",
                                    "color": {
                                        "red": 14.1479,
                                        "green": 23.284,
                                        "blue": 44,
                                    },
                                    "opacity": {
                                        "value": 86,
                                        "units": "percentUnit",
                                    },
                                    "useGlobalAngle": false,
                                    "localLightingAngle": {
                                        "value": -96,
                                        "units": "angleUnit",
                                    },
                                    "distance": 2,
                                    "chokeMatte": 3,
                                    "blur": 2,
                                },
                                {
                                    "mode": "normal",
                                    "color": {
                                        "red": 14.1479,
                                        "green": 23.284,
                                        "blue": 44,
                                    },
                                    "opacity": {
                                        "value": 86,
                                        "units": "percentUnit",
                                    },
                                    "useGlobalAngle": false,
                                    "distance": 2,
                                    "chokeMatte": 5,
                                    "blur": 2,
                                },
                                {
                                    "mode": "normal",
                                    "color": {
                                        "red": 14.1479,
                                        "green": 23.284,
                                        "blue": 44,
                                    },
                                    "opacity": {
                                        "value": 76,
                                        "units": "percentUnit",
                                    },
                                    "useGlobalAngle": false,
                                    "distance": 5,
                                    "chokeMatte": 5,
                                    "blur": 6,
                                },
                            ],
                        },
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "radii": [
                                            12,
                                            12,
                                            12,
                                            12,
                                        ],
                                        "type": "roundedRect",
                                        "bounds": {
                                            "top": 877,
                                            "left": 363,
                                            "bottom": 901,
                                            "right": 387,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 877,
                                "left": 363,
                                "bottom": 901,
                                "right": 387,
                            },
                            "defaultFill": false,
                        },
                    },
                    {
                        "id": 2211,
                        "index": 58,
                        "type": "shapeLayer",
                        "name": "-slice-",
                        "bounds": {
                            "top": 873,
                            "left": 359,
                            "bottom": 906,
                            "right": 392,
                        },
                        "visible": false,
                        "clipped": false,
                        "blendOptions": {
                            "fillOpacity": {
                                "value": 15,
                                "units": "percentUnit",
                            },
                        },
                        "fill": {
                            "color": {
                                "red": 22,
                                "green": 208.412,
                                "blue": 255,
                            },
                            "class": "solidColorLayer",
                        },
                        "strokeStyle": {
                            "strokeStyleVersion": 2,
                            "strokeEnabled": true,
                            "fillEnabled": true,
                            "strokeStyleLineWidth": 1,
                            "strokeStyleLineDashOffset": {
                                "value": 0,
                                "units": "pointsUnit",
                            },
                            "strokeStyleMiterLimit": 100,
                            "strokeStyleLineCapType": "strokeStyleButtCap",
                            "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                            "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                            "strokeStyleScaleLock": false,
                            "strokeStyleStrokeAdjust": false,
                            "strokeStyleLineDashSet": [
                                4,
                                2,
                            ],
                            "strokeStyleBlendMode": "normal",
                            "strokeStyleOpacity": {
                                "value": 100,
                                "units": "percentUnit",
                            },
                            "strokeStyleContent": {
                                "color": {
                                    "red": 54,
                                    "green": 153.331,
                                    "blue": 255,
                                },
                            },
                            "strokeStyleResolution": 72,
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "type": "rect",
                                        "bounds": {
                                            "top": 874,
                                            "left": 360,
                                            "bottom": 905,
                                            "right": 391,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 874,
                                "left": 360,
                                "bottom": 905,
                                "right": 391,
                            },
                            "defaultFill": false,
                        },
                    },
                ],
            },
            {
                "id": 2113,
                "index": 56,
                "type": "layer",
                "name": " progress bar",
                "bounds": {
                    "top": 883,
                    "left": 40,
                    "bottom": 895,
                    "right": 376,
                },
                "visible": true,
                "clipped": false,
                "pixels": true,
                "generatorSettings": false,
            },
            {
                "id": 2215,
                "index": 55,
                "type": "layerSection",
                "name": "-s- progress bar_not",
                "bounds": {
                    "top": 883,
                    "left": 40,
                    "bottom": 895,
                    "right": 710,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layers": [
                    {
                        "id": 2110,
                        "index": 54,
                        "type": "layer",
                        "name": " progress bar_not",
                        "bounds": {
                            "top": 883,
                            "left": 40,
                            "bottom": 895,
                            "right": 710,
                        },
                        "visible": true,
                        "clipped": false,
                        "pixels": true,
                        "generatorSettings": false,
                    },
                    {
                        "id": 2217,
                        "index": 53,
                        "type": "shapeLayer",
                        "name": "-slice-",
                        "bounds": {
                            "top": 882,
                            "left": 39,
                            "bottom": 896,
                            "right": 711,
                        },
                        "visible": false,
                        "clipped": false,
                        "blendOptions": {
                            "fillOpacity": {
                                "value": 15,
                                "units": "percentUnit",
                            },
                        },
                        "fill": {
                            "color": {
                                "red": 22,
                                "green": 208.412,
                                "blue": 255,
                            },
                            "class": "solidColorLayer",
                        },
                        "strokeStyle": {
                            "strokeStyleVersion": 2,
                            "strokeEnabled": true,
                            "fillEnabled": true,
                            "strokeStyleLineWidth": 1,
                            "strokeStyleLineDashOffset": {
                                "value": 0,
                                "units": "pointsUnit",
                            },
                            "strokeStyleMiterLimit": 100,
                            "strokeStyleLineCapType": "strokeStyleButtCap",
                            "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                            "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                            "strokeStyleScaleLock": false,
                            "strokeStyleStrokeAdjust": false,
                            "strokeStyleLineDashSet": [
                                4,
                                2,
                            ],
                            "strokeStyleBlendMode": "normal",
                            "strokeStyleOpacity": {
                                "value": 100,
                                "units": "percentUnit",
                            },
                            "strokeStyleContent": {
                                "color": {
                                    "red": 54,
                                    "green": 153.331,
                                    "blue": 255,
                                },
                            },
                            "strokeStyleResolution": 72,
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "type": "rect",
                                        "bounds": {
                                            "top": 883,
                                            "left": 40,
                                            "bottom": 895,
                                            "right": 710,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 883,
                                "left": 40,
                                "bottom": 895,
                                "right": 710,
                            },
                            "defaultFill": false,
                        },
                    },
                    {
                        "id": 2212,
                        "index": 52,
                        "type": "layerSection",
                        "name": "-s- progress bar_pass",
                        "bounds": {
                            "top": 883,
                            "left": 40,
                            "bottom": 895,
                            "right": 710,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "mode": "passThrough",
                        },
                        "generatorSettings": false,
                        "layers": [
                            {
                                "id": 2112,
                                "index": 51,
                                "type": "layer",
                                "name": " progress bar_pass",
                                "bounds": {
                                    "top": 883,
                                    "left": 40,
                                    "bottom": 895,
                                    "right": 710,
                                },
                                "visible": true,
                                "clipped": false,
                                "pixels": true,
                                "generatorSettings": false,
                            },
                            {
                                "id": 2214,
                                "index": 50,
                                "type": "shapeLayer",
                                "name": "-slice-",
                                "bounds": {
                                    "top": 882,
                                    "left": 39,
                                    "bottom": 896,
                                    "right": 711,
                                },
                                "visible": false,
                                "clipped": false,
                                "blendOptions": {
                                    "fillOpacity": {
                                        "value": 15,
                                        "units": "percentUnit",
                                    },
                                },
                                "fill": {
                                    "color": {
                                        "red": 22,
                                        "green": 208.412,
                                        "blue": 255,
                                    },
                                    "class": "solidColorLayer",
                                },
                                "strokeStyle": {
                                    "strokeStyleVersion": 2,
                                    "strokeEnabled": true,
                                    "fillEnabled": true,
                                    "strokeStyleLineWidth": 1,
                                    "strokeStyleLineDashOffset": {
                                        "value": 0,
                                        "units": "pointsUnit",
                                    },
                                    "strokeStyleMiterLimit": 100,
                                    "strokeStyleLineCapType": "strokeStyleButtCap",
                                    "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                                    "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                                    "strokeStyleScaleLock": false,
                                    "strokeStyleStrokeAdjust": false,
                                    "strokeStyleLineDashSet": [
                                        4,
                                        2,
                                    ],
                                    "strokeStyleBlendMode": "normal",
                                    "strokeStyleOpacity": {
                                        "value": 100,
                                        "units": "percentUnit",
                                    },
                                    "strokeStyleContent": {
                                        "color": {
                                            "red": 54,
                                            "green": 153.331,
                                            "blue": 255,
                                        },
                                    },
                                    "strokeStyleResolution": 72,
                                },
                                "generatorSettings": false,
                                "path": {
                                    "pathComponents": [
                                        {
                                            "origin": {
                                                "type": "rect",
                                                "bounds": {
                                                    "top": 883,
                                                    "left": 40,
                                                    "bottom": 895,
                                                    "right": 710,
                                                },
                                            },
                                        },
                                    ],
                                    "bounds": {
                                        "top": 883,
                                        "left": 40,
                                        "bottom": 895,
                                        "right": 710,
                                    },
                                    "defaultFill": false,
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        "id": 2151,
        "index": 46,
        "type": "layerSection",
        "name": "4",
        "bounds": {
            "top": 998,
            "left": 195,
            "bottom": 1157,
            "right": 556,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 2142,
                "index": 45,
                "type": "layerSection",
                "name": "-s-button_prev",
                "bounds": {
                    "top": 1057,
                    "left": 195,
                    "bottom": 1098,
                    "right": 231,
                },
                "boundsWithFX": {
                    "top": 1057,
                    "left": 195,
                    "bottom": 1098,
                    "right": 231,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layerEffects": {
                    "solidFillMulti": [
                        {
                            "enabled": true,
                            "color": {
                                "red": 34.6809,
                                "green": 44.0233,
                                "blue": 67,
                            },
                        },
                        {
                            "color": {
                                "red": 51.0031,
                                "green": 51.0031,
                                "blue": 51.9992,
                            },
                        },
                        {
                            "color": {
                                "red": 51.0031,
                                "green": 51.0031,
                                "blue": 51.9992,
                            },
                        },
                    ],
                },
                "layers": [
                    {
                        "id": 2141,
                        "index": 44,
                        "type": "shapeLayer",
                        "name": "圆角矩形 6 拷贝",
                        "bounds": {
                            "top": 1057,
                            "left": 195,
                            "bottom": 1098,
                            "right": 201,
                        },
                        "visible": true,
                        "clipped": false,
                        "fill": {
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                            },
                            "class": "solidColorLayer",
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "radii": [
                                            1,
                                            1,
                                            1,
                                            1,
                                        ],
                                        "type": "roundedRect",
                                        "bounds": {
                                            "top": 1057,
                                            "left": 195,
                                            "bottom": 1098,
                                            "right": 201,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 1057,
                                "left": 195,
                                "bottom": 1098,
                                "right": 201,
                            },
                            "defaultFill": false,
                        },
                    },
                    {
                        "id": 2139,
                        "index": 43,
                        "type": "layer",
                        "name": "play 拷贝",
                        "bounds": {
                            "top": 1058,
                            "left": 195,
                            "bottom": 1098,
                            "right": 231,
                        },
                        "visible": true,
                        "clipped": false,
                        "generatorSettings": false,
                        "smartObject": {
                            "ID": "0b1316bd-2f4a-11e8-aa97-f5ec47c4f71f",
                            "placed": "0b11f006-2f4a-11e8-aa97-f5ec47c4f71f",
                            "crop": 1,
                            "antiAliasType": 16,
                            "type": 2,
                            "transform": [
                                233,
                                1098,
                                193,
                                1098,
                                193,
                                1058,
                                233,
                                1058,
                            ],
                            "comp": -1,
                            "compInfo": {
                                "compID": -1,
                                "originalCompID": -1,
                            },
                        },
                    },
                    {
                        "id": 2219,
                        "index": 42,
                        "type": "shapeLayer",
                        "name": "-slice-",
                        "bounds": {
                            "top": 1056,
                            "left": 194,
                            "bottom": 1099,
                            "right": 232,
                        },
                        "visible": false,
                        "clipped": false,
                        "blendOptions": {
                            "fillOpacity": {
                                "value": 15,
                                "units": "percentUnit",
                            },
                        },
                        "fill": {
                            "color": {
                                "red": 22,
                                "green": 208.412,
                                "blue": 255,
                            },
                            "class": "solidColorLayer",
                        },
                        "strokeStyle": {
                            "strokeStyleVersion": 2,
                            "strokeEnabled": true,
                            "fillEnabled": true,
                            "strokeStyleLineWidth": 1,
                            "strokeStyleLineDashOffset": {
                                "value": 0,
                                "units": "pointsUnit",
                            },
                            "strokeStyleMiterLimit": 100,
                            "strokeStyleLineCapType": "strokeStyleButtCap",
                            "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                            "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                            "strokeStyleScaleLock": false,
                            "strokeStyleStrokeAdjust": false,
                            "strokeStyleLineDashSet": [
                                4,
                                2,
                            ],
                            "strokeStyleBlendMode": "normal",
                            "strokeStyleOpacity": {
                                "value": 100,
                                "units": "percentUnit",
                            },
                            "strokeStyleContent": {
                                "color": {
                                    "red": 54,
                                    "green": 153.331,
                                    "blue": 255,
                                },
                            },
                            "strokeStyleResolution": 72,
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "type": "rect",
                                        "bounds": {
                                            "top": 1057,
                                            "left": 195,
                                            "bottom": 1098,
                                            "right": 231,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 1057,
                                "left": 195,
                                "bottom": 1098,
                                "right": 231,
                            },
                            "defaultFill": false,
                        },
                    },
                ],
            },
            {
                "id": 2137,
                "index": 40,
                "type": "layerSection",
                "name": "-s-button_next",
                "bounds": {
                    "top": 1057,
                    "left": 521,
                    "bottom": 1098,
                    "right": 556,
                },
                "boundsWithFX": {
                    "top": 1057,
                    "left": 521,
                    "bottom": 1098,
                    "right": 556,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layerEffects": {
                    "solidFillMulti": [
                        {
                            "enabled": true,
                            "color": {
                                "red": 34.6809,
                                "green": 44.0233,
                                "blue": 67,
                            },
                        },
                        {
                            "color": {
                                "red": 51.0031,
                                "green": 51.0031,
                                "blue": 51.9992,
                            },
                        },
                        {
                            "color": {
                                "red": 51.0031,
                                "green": 51.0031,
                                "blue": 51.9992,
                            },
                        },
                    ],
                },
                "layers": [
                    {
                        "id": 2135,
                        "index": 39,
                        "type": "shapeLayer",
                        "name": "圆角矩形 6",
                        "bounds": {
                            "top": 1057,
                            "left": 550,
                            "bottom": 1098,
                            "right": 556,
                        },
                        "visible": true,
                        "clipped": false,
                        "fill": {
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                            },
                            "class": "solidColorLayer",
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "radii": [
                                            1,
                                            1,
                                            1,
                                            1,
                                        ],
                                        "type": "roundedRect",
                                        "bounds": {
                                            "top": 1057,
                                            "left": 550,
                                            "bottom": 1098,
                                            "right": 556,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 1057,
                                "left": 550,
                                "bottom": 1098,
                                "right": 556,
                            },
                            "defaultFill": false,
                        },
                    },
                    {
                        "id": 2134,
                        "index": 38,
                        "type": "layer",
                        "name": "play 拷贝",
                        "bounds": {
                            "top": 1058,
                            "left": 521,
                            "bottom": 1098,
                            "right": 556,
                        },
                        "visible": true,
                        "clipped": false,
                        "generatorSettings": false,
                        "smartObject": {
                            "ID": "0b1316bd-2f4a-11e8-aa97-f5ec47c4f71f",
                            "placed": "0b11dc68-2f4a-11e8-aa97-f5ec47c4f71f",
                            "crop": 1,
                            "antiAliasType": 16,
                            "type": 2,
                            "transform": [
                                518,
                                1058,
                                558,
                                1058,
                                558,
                                1098,
                                518,
                                1098,
                            ],
                            "comp": -1,
                            "compInfo": {
                                "compID": -1,
                                "originalCompID": -1,
                            },
                        },
                    },
                    {
                        "id": 2218,
                        "index": 37,
                        "type": "shapeLayer",
                        "name": "-slice-",
                        "bounds": {
                            "top": 1056,
                            "left": 520,
                            "bottom": 1099,
                            "right": 557,
                        },
                        "visible": false,
                        "clipped": false,
                        "blendOptions": {
                            "fillOpacity": {
                                "value": 15,
                                "units": "percentUnit",
                            },
                        },
                        "fill": {
                            "color": {
                                "red": 22,
                                "green": 208.412,
                                "blue": 255,
                            },
                            "class": "solidColorLayer",
                        },
                        "strokeStyle": {
                            "strokeStyleVersion": 2,
                            "strokeEnabled": true,
                            "fillEnabled": true,
                            "strokeStyleLineWidth": 1,
                            "strokeStyleLineDashOffset": {
                                "value": 0,
                                "units": "pointsUnit",
                            },
                            "strokeStyleMiterLimit": 100,
                            "strokeStyleLineCapType": "strokeStyleButtCap",
                            "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                            "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                            "strokeStyleScaleLock": false,
                            "strokeStyleStrokeAdjust": false,
                            "strokeStyleLineDashSet": [
                                4,
                                2,
                            ],
                            "strokeStyleBlendMode": "normal",
                            "strokeStyleOpacity": {
                                "value": 100,
                                "units": "percentUnit",
                            },
                            "strokeStyleContent": {
                                "color": {
                                    "red": 54,
                                    "green": 153.331,
                                    "blue": 255,
                                },
                            },
                            "strokeStyleResolution": 72,
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "type": "rect",
                                        "bounds": {
                                            "top": 1057,
                                            "left": 521,
                                            "bottom": 1098,
                                            "right": 556,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 1057,
                                "left": 521,
                                "bottom": 1098,
                                "right": 556,
                            },
                            "defaultFill": false,
                        },
                    },
                ],
            },
            {
                "id": 2157,
                "index": 35,
                "type": "layerSection",
                "name": "-s-button_play",
                "bounds": {
                    "top": 998,
                    "left": 296,
                    "bottom": 1157,
                    "right": 455,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layers": [
                    {
                        "id": 2130,
                        "index": 34,
                        "type": "layer",
                        "name": "button_play",
                        "bounds": {
                            "top": 1061,
                            "left": 364,
                            "bottom": 1094,
                            "right": 393,
                        },
                        "boundsWithFX": {
                            "top": 1061,
                            "left": 364,
                            "bottom": 1094,
                            "right": 393,
                        },
                        "visible": true,
                        "clipped": false,
                        "generatorSettings": false,
                        "layerEffects": {
                            "solidFillMulti": [
                                {
                                    "enabled": true,
                                    "color": {
                                        "red": 255,
                                        "green": 255,
                                        "blue": 255,
                                    },
                                },
                                {
                                    "color": {
                                        "red": 34.6809,
                                        "green": 44.0233,
                                        "blue": 67,
                                    },
                                },
                                {
                                    "color": {
                                        "red": 51.0031,
                                        "green": 51.0031,
                                        "blue": 51.9992,
                                    },
                                },
                            ],
                        },
                        "smartObject": {
                            "ID": "0b1316bd-2f4a-11e8-aa97-f5ec47c4f71f",
                            "placed": "0b11dc63-2f4a-11e8-aa97-f5ec47c4f71f",
                            "crop": 1,
                            "antiAliasType": 16,
                            "type": 2,
                            "transform": [
                                362,
                                1061,
                                395,
                                1061,
                                395,
                                1094,
                                362,
                                1094,
                            ],
                            "comp": -1,
                            "compInfo": {
                                "compID": -1,
                                "originalCompID": -1,
                            },
                        },
                    },
                    {
                        "id": 2156,
                        "index": 33,
                        "type": "shapeLayer",
                        "name": "椭圆 1 拷贝",
                        "bounds": {
                            "top": 1027,
                            "left": 325,
                            "bottom": 1127,
                            "right": 425,
                        },
                        "boundsWithFX": {
                            "top": 998,
                            "left": 296,
                            "bottom": 1157,
                            "right": 455,
                        },
                        "visible": true,
                        "clipped": false,
                        "blendOptions": {
                            "opacity": {
                                "value": 99,
                                "units": "percentUnit",
                            },
                        },
                        "fill": {
                            "color": {
                                "red": 35.0034,
                                "green": 43.9993,
                                "blue": 67.0029,
                            },
                            "class": "solidColorLayer",
                        },
                        "generatorSettings": false,
                        "layerEffects": {
                            "dropShadow": {
                                "enabled": true,
                                "mode": "normal",
                                "color": {
                                    "red": 7.76654,
                                    "green": 51.9844,
                                    "blue": 165,
                                },
                                "opacity": {
                                    "value": 31,
                                    "units": "percentUnit",
                                },
                                "useGlobalAngle": false,
                                "distance": 0,
                                "blur": 30,
                            },
                        },
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "type": "ellipse",
                                        "bounds": {
                                            "top": 1027,
                                            "left": 325,
                                            "bottom": 1127,
                                            "right": 425,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 1027,
                                "left": 325,
                                "bottom": 1127,
                                "right": 425,
                            },
                            "defaultFill": false,
                        },
                    },
                    {
                        "id": 2221,
                        "index": 32,
                        "type": "shapeLayer",
                        "name": "-slice-",
                        "bounds": {
                            "top": 997,
                            "left": 295,
                            "bottom": 1158,
                            "right": 456,
                        },
                        "visible": false,
                        "clipped": false,
                        "blendOptions": {
                            "fillOpacity": {
                                "value": 15,
                                "units": "percentUnit",
                            },
                        },
                        "fill": {
                            "color": {
                                "red": 22,
                                "green": 208.412,
                                "blue": 255,
                            },
                            "class": "solidColorLayer",
                        },
                        "strokeStyle": {
                            "strokeStyleVersion": 2,
                            "strokeEnabled": true,
                            "fillEnabled": true,
                            "strokeStyleLineWidth": 1,
                            "strokeStyleLineDashOffset": {
                                "value": 0,
                                "units": "pointsUnit",
                            },
                            "strokeStyleMiterLimit": 100,
                            "strokeStyleLineCapType": "strokeStyleButtCap",
                            "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                            "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                            "strokeStyleScaleLock": false,
                            "strokeStyleStrokeAdjust": false,
                            "strokeStyleLineDashSet": [
                                4,
                                2,
                            ],
                            "strokeStyleBlendMode": "normal",
                            "strokeStyleOpacity": {
                                "value": 100,
                                "units": "percentUnit",
                            },
                            "strokeStyleContent": {
                                "color": {
                                    "red": 54,
                                    "green": 153.331,
                                    "blue": 255,
                                },
                            },
                            "strokeStyleResolution": 72,
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "type": "rect",
                                        "bounds": {
                                            "top": 998,
                                            "left": 296,
                                            "bottom": 1157,
                                            "right": 455,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 998,
                                "left": 296,
                                "bottom": 1157,
                                "right": 455,
                            },
                            "defaultFill": false,
                        },
                    },
                ],
            },
        ],
    },
    {
        "id": 2394,
        "index": 29,
        "type": "layerSection",
        "name": "-s-加载",
        "bounds": {
            "top": 995,
            "left": 293,
            "bottom": 1156,
            "right": 457,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 2386,
                "index": 28,
                "type": "layer",
                "name": "加载",
                "bounds": {
                    "top": 995,
                    "left": 293,
                    "bottom": 1156,
                    "right": 457,
                },
                "visible": true,
                "clipped": false,
                "pixels": true,
                "generatorSettings": false,
            },
            {
                "id": 2396,
                "index": 27,
                "type": "shapeLayer",
                "name": "-slice-",
                "bounds": {
                    "top": 994,
                    "left": 292,
                    "bottom": 1157,
                    "right": 458,
                },
                "visible": false,
                "clipped": false,
                "blendOptions": {
                    "fillOpacity": {
                        "value": 15,
                        "units": "percentUnit",
                    },
                },
                "fill": {
                    "color": {
                        "red": 22,
                        "green": 208.412,
                        "blue": 255,
                    },
                    "class": "solidColorLayer",
                },
                "strokeStyle": {
                    "strokeStyleVersion": 2,
                    "strokeEnabled": true,
                    "fillEnabled": true,
                    "strokeStyleLineWidth": 1,
                    "strokeStyleLineDashOffset": {
                        "value": 0,
                        "units": "pointsUnit",
                    },
                    "strokeStyleMiterLimit": 100,
                    "strokeStyleLineCapType": "strokeStyleButtCap",
                    "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                    "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                    "strokeStyleScaleLock": false,
                    "strokeStyleStrokeAdjust": false,
                    "strokeStyleLineDashSet": [
                        4,
                        2,
                    ],
                    "strokeStyleBlendMode": "normal",
                    "strokeStyleOpacity": {
                        "value": 100,
                        "units": "percentUnit",
                    },
                    "strokeStyleContent": {
                        "color": {
                            "red": 54,
                            "green": 153.331,
                            "blue": 255,
                        },
                    },
                    "strokeStyleResolution": 72,
                },
                "generatorSettings": false,
                "path": {
                    "pathComponents": [
                        {
                            "origin": {
                                "type": "rect",
                                "bounds": {
                                    "top": 995,
                                    "left": 293,
                                    "bottom": 1156,
                                    "right": 457,
                                },
                            },
                        },
                    ],
                    "bounds": {
                        "top": 995,
                        "left": 293,
                        "bottom": 1156,
                        "right": 457,
                    },
                    "defaultFill": false,
                },
            },
        ],
    },
    {
        "id": 2191,
        "index": 25,
        "type": "textLayer",
        "name": "定时关闭",
        "bounds": {
            "top": 1107,
            "left": 653,
            "bottom": 1124,
            "right": 722,
        },
        "visible": true,
        "clipped": false,
        "generatorSettings": false,
        "text": true,
    },
    {
        "id": 2185,
        "index": 24,
        "type": "textLayer",
        "name": "音频选集",
        "bounds": {
            "top": 1107,
            "left": 30,
            "bottom": 1124,
            "right": 98,
        },
        "visible": true,
        "clipped": false,
        "generatorSettings": false,
        "text": true,
    },
    {
        "id": 2225,
        "index": 23,
        "type": "layerSection",
        "name": "-s-选集",
        "bounds": {
            "top": 1055,
            "left": 40,
            "bottom": 1099,
            "right": 84,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 2189,
                "index": 22,
                "type": "layer",
                "name": "选集",
                "bounds": {
                    "top": 1055,
                    "left": 40,
                    "bottom": 1099,
                    "right": 84,
                },
                "visible": true,
                "clipped": false,
                "generatorSettings": false,
                "smartObject": {
                    "ID": "0b1316bc-2f4a-11e8-aa97-f5ec47c4f71f",
                    "placed": "0b11535f-2f4a-11e8-aa97-f5ec47c4f71f",
                    "crop": 1,
                    "antiAliasType": 16,
                    "type": 2,
                    "transform": [
                        40,
                        1055,
                        84,
                        1055,
                        84,
                        1099,
                        40,
                        1099,
                    ],
                    "comp": -1,
                    "compInfo": {
                        "compID": -1,
                        "originalCompID": -1,
                    },
                },
            },
            {
                "id": 2227,
                "index": 21,
                "type": "shapeLayer",
                "name": "-slice-",
                "bounds": {
                    "top": 1054,
                    "left": 39,
                    "bottom": 1100,
                    "right": 85,
                },
                "visible": false,
                "clipped": false,
                "blendOptions": {
                    "fillOpacity": {
                        "value": 15,
                        "units": "percentUnit",
                    },
                },
                "fill": {
                    "color": {
                        "red": 22,
                        "green": 208.412,
                        "blue": 255,
                    },
                    "class": "solidColorLayer",
                },
                "strokeStyle": {
                    "strokeStyleVersion": 2,
                    "strokeEnabled": true,
                    "fillEnabled": true,
                    "strokeStyleLineWidth": 1,
                    "strokeStyleLineDashOffset": {
                        "value": 0,
                        "units": "pointsUnit",
                    },
                    "strokeStyleMiterLimit": 100,
                    "strokeStyleLineCapType": "strokeStyleButtCap",
                    "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                    "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                    "strokeStyleScaleLock": false,
                    "strokeStyleStrokeAdjust": false,
                    "strokeStyleLineDashSet": [
                        4,
                        2,
                    ],
                    "strokeStyleBlendMode": "normal",
                    "strokeStyleOpacity": {
                        "value": 100,
                        "units": "percentUnit",
                    },
                    "strokeStyleContent": {
                        "color": {
                            "red": 54,
                            "green": 153.331,
                            "blue": 255,
                        },
                    },
                    "strokeStyleResolution": 72,
                },
                "generatorSettings": false,
                "path": {
                    "pathComponents": [
                        {
                            "origin": {
                                "type": "rect",
                                "bounds": {
                                    "top": 1055,
                                    "left": 40,
                                    "bottom": 1099,
                                    "right": 84,
                                },
                            },
                        },
                    ],
                    "bounds": {
                        "top": 1055,
                        "left": 40,
                        "bottom": 1099,
                        "right": 84,
                    },
                    "defaultFill": false,
                },
            },
        ],
    },
    {
        "id": 2222,
        "index": 19,
        "type": "layerSection",
        "name": "-s-定时",
        "bounds": {
            "top": 1057,
            "left": 666,
            "bottom": 1101,
            "right": 710,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 2190,
                "index": 18,
                "type": "layer",
                "name": "定时",
                "bounds": {
                    "top": 1057,
                    "left": 666,
                    "bottom": 1101,
                    "right": 710,
                },
                "visible": true,
                "clipped": false,
                "generatorSettings": false,
                "smartObject": {
                    "ID": "0b1316bb-2f4a-11e8-aa97-f5ec47c4f71f",
                    "placed": "0b11535a-2f4a-11e8-aa97-f5ec47c4f71f",
                    "crop": 1,
                    "antiAliasType": 16,
                    "type": 2,
                    "transform": [
                        666,
                        1057,
                        710,
                        1057,
                        710,
                        1101,
                        666,
                        1101,
                    ],
                    "comp": -1,
                    "compInfo": {
                        "compID": -1,
                        "originalCompID": -1,
                    },
                },
            },
            {
                "id": 2224,
                "index": 17,
                "type": "shapeLayer",
                "name": "-slice-",
                "bounds": {
                    "top": 1056,
                    "left": 665,
                    "bottom": 1102,
                    "right": 711,
                },
                "visible": false,
                "clipped": false,
                "blendOptions": {
                    "fillOpacity": {
                        "value": 15,
                        "units": "percentUnit",
                    },
                },
                "fill": {
                    "color": {
                        "red": 22,
                        "green": 208.412,
                        "blue": 255,
                    },
                    "class": "solidColorLayer",
                },
                "strokeStyle": {
                    "strokeStyleVersion": 2,
                    "strokeEnabled": true,
                    "fillEnabled": true,
                    "strokeStyleLineWidth": 1,
                    "strokeStyleLineDashOffset": {
                        "value": 0,
                        "units": "pointsUnit",
                    },
                    "strokeStyleMiterLimit": 100,
                    "strokeStyleLineCapType": "strokeStyleButtCap",
                    "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                    "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                    "strokeStyleScaleLock": false,
                    "strokeStyleStrokeAdjust": false,
                    "strokeStyleLineDashSet": [
                        4,
                        2,
                    ],
                    "strokeStyleBlendMode": "normal",
                    "strokeStyleOpacity": {
                        "value": 100,
                        "units": "percentUnit",
                    },
                    "strokeStyleContent": {
                        "color": {
                            "red": 54,
                            "green": 153.331,
                            "blue": 255,
                        },
                    },
                    "strokeStyleResolution": 72,
                },
                "generatorSettings": false,
                "path": {
                    "pathComponents": [
                        {
                            "origin": {
                                "type": "rect",
                                "bounds": {
                                    "top": 1057,
                                    "left": 666,
                                    "bottom": 1101,
                                    "right": 710,
                                },
                            },
                        },
                    ],
                    "bounds": {
                        "top": 1057,
                        "left": 666,
                        "bottom": 1101,
                        "right": 710,
                    },
                    "defaultFill": false,
                },
            },
        ],
    },
    {
        "id": 374,
        "index": 15,
        "type": "layer",
        "name": "图层 5",
        "bounds": {
            "top": 0,
            "left": 0,
            "bottom": 2000,
            "right": 750,
        },
        "visible": true,
        "clipped": false,
        "pixels": true,
        "generatorSettings": false,
    },
    {
        "id": 2154,
        "index": 14,
        "type": "layerSection",
        "name": "-s-button_pause",
        "bounds": {
            "top": 998,
            "left": 296,
            "bottom": 1157,
            "right": 455,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 2144,
                "index": 13,
                "type": "layerSection",
                "name": "button_pause",
                "bounds": {
                    "top": 1060,
                    "left": 362,
                    "bottom": 1094,
                    "right": 389,
                },
                "boundsWithFX": {
                    "top": 1060,
                    "left": 362,
                    "bottom": 1094,
                    "right": 389,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "mode": "passThrough",
                },
                "generatorSettings": false,
                "layerEffects": {
                    "solidFillMulti": [
                        {
                            "color": {
                                "red": 34.6809,
                                "green": 44.0233,
                                "blue": 67,
                            },
                        },
                        {
                            "enabled": true,
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                            },
                        },
                    ],
                },
                "layers": [
                    {
                        "id": 2132,
                        "index": 12,
                        "type": "shapeLayer",
                        "name": "矩形 1 拷贝 2",
                        "bounds": {
                            "top": 1060,
                            "left": 381.625,
                            "bottom": 1094,
                            "right": 389,
                        },
                        "visible": true,
                        "clipped": false,
                        "fill": {
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                            },
                            "class": "solidColorLayer",
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "radii": [
                                            2,
                                            2,
                                            2,
                                            2,
                                        ],
                                        "type": "roundedRect",
                                        "bounds": {
                                            "top": 1060,
                                            "left": 381.625,
                                            "bottom": 1094,
                                            "right": 389,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 1060,
                                "left": 381.625,
                                "bottom": 1094,
                                "right": 389,
                            },
                            "defaultFill": false,
                        },
                    },
                    {
                        "id": 2131,
                        "index": 11,
                        "type": "shapeLayer",
                        "name": "矩形 1",
                        "bounds": {
                            "top": 1060,
                            "left": 362,
                            "bottom": 1094,
                            "right": 369.375,
                        },
                        "visible": true,
                        "clipped": false,
                        "fill": {
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                            },
                            "class": "solidColorLayer",
                        },
                        "generatorSettings": false,
                        "path": {
                            "pathComponents": [
                                {
                                    "origin": {
                                        "radii": [
                                            2,
                                            2,
                                            2,
                                            2,
                                        ],
                                        "type": "roundedRect",
                                        "bounds": {
                                            "top": 1060,
                                            "left": 362,
                                            "bottom": 1094,
                                            "right": 369.375,
                                        },
                                    },
                                },
                            ],
                            "bounds": {
                                "top": 1060,
                                "left": 362,
                                "bottom": 1094,
                                "right": 369.375,
                            },
                            "defaultFill": false,
                        },
                    },
                ],
            },
            {
                "id": 2160,
                "index": 9,
                "type": "shapeLayer",
                "name": "椭圆 1 拷贝 2",
                "bounds": {
                    "top": 1027,
                    "left": 325,
                    "bottom": 1127,
                    "right": 425,
                },
                "boundsWithFX": {
                    "top": 998,
                    "left": 296,
                    "bottom": 1157,
                    "right": 455,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "opacity": {
                        "value": 99,
                        "units": "percentUnit",
                    },
                },
                "fill": {
                    "color": {
                        "red": 35.0034,
                        "green": 43.9993,
                        "blue": 67.0029,
                    },
                    "class": "solidColorLayer",
                },
                "generatorSettings": false,
                "layerEffects": {
                    "dropShadow": {
                        "enabled": true,
                        "mode": "normal",
                        "color": {
                            "red": 7.76654,
                            "green": 51.9844,
                            "blue": 165,
                        },
                        "opacity": {
                            "value": 31,
                            "units": "percentUnit",
                        },
                        "useGlobalAngle": false,
                        "distance": 0,
                        "blur": 30,
                    },
                },
                "path": {
                    "pathComponents": [
                        {
                            "origin": {
                                "type": "ellipse",
                                "bounds": {
                                    "top": 1027,
                                    "left": 325,
                                    "bottom": 1127,
                                    "right": 425,
                                },
                            },
                        },
                    ],
                    "bounds": {
                        "top": 1027,
                        "left": 325,
                        "bottom": 1127,
                        "right": 425,
                    },
                    "defaultFill": false,
                },
            },
            {
                "id": 2220,
                "index": 8,
                "type": "shapeLayer",
                "name": "-slice-",
                "bounds": {
                    "top": 997,
                    "left": 295,
                    "bottom": 1158,
                    "right": 456,
                },
                "visible": false,
                "clipped": false,
                "blendOptions": {
                    "fillOpacity": {
                        "value": 15,
                        "units": "percentUnit",
                    },
                },
                "fill": {
                    "color": {
                        "red": 22,
                        "green": 208.412,
                        "blue": 255,
                    },
                    "class": "solidColorLayer",
                },
                "strokeStyle": {
                    "strokeStyleVersion": 2,
                    "strokeEnabled": true,
                    "fillEnabled": true,
                    "strokeStyleLineWidth": 1,
                    "strokeStyleLineDashOffset": {
                        "value": 0,
                        "units": "pointsUnit",
                    },
                    "strokeStyleMiterLimit": 100,
                    "strokeStyleLineCapType": "strokeStyleButtCap",
                    "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                    "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                    "strokeStyleScaleLock": false,
                    "strokeStyleStrokeAdjust": false,
                    "strokeStyleLineDashSet": [
                        4,
                        2,
                    ],
                    "strokeStyleBlendMode": "normal",
                    "strokeStyleOpacity": {
                        "value": 100,
                        "units": "percentUnit",
                    },
                    "strokeStyleContent": {
                        "color": {
                            "red": 54,
                            "green": 153.331,
                            "blue": 255,
                        },
                    },
                    "strokeStyleResolution": 72,
                },
                "generatorSettings": false,
                "path": {
                    "pathComponents": [
                        {
                            "origin": {
                                "type": "rect",
                                "bounds": {
                                    "top": 998,
                                    "left": 296,
                                    "bottom": 1157,
                                    "right": 455,
                                },
                            },
                        },
                    ],
                    "bounds": {
                        "top": 998,
                        "left": 296,
                        "bottom": 1157,
                        "right": 455,
                    },
                    "defaultFill": false,
                },
            },
        ],
    },
    {
        "id": 2432,
        "index": 6,
        "type": "layerSection",
        "name": "-s-红心",
        "bounds": {
            "top": 1264,
            "left": 670,
            "bottom": 1309,
            "right": 719,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
        "layers": [
            {
                "id": 2430,
                "index": 5,
                "type": "layer",
                "name": "图层 6",
                "bounds": {
                    "top": 1265,
                    "left": 671,
                    "bottom": 1308,
                    "right": 718,
                },
                "visible": true,
                "clipped": false,
                "pixels": true,
                "generatorSettings": false,
            },
            {
                "id": 2431,
                "index": 4,
                "type": "layer",
                "name": "图层 7",
                "bounds": {
                    "top": 1265,
                    "left": 673,
                    "bottom": 1304,
                    "right": 717,
                },
                "visible": true,
                "clipped": false,
                "pixels": true,
                "generatorSettings": false,
            },
            {
                "id": 2434,
                "index": 3,
                "type": "shapeLayer",
                "name": "-slice-",
                "bounds": {
                    "top": 1264,
                    "left": 670,
                    "bottom": 1309,
                    "right": 719,
                },
                "visible": true,
                "clipped": false,
                "blendOptions": {
                    "fillOpacity": {
                        "value": 15,
                        "units": "percentUnit",
                    },
                },
                "fill": {
                    "color": {
                        "red": 22,
                        "green": 208.412,
                        "blue": 255,
                    },
                    "class": "solidColorLayer",
                },
                "strokeStyle": {
                    "strokeStyleVersion": 2,
                    "strokeEnabled": true,
                    "fillEnabled": true,
                    "strokeStyleLineWidth": 1,
                    "strokeStyleLineDashOffset": {
                        "value": 0,
                        "units": "pointsUnit",
                    },
                    "strokeStyleMiterLimit": 100,
                    "strokeStyleLineCapType": "strokeStyleButtCap",
                    "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                    "strokeStyleLineAlignment": "strokeStyleAlignOutside",
                    "strokeStyleScaleLock": false,
                    "strokeStyleStrokeAdjust": false,
                    "strokeStyleLineDashSet": [
                        4,
                        2,
                    ],
                    "strokeStyleBlendMode": "normal",
                    "strokeStyleOpacity": {
                        "value": 100,
                        "units": "percentUnit",
                    },
                    "strokeStyleContent": {
                        "color": {
                            "red": 54,
                            "green": 153.331,
                            "blue": 255,
                        },
                    },
                    "strokeStyleResolution": 72,
                },
                "generatorSettings": false,
                "path": {
                    "pathComponents": [
                        {
                            "origin": {
                                "type": "rect",
                                "bounds": {
                                    "top": 1265,
                                    "left": 671,
                                    "bottom": 1308,
                                    "right": 718,
                                },
                            },
                        },
                    ],
                    "bounds": {
                        "top": 1265,
                        "left": 671,
                        "bottom": 1308,
                        "right": 718,
                    },
                    "defaultFill": false,
                },
            },
        ],
    },
    {
        "id": 382,
        "index": 1,
        "type": "layerSection",
        "name": "bg",
        "bounds": {
            "top": 0,
            "left": 0,
            "bottom": 0,
            "right": 0,
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
            "mode": "passThrough",
        },
        "generatorSettings": false,
    },
]

test("Object.treeFind 指定 id key", () => {

    var fd = rcObject.treeFind(tree, 2215, "layers")
    expect(fd.id).toBe(2215)
})

test("Object.treeFind 指定匹配函数", () => {

    var fd = rcObject.treeFind(tree, (o) => {return !o.visible}, "layers", true)
    expect(fd.length).toBe(17)
    for (var i = 0; i < fd.length; i++)
    {
        expect(fd[i].visible).toBe(false)
    }
})

test("Object.treeFind 指定 id key [深度优先]", () => {

    var fd = rcObject.treeFind(tree, 2215, "layers", false, true)
    expect(fd.id).toBe(2215)
})

test("Object.treeFind 指定匹配函数 [深度优先]", () => {

    var fd = rcObject.treeFind(tree, (o) => {return !o.visible}, "layers", true, true)
    expect(fd.length).toBe(17)
    for (var i = 0; i < fd.length; i++)
    {
        expect(fd[i].visible).toBe(false)
    }
})

test("Object.treeEach 遍历所有", () => {

    var fd = []
    rcObject.treeEach(tree, (o) => { fd.push(o.id)}, "layers", true)
    expect(fd.length).toBe(139)
})

var tree2 = _.cloneDeep(tree)
test("Object.treeEach 删除元素", () => {

    var fd = []
    rcObject.treeEach(tree2, (o) => {
        if (o.bounds)
        {
            delete  o.bounds
        }

    }, "layers", false)

    rcObject.treeEach(tree2, (o) => {
        expect(o.bounds === undefined).toBe(true)
    }, "layers", false)

})

var tree3 = _.cloneDeep(tree)
test("Object.treeEach 3 层及以上深度的节点 ", () => {
    rcObject.treeEach(tree3, (o, deep) => {
        if (deep == 2)
        {
            delete  o.layers
        }

    }, "layers", false)

    var re = rcObject.treeEach(tree3, (o) => {}, "layers", false)
    console.log(re)
    expect(re.deep).toBe(3)
})

var tree4 = _.cloneDeep(tree)
test("Object.treeEach 4 层以上深度的节点 [深度优先]", () => {

    rcObject.treeEach(tree4, (o, deep) => {
        if (deep == 3)
        {
            delete  o.layers
        }

    }, "layers", true)

    var re = rcObject.treeEach(tree4, (o) => {}, "layers", true)

    expect(re.deep).toBe(4)
})

test("Object.treeEach 返回树信息 struct conut 验证", () => {

    var re = rcObject.treeEach(tree, (o) => {}, "layers", true)
    var conut = 0
    re.struct.forEach((x) => {conut += x})
    expect(conut).toBe(re.total)
})
