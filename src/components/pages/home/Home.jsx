import { useEffect } from "react";
import ProductListContainer from "../productList/ProductListContainer";
import styles from "./Home.module.css";

export default function Home() {
  // Metadata title
  useEffect(() => {
    document.title =
      "FrontLibros - Descubre los Mejores Libros de Desarrollo Frontend";
  }, []);

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>
              Descubre los Mejores Libros de Desarrollo Frontend
            </h1>
            <p className={styles.paragraph}>
              Encuentra los recursos esenciales que necesitas para convertirte
              en un experto del Desarrollo Frontend y crear sitios web
              impresionantes.
            </p>
          </div>
          <div>
            <picture>
              <source
                media="(max-width: 574px)"
                srcSet="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/w_500/v1687112700/ecommerce-libros/mockup-libros_ri6oof.jpg"
              />
              <img
                className={styles.image}
                src="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/v1687112700/ecommerce-libros/mockup-libros_ri6oof.jpg"
                alt=""
                width={1080}
                height={704}
              />
            </picture>
          </div>
        </div>
      </section>
      <ProductListContainer />
    </main>
  );
}
