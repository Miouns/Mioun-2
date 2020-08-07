const Discord = require('discord.js'),
      { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`❌ | `+`You Require \`Manage Messages\` Permission to use this Command`)
 await message.delete()
  let say = message.content.split(" ").slice(1).join(" ")
  if(!say) return message.channel.send(`❌ | `+"I Cannot Repeat Blank Message")
  let embed = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
  .setDescription(`${say}`)
  .setColor("RANDOM")
.setFooter(`Embed by ${message.author.username}`)
.setTimestamp()
  message.channel.send(embed);
  
  
  /*
  const Discord = require('discord.js'),
      { MessageEmbed } = require('discord.js')
      */

// exports.run = async(client, message, args) => {
  if(!client.config.owners.includes(message.author.id)) return message.channel.send(`❌ | `+`You Require \`Manage Messages\` Permission to use this Command`)
 await message.delete()
  let say1 = message.content.split(" ").slice(1).join(" ")
  if(!say1) return message.channel.send(`❌ | `+"I Cannot Repeat Blank Message")
  let embed1 = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
  .setDescription(`${say}`)
  .setColor("RANDOM")
.setFooter(`Embed by ${message.author.username}`)
.setTimestamp()
  message.channel.send(embed1)
}

exports.help = {
  name: "embed",
  usage: "embed <text to say>",
  description: "Returns provided text in Embed form.",
  example: "mi.embedsay hello world"
}

exports.conf = {
  aliases: ["es"],
  cooldown: 3
}