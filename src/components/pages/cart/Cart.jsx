import { Helmet } from "react-helmet";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import NavigateToTop from "@routes/NavigateToTop";
import GoHomeLink from "@components/common/goHomeLink/GoHomeLink";
import styles from "./Cart.module.css";

export default function Cart({
  cartProducts,
  handleClearCart,
  handleDeleteProduct,
  totalPrice,
}) {
  return (
    <>
      {/* Metadatos */}
      <Helmet>
        <title>Carrito - FrontLibros</title>
      </Helmet>

      <NavigateToTop />

      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <GoHomeLink />
            <h1 className={styles.title}>Carrito</h1>
            {cartProducts.length === 0 ? (
              <div className={styles.row}>
                <div className={styles.col1}>
                  <p className={styles.message}>
                    No tienes productos agregados. Si lo deseas, puedes volver a
                    la tienda.
                  </p>
                  <div className={styles.containerCartIcon}>
                    <BsFillCartFill
                      className={styles.cartIcon}
                      aria-hidden="true"
                    />
                    <span className={styles.numberCartIcon}>0</span>
                  </div>
                </div>
                <div className={styles.col2}>
                  <img
                    src="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/v1689878533/ecommerce-libros/emptyCart_gugs2a.jpg"
                    alt=""
                    className={styles.image}
                    width={500}
                    height={440}
                  />
                </div>
              </div>
            ) : (
              <>
                {cartProducts.map((cartProduct) => {
                  return (
                    <div
                      key={cartProduct.id}
                      className={styles.containerProduct}
                    >
                      <div className={styles.containerImage}>
                        <Link
                          to={`/producto/${cartProduct.id}`}
                          aria-label={`Producto: ${cartProduct.title}. Unidades agregadas: ${cartProduct.quantity}.`}
                        >
                          <img
                            src={cartProduct.image}
                            alt={cartProduct.title}
                          />
                        </Link>
                      </div>
                      <h2>{cartProduct.title}</h2>
                      <p>
                        <b>Unidades:</b> {cartProduct.quantity}
                      </p>
                      <p>
                        <b>Precio:</b>{" "}
                        {(cartProduct.price * cartProduct.quantity).toFixed(2)}{" "}
                        USD
                      </p>
                      <button
                        className={styles.deleteProductButton}
                        onClick={() => handleDeleteProduct(cartProduct.id)}
                        aria-label={`Eliminar producto: ${cartProduct.title}`}
                      >
                        <BsFillTrash3Fill
                          className={styles.trashIcon}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  );
                })}
                <div className={styles.priceContainer}>
                  <span className={styles.totalPrice} tabIndex={0}>
                    Precio total del carrito: <br /> {totalPrice.toFixed(2)} USD
                  </span>
                  <button
                    onClick={handleClearCart}
                    className={styles.clearCartButton}
                  >
                    Vaciar Carrito
                  </button>
                </div>
                <div className={styles.containerPayButtons}>
                  <Link
                    to="/pagar-con-tarjeta"
                    id="pay-link"
                    className={styles.creditButton}
                  >
                    Pagar con Tarjeta de Crédito o Débito
                  </Link>
                  <Link to="/pagar-con-paypal" className={styles.paypalButton}>
                    Pagar con PayPal
                  </Link>
                </div>
                <div className={styles.info}>
                  <p>
                    * Todos los precios aquí publicados se muestran en dólares
                    estadounidenses. Puedes usar una tarjeta de crédito o una
                    cuenta de PayPal para completar tu compra.
                  </p>
                  <br />
                  <br />
                  <p>
                    * Tu información de pago se procesará de forma segura y tu
                    número de tarjeta de crédito no se compartirá en ningún
                    lado.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
