import styles from './Personal.module.css';

const Personal = () => {
    return (
      <div className={styles.personal}>
        <div className={styles.name}>
          <p>
            <strong>Aarush Saboo</strong>
          </p>
        </div>
        <div className={styles.otherPersonalDetails}>
          <p>India | Phone # | aarush.saboo@gmail.com | LinkedIn Link</p>
        </div>
      </div>
    )
};

export default Personal;