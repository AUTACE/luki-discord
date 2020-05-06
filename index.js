console.log('Bot ist online!');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTU1NDgyMDYyMjIwNDI3Mjg0.Xps0yQ.Wc-_QWrVYClmLg1J0OyF0cxyAjw'
const PREFIX = ('!');

bot.on('message', function (message){
    if(message.content == 'Hallo')
{
message.channel.send('Hallo' + message.author +  'wie geht es dir?');
}
});

bot.on('message', function (message){
var nummer = 0;
var i = 1;
    if(message.content == 'count'){
    for(i = 1; i >= nummer; i++){
        nummer++;
        message.channel.send(nummer);
    }
    }
});


bot.login(process.env.BOT_TOKEN);
