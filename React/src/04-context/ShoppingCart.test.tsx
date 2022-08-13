import { PreloadedState } from '@reduxjs/toolkit';
import {
  render as rtlRender,
  RenderOptions,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from './redux/store';

import ShoppingCart from './ShoppingCart';
import { Product } from './types';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function render(
  ui: React.ReactElement,
  { preloadedState, ...renderOptions }: ExtendedRenderOptions = {},
) {
  const store = setupStore(preloadedState);

  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

describe('<ShoppingCart />', () => {
  test('blabla', () => {
    const cartProducts: Product[] = [
      {
        id: 1,
        title: 'one',
        description: 'description one',
        price: 2000,
      },
      {
        id: 2,
        title: 'two',
        description: 'description two',
        price: 3000,
      },
    ];

    render(<ShoppingCart />, {
      preloadedState: {
        cart: { products: cartProducts },
      },
    });

    userEvent.click(
      screen.getByRole('button', { name: /open shopping cart/i }),
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(cartProducts.length);
    // other assertions to make sure rendered products with same data
    // screen.debug();
  });
});
