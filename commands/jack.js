module.exports = async (client, message) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let embed = {};
  try {
    let data = require('./audio.json');
    let char = data.characters.find(t => t.name === 'Jack');
    let audio = char.data.audio;
    let number = getRandomInt(audio.length) - 1;
    let quote = audio[Math.max(0, number)];
    client.on('message', message => {
    if (isReady && message.content === 'jack')
    {
    isReady = false;
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.join().then(connection =>
    {
     const dispatcher = connection.playFile(random);
     dispatcher.on("end", end => {
    	 //voiceChannel.leave();
    	 });
    }).catch(err => console.log(err));
    isReady = true;
    }
    });
  } catch(e) {
    console.log(e.message)
  }
};
