import styles from './BulletContainer.module.css';

const BulletContainer = () => {
  return (
    <div className={styles.bulletContainer}>
      <div className={styles.bullet}>
        <p contentEditable={true} className={styles["is-empty"]}></p>
      </div>
      <div className={styles.bullet}>
        <p contentEditable={true} className={styles["is-empty"]}></p>
      </div>
      <div className={styles.bullet}>
        <p contentEditable={true} className={styles["is-empty"]}></p>
      </div>
    </div>
  )
};

export default BulletContainer;