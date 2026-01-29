import { describe, expect, it } from "vitest";

import clampPrefix from "./clampPrefix";

describe("clampPrefix", () => {
  it("should clamp prefix to max depth", () => {
    expect(clampPrefix("a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z", 10)).toBe("a/b/c/d/e/f/g/h/i/j");
  });

  it("should return empty string if prefix is empty", () => {
    expect(clampPrefix("", 10)).toBe("");
  });

  it("should return prefix if it is shorter than max depth", () => {
    expect(clampPrefix("a/b/c/d/e/f/g/h/i", 10)).toBe("a/b/c/d/e/f/g/h/i");
  });

  it("should return prefix if it is equal to max depth", () => {
    expect(clampPrefix("a/b/c/d/e/f/g/h/i/j", 10)).toBe("a/b/c/d/e/f/g/h/i/j");
  });
});
