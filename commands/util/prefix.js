const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, prefix, args) => {

 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel("You don't have permission `ADMINISTRATOR`");
   let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
  
  prefixes[message.guild.id] = {
    prefixes: args[0]
  }
  
  fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
    if(err) return message.channel.send(`I have an error \nerror \'\'\'${err}\`\`\``)
  })
  
  
  
  let embed = new Discord.MessageEmbed()
  .setAuthor(`${client.config.owner}`)
  .setTitle("Succesfully to change Prefix")
  .setDescription(`Succesfully change Prefix to ${args[0]}`).catch(e => {
    message.channel.send(e)
  })
}
exports.help = {
  name: "prefix",
  description: "Change default prefix mi. to whatever you want",
  usage: "prefix <prefix>",
  example: "prefix mi!"
}

exports.conf = {
  aliases: ["ch"],
  cooldown: 3
} 