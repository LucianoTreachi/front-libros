import { useNavigate } from "react-router-dom";
import styles from "./AddToCartButtons.module.css";

export default function AddToCartButtons({ onAdd, count, productTitle }) {
  const navigate = useNavigate();

  // Navegar hacia la página /carrito y enfocar el widget del carrito
  function handleGoToCart() {
    navigate("/carrito");

    const cartWidget = document.getElementById("cartWidget");
    if (cartWidget) {
      cartWidget.focus();
    }
  }

  // Renderizar Botones de Agregar y Revisar el carrito
  return (
    <div className={styles.containerButtons}>
      {/* Botón Agregar al carrito */}
      <button
        className={`${styles.button} ${styles.addToCartButton}`}
        onClick={() => onAdd(count)}
        aria-label={`Agregar al carrito: ${
          count === 1 ? `una unidad` : `${count} unidades`
        } del producto ${productTitle}`}
      >
        Agregar al carrito
      </button>

      {/* Botón Revisar el carrito */}
      <button
        id="goToCartButton"
        className={`${styles.button} ${styles.goToCartButton}`}
        onClick={handleGoToCart}
        aria-label="Revisar el carrito."
      >
        Revisar el carrito
      </button>
    </div>
  );
}
