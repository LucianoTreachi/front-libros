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
        <div
          id="confirmation-modal"
          className={styles.modalContent}
          tabIndex={-1}
        >
          <p className={styles.title}>{title}</p>
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
