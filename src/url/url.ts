import qs from "qs"

export function urlQueryToObject(urlQuery: string) {
    let object = qs.parse(urlQuery)
    return object
}

export function objectToUrlQuery(object: any) {
    let str = qs.stringify(object)
    return str
}
