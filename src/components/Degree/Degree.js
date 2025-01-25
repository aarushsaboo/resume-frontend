import styles from './Degree.module.css';

const Degree = ({leftIconStyles, rightIconStyles}) => {
  return (
    <div className={styles.degree}>
      <div className={styles.part1}>
        <div className={leftIconStyles}></div>
        <div className={styles.text}>
          <p>Degree</p>
        </div>
        <div className={rightIconStyles}></div>
      </div>
      <div className={styles.part2}>
        <div className={styles.graduationDate}>Graduation Date: Date</div>
      </div>
    </div>
  )
};

export default Degree;