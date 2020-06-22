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
  if (message.content === '나다의 띠띠'){
    message.reply('의띠띠');
  }
  if (message.content === '나다'){
    message.reply('의띠띠');
  }
});
if(message.content.startsWith('!청소')) {
    if(checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        const _limit = 10;
        let _cnt = 0;

        message.channel.fetchMessages({limit: _limit}).then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});


client.login(token);
