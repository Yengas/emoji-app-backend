const roomCreator = require('../room/index');

module.exports = function(){
	const games = {};

	function hasGame(id){
		return id in games;
	}

	function getRoom(id){
		return games[id];
	}

	function setRoom(id, room){
		games[id] = room;
	}

	function createRoom(id){
		const initialState = undefined;
		return roomCreator(id, initialState);
	}

	async function getOrCreateRoom(id){
		// if the room exists, just return it
		if(hasGame(id)) return getRoom(id);

		const room = createRoom(id);
		setRoom(id, room);
		return room;
	}

	return {
		getOrCreateRoom,
	};
};