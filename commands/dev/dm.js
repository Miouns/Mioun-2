const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if(client.config.owners.includes(message.author.id)) {
  
  const user = message.mentions.users.first() // || client.users.cache.get(args[0])
  
  
  // let embed = new Discord.MessageEmbed()
  //    .setDescription(`Succesfully send DMs to <@${user.id}>`)
  //    .setThumbnail(`${client.user.displayAvatarURL()}`)
  // message.author.send()
  try {
    if(user) {
      let embed = new Discord.MessageEmbed()
      .setDescription(`Succesfully send DMs to <@${user.id}>`)
      .setThumbnail(`${client.user.displayAvatarURL()}`)

      client.users.cache.get(user.id).send(args.join(" "))
      message.channel.send(embed);
      /*
      let embed = new Discord.MessageEmbed()
      .setDescription(`Succesfully send DMs to <@${user.id}>`)
      .setThumbnail(`${client.user.displayAvatarURL()}`)
      */
  } else if(!user) {
    let embed = new Discord.MessageEmbed()
      .setDescription(`Succesfully send DMs to <@${args[0]}>`)
      .setThumbnail(`${client.user.displayAvatarURL()}`)
    client.users.cache.get(args[0]).send(args.join(" "))
    message.channel.send(embed)
  }
  } catch (e) {
    message.channel.send("Please Mention a user or input with id user", e);
  }
  }
}
exports.help = {
  name: "dm",
  description: "Send DMs message"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}

