// Created by nullice on 2018/03/16 - 13:50

import Time from "../../src/modules/Time.js"

test("Time.genTimestamp ", () => {
    for (var i = 0; i < 3; i++)
    {
        var x = Time.genTimestamp()
        var date = Time.parseTimestamp(x)
        expect(x).toBe(date.getTime().toString(36).toUpperCase())
    }
})
