import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Navigate } from 'react-router-dom'; // Используем Navigate вместо useHistory
import styles from './enter-modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';

function EnterModal() {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false); // Состояние для перенаправления

  const handleLogin = event => {
    event.preventDefault();

    const url = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log(data);
        setIdInstance('');
        setApiTokenInstance('');
        setErrorMessage('');
        setShouldRedirect(true);
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Произошла ошибка. Попробуйте еще раз.');
      });
  };

  if (shouldRedirect) {
    return <Navigate to="/chat" replace />;
  }

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
          name="idInstance"
          value={idInstance}
          onChange={e => setIdInstance(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="apiTokenInstance"
          name="apiTokenInstance"
          value={apiTokenInstance}
          onChange={e => setApiTokenInstance(e.target.value)}
        />
        <button className={styles.button} onClick={handleLogin}>
          Войти
        </button>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
    </>,
    document.getElementById('modal')
  );
}

export default EnterModal;
