const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setAuthor(`${client.config.owner}`)
  .addField(`This your request invite link`, `[INVITE ME](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`, true)
  .setTimestamp(new Date())
  .setFooter(`Syrik X Syrup`, `${client.user.displayAvatarURL()}`)
  
  message.channel.send(embed)
}

exports.help = {
  name: "invitelink",
  description: "INVITEE MEEEE PLIZZZ"
}

exports.conf = {
  aliases: ["ik"],
  cooldown: 3
}