module.exports = async ( client, message ) => {
	function getRandomInt(max) {
		return Math.floor(Math.random()*Math.floor(max));
	};
	let embed = {}
	try {
		let msg = "```md\n# Quote by Handsome Jack```";
		let data = require('./audio.json');
		let char = data.characters.find(t => t.name === 'Jack');
		let audio = char.data.audio;
		let number = getRandomInt(audio.length) - 1;
		let play = audio[Math.max(0, number)];
		//creates variable that plays randomized audio file
		let isReady = true;
		if (isReady) {
		//sets bot to not being ready to accept new commands until audio file is finished playing.
		isReady = false;
		let voiceChannel = message.member.voiceChannel;
		voiceChannel.join().then(connection => {
		 //sets the local audio file location to play single specific item
		 let dispatcher = connection.playFile(play);
		 //let dispatcher = connection.playFile('C:/Github/Modular-Bot/Audio/Jack/bitch.ogg');
		 dispatcher.on("end", end => {
			 voiceChannel.leave();
			 });
		})
		//return message.channel.send(msg);
	};
} catch(e) {
	 	console.log(e.message)
	 	embed.color = 0x2ad68c;
	 	embed.title = 'Whoopsie!';
	 	embed.description = 'Wait, thats not right!';
	 	embed.timestamp = new Date();
	 	return message.channel.send({embed});
	 }
};
