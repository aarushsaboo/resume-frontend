import styles from './Degree.module.css';

const Degree = ({degree, leftIconStyles, rightIconStyles}) => {
  return (
    <div className={styles.degree}>
      <div className={styles.part1}>
        <div className={leftIconStyles}></div>
        <div className={styles.text}>
          <p>{degree}</p>
        </div>
        <div className={rightIconStyles}></div>
      </div>
      <div className={styles.part2}>
        <div className={styles.graduationDate}>Start Date: Finish Date</div>
      </div>
    </div>
  )
};

export default Degree;