console.log('Bot ist online!');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTU1NDgyMDYyMjIwNDI3Mjg0.D3FrXQ.CpGGsv1LuvHtSmeMa1perbXKEL0'
const PREFIX = ('!');

bot.on('message', function (message){
    if(message.content == 'Hallo')
{
message.channel.send('Hallo' + message.author +  'wie geht es dir?');
}
});

bot.on('message', function (message){
if(message.content == PREFIX + 'music')
{
message.reply('Die Commands des Music-Bots lauten:                            !play (song) => spielt den gesuchten song ab                                        !disconnect => schmeißt den bot aus deinem Channel             !np => zeigt dir an wie der laufende Song heißt                   !ping => zeigt den ping des bots an          !soundcloud (song) => sucht den Song von Soundclud              !join => befiehlt dem Bot in deinen Channel zu kommen      !lyrics => Zeigt die Lyrics des Songs an       !pause => Pausiert den aktuellen Song          !resume => Spielt einen pausierten Song weiter                    !skip => Spring zum nächsten Song in der Warteschlange');
}
});

bot.on('message', function (message){
    if(message.content == PREFIX + 'youtube')
{
message.channel.send('AUT_ACE Youtube Channel: https://www.youtube.com/channel/UC9gEYN47bzWhfBBzNJgNY9Q?view_as=subscriber ');
}
});

bot.on('message', function (message){
    if(message.content == PREFIX + 'twitch')
{
message.channel.send('AUT_ACE Twitch Channel: https://www.twitch.tv/aut_ace ');
}
});

bot.on('message', function (message){
    if(message.content == PREFIX + 'random')
{
message.channel.send('Deine Nummer ist: ' + Math.floor(Math.random()*10 + 1))
  }
});

bot.on("guildMemberAdd", function(member){
    message.member.send("Willkommen auf dem Server!");
   


});



bot.on('message', function (message){
    if(message.content == 'Join') {
       message.member.send("Willkommen am Server!");
      
    }
});

bot.on('message', function (message){
    if(message.content == 'join') {
       message.member.send("Willkommen am Server!");
      
    }
});


bot.on('message', function (message){
    if(message.content == 'hallo')
{
message.channel.send('Hallo' + message.author +  'wie geht es dir?');
}
});

bot.on('message', function (message){
    if(message.content == PREFIX + 'help')
{
message.reply(  'Hier ist eine Liste der Commands: !team ==> Damit kannst du in ein Team joinen!            !music ==> Zeigt dir die Liste der Musik Kommandos an                 !random ==> Zieht eine Zahl zwischen 1 und 10             !youtube ==> Zeigt dir den AUT_ACE Youtube-Kanal an                   !twitch ==> Zeigt dir den Twitch Kanal von AUT_ACE an     !support ==> Gibt dir Antworten zu häufig gestellten Fragen und Auskunft über die Support Öffnungszeiten ');
}
});

bot.on("guildMemberAdd", function(member){
    member.guild.channels.find("name", "╔willkommenskanal").sendMessage(member.toString() + "Herzlich Willkommen!");

    member.addRole(member.guild.roles.find("name", "Neu"));

});

bot.on('message', function (message){
    if(message.content == PREFIX + 'support')
{
message.channel.send( 'Der Support ist täglich von 14:00 - 18:00 Uhr geöffnet. Falls du folgende Fragen hast gib das Schlüsselwort (mit den Rufzeichen) im Chat ein ===>  !ChannelJoin! = Wenn du nicht in einen bestimmten Channel joinen kannst.       !Reden! = wenn du zwar redest, deine Freunde dich aber nicht hören können                  !Schreiben! = wenn du in bestimmten Channels nicht schreiben kannst           Für sonstige Fragen einfach in den Support Warteraum joinen, dort wird euch bestimmt weitergeholfen ');
}
});

bot.on('message', function (message){
    if(message.content == PREFIX + 'ChannelJoin' + PREFIX)
{
message.channel.send('Wenn du in einen bestimmten Sprachkanal nicht joinen kannst liegt es an deiner Rolle. Wenn du aber gar keinem Kanal joinen kannst, komme bitte in den Support Raum und kläre das mit unseren Moderatoren!');
}
});

bot.on('message', function (message){
    if(message.content == PREFIX + 'Reden' + PREFIX)
{
message.channel.send('Wenn du nicht reden kannst könnte es daran liegen, dass du dein Mikrofon noch nicht aktiviert hast. Das kannst du ganz einfach machen indem du auf deine Profileinstellungen gehst, dann auf Sprache und Video und dein Aufnahmegerät auswählst');
}
});

bot.on('message', function (message){
    if(message.content == PREFIX + 'Schreiben' + PREFIX)
{
message.channel.send('Wenn du nicht schreiben kannst liegt es daran, dass dein Rang in diesem Channel nicht autorisiert ist, zu schreiben.');
}
});

bot.on('message', function (message){
    if(message.content == PREFIX + 'team') {
       message.member.send("In welches Team möchtest du? t1 , t2 , t3 oder t4 Bitte gib deine Auswahl im ╠main-chat ein!")
      
    }
});

bot.on('message', function (message){
    if(message.content == 't1')
{
message.channel.send( message.author + ' ist Team 1 beigetreten!')
}
});

bot.on('message', function (message){
    if(message.content == 't2')
{
message.channel.send( message.author + ' ist Team 2 beigetreten!')
}
});

bot.on('message', function (message){
    if(message.content == 't3')
{
message.channel.send( message.author + ' ist Team 3 beigetreten!')
}
});

bot.on('message', function (message){
    if(message.content == 't4')
{
message.channel.send( message.author + ' ist Team 4 beigetreten!')
}
});



    bot.on('message', function (message){   
        if (message.content == PREFIX + 'bot')
        {
            message.channel.send(message.author + ', Jo I bin online!');
        }
        });

bot.on('ready', function(){
    bot.user.setActivity("!help", {type: 'WATCHING'})

});


bot.on("addRole", function(member, message){
    message.content == ('t1');

    member.addRole(member.guild.roles.find("name", "Team 1"));

});

bot.login(process.env.BOT_TOKEN);
