const { MessageEmbed } = require("discord.js")
const KagApi = require("@kagchi/kag-api")
const api = new KagApi()


exports.run = async (client, msg, args) => {
const wikihow = await api.wikihow()
const embed = new MessageEmbed()
.setTitle(wikihow.title)
.setImage(wikihow.url)
msg.channel.send(embed)
 

// Wikihow Api (buat yang gabisa make k-soft di glitch)
// "”by: @KagChi
}

exports.help = {
  name: "wikihow",
  description: "Show Image from Wikihow"
}

exports.conf = {
  aliases: ["wk"],
  cooldown: 5
}