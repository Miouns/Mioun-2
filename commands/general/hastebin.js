const discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const moment = require("moment")
//const { ownerid } = require("../../config.json" 
//const { rage } = require("../../colors.json")
// const { angry, yes, money, stupid, loading, no } = require("../../emojis.json");
const hastebin = require('hastebin-gen');

exports.help = {
  name: "hastebin",
  description: "Regenerate code/text to hastebin",
  usage: `hastebin <code/text>`
}
exports.conf = {
  aliases: ["haste"],
  cooldown: 3
}
    exports.run = async (client, message, args) => {
      
      if(!args.join(" ")) return message.channel.send(`Write \`\`VALID\`\` text`);
      
      hastebin(args.join(" "), { extension: 'rage' }).then(haste => {
    message.channel.send(haste);
}).catch(error => {
    message.channel.send(`\`\`\`\n-ERROR-\n\`\`\`${error}`);
      });
}