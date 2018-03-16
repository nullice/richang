import NodeFile from "./modules/NodeFile"
import NodeDebug from "./modules/NodeDebug.js"
import NodeImage from "./modules/NodeImage.js"
import NodeTool from "./modules/NodeTool.js"
import _Console from "./modules/Console"
import _Object from "./modules/Object"
import _String from "./modules/String"
import _Rect from "./modules/Rect"
import _Type from "./modules/Type"
import _Array from "./modules/Aarry"
import _Tool from "./modules/Tool.js"

const RichangNode = {
    Object: _Object,
    String: _String,
    Type: _Type,
    Array: _Array,
    Rect: _Rect,
    Console: _Console,
    Tool: _Tool,
    NodeFile,
    NodeDebug,
    NodeTool,
    NodeImage,
}
/**
 * @export RichangNode
 */
module.exports = RichangNode
