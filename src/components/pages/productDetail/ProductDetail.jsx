import Loader from "../../common/loader/Loader";
import GoHomeButton from "../../common/goHomeButton/GoHomeButton";
import CounterContainer from "../../common/counter/CounterContainer";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({
  selectedProduct,
  stock,
  onAdd,
  totalQuantity,
}) {
  // Mostrar un loader si el producto aún no está disponible
  if (!selectedProduct || stock === undefined) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <Loader />
        </div>
      </section>
    );
  }

  // Mostrar la información del producto cuando esté disponible
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <GoHomeButton />
          <h1 className={styles.title}>Detalle del Producto</h1>
          <div className={styles.row}>
            <div className={styles.col1}>
              <img
                src={selectedProduct.image}
                alt=""
                className={styles.productImage}
                width={640}
                height={900}
              />
            </div>
            <div className={styles.col2}>
              <h2 className={styles.productTitle}>{selectedProduct.title}</h2>
              <p className={styles.productDescription}>
                {selectedProduct.description}
              </p>
              <p>
                <b>Autor:</b> {selectedProduct.author}
              </p>
              <p>
                <b>Categoría:</b> {selectedProduct.category}
              </p>
              <p>
                <b>Precio:</b> {selectedProduct.price} USD
              </p>

              {/* Si el stock es mayor 0, mostrar el contador. De lo contrario mostrar un mensaje. */}
              {stock > 0 ? (
                <>
                  <p>
                    <b>¿Cuántas unidades quieres?</b>
                  </p>

                  <CounterContainer
                    onAdd={onAdd}
                    stock={stock}
                    totalQuantity={totalQuantity}
                    productTitle={selectedProduct.title}
                  />
                </>
              ) : (
                <p className={styles.outOfStockMessage} tabIndex={0}>
                  Lo sentimos, por el momento no tenemos stock de este producto.
                  Pronto repondremos más unidades.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
