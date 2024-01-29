import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";

export default function ProductList({
  products,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tienda</h2>
        <h3 className={styles.subtitle}>Selecciona una categoría</h3>
        <div className={styles.containerCategoryButtons}>
          <Link
            to="/"
            onClick={() => setActiveCategory("Todos")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "Todos" ? styles.active : ""
            }`}
          >
            Todos
          </Link>
          <Link
            to="/categoria/HTML"
            onClick={() => setActiveCategory("HTML")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "HTML" ? styles.active : ""
            }`}
          >
            HTML
          </Link>
          <Link
            to="/categoria/CSS"
            onClick={() => setActiveCategory("CSS")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "CSS" ? styles.active : ""
            }`}
          >
            CSS
          </Link>
          <Link
            to="/categoria/JavaScript"
            onClick={() => setActiveCategory("JavaScript")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "JavaScript" ? styles.active : ""
            }`}
          >
            JavaScript
          </Link>
          <Link
            to="/categoria/React"
            onClick={() => setActiveCategory("React")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "React" ? styles.active : ""
            }`}
          >
            React
          </Link>
          <Link
            to="/categoria/Svelte"
            onClick={() => setActiveCategory("Svelte")}
            className={`${styles.ButtonCategory} ${
              activeCategory === "Svelte" ? styles.active : ""
            }`}
          >
            Svelte
          </Link>
          <Link
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
          {products.map((product) => (
            <Link to={`/producto/${product.id}`} key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                width={640}
                height={900}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
