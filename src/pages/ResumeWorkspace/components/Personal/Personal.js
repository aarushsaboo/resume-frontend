import styles from "./Personal.module.css"

const Personal = ({leftIconStyles, rightIconStyles}) => {
  return (
    <div className={styles.personal}>
      <div className={styles.name}>
        <div className={leftIconStyles}></div>
        <p>
          <strong>Heramb pp</strong>
        </p>

        <div className={rightIconStyles}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.otherPersonalDetails}>
          <div className={leftIconStyles}></div>
          <p>India | Phone # | heramb.ap@somaiya.edu | LinkedIn Link</p>
          <div className={rightIconStyles}></div>
        </div>
      </div>
    </div>
  )
}

export default Personal
