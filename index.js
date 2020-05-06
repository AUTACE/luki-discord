console.log('Bot ist online!');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTU1NDgyMDYyMjIwNDI3Mjg0.XrKX7Q.DIxJOmtNFyG5uktZjwxWAc-MZFM'
const PREFIX = ('Ich bin');
const altPrefix = ('ich bin');
const oePrefix = ('i bin');
require('dotenv').config();
console.log(process.env);

bot.on('message', function (message){
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(PREFIX.length);
{
message.channel.send('Hallo ' + args +  ', ich lerne zählen!');
}
});

bot.on('message', function (message){
    if(!message.content.startsWith(altPrefix) || message.author.bot) return;
    const args1 = message.content.slice(altPrefix.length);
{
    message.channel.send('Hallo ' + args1 +  ', ich lerne zählen!');
}
});

bot.on('message', function (message){
    if(!message.content.startsWith(oePrefix) || message.author.bot) return;
    const args2 = message.content.slice(oePrefix.length);
{
message.channel.send('Hallo ' + args2 +  ', ich lerne zählen!');
}
});

bot.on('message', function (message){
    if(message.content.startsWith("Rene"))
{
    const sog4 = message.content.slice(('Rene').length);
    message.channel.send(sog4, {files: ["Rene.jpg"]});
}
});

bot.on('message', function (message){
    if(message.content.startsWith("Lukas"))
{
    const sog3 = message.content.slice(('Lukas').length);
    message.channel.send(sog3,{files: ["Lukas.png"]});
}
});

bot.on('message', function (message){
    if(message.content.startsWith("Emil"))
{
    const sog = message.content.slice(('Emil').length);
    message.channel.send( sog, {files: ["Emil.png"]});
}
});

bot.on('message', function (message){
    if(message.content.startsWith("LH"))
{
    const sog1 = message.content.slice(('LH').length);
    message.channel.send( sog1, {files: ["LH.png"]});
}
});

bot.on('message', function (message){
    if(message.content.startsWith("Dino"))
{
    const sog2 = message.content.slice(('Dino').length);
    message.channel.send(sog2, {files: ["Dino.png"]});
}
});

bot.on('message', function (message){
var nummer = 0;
var i = 1;

    
    if(message.content == 'count'){

        
            
            for(i = 1; i <= 100; i++){
        nummer++;
        message.channel.send(nummer);
    }
    

}
if(message.content == 'stop'){
    message.channel.send('Okay ich höre auf ' + message.author);
}
});


bot.login(process.env.Token);
