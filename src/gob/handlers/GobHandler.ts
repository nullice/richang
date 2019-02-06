import { GobCore } from "../gob"

export interface IGobHandler {
    wrapData: (target: any, gobCore: GobCore, keyPath: string[], localData: any, localGate: any) => any
    set: Function
    get: Function
    del: Function
}
