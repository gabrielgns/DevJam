const Voting = () => {
	return (
		<>
			<h1>Best Movie</h1>
			<div>
				<input type='radio' id='lotr' name='movie' value='lotr' />
				<label for='lotr'>Lord of the Rings</label>
			</div>

			<div>
				<input type='radio' id='hp' name='movie' value='hp' />
				<label for='hp'>Harry Potter</label>
			</div>
			<div>
				<input type='radio' id='space' name='movie' value='space' />
				<label for='space'>2001 - A space odyssey</label>
			</div>
			<div>
				<input type='radio' id='inter' name='movie' value='inter' />
				<label for='inter'>Interstellar</label>
			</div>
			<div>
				<input type='radio' id='benhur' name='movie' value='benhur' />
				<label for='benhur'>Ben-Hur</label>
			</div>
			<button>Vote</button>
		</>
	);
};

export default Voting;
