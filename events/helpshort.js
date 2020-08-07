const Discord = require('discord.js')

module.exports = async (client, message) =>  {
  if(message.content === "mi" ) {
    let prefix = client.config.prefix;
    // This will turn the folder (category) into array.
    let module = client.helps.array();
    
    // This will hide a folder from display that includes "hide: true" in their module.json
    if (!client.config.owners.includes(message.author.id)) module = client.helps.array().filter(x => !x.hide);
    const embed = new Discord.MessageEmbed()
    .setColor(0x1d1d1d)
    .setTimestamp(new Date())
    .setDescription(`Type \`${prefix}help [command]\` to get more specific information about a command.`)
    .setTitle("A bot")
    
    for (const mod of module) {
      // You can change the .join(" | ") to commas, dots or every symbol.
      embed.addField(`${mod.name}`, mod.cmds.map(x => `\`${x}\``).join(" , "));
    }
    
    return message.channel.send(embed);
  } else if( message.content === "mi." ) {
    let prefix = client.config.prefix
    // This will turn the folder (category) into array.
    let module = client.helps.array();
    
    // This will hide a folder from display that includes "hide: true" in their module.json
    if (!client.config.owners.includes(message.author.id)) module = client.helps.array().filter(x => !x.hide);
    const embed = new Discord.MessageEmbed()
    .setColor(0x1d1d1d)
    .setTimestamp(new Date())
    .setDescription(`Type \`${prefix}help [command]\` to get more specific information about a command.`)
    .setTitle("Mioun Help")
    
    for (const mod of module) {
      // You can change the .join(" | ") to commas, dots or every symbol.
      embed.addField(`${mod.name}`, mod.cmds.map(x => `\`${x}\``).join(" , "));
    }
    
    return message.channel.send(embed);
  }
}