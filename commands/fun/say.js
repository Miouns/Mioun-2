const Discord = require("discord.js");
// const Discord = require("discord.js");

exports.run = async (client, message, args) => {

   
    if(message.guild === null)return;

  
    if (message.author.bot) return;

  const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => {}); 
    // And we get the bot to say the thing: 
message.channel.send(sayMessage);
    
          

};
exports.help = {
  name: "say",
  description: "only dev k",
  usage: "k!say <text>",
  example: "k!say hi"
}

exports.conf = {
  aliases: ["sy"],
  cooldown: 3
}