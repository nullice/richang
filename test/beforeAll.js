// Created by nullice on 2019/05/28 - 22:47
let fakeIndexeddb = require("fake-indexeddb")
global.window = global
global.indexedDB = fakeIndexeddb
global.navigator = {
    userAgent: 'node',
}
