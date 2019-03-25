import * as nodeServer from "./nodeServer/nodeServer"
import * as nodeFile from "./nodeFile/nodeFile"
import { Richang } from "./index"

delete Richang.image
delete Richang.binary

let RichangNode = {
    nodeServer,
    nodeFile,
    ...Richang
}

export default RichangNode
