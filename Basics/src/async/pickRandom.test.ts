import { pickRandomPromise } from './pickRandom';

const frontendTeamMembers = [
  `Mo'men`,
  'Safwat',
  'Omar',
  'Zaghloul',
  'Ramez',
  'Sami',
  'Hend',
  'Omnia',
];

test('Async test with returning promise', () => {
  return pickRandomPromise(frontendTeamMembers).then(member => {
    expect(frontendTeamMembers).toContain(member);

    // expect(member).toBeOneOf(frontendTeamMembers) // jest-extended
  });
});

test('Async test with done callback', done => {
  pickRandomPromise(frontendTeamMembers).then(member => {
    expect(frontendTeamMembers).toContain(member);
    done();
  });
});

test('Async test with async await', async () => {
  const member = await pickRandomPromise(frontendTeamMembers);
  expect(frontendTeamMembers).toContain(member);
});
