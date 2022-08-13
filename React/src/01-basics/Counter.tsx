import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return (
    <section>
      <p>Counter {count}</p>
      <div>
        <button id="dec-btn" onClick={decrement}>
          Decrement
        </button>
        <button id="inc-btn" onClick={increment}>
          Increment
        </button>
      </div>
    </section>
  );
}
