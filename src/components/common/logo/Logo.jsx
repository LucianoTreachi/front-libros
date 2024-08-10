import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label="Logo: Front Libros">
      <BsBook className={styles.icon} /> FrontLibros
    </Link>
  );
}
