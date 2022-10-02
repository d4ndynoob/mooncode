import styles from '../css/reto.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Reto({texto}) {
  AOS.init()
  return (
    <div className={styles.reto} data-aos="flip-down">
      <p>{texto}</p>
    </div>
  )
}

export default Reto