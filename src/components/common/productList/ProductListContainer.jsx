import { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import ProductList from "./ProductList";

export default function ProductListContainer() {
  // Crear un estado para mostrar los productos
  const [products, setProducts] = useState([]);

  // Crear un estado para mostrar un loading
  const [isLoading, setIsLoading] = useState(true);

  // Crear un estado para mostrar la categoría activa
  const [activeCategory, setActiveCategory] = useState("Todos");

  useEffect(() => {
    // Traer la colección "products" de Firestore
    const productsCollection = collection(db, "products");

    // Declarar una variable para la consulta
    let consultation;

    // Si activeCategory es "Todos", mostrar todos los productos
    if (activeCategory === "Todos") {
      consultation = productsCollection;
    } 
    // Si hay una categoría seleccionada, filtrar los productos por esa categoría
    else {
      consultation = query(
        productsCollection,
        where("category", "==", activeCategory)
      );
    }

    // Realizar la consulta a Firestore
    setIsLoading(true); // Activar loading antes de traer los datos
    getDocs(consultation)
      .then((response) => {
        const documents = response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProducts(documents);
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
