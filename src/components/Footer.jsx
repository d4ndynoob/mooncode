import styles from '../css/footer.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import imgAstronauta1 from '../assets/astronauta2.png'
import { Link } from 'react-router-dom'

// Iconos
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
	AOS.init();
  return (
		<footer className={styles.footer}>
			<div className={styles.footer__columna} data-aos="fade-right">
				<img
					src={imgAstronauta1}
					alt='Astronauta'
					className={styles.footer__imagenAstro}
				/>
			</div>
			<div className={styles.footer__columna} data-aos="fade-right">
				<div className={styles.footer__contenedorLogo}>
					<h3 className={styles.border}>MoonCode</h3>
					<h3 className={styles.wave}>MoonCode</h3>
				</div>
				<div className={styles.footer__contenedorRedesSociales}>
					<Link to='/'>
						<FaFacebook
							className={[
								styles.footer__icono,
								styles.footer__iconoFacebook,
							].join(' ')}
						/>
					</Link>
					<Link to='/'>
						<FaTwitter
							className={[
								styles.footer__icono,
								styles.footer__iconoTwitter,
							].join(' ')}
						/>
					</Link>
					<Link to='/'>
						<AiFillInstagram
							className={[
								styles.footer__icono,
								styles.footer__iconoInstagram,
							].join(' ')}
						/>
					</Link>
				</div>
			</div>
			<div className={styles.footer__columna} data-aos="fade-right">
				<div className={styles.footer__contenedorLinks}>
					<h3 className={styles.footer__titulo}>Do you need help?</h3>
					<Link className={styles.footer__link} to='/'>
						<p>Any Questions?</p>
					</Link>
					<Link className={styles.footer__link} to='/'>
						<p>I want to report something</p>
					</Link>
					<Link className={styles.footer__link} to='/'>
						<p>Lorem, ipsum dolor.</p>
					</Link>
					<Link className={styles.footer__link} to='/'>
						<p>Lorem, ipsum dolor.</p>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer