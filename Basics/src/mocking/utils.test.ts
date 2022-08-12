import { last, getWinner } from './utils';

describe('last should run callback with last element in the array', () => {
  const persons = ['P1', 'P2', 'P3', 'P4', 'P5'];
  test('BAD', () => {
    let result;

    last(persons, person => {
      result = person;
    });

    expect(result).toBe('P5');
  });

  test('GOOD', () => {
    const mockFn = jest.fn();

    // mockFn
    //   .mockReturnValueOnce('Momen')
    //   .mockReturnValueOnce('Safwat')
    //   .mockReturnValueOnce('Momen');

    // console.log(mockFn());
    // console.log(mockFn());
    // console.log(mockFn());

    last(persons, mockFn);

    expect(mockFn).toBeCalled();
    expect(mockFn).toBeCalledWith('P5');
  });
});

describe('getWinner', () => {
  test('should return name on of the players | jest.fn', () => {
    const mathRandomOriginal = Math.random;
    Math.random = jest.fn(() => 42);

    // console.log(Math.random);

    // console.log(Math.random());
    // console.log(Math.random());
    // console.log(Math.random());

    // (Math.random as jest.Mock).mockReturnValue(42) ❌

    jest
      .mocked(Math.random)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(0);

    const winner = getWinner("Mo'men", 'Safwat');

    expect(winner).toBe("Mo'men");

    Math.random = mathRandomOriginal;
  });

  test('Ay 7aga', () => {
    console.log(Math.random());
  });

  test('should return name on of the players | jest.spyOn', () => {
    const mockedMathRandom = jest.spyOn(Math, 'random');

    mockedMathRandom.mockReturnValueOnce(1).mockReturnValueOnce(1);

    const winner = getWinner("Mo'men", 'Safwat');
    expect(winner).toBe('Safwat');

    mockedMathRandom.mockRestore();
  });
});
