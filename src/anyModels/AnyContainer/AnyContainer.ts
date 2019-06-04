import { genUUID_v4 } from "../../crypto/crypto"
import { GobFactory, GobCore } from "../../gob/gob"
import { setValueEnumerableFalse } from "../../object/object"

export interface IAnyContainerInset<TData = any> {
    rawData: TData
    gobData: TData
    gobCore: GobCore
}

export interface IAnyData {
    id: string
    name: string
}

export class AnyContainer<TData extends IAnyData = IAnyData, TInset extends IAnyContainerInset = IAnyContainerInset> {
    // public get data(): TData {
    //     return this.inset.gobData
    // }
    // public set data(value) {
    //     throw new Error("[AnyContainer] err.")
    // }

    public get id(): string {
        return this.data.id
    }
    public set id(value) {
        this.data.id = value
    }
    public get name(): string {
        return this.data.name
    }
    public set name(value) {
        this.data.name = value
    }

    public readonly data!: TData

    public inset!: TInset
    protected creatEmptyData(): TData {
        let re = <TData>(<any>{
            id: genUUID_v4(),
            name: "unnameed",
            parentId: null,
            childrenIds: []
        })
        return re
    }

    constructor(data?: TData) {
        setValueEnumerableFalse(this, "inset", {})
        if (!data) {
            data = this.creatEmptyData()
        }
        this.inset.rawData = data
        this.inset.gobData = GobFactory(data, { vue: true })
        this.inset.gobCore = GobFactory.getGobCore(this.inset.gobData)
        this.data = this.inset.gobData
    }

    toData(): TData {
        return this.inset.rawData
    }

    async destroy() {
        this.inset.gobCore
    }
}

let x = new AnyContainer()
