const qs = require("querystring");
const SOURCES = ["stable", "master", "rpc", "commando", "akairo", "akairo-master", "11.5-dev"];

exports.run = async (client, message, args) => {
  if (args.length < 1) return message.channel.send("No query provided");
  let source = SOURCES.includes(args.slice(-1)[0]) ? args.pop() : "stable";
  if (source === "11.5-dev") {
    source = `https://raw.githubusercontent.com/discordjs/discord.js/docs/${source}.json`;
  }
  try {
    const queryString = qs.stringify({ src: source, q: args.join(" ") });
    const { body: embed } = await client.snek.get(`https://djsdocs.sorta.moe/v2/embed?${queryString}`);
    if (!embed) {
      return message.reply("I couldn't find the requested information. Maybe look for something that actually exists the next time!");
    }
    return message.channel.send({ embed });
  } catch (e) {
    return message.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
  }
};

exports.conf = {
  aliases: [],
  clientPerm: "",
  cooldown: 3,
  authorPerm: "EMBED_LINKS"
};

exports.help = {
  name: "docs",
  description: "Search the discord.js documentation",
  usage: "docs <query> [version]",
  example: "mi.docs voiceConnection"

};
