import { describe, expect, test } from "@jest/globals";
import IdlSchema from "../src/zod";
import sample from "../examples/xnft.json";

describe("The IDL specification", () => {
  describe("should be able to", () => {
    test("successfully parse an example IDL from Anchor", () => {
      expect(IdlSchema.parse(sample)).toBeDefined();
    });
  });
});
