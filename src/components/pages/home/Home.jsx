import { Helmet } from "react-helmet";
import Hero from "@components/common/hero/Hero";
import ProductListContainer from "@components/common/productList/ProductListContainer";

export default function Home() {
  return (
    <>
      {/* Metadatos */}
      <Helmet>
        <title>
          FrontLibros - Descubre los Mejores Libros de Desarrollo Frontend
        </title>
      </Helmet>

      <main>
        <Hero />
        <ProductListContainer />
      </main>
    </>
  );
}
