import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// componentes
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Game from './pages/Game/Game';


function App() {
  return (
		<Router>
			<Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='characters' element={<Characters />}></Route>
        <Route exact path='game' element={<Game />}></Route>
			</Routes>
		</Router>
	)
}


export default App
