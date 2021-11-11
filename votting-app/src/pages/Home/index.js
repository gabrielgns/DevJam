import React from 'react';
import Poll from '../../components/Poll/index';

const Home = () => {
	return (
		<>
			<Poll
				title='Best Movie'
				a='Lord of the Rings'
				b='Harry Potter'
				c='2001 - A space odyssey'
				d='Interstellar'
				e='Ben-Hur'
			/>
		</>
	);
};

export default Home;
