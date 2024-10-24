import { Link } from "react-router-dom";
import CardSkeleton from "../../common/cardSkeleton/CardSkeleton";
import styles from "./ProductList.module.css";

export default function ProductList({
  products,
  activeCategory,
  setActiveCategory,
  isLoading,
}) {
  // Manejador de eventos para cambiar la categoría seleccionada
  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tienda</h2>
        <h3 className={styles.subtitle}>Selecciona una categoría</h3>
        <div className={styles.containerCategorySelect}>
          <select
            id="select"
            aria-label="Selecciona una categoría"
            value={activeCategory}
            onChange={handleCategoryChange}
            className={styles.selectCategory}
          >
            <option value="Todos">Todos</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Svelte">Svelte</option>
            <option value="Testing">Testing</option>
          </select>
        </div>
        <div className={styles.shop}>
          {isLoading && <CardSkeleton cards={12} />}

          {products.map((product) => (
            <Link to={`/producto/${product.id}`} key={product.id}>
              <picture>
                <source media="(max-width: 574px)" srcSet={product.image300} />
                <img
                  src={product.image}
                  alt={`${product.title}. Autor ${product.author}.`}
                  width={640}
                  height={900}
                  loading="lazy"
                />
              </picture>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
