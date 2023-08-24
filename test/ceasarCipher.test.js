const ceasarCipher = require('../code/ceasarCipher');


test('Test positive shift', () => {
    expect(ceasarCipher('Hello, World!', 7)).toBe('Olssv, Dvysk!');
  });

test('Test negative shift', () => {
    expect(ceasarCipher('Hello, World!', -4)).toBe('Dahhk, Sknhz!');
  });

test('Test zero shift', () => {
    expect(ceasarCipher('Hello, World!', 0)).toBe('Hello, World!');
  });