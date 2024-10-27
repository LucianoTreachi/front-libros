import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.paragraph}>© FrontLibros</p>
        <br />
        <p className={styles.paragraph}>
          Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/luciano-treachi/"
            className={styles.link}
            aria-label="Visitar LinkedIn de Luciano Treachi, desarrollador del sitio web."
            target="_blank"
            rel="noreferrer"
          >
            Luciano Treachi
          </a>
        </p>
      </div>
    </footer>
  );
}
