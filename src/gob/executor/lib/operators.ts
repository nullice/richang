export enum GobOperatorType {
    get = "get",
    set = "set",
    delete = "delete"
}

export interface IGobOperator {
    type: GobOperatorType
    keyPath: string[]
    value: any
    origin: null | any
}
