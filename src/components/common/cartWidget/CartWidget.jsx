import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@context/CartContext";
import styles from "./CartWidget.module.css";

export default function CartWidget() {
  // Consumir el total de productos del contexto del carrito
  const { getTotalCartWidgetNumber } = useContext(CartContext);

  // Obtener el número total de productos en el carrito
  const totalCartWidgetNumber = getTotalCartWidgetNumber();

  return (
    <div className={styles.container}>
      <Link
        to="/carrito"
        id="cartWidget"
        className={styles.cartLink}
        aria-label={`Carrito de compras. ${
          totalCartWidgetNumber === 0
            ? "No tienes productos agregados."
            : `Cantidad de productos agregados: ${totalCartWidgetNumber}.`
        }`}
      >
        <BsCart className={styles.cartIcon} aria-hidden="true" />
      </Link>
      <span className={styles.cartNumber}>{totalCartWidgetNumber}</span>
    </div>
  );
}
