import { genUUID_v4, roll } from "./../../crypto/crypto"

let count = 0

/**
 * 生成一个测试用对象
 * @param len
 * @param maxDeep
 */
export function objectGen(len = 6, maxDeep = 10) {
    let ob = {}
    count = 0
    console.time("objectGen")
    walker(ob, len, 0, "RN_", maxDeep)
    console.timeEnd("objectGen")
    console.log("[objectGen] count:", count)
    return ob
}

/**
 * 在一层里生成
 * @param ob 对象
 * @param len 数量
 * @param deep 深度
 * @param inherit 继承名称
 */
function walker(ob: any, len: number, deep: number, inherit: string, maxDeep: number) {
    let layerName = `${inherit}_${deep}_`
    for (let i = 0; i < len; i++) {
        let name = `${layerName}_${i}`
        ob[name] = {
            name: name,
            id: genUUID_v4(),
            date: new Date(),
            sd: Math.random(),
            data: {
                data: {
                    id: "ecbcba59-8619-4f26-8e62-b3ea508e72eb",
                    name: "colour-grey-button",
                    index: 3000,
                    type: "item",
                    modif: 1564763638608,
                    desc: null,
                    parentId: "87d07122-dff4-45bd-b20c-1f6d0b641994",
                    position: null,
                    designType: "textStyle",
                    hostType: "sketch",
                    hostObject: null,
                    packgeJsonRef: "skp-23670ecd-1aa0-4789-b4b6-51f031305333.skp",
                    srcRef: null,
                    imageRef: null,
                    image2xRef: "skthumb-23670ecd-1aa0-4789-b4b6-51f031305333-full.png",
                    image4xRef: null,
                    imageSvgRef: null,
                    thumbnailRef: "skthumb-23670ecd-1aa0-4789-b4b6-51f031305333-icon.png",
                    iconRef: null,
                    coverRef: null,
                    docRef: null,
                    previewObject: {
                        color: "rgba(144, 147, 153, 1)",
                        fontFamily: "PingFangSC-Regular",
                        fontSize: "14px",
                        fontWeight: "400",
                        textAlign: "center",
                        lineHeight: "14px"
                    },
                    previewThumbObject: {
                        color: "rgba(144, 147, 153, 1)",
                        fontFamily: "PingFangSC-Regular",
                        fontSize: "14px",
                        fontWeight: "400",
                        textAlign: "center",
                        lineHeight: "14px"
                    },
                    createdTime: {},
                    layoutData: { oldId: "23670ecd-1aa0-4789-b4b6-51f031305333", background: null },
                    createdUser: null,
                    modifUser: null,
                    _local: {
                        isUp: true,
                        latestSyncData: null,
                        isUnread: false,
                        isNewDownload: false,
                        upError: null,
                        latestModif: null
                    }
                },
                inited: false,
                selected: true,
                halfSelected: false,
                disalbeEmitChange: false
            },
            children: {}
        }
        count++
        if (deep <= maxDeep) {
            if (i % 3 === 0) {
                walker(ob[name].children, len, deep + 1, name, maxDeep)
            } else {
                walker(ob[name].children, len, maxDeep + 1, name, maxDeep)
            }
        }
    }
}
