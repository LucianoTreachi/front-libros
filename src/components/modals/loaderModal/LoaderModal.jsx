import styles from "./LoaderModal.module.css";

export default function LoaderModal({ message }) {
  return (
    <>
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContent}>
          <div className={styles.loader}>
            <div className={styles.spinner}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <h2>{message}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
