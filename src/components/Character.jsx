import styles from '../css/character.module.css'
import imgAstronauta1 from '../assets/astronauta1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Character() {
  AOS.init();
  return (
		<div
			className={styles.character}
			data-aos='flip-right'
			data-aos-easing='ease-out-cubic'
			data-aos-duration='1200'
		>
			<div className={styles.character__imgContainer}>
				<img
					src={imgAstronauta1}
					alt='Character 1'
					className={styles.character__image}
				/>
			</div>
			<div className={styles.character__textContainer}>
				<h4 className={styles.character__textTitle}>Astronauta</h4>
				<p className={styles.character__textDescription}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis
					modi, minus aliquid mollitia reiciendis accusantium? Autem deleniti
					aliquid pariatur?
				</p>
				<div className={styles.character__skillsContainer}>
					<span className={styles.character__skill}>Skill 1</span>
					<span className={styles.character__skill}>Skill 2</span>
					<span className={styles.character__skill}>Skill 3</span>
				</div>
				<button className={styles.character__button}>More Information</button>
			</div>
		</div>
	)
}

export default Character