import { useState } from "react";
import Navbar from "./Navbar";

export default function NavbarContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />;
}
