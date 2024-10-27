import NavbarContainer from "./navbar/NavbarContainer";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

// Organizar la estructura general de la aplicación
function Layout() {
  return (
    <>
      <NavbarContainer />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
