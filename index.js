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
  if (message.content === '야다야'){
    message.reply('의띠띠');
  }
    if (message.content === '찬석의띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '야다의띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '야다의 띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '캣다의띠띠'){
    message.reply('의띠띠');
  }  
  if (message.content === '캣다의 띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '고양이의띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '고양이의 띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '야옹이의띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '야옹이의 띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '현서의띠띠'){
    message.reply('의띠띠');
  }  
  if (message.content === '현서의 띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '선다의띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '선다의 띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '나다'){
    message.reply('의띠띠');
  }
  if (message.content === '나다야'){
    message.reply('의띠띠');
  }
  if (message.content === '나다의띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '의 띠띠'){
    message.reply('의띠띠');
  }
});


client.login(token);
