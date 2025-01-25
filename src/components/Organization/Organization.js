import styles from './Organization.module.css';

const Organization = ({leftIconStyles, rightIconStyles}) => {
  return (
    <div className={styles.organization}>
      <div className={styles.container}>
        <div className={styles.part1}>
          <div className={styles.textContent}>
            <div className={leftIconStyles}></div>
            <div className={styles.text}>
              <p>University</p>
            </div>
            <div className={rightIconStyles}></div>
          </div>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer ml-1 mt-0.5 v-popper--has-tooltip"
          >
            <path
              d="M7.99992 1.33398C4.31992 1.33398 1.33325 4.32065 1.33325 8.00065C1.33325 11.6807 4.31992 14.6673 7.99992 14.6673C11.6799 14.6673 14.6666 11.6807 14.6666 8.00065C14.6666 4.32065 11.6799 1.33398 7.99992 1.33398ZM11.3333 8.66732H8.66659V11.334L7.33325 11.334V8.66732H4.66659V7.33398L7.33325 7.33398L7.33325 4.66732H8.66659V7.33398H11.3333L11.3333 8.66732Z"
              fill="#A1AEB7"
            ></path>
          </svg>
        </div>
        <div className={styles.part2}>
          <div className={leftIconStyles}></div>
          <div className={styles.cityState}>
            <p>City, State</p>
          </div>
          <div className={rightIconStyles}></div>
        </div>
      </div>
    </div>
  )
};

export default Organization;