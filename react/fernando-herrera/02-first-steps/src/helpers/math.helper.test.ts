import { describe, expect, test } from "vitest";
import { add, multiply, substract } from "./math.helper";

// Pruebas unitarias para la función add
describe("add", () => {
  test("should add two positive numbers", () => {
    const result = add(5, 3);
    expect(result).toBe(8);
  });

  test("should add a negative and a positive number", () => {
    const result = add(-5, 3);
    expect(result).toBe(-2);
    // expect(result).toBeLessThan(0);
  });
});

// Pruebas unitarias para la función substract
describe("substract", () => {
  test("should substract two positive numbers", () => {
    const result = substract(5, 3);
    expect(result).toBe(2);
  });

  test("should substract a negative and a positive number", () => {
    const result = substract(-5, 3);
    // expect(result).toBe(-8);
    expect(result).toBeLessThan(0);
  });
});

// Pruebas unitarias para la función multiply
describe("multiply", () => {
  test("should multiply two positive numbers", () => {
    const result = multiply(5, 3);
    expect(result).toBe(15);
  });

  test("should multiply a negative and a positive number", () => {
    const result = multiply(-5, 3);
    expect(result).toBe(-15);
  });
});
