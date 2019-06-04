import { GobExtension } from "../../gob"
import { set } from "./vue-set"
import { del } from "./vue-del"

export const VueSupport: GobExtension = function(gobCore, target) {
    gobCore.handler.set = set
    gobCore.handler.del = del
    ;(<any>gobCore).isVueSupport = true
}
