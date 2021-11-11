import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import Voting from './pages/Voting/index';

function App() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route path='/:id' element={<Voting />} />
			</Routes>
		</main>
	);
}

export default App;
