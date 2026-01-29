import { describe, expect, it } from "vitest";

import getPrefixDepth from "./getPrefixDepth";

describe("getPrefixDepth", () => {
  it("should return the depth of the prefix", () => {
    expect(getPrefixDepth("a/b/c/d/e/f/g/h/i/j")).toBe(10);
    expect(getPrefixDepth("a/b/c/d/e")).toBe(5);
  });

  it("should return the depth of the prefix with a trailing slash", () => {
    expect(getPrefixDepth("a/b/c/d/e/f/g/h/i/j/")).toBe(10);
    expect(getPrefixDepth("a/b/c/d/e/")).toBe(5);
  });

  it("should return 0 for an empty prefix", () => {
    expect(getPrefixDepth("")).toBe(0);
  });
});
