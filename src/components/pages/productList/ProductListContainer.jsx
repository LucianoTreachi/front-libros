import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import ProductList from "./ProductList";

export default function ProductListContainer() {
  // Obtener la ruta dinámica categoryName
  const { categoryName } = useParams();

  // Crear un estado para mostrar los productos
  const [products, setProducts] = useState([]);

  // Crear un estado para mostrar un loading
  const [isLoading, setIsLoading] = useState(true);

  // Crear un estado para mostrar la categoría activa
  const [activeCategory, setActiveCategory] = useState("Todos");

  useEffect(() => {
    // Traer la colección "products" de Firestore
    let productsCollection = collection(db, "products");

    // Declarar una variable sin valor para luego utilizarla en la consulta a la base de datos
    let consultation;

    // Si categoryName es false mostrar todos los productos
    if (!categoryName) {
      consultation = productsCollection;
    }
    // Si categoryName es true, realizar una consulta a la base de datos y filtrar por la categoría del producto
    else {
      consultation = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    // Traer toda la información de los documentos de la base de datos
    getDocs(consultation)
      .then((response) => {
        let documents = response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProducts(documents);
      })
      .finally(() => {
        // Después de que se hayan cargado los productos, establecer isLoading en false
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <ProductList
      products={products}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      isLoading={isLoading}
    />
  );
}
