import styles from './ResumeWorkspace.module.css';
import Personal from './components/Personal/Personal';
import Heading from '../../components/Heading/Heading';

const ResumeWorkspace = () => {
  return (
    <div className={styles.resumeWorkspace}>
      {/* before element.. new page provisions? */}
          <div className={styles.resumeContent}>
              <Personal />
            <Heading />
      </div>
    </div>
  )
};

export default ResumeWorkspace;