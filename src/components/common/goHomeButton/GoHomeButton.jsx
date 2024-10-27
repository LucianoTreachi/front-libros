import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./GoHomeButton.module.css";

export default function GoHomeButton() {
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
