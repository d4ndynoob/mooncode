// Styles
import '../../index.css';
import styles from './game.module.css'

import Header from '../../components/Header'

function Game() {
  return (
		<>
			<Header />
			<div className='container'>
				<div className={styles.game__contenedorPrueba}>
					<h1 className={styles.titulo}>Developing...</h1>
				</div>
			</div>
		</>
	)
}

export default Game