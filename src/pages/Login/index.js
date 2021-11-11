import { Link } from 'react-router-dom';
import './style.css';
const Login = () => {
	return (
		<div className='login-container'>
			<h1 className='app-name'>Votting App</h1>
			<input type='text' placeholder="What's your name?" className='name-box' />
			<Link className='enter-btn' to='/home'>
				Enter
			</Link>
		</div>
	);
};

export default Login;
