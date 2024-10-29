import styles from "./LoaderModal.module.css";

export default function LoaderModal({ message }) {
  return (
    <>
      <div className={styles.modalBackdrop}>
        <div id="loader-modal" className={styles.modalContent} tabIndex={-1}>
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
            <h2 className={styles.message}>{message}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
