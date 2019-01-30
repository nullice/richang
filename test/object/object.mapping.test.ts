import { Richang as rc } from "../../src/index"
import { cloneDeep } from "../../src/object/object"

describe("mappingObject", () => {
    let imageLiteInfo = {
        id: "ea588a65-8601-4f59-963e-d4b92ce5cf07",
        name: "fdddd",
        xywh: { x: 718.259100711309, y: -2013.76583872198, w: 200, h: 53 },
        type: "card",
        batch: null,
        updateTime: new Date("2018-04-25T13:34:45.000Z")
    }

    let backendData = {
        batch: null,
        group: [],
        height: 53,
        home: false,
        id: "ea588a65-8601-4f59-963e-d4b92ce5cf07",
        layout_data: null,
        name: "fdddd",
        position_x: 718.259100711309,
        position_y: -2013.76583872198,
        share_id: "ea588a65-8601-4f59-963e-d4b92ce5cf07",
        sketch_id: null,
        source: false,
        text_scale: null,
        type: "card",
        update_time: "Wed, 25 Apr 2018 13:34:45 GMT",
        url: "",
        width: 200
    }

    let mappingRule = {
        id: "id",
        name: "name",
        xywh: {
            x: "position_x",
            y: "position_y",
            w: "width",
            h: "height"
        },
        type: "type",
        batch: "batch",
        updateTime: ["update_time", (x: any) => new Date(x), (x: any) => x]
    }

    test("mapping", () => {
        let newObject = rc.object.mappingObject(backendData, mappingRule)
        expect(newObject).toEqual(imageLiteInfo)
    })

    test("mapping reverse", () => {
        let newObject = rc.object.mappingObject(imageLiteInfo, mappingRule, true)

        expect(newObject).toEqual({
            id: "ea588a65-8601-4f59-963e-d4b92ce5cf07",
            name: "fdddd",
            type: "card",
            batch: null,
            update_time: new Date("2018-04-25T13:34:45.000Z"),
            position_x: 718.259100711309,
            position_y: -2013.76583872198,
            width: 200,
            height: 53
        })
    })

    test("mapping 使用 undefined 作为处理函数", () => {
        let mappingRule = {
            id: "id",
            height: ["height", undefined, (x: any) => x]
        }

        let newObject = rc.object.mappingObject(backendData, mappingRule)

        expect(newObject.id).toEqual(backendData.id)
        expect(newObject.height).toEqual(undefined)
    })

    test("mapping 使用 undefined 作为逆处理函数", () => {
        let mappingRule = {
            id: "id",
            height: ["height", (x: any) => x, undefined]
        }

        let newObject = rc.object.mappingObject(backendData, mappingRule)
        let reObject = rc.object.mappingObject(newObject, mappingRule, true)

        expect(reObject.id).toEqual(reObject.id)
        expect(reObject.height).toEqual(undefined)
    })
})
