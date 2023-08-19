const data = {
	playerName: 'Player',
	comName: 'COM',
	playerPts: 0,
	comPts: 0,
	gameMode: undefined,
	time: 0,
	bot1_name: 'Bot1',
	bot2_name: 'Bot2',
	
}

const createSession = () => {
	sessionStorage.setItem('rps_data', JSON.stringify(data))
}
createSession()

const loadSession = () => {
	return JSON.parse(sessionStorage.getItem('rps_data'))
}

const updateSession = (val) => {
	sessionStorage.setItem('rps_data', JSON.stringify(val))
}