import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  // Estado para manejar el carrito
  const [cartProducts, setCartProducts] = useState([]);

  // Agregar un nuevo producto al carrito
  const addToCart = (newProduct) => {
    const productExists = cartProducts.some(
      (product) => product.id === newProduct.id
    );

    // Verificar si el producto ya existe en el carrito
    if (productExists) {
      let updateCart = cartProducts.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: newProduct.quantity };
        } else {
          return product;
        }
      });
      setCartProducts(updateCart);
    } else {
      setCartProducts([...cartProducts, newProduct]);
    }
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCartProducts([]);
  };

  // Eliminar un producto del carrito
  const deleteProduct = (itemId) => {
    const updatedCart = cartProducts.filter((product) => product.id !== itemId);
    setCartProducts(updatedCart);
  };

  // Calcular el precio total del carrito
  const getTotalPrice = () => {
    let totalPrice = cartProducts.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return totalPrice;
  };

  // Saber la cantidad de productos que se agregan al carrito
  const getTotalCartWidgetNumber = () => {
    let totalCartWidgetNumber = cartProducts.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return totalCartWidgetNumber;
  };

  // Chequear el carrito y buscar un producto por id para saber cuántas unidades hay agregadas
  const getQuantityById = (id) => {
    const productById = cartProducts.find((product) => product.id === id);
    return productById?.quantity;
  };

  // Enviar todas las variables y funciones en un objeto para que puedan ser consumidas por otros componentes
  const dataContext = {
    cartProducts,
    addToCart,
    clearCart,
    deleteProduct,
    getTotalPrice,
    getTotalCartWidgetNumber,
    getQuantityById,
  };

  return (
    <CartContext.Provider value={dataContext}>{children}</CartContext.Provider>
  );
}
