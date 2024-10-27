import { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import ProductList from "./ProductList";

export default function ProductListContainer() {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);

  // Estado para controlar el loading
  const [isLoading, setIsLoading] = useState(true);

  // Estado para la categoría activa
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Realizar la consulta a Firestore
  useEffect(() => {
    // Traer la colección "products" de Firestore
    const productsCollection = collection(db, "products");

    // Mostrar los productos según la categoría activa
    const consultation =
      activeCategory === "Todos"
        ? productsCollection
        : query(productsCollection, where("category", "==", activeCategory));

    // Activar loading antes de la consulta
    setIsLoading(true);

    getDocs(consultation)
      .then((response) => {
        const documents = response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProducts(documents);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setIsLoading(false); // Desactivar loading después de traer los datos
      });
  }, [activeCategory]); // El efecto se ejecuta cuando cambia la categoría activa

  return (
    <ProductList
      products={products}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      isLoading={isLoading}
    />
  );
}
