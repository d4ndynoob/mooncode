import '../../index.css';
import styles from './characters.module.css';

// componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SlideUp from '../../components/SlideUp';
import Character from '../../components/Character';

function Characters() {
  return (
		<>
			<Header />
			<div className='container'>
				<SlideUp />
        <div className={styles.characters__container}>
          <Character />
          <Character />
          <Character />
        </div>
			</div>
			<Footer />
		</>
	)
}

export default Characters