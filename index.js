const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
client.on('ready', () => {
  console.log('선시작');
});

client.on('message', (message) => {
 if (message.content === '!깻잎'){
    message.reply('https://tenor.com/view/lee-soo-geun-gif-10915798');
  }
});



client.login(token);
