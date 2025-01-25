import styles from './Heading.module.css';

const Heading = ({leftIconStyles, rightIconStyles}) => {
  return (
    <div className={styles.heading}>
      <div className={leftIconStyles}></div>
      <p>
        <strong>EDUCATION</strong>
      </p>
      <div className={rightIconStyles}></div>
    </div>
  )
};

export default Heading;