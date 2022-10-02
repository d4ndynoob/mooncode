import '../../index.css';
import styles from './home.module.css';
import imgAstronauta1 from '../../assets/astronauta1.png'
import imgGravedad from '../../assets/gravedad.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
// componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SlideUp from '../../components/SlideUp';
import Reto from '../../components/Reto';

function Home() {
	AOS.init();
  return (
		<>
			<Header />
			<div className='container'>
				<SlideUp />
				<div className={styles.home__container}>
					<div className={styles.home__banner}></div>
					<section className={styles.homeTextBanner}>
						<h1>Discovering Space</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
							facere saepe deleniti nostrum error aliquid provident a! Ipsum
							explicabo aliquam odit sequi libero obcaecati, beatae commodi
							blanditiis omnis eius ullam.
						</p>
						<a href='#gravitySection' className={styles.homeTextAncla}>
							Lear more
						</a>
					</section>
				</div>

				<div id='gravitySection' className={styles.home__container}>
					<div className={styles.home__imgContainer} data-aos='zoom-out-right'>
						<img src={imgGravedad} alt='Imagen de astronauta' />
					</div>
					<section className={styles.homeText}>
						<h2>Gravity in space?</h2>
						<p>
							Spending time outside of Earth's gravity can atrophy our muscles
							and cause genetic modifications, among other changes.
							<br />
							The absence of gravity means that in space it is really difficult
							to exercise your muscles, so you lose muscle mass and function.
							The astronauts try to compensate for this situation by exercising
							with special clothing, but their muscles still suffer. For the
							same reason, in addition to the lack of solar radiation, the human
							body loses calcium in space. As a consequence, a loss of 1% of
							bone mass can be registered each month that we spend in space.
						</p>
					</section>
				</div>

				<div className={styles.home__containerColumn}>
					<section className={styles.home__textColumn}>
						<h2>Food in Space</h2>
						<p>
							Food in space requires special preparation and storage. The
							preparation of each of the foods depends on the type of product.
							Regarding preservation, some can be eaten in their natural form,
							such as nuts and dehydrated fruits, and others require specific
							treatments to store them, such as water extraction (inactivation
							of microorganisms during processing, which allows greater
							stability and food safer.
						</p>
					</section>
					<div className={styles.home__retos}>
						<h2>The challenges are important, but not insurmountable. The main ones are:</h2>
						<div className={styles.home__contenedorRetos}>
							<Reto texto='Food must be rich in nutrients and meet certain sensory indicators.'/>
							<Reto texto='Have a useful life of five years.'/>
							<Reto texto='Have gravity cooking processes that reduce microbial risk.'/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Home