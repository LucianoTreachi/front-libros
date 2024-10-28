import { useState } from "react";
import Counter from "./Counter";

export default function CounterContainer({
  stock,
  onAdd,
  totalQuantity,
  productTitle,
}) {
  // Estado inicial del contador
  const [count, setCount] = useState(1);

  // Incrementar el contador sin exceder el stock disponible
  function increment() {
    setCount((prevCount) => (prevCount < stock ? prevCount + 1 : prevCount));
  }

  // Decrementar el contador sin permitir valores menores a 1
  function decrement() {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  }

  // Pasar todas las funciones y props al componente Counter
  return (
    <Counter
      count={count}
      setCount={setCount}
      increment={increment}
      decrement={decrement}
      stock={stock}
      onAdd={onAdd}
      totalQuantity={totalQuantity}
      productTitle={productTitle}
    />
  );
}
