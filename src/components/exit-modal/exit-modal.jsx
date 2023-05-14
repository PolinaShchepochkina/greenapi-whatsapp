import { createPortal } from "react-dom";
import styles from './exit-modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay'

function ExitModal() {
  return createPortal(
    <>
      <ModalOverlay />
      <form className={styles.form}>
        <h1 className={styles.title}>Выйти?</h1>
        <p>Вы действительно хотите выйти?</p>
        <div className={styles.buttons}>
          <button className={styles.cancel}>Отмена</button>
          <button>Выйти</button>
        </div>
      </form>
    </>,
    document.getElementById('modal')
  );
}

export default ExitModal;
