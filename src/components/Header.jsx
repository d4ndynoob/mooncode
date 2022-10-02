import styles from '../css/header.module.css'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  AOS.init();
	const [y, setY] = useState(0)
	const [headerVisible, setHeaderVisible] = useState(true)
	const [sobra, setSobra] = useState(false)

	const handleNavigation = e => {
		const window = e.currentTarget
		if (y > window.scrollY) {
			setHeaderVisible(true)
			// scroll arriba
		} else if (y < window.scrollY) {
			setHeaderVisible(false)
			// scroll abajo
		}
		setY(window.scrollY)
		if(window.scrollY == 0) {
			setSobra(false)
		} else {
			setSobra(true)
		}
	}

	useEffect(() => {
		setY(window.scrollY)
		window.addEventListener('scroll', e => handleNavigation(e))
	}, [y])

	return (
		<header
			className={
				headerVisible
					? [styles.header, sobra ? styles.headerSobra: ''].join(' ').trim()
					: [styles.header, styles.header__noVisible].join(' ')
			}
		>
			<Link className={styles.header__contenedorLogo} data-aos="fade-down" to='/'>
				<h2 className={styles.border}>MoonCode</h2>
				<h2 className={styles.wave}>MoonCode</h2>
			</Link>
			<nav className={styles.header__nav} data-aos="fade-down">
				<ul>
					<li>
						<NavLink
							to='/'
							className={styles.link}
						>
							<span>Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/characters'
              className={styles.link}
						>
							<span>Characters</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/game'
							className={styles.link}
						>
							<span>Game</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
