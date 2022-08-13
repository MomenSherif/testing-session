import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProductCard from './ProductCard';
import { Product } from './types';

describe('<ProductCard />', () => {
  const product: Product = {
    id: 1,
    title: 'title',
    description: 'description',
    price: 2000,
  };

  test('renders product details', () => {
    render(<ProductCard {...product} onAddToCard={() => {}} />);

    expect(
      screen.getByRole('heading', { level: 3, name: product.title }),
    ).toBeInTheDocument();

    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(
      screen.getByText(`${product.price}$`, { exact: false }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /add to cart/i }),
    ).toBeInTheDocument();
  });

  test('clicks on add to cart trigger onAddToCart prop', () => {
    const mockFn = jest.fn();

    render(<ProductCard {...product} onAddToCard={mockFn} />);

    userEvent.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(mockFn).toBeCalledTimes(1);
  });
});
