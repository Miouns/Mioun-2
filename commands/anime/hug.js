const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../../config.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to hug them");
    const { body } = await superagent
    .get("https://nekos.life/api/hug");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} hug ${message.mentions.users.first().username}`)
    .setImage(body.url) 
    .setFooter(`Gtech X Syrup `);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hug',
    description: 'hugs someone OwO',
    usage: 'hug'
  };