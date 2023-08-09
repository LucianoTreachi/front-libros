import { useState } from "react";
import Counter from "./Counter";

export default function CounterContainer({ stock, onAdd, totalQuantity }) {
  // Crear un estado para mostrar el valor inicial del contador
  const [count, setCount] = useState(1);

  // Incrementar el contador mediante validaciones
  function increment() {
    if (count != 0 && count < stock) {
      setCount(count + 1);
    }
  }

  // Decrementar el contador mediante validaciones
  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <Counter
      count={count}
      setCount={setCount}
      increment={increment}
      decrement={decrement}
      stock={stock}
      onAdd={onAdd}
      totalQuantity={totalQuantity}
    />
  );
}
