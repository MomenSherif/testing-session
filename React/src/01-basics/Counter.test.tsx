/* eslint-disable */
import { render, act, screen, fireEvent } from '@testing-library/react';

import Counter from './Counter';

test('increment counter once to be one | BAD', async () => {
  const { container, debug } = render(<Counter />);

  // debug();

  const incrementBtn = container.querySelector('#inc-btn') as HTMLButtonElement;
  // console.log(incrementBtn);
  // incrementBtn.click();
  // await new Promise(res => setTimeout(res, 0));

  act(() => {
    incrementBtn.click();
  });

  // debug();

  expect(container.querySelector('p')?.textContent).toBe('Counter 1');
});

test('increment counter once to be one | BETTER', () => {
  render(<Counter />);

  // const incBtn = screen.getByRole('button', { name: /increment/i });

  // fireEvent.click(incBtn);

  fireEvent.click(screen.getByRole('button', { name: /increment/i }));

  expect(screen.getByText(/counter 1/i)).toBeInTheDocument();
});

describe('<Counter />', () => {
  test('renders counter with initial value 0', () => {
    render(<Counter />);

    expect(screen.getByText(/counter 0/i)).toBeInTheDocument();
  });

  test('clicking increment button increments by one', () => {
    render(<Counter />);

    fireEvent.click(screen.getByRole('button', { name: /increment/i }));

    expect(screen.getByText(/counter 1/i)).toBeInTheDocument();
  });

  test('clicking decrement button decrements by one', () => {
    render(<Counter />);

    fireEvent.click(screen.getByRole('button', { name: /decrement/i }));

    expect(screen.getByText(/counter -1/i)).toBeInTheDocument();
  });
});
