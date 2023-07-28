import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../common/logo/Logo";
import CartWidget from "../../common/cartWidget/CartWidget";
import styles from "./Navbar.module.css";

export default function Navbar({ isOpen, toggleMenu }) {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Logo />

        <ul className={`${styles.menu} ${isOpen && styles.open}`}>
          <li>
            <Link to="/" className={styles.link} onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/como-comprar"
              className={styles.link}
              onClick={toggleMenu}
            >
              Cómo comprar
            </Link>
          </li>
          <li>
            <Link to="/contacto" className={styles.link} onClick={toggleMenu}>
              Contacto
            </Link>
          </li>
        </ul>

        <CartWidget />

        {isOpen ? (
          <>
            <AiOutlineClose
              className={styles.closeMenuIcon}
              onClick={toggleMenu}
            />
            <AiOutlineMenu
              className={styles.openMenuicon}
              onClick={toggleMenu}
            />
          </>
        ) : (
          <AiOutlineMenu className={styles.openMenuicon} onClick={toggleMenu} />
        )}
      </nav>
    </header>
  );
}
