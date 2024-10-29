import { AiOutlineCheckCircle } from "react-icons/ai";
import styles from "./SuccessModal.module.css";

export default function SuccessModal({
  heading,
  added,
  message,
  orderId,
  onConfirm,
}) {
  return (
    <>
      <div className={styles.modalBackdrop}>
        <div id="success-modal" className={styles.modalContent} tabIndex={-1}>
          <div className={styles.containerIcon}>
            <AiOutlineCheckCircle className={styles.icon} aria-hidden="true" />
          </div>
          <p className={styles.heading}>{heading}</p>
          <span className={styles.added}>{added}</span>
          <p className={styles.message}>
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
