import { AiOutlineCheckCircle } from "react-icons/ai";
import styles from "./SuccessModal.module.css";

export default function SuccessModal({
  title,
  message,
  orderId,
  onConfirm,
  focusRef,
}) {
  return (
    <>
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContent} tabIndex={-1} ref={focusRef}>
          <div className={styles.containerIcon}>
            <AiOutlineCheckCircle className={styles.icon} aria-hidden="true" />
          </div>
          <p className={styles.title}>{title}</p>
          <p className={styles.paragraph}>
            {message} <br /> <b>{orderId}</b>
          </p>
          <div className={styles.containerButton}>
            <button onClick={onConfirm} className={styles.closeModalButton}>
              Salir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
