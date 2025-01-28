import { useState } from "react"
import styles from "./BulletContainer.module.css"

const BulletContainer = () => {
  const [values, setValues] = useState(["", "", ""])

  const handleInputChange = (index, value) => {
    const newValues = [...values]
    newValues[index] = value
    setValues(newValues)
  }

  return (
    <div className={styles.bulletContainer}>
      {[0, 1, 2].map((index) => (
        <div key={index} className={styles.bullet}>
          <div
            className={`${styles.bulletWrapper} ${
              values[index] ? styles.hasContent : ""
            }`}
          >
            <input
              type="text"
              className={styles.bulletInput}
              placeholder={`Experience ${index + 1}`}
              value={values[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default BulletContainer
