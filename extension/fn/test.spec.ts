import { describe, it, expect } from "vitest";

describe("learning testing", () => {
  it("should be a simple test", () => {
    const sum = (a: number, b: number): number => a + b;
    const result = sum(2, 3);
    expect(result).toBe(5);
  });
});
