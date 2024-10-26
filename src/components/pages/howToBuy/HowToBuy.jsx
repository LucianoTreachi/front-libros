import { Helmet } from "react-helmet";
import NavigateToTop from "../../../routes/NavigateToTop";
import GoHomeButton from "../../common/goHomeButton/GoHomeButton";
import styles from "./HowToBuy.module.css";

export default function HowToBuy() {
  return (
    <>
      {/* Metadata title */}
      <Helmet>
        <title>Cómo comprar - FrontLibros</title>
      </Helmet>

      <NavigateToTop />

      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <GoHomeButton />
            <h1 className={styles.title}>Cómo Comprar</h1>
            <div className={styles.row}>
              <div className={styles.col1}>
                <p>
                  <b>Para realizar una compra exitosa sigue estos pasos:</b>
                </p>
                <br />
                <br />
                <p>
                  <b>1.</b> Dirígete a la sección de la tienda donde se
                  encuentran todos los libros.
                </p>
                <br />
                <br />
                <p>
                  <b>2.</b> Puedes ordenar los libros según su categoría.
                </p>
                <br />
                <br />
                <p>
                  <b>3.</b> Explora los libros disponibles y haz clic sobre el
                  que deseas comprar.
                </p>
                <br />
                <br />
                <p>
                  <b>4.</b> Una vez que te encuentres en la página del producto,
                  encontrarás más información: título, autor, precio, unidades
                  disponibles y un botón &quot;Agregar al carrito&quot;.
                </p>
                <br />
                <br />
                <p>
                  <b>5.</b> Si deseas agregar más de un libro, incrementa la
                  cantidad.
                </p>
                <br />
                <br />
                <p>
                  <b>6.</b> Utiliza el botón &quot;Agregar al carrito&quot; para
                  añadir el libro a tu carrito de compras.
                </p>
                <br />
                <br />
                <p>
                  <b>7.</b> Una vez que lo hayas agregado, revisa el carrito y
                  corrobora que todo esté bien.
                </p>
                <br />
                <br />
                <p>
                  <b>8.</b> Si todo está correcto, selecciona el método de pago
                  y procede a finalizar la compra.
                </p>
                <br />
                <br />
                <p className={styles.helpParagraph}>
                  * Si tienes algún problema con tu compra, visita la sección
                  Contacto, llena y envía el formulario, y te ayudaremos.
                </p>
              </div>
              <div className={styles.col2}>
                <img
                  src="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/v1689871850/ecommerce-libros/howToBuy_ap00qx.jpg"
                  alt=""
                  className={styles.image}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
