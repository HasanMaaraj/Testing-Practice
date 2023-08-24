const capitalize = require('../code/capitalize');

test('hasan becomes Hasan', () => {
    expect(capitalize('hasan')).toBe('Hasan');
  });


test('Testing becomes Testing', () => {
    expect(capitalize('testing')).toBe('Testing');
  });

test('apple becomes Apple', () => {
    expect(capitalize('apple')).toBe('Apple');
  });