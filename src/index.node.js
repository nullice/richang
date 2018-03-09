
import File from "./modules/File"
import NodeDebug from "./modules/NodeDebug.js"
import _Console from "./modules/Console"
import _Object from "./modules/Object"
import _String from "./modules/String"
import _Rect from "./modules/Rect"
import _Type from "./modules/Type"
import _Array from "./modules/Aarry"

const RichangNode = {
    Object: _Object,
    String: _String,
    Type: _Type,
    Array: _Array,
    Rect: _Rect,
    Console: _Console,
    File:File,
    NodeDebug
}
/**
 * @export RichangNode
 */
module.exports = RichangNode
