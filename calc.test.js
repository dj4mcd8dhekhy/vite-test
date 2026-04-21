import { describe, it, expect } from "vitest";
import { AddNums, SubNums, MulNums, DivNums } from "./calc.js";

describe("Addition test", () => {
  it("should be true", () => {
    expect(AddNums(1, 2)).toBe(3);
  });
});

describe("Addition test 2", () => {
  it("should be true", () => {
    expect(AddNums(2, 1)).toBe(3);
  });
});

describe("Subtraction test", () => {
  it("should be true", () => {
    expect(SubNums(9, 3)).toBe(6);
  });
});

describe("Subtraction test 2", () => {
  it("should be true", () => {
    expect(SubNums(3, 9)).toBe(-6);
  });
});

describe("Multiplication test", () => {
  it("should be true", () => {
    expect(MulNums(4, 7)).toBe(28);
  });
});

describe("Multiplication test 2", () => {
  it("should be true", () => {
    expect(MulNums(7, 4)).toBe(28);
  });
});

describe("Division test", () => {
  it("should be true", () => {
    expect(DivNums(10, 2)).toBe(5);
  });
});

describe("Division test 2", () => {
  it("should be true", () => {
    expect(DivNums(10, 5)).toBe(2);
  });
});