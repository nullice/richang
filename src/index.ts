import shuffle from "lodash/shuffle"
import * as event from "./event/event"
import * as stringify from "./stringify/stringify"
import * as geometry from "./geometry/geometry"
import * as object from "./object/object"
import * as array from "./array/array"
import * as gob from "./gob/gob"
import * as url from "./url/url"
import * as cache from "./cache/cache"
import * as func from "./function/function"
import * as async from "./async/async"
import * as time from "./time/time"
import * as number from "./number/number"
import * as image from "./image/image"
import * as binary from "./binary/binary"


// 某些版本 webpack 用 {async }

let Richang = {
    shuffle,
    event,
    object,
    array,
    geometry,
    stringify,
    url,
    func,
    cache,
    async: async,
    time,
    number,
    image,
    binary,
    gob
}
export {
    Richang,
    shuffle,
    event,
    geometry,
    object,
    array,
    stringify,
    url,
    cache,
    async,
    func,
    time,
    number,
    image,
    binary,
    gob
}
