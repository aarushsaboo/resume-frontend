import styles from "./Personal.module.css"

const Personal = () => {
  return (
    <div className={styles.personal}>
      <div className={styles.name}>
        <div className={styles.leftIcon}></div>
        <p>
          <strong>Aarush Saboo</strong>
        </p>

        <div className={styles.rightIcon}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.otherPersonalDetails}>
          <div className={styles.leftIcon}></div>
          <p>India | Phone # | aarush.saboo@gmail.com | LinkedIn Link</p>
          <div className={styles.rightIcon}></div>
        </div>
      </div>
    </div>
  )
}

export default Personal
