"use strict";

_Object2.default.defineProperty(exports, "__esModule", {
    value: true
});

require("babel-polyfill");

var _Object = require("./lib/Object");

var _Object2 = _interopRequireDefault(_Object);

var _String = require("./lib/String");

var _String2 = _interopRequireDefault(_String);

var _Type = require("./lib/Type");

var _Type2 = _interopRequireDefault(_Type);

var _Aarry = require("./lib/Aarry");

var _Aarry2 = _interopRequireDefault(_Aarry);

var _Rect = require("./lib/Rect");

var _Rect2 = _interopRequireDefault(_Rect);

var _File = require("./lib/File");

var _File2 = _interopRequireDefault(_File);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RichangNode = {
    Object: _Object2.default,
    String: _String2.default,
    Type: _Type2.default,
    Array: _Aarry2.default,
    Rect: _Rect2.default,
    File: _File2.default

    /**
     * @export Richang
     */
};exports.default = RichangNode;