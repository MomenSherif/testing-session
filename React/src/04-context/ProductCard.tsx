import { Product } from './types';

type ProductProps = Product & {
  onAddToCard: () => void;
};

export default function ProductCard({
  id,
  title,
  description,
  price,
  onAddToCard,
}: ProductProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <span>{price}$</span>
        <button onClick={onAddToCard}>Add to Cart</button>
      </div>
    </div>
  );
}
