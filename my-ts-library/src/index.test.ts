// index.test.ts

import { describe, expect, test } from "vitest";
import BasicCalculator from "./calculadora";

describe("BasicCalculator", () => {
  const calculator = new BasicCalculator();

  test("deve adicionar dois números corretamente", () => {
    expect(calculator.add(5, 3)).toBe(8);
  });

  test("deve subtrair dois números corretamente", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test("deve multiplicar dois números corretamente", () => {
    expect(calculator.multiply(2, 5)).toBe(10);
  });

  test("deve dividir dois números corretamente", () => {
    expect(calculator.divide(12, 3)).toBe(4);
  });
});
