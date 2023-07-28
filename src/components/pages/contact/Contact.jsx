import NavigateToTop from "../../../routes/NavigateToTop";
import GoHomeButton from "../../common/goHomeButton/GoHomeButton";
import LoaderModal from "../../modals/loaderModal/LoaderModal";
import SuccessModal from "../../modals/successModal/SuccessModal";
import styles from "./Contact.module.css";

export default function Contact({
  handleSubmit,
  handleChange,
  loaderModal,
  successModal,
  navigateToHome,
}) {
  return (
    <section className={styles.section}>
      <NavigateToTop />
      <div className={styles.container}>
        <GoHomeButton />
        <h2 className={styles.title}>Contacto</h2>
        <div className={styles.row}>
          <div className={styles.col1}>
            <p className={styles.paragraph}>
              Si tuviste algún problema con tu compra, puedes comunicarte con
              nosotros a través del siguiente formulario y te responderemos lo
              antes posible.
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
              alt="Imagen de la sección Contacto"
              className={styles.image}
            />
          </div>
        </div>

        {/* Si el estado loaderModal es true, mostrar el componente Loader  */}
        {loaderModal && <LoaderModal message="Enviando el mensaje" />}

        {/* Si el estado successModal es true, mostrar el componente successModal  */}
        {successModal && (
          <SuccessModal
            title="Mensaje enviado correctamente"
            message="Revisaremos los datos y te contactaremos lo antes posible"
            onConfirm={navigateToHome}
          />
        )}
      </div>
    </section>
  );
}
