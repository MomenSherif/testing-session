import { fireEvent, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import FavoriteNumber from './FavoriteNumber';
import randomMock from '../utils/random';

jest.mock('../utils/random.ts');

describe('<FavoriteNumber />', () => {
  test('renders favorite number input text', () => {
    render(<FavoriteNumber />);

    expect(screen.getByLabelText(/favorite number/i)).toBeInTheDocument();
  });

  test('renders favorite number to screen with changed value of input', () => {
    render(<FavoriteNumber />);

    expect(
      screen.getByText(/Your favorite number is \.+/i),
    ).toBeInTheDocument();

    // fireEvent.change(screen.getByLabelText(/favorite number/i), {
    //   target: { value: '123123' },
    // });

    user.type(screen.getByLabelText(/favorite number/i), '10');

    expect(screen.getByText(/Your favorite number is 10/i)).toBeInTheDocument();
  });

  test('renders alert if favorite number is bigger than maximum number', () => {
    render(<FavoriteNumber max={20} />);

    user.type(screen.getByLabelText(/favorite number/i), '30');

    expect(screen.getByRole('alert')).toHaveTextContent(
      /please enter a number between \d & 20/i,
    );
  });

  test('renders alert if favorite number is less than minimum number', () => {
    render(<FavoriteNumber min={20} />);

    user.type(screen.getByLabelText(/favorite number/i), '10');

    expect(screen.getByRole('alert')).toHaveTextContent(
      /please enter a number between 20 & \d/i,
    );
  });

  test('can rerender with new min & max value as prop', () => {
    const { rerender } = render(<FavoriteNumber />);

    user.type(screen.getByLabelText(/favorite number/i), '20');

    expect(screen.getByRole('alert')).toBeInTheDocument();

    rerender(<FavoriteNumber max={30} />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();

    rerender(<FavoriteNumber min={25} max={30} />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  test('click random button generates favorite number between min and max', () => {
    const max = 100;
    const min = 0;

    jest.mocked(randomMock).mockImplementation((min, max) => max);
    render(<FavoriteNumber min={min} max={max} />);

    user.click(screen.getByRole('button', { name: /random/i }));

    expect(randomMock).toBeCalledTimes(1);
    expect(randomMock).toBeCalledWith(min, max);

    screen.getByText(`your favorite number is ${max}`, { exact: false });
  });
});
