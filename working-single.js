const Discord = require('discord.js');
const {	prefix,	token,} = require('./config.json');
const client = new Discord.Client();
let isReady = true;

client.once('ready', () => {
	console.log('Ready!');
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});


client.on('message', message => {
if (isReady && message.content === 'jack')
{
//sets bot to not being ready to accept new commands until audio file is finished playing.
isReady = false;
let voiceChannel = message.member.voiceChannel;
voiceChannel.join().then(connection =>
{
 //sets the local audio file location to play single specific item
 let dispatcher = connection.playFile('c:/github/vc-bot/pretzels.ogg');
 dispatcher.on("end", end => {
	 //voiceChannel.leave();
	 });
}).catch(err => console.log(err));
isReady = true;
}
});

client.login(token);
