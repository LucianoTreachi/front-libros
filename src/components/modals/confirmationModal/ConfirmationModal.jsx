import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal({
  title,
  paragraph,
  onCancel,
  onConfirm,
}) {
  return (
    <>
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContent}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.paragraph}>{paragraph}</p>
          <div className={styles.containerButtons}>
            <button onClick={onCancel} className={styles.cancelButton}>
              No, Cancelar
            </button>
            <button onClick={onConfirm} className={styles.confirmButton}>
              Sí, Aceptar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
