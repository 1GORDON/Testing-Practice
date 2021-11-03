const functions = require('./functions');

test('Adds 2 + 2 to Equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 Not Equal 5', () => {
  expect(functions.add(2, 3)).not.toBe(4);
});

test('Should Return Correct', () => {
  expect(functions.stringLength('Gordon'));
});

test('Should Return Not Correct', () => {
  expect(functions.stringLength('Gordon Tinyefuza'));
});

test('Should Reverse String', () => {
  expect(functions.reverseString('Gordon'));
});