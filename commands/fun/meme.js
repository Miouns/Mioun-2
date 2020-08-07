 
const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
exports.help = {
  name: "meme",
  description: "Get a meme!"
}
exports.run = async (bot, message, args) => {
    let subreddits = ["comedyheaven", "dank", "meme", "memes", "indonesia"];
    let subreddit =
      subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
      .setTitle(`A meme from r/${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
}

exports.conf = {
  aliases: ["ms"],
  cooldown: 3
}