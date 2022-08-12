import { last } from './utils';

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
