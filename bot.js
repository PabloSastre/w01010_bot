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
		  message.member.voice.channel.leave();
		  setWololo(false);
  }
  if (message.content === `${prefix}wolocome`){
  	let embed = new Discord.MessageEmbed()
  		.setAuthor(message.author.username)
  		.setDescription("Mande?");
  	message.channel.send(embed);
  	const connection = await message.member.voice.channel.join();
  	const dispatcher = connection.play(ytdl(`https://www.youtube.com/watch?v=lKQBTuXEWo0`, { filter : 'audioonly' }), {
  		volume: 0.5
		});
  	setWololo(true);
  	
  }
  if(wololo){
  	if(message.content.match('(!)[1-9][0-9]?')){ 
			const connection = await message.member.voice.channel.join(); 
  			const dispatcher = connection.play(`./sounds/${message.content}.mp3`);
			message.delete();
  	
	}
} 



});

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {
  		console.log("new user")

     // User Joins a voice channel

  } else if(newUserChannel === undefined){
  		console.log("user left")
    // User leaves a voice channel

  }
})

bot.login(botSettings.token);

var wololo=false;
function setWololo(w){
	wololo=w;
}

