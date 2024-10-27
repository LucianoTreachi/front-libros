import { Helmet } from "react-helmet";
import Hero from "../../common/hero/Hero";
import ProductListContainer from "../../common/productList/ProductListContainer";

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
