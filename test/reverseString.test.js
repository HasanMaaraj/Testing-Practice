const reverseString = require('../code/reverseString');

test('hasan becomes nasah', () => {
    expect(reverseString('hasan')).toBe('nasah');
  });


test('Testing becomes gnitset', () => {
    expect(reverseString('testing')).toBe('gnitset');
  });

test('apple becomes elppa', () => {
    expect(reverseString('apple')).toBe('elppa');
  });