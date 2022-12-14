import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './01-basics/Counter';
import FavoriteNumber from './02-rich-example/FavoriteNumber';
import Posts from './03-call-server/Posts';
import ProductCard from './04-context/ProductCard';
import ShoppingCart from './04-context/ShoppingCart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Counter /> */}
        {/* <FavoriteNumber /> */}
        {/* <Posts /> */}
        {/* <ProductCard
          id={1}
          title="Product title"
          description="lorem ipsum"
          price={2000}
          onAddToCard={() => console.log('Added to cart')}
        /> */}

        <ShoppingCart />
      </header>
    </div>
  );
}

export default App;
