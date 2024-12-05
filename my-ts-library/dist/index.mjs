// src/calculadora.ts
var BasicCalculator = class {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  }
};
var calculadora_default = BasicCalculator;
export {
  calculadora_default as BasicCalculator
};
