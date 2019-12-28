// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message:any) => {
  if (message.content === 'glootie') {
    message.channel.send('Do you want to develop an app?');
  }
});

// login to Discord with your app's token
client.login(process.env.BOT_TOKEN);