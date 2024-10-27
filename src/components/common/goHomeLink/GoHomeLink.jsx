import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./GoHomeLink.module.css";

export default function GoHomeLink() {
  return (
    <Link
      to="/"
      className={styles.link}
      aria-label="Volver a la página de inicio"
    >
      <BsArrowLeft className={styles.icon} aria-hidden="true" /> Volver a inicio
    </Link>
  );
}
