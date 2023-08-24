const calculator = require('../code/calculator');

test('Test addition', () => {
    expect(calculator.add(2, 10)).toBe(12);
    expect(calculator.add(-3, 5)).toBe(2);
  });


test('Test subtraction', () => {
    expect(calculator.subtract(2, 10)).toBe(-8);
    expect(calculator.subtract(9, 3)).toBe(6);
  });

test('Test multiplication', () => {
    expect(calculator.multiply(5, 6)).toBe(30);
    expect(calculator.multiply(-4, 3)).toBe(-12);
    expect(calculator.multiply(-5, -7)).toBe(35);
  });

test('Test division', () => {
    expect(calculator.divide(2, 10)).toBe(0.2);
    expect(calculator.divide(-40, 8)).toBe(-5);
    expect(calculator.divide(-9, -3)).toBe(3);
  });