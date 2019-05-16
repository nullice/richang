export class IndexedDBStorage {
    private idbRequest!: IDBRequest
    name: string
    ready: Promise<boolean>
    constructor(name = "IndexedDBStorage") {
        this.name = name
        let self = this
        let request = window.indexedDB.open("IDBStorage_" + name, 1)
        this.idbRequest = request
        request.onupgradeneeded = function(this: IDBOpenDBRequest, event: IDBVersionChangeEvent) {
            // console.log("onupgradeneeded", event)
            let db = this.result
            let objectStore = db.createObjectStore(self.name)
        }

        this.ready = new Promise((resolve, reject) => {
            request.onerror = function(event) {
                console.error("[IndexedDBStorage] err", event)
                reject(event)
            }
            request.onsuccess = function(event) {
                resolve(true)
            }
        })
    }

    static deleteDatabase(name: string) {
        window.indexedDB.deleteDatabase("IDBStorage_" + name)
    }

    set(key: string, value: any) {
        return new Promise((resolve, reject) => {
            if (this.idbRequest && this.idbRequest.result) {
                let db = this.idbRequest.result
                let transaction = db.transaction([this.name], "readwrite")
                let store = transaction.objectStore(this.name)
                store.put(value, key)


                transaction.oncomplete = function() {
                    resolve()
                }
                transaction.onerror = function(e: Event) {
                    reject(e)
                }
            } else {
                reject(new Error("[GobStorage] Not loaded indexedDB."))
            }
        })
    }

    delete(key: string) {
        return new Promise((resolve, reject) => {
            if (this.idbRequest && this.idbRequest.result) {
                let db = this.idbRequest.result
                let transaction = db.transaction([this.name], "readwrite")
                let store = transaction.objectStore(this.name)
                store.delete(key)

                transaction.oncomplete = function() {
                    resolve()
                }
                transaction.onerror = function(e: Event) {
                    reject(e)
                }
            } else {
                reject(new Error("[GobStorage] Not loaded indexedDB."))
            }
        })
    }

    clear(key: string) {
        return new Promise((resolve, reject) => {
            if (this.idbRequest && this.idbRequest.result) {
                let db = this.idbRequest.result
                let transaction = db.transaction([this.name], "readwrite")
                let store = transaction.objectStore(this.name)
                store.clear()

                transaction.oncomplete = function() {
                    resolve()
                }
                transaction.onerror = function(e: Event) {
                    reject(e)
                }
            } else {
                reject(new Error("[GobStorage] Not loaded indexedDB."))
            }
        })
    }

    get(key: string, value: any) {
        return new Promise((resolve, reject) => {
            if (this.idbRequest && this.idbRequest.result) {
                let db = this.idbRequest.result
                let transaction = db.transaction([this.name], "readwrite")
                let store = transaction.objectStore(this.name)
                let re = store.get(key)

                re.onsuccess = function(e: Event) {
                    resolve(re.result)
                }
                transaction.onerror = function(e: Event) {
                    reject(e)
                }
            } else {
                reject(new Error("[GobStorage] Not loaded indexedDB."))
            }
        })
    }

    getAll() {
        return new Promise(async (resolve, reject) => {
            if (this.idbRequest && this.idbRequest.result) {
                let db = this.idbRequest.result
                let transaction = db.transaction([this.name], "readwrite")
                let store = transaction.objectStore(this.name)
                let re = store.getAll()
                let re_allKeys = store.getAllKeys()

                let psVals = new Promise((resolve, reject) => {
                    re.onsuccess = function(e: Event) {
                        resolve(re.result)
                    }
                    re.onerror = function(e: Event) {
                        reject(e)
                    }
                })

                let psKeys = await new Promise((resolve, reject) => {
                    re_allKeys.onsuccess = function(e: Event) {
                        resolve(re_allKeys.result)
                    }
                    re_allKeys.onerror = function(e: Event) {
                        reject(e)
                    }
                })

                Promise.all([psKeys, psVals]).then(result => {
                    let re: any = {}
                    let keys = <any>result[0]
                    let vals = <any>result[1]

                    for (let i = 0; i < keys.length; i++) {
                        re[keys[i]] = vals[i]
                    }

                    resolve(re)
                })

                transaction.onerror = function(e: Event) {
                    reject(e)
                }
            } else {
                reject(new Error("[GobStorage] Not loaded indexedDB."))
            }
        })
    }
}
