import { useStoreState } from "easy-peasy"; // 👈 import the hook

export default function BasketCount() {
  //       👇  map the state from store
  const basketCount = useStoreState(state => state.basket.productIds.length);
  render(){} <div>123</div>;
}
