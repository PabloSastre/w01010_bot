const Discord = require('discord.js');
const prefix= "!";
const ytdl = require('ytdl-core');
const bot = new Discord.Client( {disableEveryone: true} );


bot.on('ready', async () => {
  console.log(`I am ready! ${bot.user.username} `);
});

bot.on('message', async message => {

  if(message.author.bot) return;
  if (message.content === `${prefix}wolohelp`){
	  let embed = new Discord.MessageEmbed()
	.setAuthor(message.author.username)
	.setDescription('Menuda berza arrastras, a ver: \n \t -!wolocome : El bot se une a tu canal de voz ( debes estar previamente en un canal de voz) \n \t -!wololeave: el bot avandona el canal de voz en el que esté. \n \t -!numero: simula los sonidos del chat de aoe2, hay sonidos del !1 al !43.  wololo es el !99');
	message.channel.send(embed);
	message.delete();
}
  if (message.content === `${prefix}wololeave`){
		  message.member.voice.channel.leave();
		  setWololo(false);
		  message.delete();
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
	  message.delete();
  	
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

bot.login(process.env.BOT_TOKEN);

var wololo=false;
function setWololo(w){
	wololo=w;
}

