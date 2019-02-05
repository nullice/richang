import shuffle from "lodash/shuffle"
import * as event from "./event/event"
import * as stringify from "./stringify/stringify"
import * as geometry from "./geometry/geometry"
import * as object from "./object/object"
import * as gob from "./gob/gob"
import * as url from "./url/url"

let Richang = {
    shuffle,
    event,
    object,
    geometry,
    stringify,
    url
}
export { Richang, shuffle, event, geometry, object, stringify, url, gob }
