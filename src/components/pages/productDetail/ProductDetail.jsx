import CounterContainer from "../../common/counter/CounterContainer";
import GoHomeButton from "../../common/goHomeButton/GoHomeButton";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({
  selectedProduct,
  stock,
  onAdd,
  totalQuantity,
}) {
  // Mostrar un mensaje de "Cargando..." si los datos aún no están disponibles
  if (!selectedProduct || stock === undefined) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Cargando...</h2>
        </div>
      </section>
    );
  }

  // Mostrar la información del producto
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <GoHomeButton />
        <h2 className={styles.title}>Detalle del Producto</h2>
        <div className={styles.row}>
          <div className={styles.col1}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className={styles.productImage}
              width={640}
              height={900}
            />
          </div>
          <div className={styles.col2}>
            <h3 className={styles.productTitle}>{selectedProduct.title}</h3>
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}
