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
import * as string from "./string/string"
import * as crypto from "./crypto/crypto"
import * as benchmark from "./benchmark/benchmark"
import * as decorators from "./decorators/decorators"

// 某些版本 webpack 用 {async }

class Richang {
    static shuffle = shuffle
    static event = event
    static object = object

    static array = array
    static geometry = geometry
    static stringify = stringify

    static url = url
    static func = func
    static cache = cache

    static async = async
    static time = time
    static number = number

    static image = image
    static binary = binary
    static bin = binary
    static string = string

    static crypto = crypto
    static gob = gob
    static benchmark = benchmark

    static decorators = decorators
}

// let Richang2 = {
//     shuffle,
//     event,
//     object,
//
//     array,
//     geometry,
//     stringify,
//
//     url,
//     func,
//     cache,
//
//     async: async,
//     time,
//     number,
//
//     image,
//     binary,
//     string,
//
//     crypto,
//     gob,
//     benchmark
// }

export default Richang
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
    string,
    crypto,
    gob,
    benchmark,
    decorators
}
