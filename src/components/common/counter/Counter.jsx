import AvailableStockMessage from "@components/common/availableStockMessage/AvailableStockMessage";
import AddToCartButtons from "@components/common/addToCartButtons/AddToCartButtons";
import styles from "./Counter.module.css";

export default function Counter({
  count,
  stock,
  decrement,
  increment,
  onAdd,
  totalQuantity,
  productTitle,
}) {
  return (
    <div>
      <div className={styles.containerButtons}>
        <button
          className={styles.counterButton}
          onClick={decrement}
          aria-label={`Disminuir la cantidad. Tienes ${count}. Unidades disponibles: ${stock}.`}
        >
          -
        </button>
        <span className={styles.number}>{count}</span>
        <button
          className={styles.counterButton}
          onClick={increment}
          aria-label={`Aumentar la cantidad. Tienes ${count}. Unidades disponibles: ${stock}.`}
        >
          +
        </button>
      </div>

      {/* Componente de mensaje de stock */}
      <AvailableStockMessage totalQuantity={totalQuantity} stock={stock} />

      {/* Botones de Agregar y Revisar el carrito */}
      <AddToCartButtons
        onAdd={onAdd}
        count={count}
        productTitle={productTitle}
      />
    </div>
  );
}
