const Discord = require('discord.js');
const botSettings = require("./botSettings.json")
const bot = new Discord.Client( {disableEveryone: true} );
const prefix= botSettings.prefix;


bot.on('ready', async () => {
  console.log(`I am ready! ${bot.user.username} `);
});

bot.on('message', async message => {
  if (message.content === 'ping') {
    message.reply('Puto CIShetero de mierda!!!! chupame la regla');
  }

  if(!message.content.startsWith(prefix)) return;
  if(message.content === `${prefix}userInfo`){
  	let embed = new Discord.RichEmbed()
  		.setAuthor(message.author.username)
  		.setDescription("This is the user info!!");
  	message.channel.send(embed);
  }


});

bot.login(botSettings.token);

