// tests/clock.js
import { describe, expect, it } from "vitest";
import { computeTime } from "../modules/clock";

describe("compute time", () => {
  it("should return mortin if value is <= 2", () => {
    expect(computeTime(1)).toBe("mortin");
  });
  it("should return aprenoon if value is <= 4", () => {
    expect(computeTime(3)).toBe("aprenoon");
  });
  it("should return soirning if value is <= 5", () => {
    expect(computeTime(5)).toBe("soirning");
  });
  it("should return nuight if value is > 5", () => {
    expect(computeTime(6)).toBe("nuight");
  });
});
