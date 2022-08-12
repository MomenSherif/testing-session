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

