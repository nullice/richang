import * as nodeServer from "./nodeServer/nodeServer"
import { Richang } from "./index"

delete Richang.image
delete Richang.binary



let RichangNode = {
    nodeServer,
    ...Richang
}

export default RichangNode
