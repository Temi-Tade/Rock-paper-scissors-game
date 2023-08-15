const modbg = document.querySelector('#modal-bg');
const modal = document.querySelector('#modal');
const modalInfo = document.querySelector('#modal-info')
const modalContent = document.querySelector('#modal-content')
const gameModeInfo = ['Just like an infinite loop! The winner is the player with the highest points at the end of the game ', 'The winner is the player with the higher points after 60 seconds!', 'A classic 5-game series! The winner is the player with the higher points after the series.', 'Set up two bots to play against each other, sit back and watch!'];

const displayModal = (text) => {
	modal.animate({
		transform: ['scale(0)', 'scale(1)']
	},
	{
		duration: 500,
		easing: 'ease-out'
	}
	);
	
	modalContent.innerHTML = text;
}

const createGameModes = (modes) => {
	modes.forEach((val, ind) => {
		modalContent.innerHTML += `
			<div class='mode-wrap'>
				<label>
					<input type='radio' name='modeName' value=${val} class='modes'>
					<span>${val.toUpperCase()}</span>
				</label>
			</div>
		`
	})
	
	document.querySelectorAll('.modes').forEach((val, ind) => {
		val.oninput = () => {
			modalInfo.innerHTML = `<em>${gameModeInfo[ind]}<em>`
		}
	})
}

displayModal(`<h2>Select Game Mode</h2>`)
createGameModes(['endless', 'time bound', 'classic', 'simulate'])