export class IndexedDBStorage {
    static allIndexedDBNames = new IndexedDBStorage("allIndexedDBNames")
    static allInstances: { [id: string]: IndexedDBStorage } = {}
    static async deleteAllDatabase() {
        let names = await this.allIndexedDBNames.getAll()
        for (let name in IndexedDBStorage.allInstances) {
            this.allInstances[name].deleteDatabase()
        }
        for (let name in names) {
            indexedDB.deleteDatabase(name)
        }
    }

    /**
     * 打开/创建一个 IndexedDBStorage 并等待其初始化完成，相当于是 new IndexedDBStorage 的简便方法
     * @param name
     * @param subName
     */
    static async open(name = "IndexedDBStorage", subName?: string) {
        let idbs = new IndexedDBStorage(name, subName)
        await idbs.ready
        return idbs
    }

    private idbRequest!: IDBRequest
    name: string
    subName: string
    ready: Promise<boolean>
    isDestroyed = true

    constructor(name = "IndexedDBStorage", subName?: string) {
        this.name = name
        this.subName = subName || name
        let self = this
        let request = window.indexedDB.open("IDBStorage_" + name, 1)
        this.idbRequest = request

        request.onupgradeneeded = function(this: IDBOpenDBRequest, event: IDBVersionChangeEvent) {
            // console.log("onupgradeneeded", event)
            let db = this.result
            let objectStore = db.createObjectStore(self.subName)
        }

        this.ready = new Promise((resolve, reject) => {
            let self = this
            request.onerror = function(event) {
                // console.error("[IndexedDBStorage] err", event)
                reject(event)
            }

            request.onsuccess = function(event) {
                resolve(true)
                let databaseName = self.getDatabaseName()
                IndexedDBStorage.allInstances[databaseName] = self
                IndexedDBStorage.allIndexedDBNames.ready.then((a: any) => {
                    IndexedDBStorage.allIndexedDBNames.set(databaseName, true)
                })
            }
        })
    }

    deleteDatabase() {
        let databaseName = this.getDatabaseName()
        let db = this.idbRequest.result
        db.close()
        window.indexedDB.deleteDatabase(databaseName)
        delete IndexedDBStorage.allInstances[databaseName]
        this.isDestroyed = true

        if (!IndexedDBStorage.allIndexedDBNames.isDestroyed) {
            IndexedDBStorage.allIndexedDBNames.ready.then((a: any) => {
                IndexedDBStorage.allIndexedDBNames.delete(databaseName)
            })
        }
    }

    getDatabaseName() {
        return "IDBStorage_" + this.name
    }

    set(key: string, value: any) {
        return new Promise((resolve, reject) => {
            if (this.idbRequest && this.idbRequest.result) {
                let db = this.idbRequest.result
                let transaction = db.transaction([this.name], "readwrite")
                let store = transaction.objectStore(this.subName)
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
                let store = transaction.objectStore(this.subName)
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

    deleteAll() {
        return new Promise((resolve, reject) => {
            if (this.idbRequest && this.idbRequest.result) {
                let db = this.idbRequest.result
                let transaction = db.transaction([this.name], "readwrite")
                let store = transaction.objectStore(this.subName)
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

    get(key: string) {
        return new Promise((resolve, reject) => {
            if (this.idbRequest && this.idbRequest.result) {
                let db = this.idbRequest.result
                let transaction = db.transaction([this.name], "readonly")
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

    has(key: string) {
        return new Promise((resolve, reject) => {
            if (this.idbRequest && this.idbRequest.result) {
                let db = this.idbRequest.result
                let transaction = db.transaction([this.name], "readonly")
                let store = transaction.objectStore(this.name)
                let re = store.getKey(key)

                re.onsuccess = function(e: Event) {
                    resolve(re.result !== undefined)
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
                let transaction = db.transaction([this.name], "readonly")
                let store = transaction.objectStore(this.subName)
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

    getAllKeys() {
        return new Promise(async (resolve, reject) => {
            if (this.idbRequest && this.idbRequest.result) {
                let db = this.idbRequest.result
                let transaction = db.transaction([this.name], "readonly")
                let store = transaction.objectStore(this.subName)
                let re = store.getAllKeys()

                re.onsuccess = function(e: Event) {
                    resolve(re.result)
                }
                re.onerror = function(e: Event) {
                    reject(e)
                }

                transaction.onerror = function(e: Event) {
                    reject(e)
                }
            } else {
                reject(new Error("[GobStorage] Not loaded indexedDB."))
            }
        })
    }
}
