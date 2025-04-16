import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum function", () => {
  it("should return the sum of two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should return the sum of a positive and a negative number", () => {
    expect(sum(5, -3)).toBe(2);
  });

  it("should return the sum of two negative numbers", () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  it("should return the sum of zero and a positive number", () => {
    expect(sum(0, 7)).toBe(7);
  });

  it("should return the sum of zero and a negative number", () => {
    expect(sum(0, -7)).toBe(-7);
  });

  it("should return zero when both numbers are zero", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("should handle large numbers correctly", () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });

  it("should handle edge cases with very small numbers", () => {
    expect(sum(0.0001, 0.0002)).toBeCloseTo(0.0003);
  });

  it("should handle mixed integer and floating-point numbers", () => {
    expect(sum(5, 0.5)).toBeCloseTo(5.5);
  });

  it("should handle negative floating-point numbers", () => {
    expect(sum(-0.1, -0.2)).toBeCloseTo(-0.3);
  });
});
