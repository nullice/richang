import { Richang as rc } from "../../src/index";
describe("genSHA1", () => {
    test("genSHA1(\"nullice\")", () => {
        let re = rc.crypto.genSHA1("nullice");
        expect(re).toBe("51918a176c8e2b0af211a94c5478c58a54f239cd");
    });
});
describe("formatUUID", () => {
    test("formatUUID(\"e9411a6f1a2e22dd2244b78ee491c616\")", () => {
        let re = rc.crypto.formatUUID("e9411a6f1a2e22dd2244b78ee491c616");
        expect(re).toBe("e9411a6f-1a2e-22dd-2244-b78ee491c616");
    });
});
//# sourceMappingURL=crypto.test.js.map