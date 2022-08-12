import { user, todo, houseForSale } from './data';

test('toBe | compare primitive values or check referential identity of object instances', () => {
  expect(user.name).toBe('momen');
  expect(user.age).toBe(26);

  // expect(user.skills).toBe(['html', 'css', 'js']);
  const { skills } = user;
  expect(user.skills).toBe(skills);

  expect(user.skills).toContain('html');
});

test('compare floating point numbers for approximate equality -> toBeCloseTo', () => {
  // expect(0.2 + 0.1).toBe(0.3); // fails
  expect(0.2 + 0.1).toBeCloseTo(0.3);
});

test('compare recursively all properties of object instances (also known as "deep" equality) -> toEqual', () => {
  // expect(user).toEqual({
  //   name: 'momen',
  //   age: 26,
  //   skills: ['html', 'css', 'JS'],
  // });

  expect(user).toEqual({
    name: 'momen',
    age: 26,
    skills: ['html', 'css', 'js'],
  });
});

test('toContain & toContainEqual', () => {
  expect(user.skills).toContain('html');

  expect(houseForSale.livingRoom.couch).toContainEqual([
    'large',
    { dimensions: [20, 20] },
  ]);

  expect(user.skills).toEqual(expect.arrayContaining(['html', 'css']));

  expect(houseForSale.livingRoom.couch).toEqual(
    expect.arrayContaining([['large', { dimensions: [20, 20] }]]),
  );
});

test('toMatch & toMatchObject', () => {
  expect('Hamada').toMatch(/hamada/i);
  expect(user).toMatchObject({ name: 'momen' });
  // expect(todo.createdAt).toBe(new Date());
  // expect(todo.createdAt).toBe(expect.any(Date));

  expect(todo.createdAt).toEqual(expect.any(Date));
});
