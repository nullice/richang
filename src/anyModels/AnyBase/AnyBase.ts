import { genUUID_v4 } from "../../crypto/crypto"

/**
 * id 描述的基本对象
 */
export abstract class AnyBase {
    /**
     * id
     */
    public id: string

    protected constructor(id?: string) {
        if (id) {
            this.id = id
        } else {
            this.id = genUUID_v4()
        }
    }
}
