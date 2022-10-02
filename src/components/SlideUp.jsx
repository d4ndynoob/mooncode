import styles from '../css/slideUp.module.css';
import { HiChevronUp } from "react-icons/hi";

function SlideUp() {
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <button className={styles.slideUp} onClick={scrollTop}>
      <HiChevronUp className={styles.icono}/>
    </button>
  )
}

export default SlideUp