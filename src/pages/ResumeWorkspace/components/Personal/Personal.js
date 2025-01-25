import styles from "./Personal.module.css"

const Personal = ({leftIconStyles, rightIconStyles}) => {
  return (
    <div className={styles.personal}>
      <div className={styles.name}>
        <div className={leftIconStyles}></div>
        <p>
          <strong>Aarush Saboo</strong>
        </p>

        <div className={rightIconStyles}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.otherPersonalDetails}>
          <div className={leftIconStyles}></div>
          <p>India | Phone # | aarush.saboo@gmail.com | LinkedIn Link</p>
          <div className={rightIconStyles}></div>
        </div>
      </div>
    </div>
  )
}

export default Personal
