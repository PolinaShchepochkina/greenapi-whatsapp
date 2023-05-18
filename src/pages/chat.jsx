import React from 'react';
import styles from './chat.module.css';
import Avatar from '../images/avatar.jpeg';

function ChatPage() {
  return (
    <div className={styles.chatPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>WhatsApp Web</h1>
        <button className={styles.logoutButton}>Выйти</button>
      </header>
      <div className={styles.chatContainer}>
        <div className={styles.chatSidebar}>
          <div className={styles.sidebarHeader}>
            <img src={Avatar} alt="Аватар" className={styles.avatar} />
          </div>
          <input type="text" className={styles.searchInput} placeholder="Поиск чата"></input>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>Контакт 1</li>
            <li className={styles.contactItem}>Контакт 2</li>
            <li className={styles.contactItem}>Контакт 3</li>
            <li className={styles.contactItem}>Контакт 1</li>
            <li className={styles.contactItem}>Контакт 2</li>
            <li className={styles.contactItem}>Контакт 3</li>
            <li className={styles.contactItem}>Контакт 1</li>
            <li className={styles.contactItem}>Контакт 2</li>
            <li className={styles.contactItem}>Контакт 3</li>
            <li className={styles.contactItem}>Контакт 1</li>
            <li className={styles.contactItem}>Контакт 2</li>
            <li className={styles.contactItem}>Контакт 3</li>
            <li className={styles.contactItem}>Контакт 1</li>
            <li className={styles.contactItem}>Контакт 2</li>
            <li className={styles.contactItem}>Контакт 3</li>
          </ul>
        </div>
        <div className={styles.chatContent}>
          <div className={styles.sidebarHeader}></div>
          <div className={styles.messageList}>
            <div className={styles.message}>Сообщение 1</div>
            <div className={styles.message}>Сообщение 2 <br /> Сообщение подлиннее</div>
            <div className={styles.message}>Сообщение 3<br /> Сообщение подлиннее, сообщение подлиннее<br /> Сообщение подлиннее</div>
            <div className={styles.message}>Сообщение 1</div>
            <div className={styles.message}>Сообщение 2 <br /> Сообщение подлиннее</div>
            <div className={styles.message}>Сообщение 3<br /> Сообщение подлиннее, сообщение подлиннее<br /> Сообщение подлиннее</div>
            <div className={styles.message}>Сообщение 1</div>
            <div className={styles.message}>Сообщение 2 <br /> Сообщение подлиннее</div>
            <div className={styles.message}>Сообщение 3<br /> Сообщение подлиннее, сообщение подлиннее<br /> Сообщение подлиннее</div>
            <div className={styles.message}>Сообщение 1</div>
            <div className={styles.message}>Сообщение 2 <br /> Сообщение подлиннее</div>
            <div className={styles.message}>Сообщение 3<br /> Сообщение подлиннее, сообщение подлиннее<br /> Сообщение подлиннее</div>
          </div>
          <form className={styles.messageForm}>
            <input type="text" className={styles.messageInput} placeholder="Введите сообщение" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
