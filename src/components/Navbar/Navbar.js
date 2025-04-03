import styles from './Navbar.module.css';
import backarrow from "../../assets/back_arrow.png"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
          <img src={backarrow} className={styles.backArrow}></img>
          <input type="text" className={styles.fileName}></input>
    </div>
  )
};

export default Navbar;