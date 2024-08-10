import { Link } from "react-router-dom";
import CardSkeleton from "../../common/cardSkeleton/CardSkeleton";
import styles from "./ProductList.module.css";

export default function ProductList({
  products,
  activeCategory,
  setActiveCategory,
  isLoading,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tienda</h2>
        <h3 className={styles.subtitle}>Selecciona una categoría</h3>
        <div className={styles.containerCategoryButtons}>
          <Link
            aria-label="Todos los libros"
            to="/"
            onClick={() => setActiveCategory("Todos")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "Todos" ? styles.active : ""
            }`}
          >
            Todos
          </Link>
          <Link
            aria-label="Libros de HTML"
            to="/categoria/HTML"
            onClick={() => setActiveCategory("HTML")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "HTML" ? styles.active : ""
            }`}
          >
            HTML
          </Link>
          <Link
            aria-label="Libros de CSS"
            to="/categoria/CSS"
            onClick={() => setActiveCategory("CSS")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "CSS" ? styles.active : ""
            }`}
          >
            CSS
          </Link>
          <Link
            aria-label="Libros de JavaScript"
            to="/categoria/JavaScript"
            onClick={() => setActiveCategory("JavaScript")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "JavaScript" ? styles.active : ""
            }`}
          >
            JavaScript
          </Link>
          <Link
            aria-label="Libros de React"
            to="/categoria/React"
            onClick={() => setActiveCategory("React")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "React" ? styles.active : ""
            }`}
          >
            React
          </Link>
          <Link
            aria-label="Libros de Svelte"
            to="/categoria/Svelte"
            onClick={() => setActiveCategory("Svelte")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "Svelte" ? styles.active : ""
            }`}
          >
            Svelte
          </Link>
          <Link
            aria-label="Libros de Testing"
            to="/categoria/Testing"
            onClick={() => setActiveCategory("Testing")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "Testing" ? styles.active : ""
            }`}
          >
            Testing
          </Link>
        </div>
        <div className={styles.shop}>
          {isLoading && <CardSkeleton cards={12} />}

          {products.map((product) => (
            <Link to={`/producto/${product.id}`} key={product.id}>
              <picture>
                <source media="(max-width: 574px)" srcSet={product.image300} />
                <img
                  src={product.image}
                  alt={product.title}
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
