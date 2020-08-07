const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  message.channel.send(`:ping_pong: Pong! | ${client.ws.ping}`);
}

exports.help = {
  name: "ping",
  description: "Ponged!",
  usage: "ping",
  example: "mi.ping"
};

exports.conf = {
  aliases: ["beep"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
