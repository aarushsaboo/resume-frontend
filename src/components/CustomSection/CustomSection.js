import styles from './CustomSection.module.css';
import Heading from '../Heading/Heading';

const CustomSection = ({leftIconStyles, rightIconStyles}) => {
  return (
    <div className={styles.customSection}>
      <Heading
        heading={"CUSTOM SECTION"}
        leftIconStyles={leftIconStyles}
        rightIconStyles={rightIconStyles}
      />
      <div className={styles.container2}>
        <div className={leftIconStyles}></div>
        <div className={styles.untitled1}>
          <p>Untitled</p>
          <div className={rightIconStyles}></div>
        </div>
        <div className={styles.colon}>:&nbsp;</div>
        <div className={styles.untitled2}>
          <p>Untitled</p>
        </div>
      </div>
    </div>
  )
};

export default CustomSection;