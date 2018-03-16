// Created by nullice on 2018/03/16 - 13:50

import Tool from "../../src/modules/Tool.js"

test('Tool.genUUID_v4', () => {
    expect(Tool.genUUID_v4().length).toBeGreaterThanOrEqual(16);
});


