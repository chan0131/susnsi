const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
client.on('ready', () => {
  console.log('선시작');
});

client.on('message', (message) => {
 if (message.content === '한강물'){
    message.reply('https://hangang.ivlis.kr/');
  }
});



client.login(token);
