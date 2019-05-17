import { AnyBase } from "../AnyBase/AnyBase"

export abstract class AnyContainer<T> extends AnyBase {
    public data: T
    constructor(data: T, options?: { id?: string }) {
        let id!: string

        // 没有通过 options 指定 id，但是 data 里有 id 字段时，使用 data 里的 id 字段作为 id
        if (!options || (options && !options.id)) {
            if (data && (<any>data).id) {
                id = (<any>data).id
            }
        }
        super(id)

        this.data = data
    }



}
