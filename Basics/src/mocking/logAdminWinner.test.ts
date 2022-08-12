import logAdminWinner from './logAdminWinner';
import { getWinner as getWinnerMock } from './utils';

jest.mock('./utils.ts');

test('jest.mock', () => {
  jest.mocked(getWinnerMock).mockImplementation((p1, p2) => p2);
  const consoleLogMock = jest.spyOn(console, 'log');

  logAdminWinner();

  expect(getWinnerMock).toBeCalledTimes(1);
  expect(getWinnerMock).toBeCalledWith("Mo'men", 'Safwat');

  expect(console.log).toBeCalled();
  expect(console.log).toBeCalledWith('The winner admin is Safwat 🚀');

  consoleLogMock.mockRestore();
});
