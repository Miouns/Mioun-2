const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const Color = 'RANDOM'

exports.run = async (client, message, args) => {
    const member =
      message.mentions.users.first() ||
      message.guild.members.cache.find(x => x.name === `${args.join(" ")}`) ||
      message.author;
  try {
    if (message.mentions.users.first()) {
    const embed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`User ID`)
      .addField(`Full Username`, member.tag, true)
      .addField(`ID`, member.id, true)
      .addField(`Show with Mentions`, true)
      .setFooter(`tysm for using Me ${message.author.username}!`)
      .setThumbnail(`${member.displayAvatarURL()}`)
      .setTimestamp();

    message.channel.send(embed);
    } else {
      const id = args[0]
      const embed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`User ID`)
      .addField(`Full Username`, member.tag, true)
      .addField(`ID`, member.id, true)
      .addField(`Show with ID`)
      .setFooter(`requested by <@${message.author.tag}>`)
      .setTimestamp();

    message.channel.send(embed);
    }
  } catch (e) {
    
  }
  }

exports.help = {
  name: "userid",
  description: "Show userid from user",
  usage: "userid @Mioun",
  example: `mi.userid @Mioun or use id user 
  because sometimes someone does not like if exposed to mentions`
}

exports.conf = {
  aliases: ["ui"],
  cooldown: 3
}