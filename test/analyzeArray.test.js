const analyzeArray = require('../code/analyzeArray');

test('Analyze [1,8,3,4,2,6]', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
  });


test('Analyze [-9,7,46,7,3,30,-6,-12]', () => {
    expect(analyzeArray([-9,7,46,7,3,30,-6,-12])).toEqual({
        average: 8.25,
        min: -12,
        max: 46,
        length: 8
      });
  });

test('Analyze []', () => {
    expect(analyzeArray([])).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
      });
  });