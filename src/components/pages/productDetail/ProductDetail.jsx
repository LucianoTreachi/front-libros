import { useEffect, useState } from "react";
import Loader from "../../common/loader/Loader";
import GoHomeButton from "../../common/goHomeButton/GoHomeButton";
import CounterContainer from "../../common/counter/CounterContainer";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({
  goToCartRef,
  selectedProduct,
  stock,
  onAdd,
  totalQuantity,
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una demora para que se muestre el loader
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [loading, selectedProduct]);

  // Mostrar el loader
  if (loading || !selectedProduct || stock === undefined) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <Loader />
        </div>
      </section>
    );
  }

  // Mostrar la información del producto
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
                <b>Precio:</b> $ {selectedProduct.price}
              </p>
              <p>
                <b>¿Cuántas unidades quieres?</b>
              </p>
              <CounterContainer
                onAdd={onAdd}
                stock={stock}
                totalQuantity={totalQuantity}
                productTitle={selectedProduct.title}
                goToCartRef={goToCartRef}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
