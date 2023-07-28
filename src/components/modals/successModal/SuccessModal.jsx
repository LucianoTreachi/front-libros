import { AiOutlineCheckCircle } from "react-icons/ai";
import styles from "./SuccessModal.module.css";

export default function SuccessModal({ title, message, orderId, onConfirm }) {
  return (
    <>
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContent}>
          <div className={styles.containerIcon}>
            <AiOutlineCheckCircle className={styles.icon} />
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.paragraph}>
            {message} <br /> <b>{orderId}</b>
          </p>
          <div className={styles.containerButton}>
            <button onClick={onConfirm} className={styles.closeModalButton}>
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
