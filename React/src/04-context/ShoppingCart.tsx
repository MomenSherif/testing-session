import { useState } from 'react';
import { useAppSelector } from './redux/hooks';

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const products = useAppSelector(state => state.cart.products);
  // console.log({ products });

  return (
    <div>
      <button onClick={() => setIsOpen(o => !o)}>
        {isOpen ? 'close' : 'open'} shopping cart
      </button>
      {isOpen && (
        <div>
          <p>Your cart 🫡</p>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                {product.title} | {product.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
