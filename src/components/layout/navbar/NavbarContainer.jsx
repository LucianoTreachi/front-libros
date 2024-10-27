import { useCallback, useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function NavbarContainer() {
  // Estado para controlar el menú de navegación
  const [isOpen, setIsOpen] = useState(false);

  // Alternar el estado de visibilidad del menú de navegación
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Función para cerrar el menú de navegación cuando se hace scroll
  const handleScroll = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  // Cerrar el menú de navegación al hacer scroll en la página
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Renderizar el componente Navbar
  return <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />;
}
