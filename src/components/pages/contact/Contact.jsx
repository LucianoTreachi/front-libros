import { Helmet } from "react-helmet";
import { useEffect } from "react";
import NavigateToTop from "@routes/NavigateToTop";
import GoHomeLink from "@components/common/goHomeLink/GoHomeLink";
import LoaderModal from "@components/common/modals/loaderModal/LoaderModal";
import SuccessModal from "@components/common/modals/successModal/SuccessModal";
import styles from "./Contact.module.css";

export default function Contact({
  handleSubmit,
  handleChange,
  isLoaderModal,
  isSuccessModal,
  navigateToHome,
}) {
  // Enfocar el modal de carga cuando esté visible
  useEffect(() => {
    const loaderModalID = document.getElementById("loader-modal");
    if (isLoaderModal && loaderModalID) {
      loaderModalID.focus();
    }
  }, [isLoaderModal]);

  return (
    <>
      {/* Metadatos */}
      <Helmet>
        <title>Contacto - FrontLibros</title>
      </Helmet>

      <NavigateToTop />

      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <GoHomeLink />
            <h1 className={styles.title}>Contacto</h1>
            <div className={styles.row}>
              <div className={styles.col1}>
                <p className={styles.paragraph}>
                  Si tuviste algún problema con tu compra, puedes comunicarte
                  con nosotros a través del siguiente formulario y te
                  responderemos lo antes posible.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.containerInput}>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.containerInput}>
                    <label htmlFor="apellido">Apellido</label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.containerInput}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className={styles.contactButton}>
                    Enviar
                  </button>
                </form>
              </div>
              <div className={styles.col2}>
                <img
                  src="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/v1689871850/ecommerce-libros/contact_peuoos.jpg"
                  alt=""
                  className={styles.image}
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Si el estado isLoaderModal es true, mostrar el componente LoaderModal */}
            {isLoaderModal && <LoaderModal message="Enviando el mensaje" />}

            {/* Si el estado isSuccessModal es true, mostrar el componente SuccessModal */}
            {isSuccessModal && (
              <SuccessModal
                heading="Mensaje enviado correctamente"
                message="Revisaremos los datos y te contactaremos lo antes posible"
                onConfirm={navigateToHome}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
}
