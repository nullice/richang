import { RCElectron as electron } from "./electron/electron"
import * as nodeServer from "./nodeServer/nodeServer"
import * as nodeFile from "./nodeFile/nodeFile"
import { Richang } from "./index"

let RichangElectron = {
    nodeServer,
    nodeFile,
    electron,
    ...Richang
}

export default RichangElectron
