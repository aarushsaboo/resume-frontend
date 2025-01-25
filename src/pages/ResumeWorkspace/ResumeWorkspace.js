import styles from './ResumeWorkspace.module.css';
import Personal from './components/Personal/Personal';
import Heading from '../../components/Heading/Heading';

const ResumeWorkspace = () => {
  return (
    <div className={styles.resumeWorkspace}>
      {/* before element.. new page provisions? */}
      <div className={styles.resumeContent}>
        <Personal />
        <div className={styles.education}>
          <Heading />
        </div>
      </div>
    </div>
  )
};

export default ResumeWorkspace;