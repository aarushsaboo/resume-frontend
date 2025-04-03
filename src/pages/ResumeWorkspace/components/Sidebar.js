import React from 'react';
import styles from '../ResumeWorkspace.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.sidebarButton}>+</button>
      <button className={styles.sidebarButton}>📄</button>
      <button className={styles.sidebarButton}>🏠</button>
      <button className={styles.sidebarButton}>👤</button>
      <button className={styles.sidebarButton}>🔨</button>
      <button className={styles.sidebarButton}>☰</button>
      <button className={styles.sidebarButton}>👥</button>
      <button className={styles.sidebarButton}>🗑️</button>
      <button className={styles.sidebarButton}>📈</button>
      <button className={styles.sidebarButton}>💼</button>
      <button className={styles.sidebarButton}>💡</button>
      <button className={styles.sidebarButton}>❓</button>
      <button className={styles.sidebarButton}>⚙️</button>
      <button className={styles.sidebarButton}>💬</button>
      <button className={styles.sidebarButton}>📋</button>
    </div>
  );
};

export default Sidebar;