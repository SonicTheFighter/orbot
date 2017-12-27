const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Reading WAKEUP.exe...Done!');
});

client.on('message', message => {
    if (message.content === 'sing') {
    	message.reply('The think bones connected to the talk bone... the talk bones connected to the mouth bone!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
