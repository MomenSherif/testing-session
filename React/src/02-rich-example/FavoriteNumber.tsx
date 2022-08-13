import { useMemo, useState } from 'react';
import random from '../utils/random';

type FavoriteNumberProps = {
  min?: number;
  max?: number;
};

export default function FavoriteNumber({
  min = 1,
  max = 10,
}: FavoriteNumberProps) {
  const [number, setNumber] = useState('');

  const isError = useMemo(() => {
    if (!number) return false;
    return +number < min || +number > max;
  }, [number, min, max]);

  const handleRandom = () => {
    const randomNumber = random(min, max);
    setNumber(`${randomNumber}`);
  };

  return (
    <div>
      <p>Your favorite number is {number || '....'}</p>
      <label htmlFor="fav-number">Favorite Number</label>
      <input
        // disabled
        type="number"
        name="fav-number"
        id="fav-number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />

      <div>
        <button onClick={handleRandom}>Random</button>
      </div>
      {isError && (
        <div role="alert">
          Please enter a number between {min} & {max}
        </div>
      )}
    </div>
  );
}
