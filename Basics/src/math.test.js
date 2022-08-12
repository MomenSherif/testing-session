const { sum, subtract, sumAsync } = require('./math');

test('sum 1 + 2 to be 3', () => {
  const result = sum(1, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test('sumAsync 1 + 2 to resolve 3', async () => {
  const result = await sumAsync(1, 2);
  expect(result).toBe(3);
});

test('subtract 4 - 2 to be 2', () => {
  const result = subtract(4, 2);
  const expected = 2;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
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
