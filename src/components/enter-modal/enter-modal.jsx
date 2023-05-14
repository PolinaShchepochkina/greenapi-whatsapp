import styles from './enter-modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { createPortal } from 'react-dom';

function EnterModal() {
  return createPortal(
    <>
      <ModalOverlay />
      <form className={styles.form}>
        <h1 className={styles.title}>WhatsApp Web</h1>
        <p>Введите свои учетные данные, пожалуйста</p>
        <input
          type="text"
          className={styles.input}
          placeholder="idInstance"
          name={'idInstance'}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="apiTokenInstance"
          name={'apiTokenInstance'}
        />
        <button className={styles.button}>Войти</button>
      </form>
    </>,
    document.getElementById('modal')
  );
}

export default EnterModal;
