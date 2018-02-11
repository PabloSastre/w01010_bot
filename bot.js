const Discord = require('discord.js');
const botSettings = require("./botSettings.json");
const ytdl = require('ytdl-core');
const bot = new Discord.Client( {disableEveryone: true} );
const prefix= botSettings.prefix;


bot.on('ready', async () => {
  console.log(`I am ready! ${bot.user.username} `);
});

bot.on('message', async message => {

  if(message.author.bot) return;
  if (message.content === `${prefix}wololeave`){
  		message.member.voiceChannel.leave();
  }
  if (message.content === `${prefix}wololo`){
  	let embed = new Discord.RichEmbed()
  		.setAuthor(message.author.username)
  		.setDescription("Mande?");
  	message.channel.send(embed);
  	const connection = await message.member.voiceChannel.join();
  	const dispatcher = connection.playStream(ytdl(`https://www.youtube.com/watch?v=lKQBTuXEWo0`, { filter : 'audioonly' }), {
  		volume: 0.5
		});
  	setWololo(true);
  	
  }
  if(wololo){
  	if(message.content.match('\\d{1,2}(?!\\d)|100')){ 
  			const connection = await message.member.voiceChannel.join(); 		
  			const dispatcher = connection.playFile(`./sounds/${message.content}.mp3`, {
  			volume: 0.5
			});
  	
  	
	}
}


  

});

bot.login(botSettings.token);

var wololo=false;
function setWololo(w){
	wololo=w;
}

