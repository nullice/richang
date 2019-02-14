import shuffle from "lodash/shuffle"
import * as event from "./event/event"
import * as stringify from "./stringify/stringify"
import * as geometry from "./geometry/geometry"
import * as object from "./object/object"
import * as gob from "./gob/gob"
import * as url from "./url/url"
import * as cache from "./cache/cache"
import * as func from "./function/function"
import * as async from "./async/async"
import * as time from "./time/time"

let Richang = {
    shuffle,
    event,
    object,
    geometry,
    stringify,
    url,
    func,
    cache,
    async,
    time,
    gob
}
export { Richang, shuffle, event, geometry, object, stringify, url, cache, async, func, time, gob }
