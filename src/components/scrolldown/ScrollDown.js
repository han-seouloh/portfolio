import { HiOutlineChevronDown } from "react-icons/hi";
import { useSelector } from "react-redux";
import { selectScroll } from "../../store/scrollSlice";
import styles from './ScrollDown.module.css';

export const ScrollDown = ( props ) => {
  const { scroll } = useSelector(selectScroll);

  return (
    <div
      className={`
        ${styles.scrolldown}
        ${scroll ? styles['scrolldown-hide'] : null}  
      `}
    >
      <p>Scroll Down</p>
      <div className={styles.arrows}>
        <div className={styles.arrow1}>
          <HiOutlineChevronDown />
        </div>
        <div className={styles.arrow2}>
          <HiOutlineChevronDown />
        </div>
        <div className={styles.arrow3}>
          <HiOutlineChevronDown />
        </div>
      </div>
    </div>
  )
}