
import { useState } from 'react';
export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1)
    value += 1;
    console.log("Funciona +")
  }

  function decrement() {
    value -= 1;
    console.log("Funciona -");
  }

return (
  <>
    <h1>Mi primer contador</h1>
    <h2>{CounterApp}</h2>
    <button onClick={increment}>Incrementar +1</button>
    <button onClick={decrement}>Decrementar -1</button>
  </>
)
}



export default CounterApp;