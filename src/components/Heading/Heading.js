import styles from './Heading.module.css';

const Heading = () => {
  return (
    <div className={styles.heading}>
      <div className={styles.leftIcon}></div>
      <p>
        <strong>EDUCATION</strong>
      </p>
      <div className={styles.rightIcon}></div>
    </div>
  )
};

export default Heading;