import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import ProductDetail from "./ProductDetail";
import NavigateToTop from "../../../routes/NavigateToTop";
import SuccessModal from "../../modals/successModal/SuccessModal";

export default function ProductDetailContainer() {
  // Consumir funciones que vienen del contexto CartContext
  const { addToCart, getQuantityById } = useContext(CartContext);

  // Traer la propiedad id de cada producto mediante useParams
  const { id } = useParams();

  // En una variable guardar la función getQuantityById y le paso como parámetro el id
  const totalQuantity = getQuantityById(id);

  // Crear un estado para los productos seleccionados
  const [selectedProduct, setSelectedProduct] = useState([]);

  // Crear un estado para mostrar el modal success
  const [successModal, setSuccessModal] = useState(false);

  useEffect(() => {
    // Traer la colección "products" de Firestore
    let productsCollection = collection(db, "products");

    // Guardar el método doc para obtener un documento específico dentro de la colección "products"
    let selectedDoc = doc(productsCollection, id);

    // Obtener el documento
    getDoc(selectedDoc).then((response) => {
      setSelectedProduct({ ...response.data(), id: response.id });
    });
  }, [id]);

  // Metadata title
  useEffect(() => {
    if (selectedProduct.title) {
      document.title = `${selectedProduct.title} - FrontLibros`;
    }
  }, [selectedProduct]);

  // Crear una función para que la ejecute el botón "Agregar al carrito"
  const onAdd = (quantity) => {
    // ¿Qué hace esta función?
    // 1. Crea un nuevo objeto que es una copia del objeto productSelected, y agrega una propiedad adicional "quantity" que contiene la cantidad seleccionada en el contador.
    let productCart = { ...selectedProduct, quantity: quantity };

    // 2. Llama a la función addToCart, que es proporcionada por el contexto CartContext, para agregar el producto al carrito.
    addToCart(productCart);

    // 3. Muestra el modal success
    setSuccessModal(true);
  };

  return (
    <>
      <NavigateToTop />
      <ProductDetail
        selectedProduct={selectedProduct}
        stock={selectedProduct.stock}
        onAdd={onAdd}
        totalQuantity={totalQuantity}
      />
      {successModal && (
        <SuccessModal
          title="Producto Agregado"
          message="Revisa el carrito"
          onConfirm={() => setSuccessModal(false)}
        />
      )}
    </>
  );
}
