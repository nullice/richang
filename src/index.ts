import shuffle from "lodash/shuffle"
import * as event from "./event/event"
import * as stringify from "./stringify/stringify"
import * as geometry from "./geometry/geometry"
import * as object from "./object/object"

let Richang = {
    shuffle,
    event,
    object,
    geometry,
    stringify
}
export { Richang, shuffle, event, geometry, object, stringify }
