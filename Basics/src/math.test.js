const { sum, subtract } = require('./math');

test('sum 1 + 2 to be 3', () => {
  const result = sum(1, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test('subtract 4 - 2 to be 2', () => {
  const result = subtract(4, 2);
  const expected = 2;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.error(`${error}`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
