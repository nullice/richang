


import rcObject from "../../src/modules/Object.js"

test('Object.isEmptyObject({}) === true （对象是否为空）', () => {
    expect(rcObject.isEmptyObject({})).toBe(true);
});
