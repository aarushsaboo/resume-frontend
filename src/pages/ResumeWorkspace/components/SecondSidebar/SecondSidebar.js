import styles from './SecondSidebar.module.css';

const SecondSidebar = () => {
  return (
    <div className={styles.secondSidebar}>
      <div className={styles.part1}>
        <h2>Create Bullet Points</h2>
        <h2>What was your role?</h2>
        <input value="Project Manager"></input>
        <h2>Your work experience in one sentence.</h2>
        <textarea></textarea>
        <button>Generate</button>
      </div>
      <div className={styles.part2}>
        <h2>Generated Bullet Points</h2>
        <h2>+</h2>
        <h2>
          Spearheaded the execution of a comprehensive project plan for a $10M
          infrastructureinitiative leading to the successful completion of 95%
          of deliverables ahead of schedule and reducing overall project costs
          by 15%.
        </h2>

        <h2>+</h2>
        <h2>
          Spearheaded the execution of a comprehensive project plan for a $10M
          infrastructureinitiative leading to the successful completion of 95%
          of deliverables ahead of schedule and reducing overall project costs
          by 15%.
        </h2>

        <h2>+</h2>
        <h2>
          Spearheaded the execution of a comprehensive project plan for a $10M
          infrastructureinitiative leading to the successful completion of 95%
          of deliverables ahead of schedule and reducing overall project costs
          by 15%.
        </h2>
      </div>
    </div>
  )
};

export default SecondSidebar;