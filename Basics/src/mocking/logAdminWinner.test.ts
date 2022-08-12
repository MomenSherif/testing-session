import logAdminWinner from './logAdminWinner';
import { getWinner as getWinnerMock } from './utils';

jest.mock('./utils.ts', () => ({
  getWinner: jest.fn((p1, p2) => p2),
}));

// provide __mocks__ if it is needed to be mocked in multiple places
// jest.mock('./utils.ts');

afterEach(() => {
  // jest.mocked(getWinnerMock).mockClear();
  jest.clearAllMocks();
});

test('jest.mock', () => {
  // Try with mockImplementation
  jest.mocked(getWinnerMock).mockImplementationOnce((p1, p2) => p1);
  const consoleLogMock = jest.spyOn(console, 'log');

  logAdminWinner();

  expect(getWinnerMock).toBeCalledTimes(1);
  expect(getWinnerMock).toBeCalledWith("Mo'men", 'Safwat');

  expect(console.log).toBeCalled();
  expect(console.log).toBeCalledWith("The winner admin is Mo'men 🚀");

  consoleLogMock.mockRestore();
});

test('jest.mock with factory function', () => {
  const consoleLogMock = jest.spyOn(console, 'log');

  logAdminWinner();

  expect(getWinnerMock).toBeCalledTimes(1);
  expect(getWinnerMock).toBeCalledWith("Mo'men", 'Safwat');

  expect(console.log).toBeCalled();
  expect(console.log).toBeCalledWith('The winner admin is Safwat 🚀');

  consoleLogMock.mockRestore();
});
