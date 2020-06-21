const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
client.on('ready', () => {
  console.log('선시작');
});

client.on('message', (message) => {
 if (message.content === '야다'){
    message.reply('의띠띠');
  }
  if (message.content === '캣다'){
    message.reply('의띠띠');
  }
  if (message.content === '캣'){
    message.reply('의띠띠');
  }
  if (message.content === '고양이'){
    message.reply('의띠띠');
  }
  if (message.content === '나디'){
    message.reply('의띠띠');
  }
  if (message.content === '선다'){
      message.reply('의띠띠');
  }
  if (message.content === '마스크다'){
    message.reply('의띠띠');
  }
  if (message.content === '야옹이'){
    message.reply('의띠띠');
  }
  if (message.content === '현서'){
    message.reply('의띠띠');
  }
  if (message.content === '현서다'){
    message.reply('의띠띠');
  }
});


client.login(token);