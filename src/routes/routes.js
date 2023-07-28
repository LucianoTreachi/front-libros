import Home from "../components/pages/home/Home";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import HowToBuy from "../components/pages/howToBuy/HowToBuy";
import ContactContainer from "../components/pages/contact/ContactContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import Credit from "../components/pages/checkout/Credit";
import Paypal from "../components/pages/checkout/Paypal";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home
  },
  {
    id: "categories",
    path: "/categoria/:categoryName",
    Element: Home
  },
  {
    id: "product",
    path: "/producto/:id",
    Element: ProductDetailContainer
  },
  {
    id: "buy",
    path: "/como-comprar",
    Element: HowToBuy
  },
  {
    id: "contact",
    path: "/contacto",
    Element: ContactContainer
  },
  {
    id: "cart",
    path: "/carrito",
    Element: CartContainer
  },
  {
    id: "credit",
    path: "/pagar-con-tarjeta",
    Element: Credit
  },
  {
    id: "credit",
    path: "/pagar-con-paypal",
    Element: Paypal
  },
]