import NavbarContainer from "./navbar/NavbarContainer";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

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
