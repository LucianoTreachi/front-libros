import { useEffect } from "react";
import GoHomeButton from "../../common/goHomeButton/GoHomeButton";
import styles from "./Error404.module.css";

export default function Error404() {
  // Metadata title
  useEffect(() => {
    document.title = "Página no encontrada - FrontLibros";
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <GoHomeButton />
        <h2 className={styles.title}>
          Error, no hemos podido encontrar la página que buscas
        </h2>
        <img
          src="https://res.cloudinary.com/dwqk2mkgh/image/upload/v1688589199/ecommerce-libros/404_r5byf8.svg"
          alt="Imagen de error 404"
        />
      </div>
    </section>
  );
}
