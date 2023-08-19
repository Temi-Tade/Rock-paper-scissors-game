const modbg = document.querySelector('#modal-bg');
const modal = document.querySelector('#modal');
const modalInfo = document.querySelector('#modal-info')
const modalContent = document.querySelector('#modal-content')
const modalAct = document.querySelector("#modal-action")
const gameModeInfo = ['Just like an infinite loop! The winner is the player with the highest points at the end of the game ', 'The winner is the player with the higher points after 60 seconds!', 'A classic 5-game series! The winner is the player with the higher points after the series.', 'Set up two bots to play against each other, sit back and watch!'];

const displayModal = (text) => {
	modbg.style.diaplay = 'block'
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

const closeModal = () => {
	modal.innerHTML = ''
	modbg.style.display = 'none'
}

const createGameModes = (modes) => {
	let state = loadSession()
	modalContent.innerHTML = `
	<h2>Hello ${state.playerName}, select game mode</h2>
	`
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
			modalAct.innerHTML = `<button onclick='launchGameMode()'>Play</button>`
			launchGameMode = () => {
				closeModal()
			}
		}
	})
}

const getPlayerInfo = () => {
	displayModal(`
		<h2>Player Name</h2>
		<input type='text' id='playerName' value='Player' placeholder='Input player name...'>
		<button id="formBtn">Continue</button>
	`)
	
	modal.querySelector("#formBtn").onclick = () => {
		let state = loadSession()
		if (modal.querySelector("#playerName").value.trim() === '') {
			modal.querySelector("#playerName").value = 'Player'
		}
		state.playerName = modal.querySelector("#playerName").value.trim()
		updateSession(state)
		createGameModes(['endless', 'time bound', 'classic', 'simulate'])
		
	}
}

getPlayerInfo()