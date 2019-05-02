import { GobCore } from "../gob"

export interface IGobHandler {
    wrapData: (target: any, gobCore: GobCore, keyPath: string[], localData: any, localGate: any) => any
    set: (key: string, value: any, keyPath: string[], gobCore: GobCore, localContext?: any) => boolean
    get: (key: string, keyPath: string[], gobCore: GobCore, localContext?: any) => any
    del: (key: string, keyPath: string[], gobCore: GobCore, localContext?: any) => boolean
}

export enum GobKeyword {
    $GobCore = "$$$GobCore",
    $set = "$$$GobCore"
}
