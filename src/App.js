import React from 'react';
import { useStoreState } from "easy-peasy"; // 👈 import the hook
import './App.css';

function App({id}) {
  const basketCount = useStoreState(state => state.basket.productIds.length);
  const product = useStoreState(
    state => state.products.items.find(product => product.id === id)
  );
  return (
    <div className="App">
      count:{basketCount}
      <br/>
      id是1的product:{JSON.stringify(product)}
    </div>
  );
}

export default App;
