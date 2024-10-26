import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";
import ConfirmationModal from "../../modals/confirmationModal/ConfirmationModal";

export default function CartContainer() {
  // Consumir variables y funciones que vienen del contexto CartContext
  const { cartProducts, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);

  // Estados
  const [isConfirmationModal, setIsConfirmationModal] = useState(false);
  const [confirmationTitle, setConfirmationTitle] = useState("");
  const [confirmationParagraph, setConfirmationParagraph] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Manejar la acción de vaciar el carrito
  const handleClearCart = () => {
    setConfirmationTitle("Vaciar Carrito");
    setConfirmationParagraph(
      "¿Quieres eliminar todos tus productos agregados?"
    );
    setIsConfirmationModal(true);
  };

  // Confirmar vaciar el carrito
  const confirmClearCart = () => {
    clearCart();
    setIsConfirmationModal(false);
  };

  // Manejar la acción de borrar un producto
  const handleDeleteProduct = (productId) => {
    setConfirmationTitle("Eliminar Producto");
    setConfirmationParagraph("¿Quieres eliminar este producto?");
    setSelectedProduct(productId);
    setIsConfirmationModal(true);
  };

  // Confirmar eliminar un producto
  const confirmDeleteProduct = () => {
    if (selectedProduct) {
      deleteProduct(selectedProduct);
      setIsConfirmationModal(false);
    }
  };

  useEffect(() => {
    // Enfocar el modal de confirmación cuando esté visible
    const confirmationModalID = document.getElementById("confirmation-modal");
    if (isConfirmationModal && confirmationModalID) {
      confirmationModalID.focus();
    }
  }, [isConfirmationModal]);

  // Guardar en una variable la función getTotalPrice que viene de cartContext
  let totalPrice = getTotalPrice();

  return (
    <>
      <Cart
        cartProducts={cartProducts}
        handleClearCart={handleClearCart}
        handleDeleteProduct={handleDeleteProduct}
        totalPrice={totalPrice}
      />
      {/* Si el estado isConfirmationModal es true, mostrar el componente ConfirmationModal */}
      {isConfirmationModal && (
        <ConfirmationModal
          onCancel={() => setIsConfirmationModal(false)}
          onConfirm={
            confirmationTitle === "Vaciar Carrito"
              ? confirmClearCart
              : confirmDeleteProduct
          }
          title={confirmationTitle}
          paragraph={confirmationParagraph}
        />
      )}
    </>
  );
}
