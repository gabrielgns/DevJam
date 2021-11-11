import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Poll = (props) => {
	return (
		<div className='poll-container'>
			<h1 className='title'>{props.title}</h1>
			<ul>
				<li>{props.a}</li>
				<li>{props.b}</li>
				<li>{props.c}</li>
				<li>{props.d}</li>
				<li>{props.e}</li>
			</ul>
			<Link className='vote' to='/:id'>
				Vote
			</Link>
		</div>
	);
};

export default Poll;
