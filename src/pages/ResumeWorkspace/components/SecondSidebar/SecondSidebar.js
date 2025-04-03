import React, { useState } from 'react';
import styles from './SecondSidebar.module.css';

const SecondSidebar = () => {
  const [role, setRole] = useState("Project Manager");
  const [experience, setExperience] = useState("");
  
  return (
    <div className={styles.secondSidebar}>
      <div className={styles.inputSection}>
        <h2 className={styles.sectionTitle}>Create Bullet Points</h2>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>What was your role?</label>
          <input 
            className={styles.input}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Your work experience in one sentence.</label>
          <textarea 
            className={styles.textarea}
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        
        <button className={styles.generateButton}>Generate</button>
      </div>
      
      <div className={styles.resultsSection}>
        <h2 className={styles.sectionTitle}>Generated Bullet Points</h2>
        
        <div className={styles.bulletPointContainer}>
          {[1, 2, 3].map((item, index) => (
            <div className={styles.bulletPoint} key={index}>
              <div className={styles.bulletMarker}>+</div>
              <p className={styles.bulletText}>
                Spearheaded the execution of a comprehensive project plan for a $10M
                infrastructure initiative leading to the successful completion of 95%
                of deliverables ahead of schedule and reducing overall project costs
                by 15%.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSidebar;