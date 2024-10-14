import { reorderAndAddMissingKeys } from "./ordenaTrans";

// ordenaTrans.test.js

describe("reorderAndAddMissingKeys", () => {
  test("should reorder keys based on the reference object", () => {
    const reference = { a: "1", b: "2", c: "3" };
    const target = { c: "3", a: "1", b: "2" };
    const result = reorderAndAddMissingKeys(reference, target);
    expect(Object.keys(result)).toEqual(["a", "b", "c"]);
  });

  test("should add missing keys with empty string values", () => {
    const reference = { a: "1", b: "2", c: "3" };
    const target = { a: "1" };
    const result = reorderAndAddMissingKeys(reference, target);
    expect(result).toEqual({ a: "1", b: "", c: "" });
  });

  test("should preserve the order of keys as in the reference object", () => {
    const reference = { a: "1", b: "2", c: "3" };
    const target = { b: "2", c: "3", a: "1" };
    const result = reorderAndAddMissingKeys(reference, target);
    expect(Object.keys(result)).toEqual(["a", "b", "c"]);
  });
});
