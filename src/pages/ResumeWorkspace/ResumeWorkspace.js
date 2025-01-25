import styles from './ResumeWorkspace.module.css';
import Personal from './components/Personal/Personal';
import Heading from '../../components/Heading/Heading';
import Organization from '../../components/Organization/Organization';
import Degree from '../../components/Degree/Degree';
import BulletContainer from '../../components/BulletContainer/BulletContainer';

const ResumeWorkspace = () => {
  return (
    <div className={styles.resumeWorkspace}>
      {/* before element.. new page provisions? */}
      <div className={styles.resumeContent}>
        <Personal
          leftIconStyles={styles.leftIcon}
          rightIconStyles={styles.rightIcon}
        />
        <div className={styles.education}>
          <Heading
            leftIconStyles={styles.leftIcon}
            rightIconStyles={styles.rightIcon}
          />
          <div className={styles.container}>
            <Organization
              leftIconStyles={styles.leftIcon}
              rightIconStyles={styles.rightIcon}
            />
            <Degree
              leftIconStyles={styles.leftIcon}
              rightIconStyles={styles.rightIcon}
            />
          </div>
        </div>
        <div className={styles.projectExperience}>
          <Heading
            leftIconStyles={styles.leftIcon}
            rightIconStyles={styles.rightIcon}
          />
          <div className={styles.container}>
            <Organization
              leftIconStyles={styles.leftIcon}
              rightIconStyles={styles.rightIcon}
            />
            <Degree
              leftIconStyles={styles.leftIcon}
              rightIconStyles={styles.rightIcon}
            />
            <BulletContainer />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ResumeWorkspace;