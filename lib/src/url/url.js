import qs from "qs";
export function urlQueryToObject(urlQuery) {
    let object = qs.parse(urlQuery);
    return object;
}
export function objectToUrlQuery(object) {
    let str = qs.stringify(object);
    return str;
}
//# sourceMappingURL=url.js.map