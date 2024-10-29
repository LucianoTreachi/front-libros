import styles from "./AvailableStockMessage.module.css";

export default function AvailableStockMessage({ totalQuantity, stock }) {
  return (
    <>
      {/* Cuando no hay ningún producto agregado, la variable totalQuantity llega como "undefined", por lo tanto se mostrará el mensaje de unidades disponibles */}
      {typeof totalQuantity === "undefined" && (
        <p className={styles.availableStockMessage}>
          Unidades Disponibles: {stock}
        </p>
      )}

      {/* Si la variable totalQuantity es igual a 1, mostrar el siguiente mensaje */}
      {totalQuantity === 1 && (
        <>
          <p className={styles.availableStockMessage}>
            Unidades Disponibles: {stock}
          </p>
          <p className={styles.addedStockMessage}>
            Agregaste una unidad. Revisa el carrito.
          </p>
        </>
      )}

      {/* Si la variable totalQuantity es mayor a 1, y menor al stock, mostrar el siguiente mensaje */}
      {totalQuantity > 1 && totalQuantity < stock && (
        <>
          <p className={styles.availableStockMessage}>
            Unidades Disponibles: {stock}
          </p>
          <p className={styles.addedStockMessage}>
            Agregaste {totalQuantity} unidades. Revisa el carrito.
          </p>
        </>
      )}

      {/* Si la variable totalQuantity es igual al stock disponible, mostrar el siguiente mensaje */}
      {totalQuantity === stock && (
        <p className={styles.maximumStockMessage}>
          Agregaste la máxima cantidad de unidades disponibles. Revisa el
          carrito.
        </p>
      )}
    </>
  );
}
