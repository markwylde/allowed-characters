const test = require('tape');
const allowedCharacters = require('../');

test('no wrong characters', t => {
  t.plan(1);

  const result = allowedCharacters('123', '123');
  t.equal(result, '123');
});

test('one wrong character', t => {
  t.plan(1);

  try {
    const result = allowedCharacters('123', '1234');
    console.log(result);
  } catch (error) {
    t.equal(error.message, 'contained unallowed character "4"');
  }
});

test('two wrong characters', t => {
  t.plan(1);

  try {
    const result = allowedCharacters('123', '12345');
    console.log(result);
  } catch (error) {
    t.equal(error.message, 'contained unallowed characters ["4", "5"]');
  }
});

test('three wrong characters at different positions', t => {
  t.plan(1);

  try {
    const result = allowedCharacters('123', 'x12y3x');
    console.log(result);
  } catch (error) {
    t.equal(error.message, 'contained unallowed characters ["x", "y", "x"]');
  }
});
