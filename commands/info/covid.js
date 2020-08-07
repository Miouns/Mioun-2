const discord = require("discord.js");
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

exports.help = {
  name: "corona",
  aliases: ["covid"],
  description: "Get the stats of Covid-19",
  usage: "corona all / corona <country>",
  category: "info"
}
exports.run = async (client, message, args) => {
if(!args.length) {
//     let corona = await track.all(); //it will give global cases

//       let embed = new discord.MessageEmbed()
//         .setTitle("Global Cases")
//         .setColor("#ff2050")
//         .setDescription("Sometimes cases number may differ from small amount.")
//         .addField("Total Cases", corona.cases, true)
//         .addField("Total Deaths", corona.deaths, true)
//         .addField("Total Recovered", corona.recovered, true)
//         .addField("Today's Cases", corona.todayCases, true)
//         .addField("Today's Deaths", corona.todayDeaths, true)
//         .addField("Active Cases", corona.active, true);

//       return message.channel.send(embed);
    return message.channel.send('give me country name You <:baka:732583768149458945>')
  }
    if (args.join(" ") === "all") {
      let corona = await track.all(); //it will give global cases

      let embed = new discord.MessageEmbed()
        .setTitle("Global Cases")
        .setColor("#ff2050")
        .setDescription("Sometimes cases number may differ from small amount.")
        .addField("Total Cases", corona.cases.toLocaleString(), true)
        .addField("Total Deaths", corona.deaths.toLocaleString(), true)
        .addField("Total Recovered", corona.recovered.toLocaleString(), true)
        .addField("Today's Cases", corona.todayCases.toLocaleString(), true)
        .addField("Today's Deaths", corona.todayDeaths.toLocaleString(), true)
        .addField("Active Cases", corona.active.toLocaleString(), true);

      return message.channel.send(embed);
    } else {
      let corona = await track.countries(args.join(" ")); //change it to countries

      let embed = new discord.MessageEmbed()
        .setTitle(`${corona.country}`)
        .setColor("#ff2050")
        .setDescription("Sometimes cases number may differ from small amount.")
        .addField("Total Cases", corona.cases.toLocaleString(), true)
        .addField("Total Deaths", corona.deaths.toLocaleString(), true)
        .addField("Total Recovered", corona.recovered.toLocaleString(), true)
        .addField("Today's Cases", corona.todayCases.toLocaleString(), true)
        .addField("Today's Deaths", corona.todayDeaths.toLocaleString(), true)
        .addField("Active Cases", corona.active.toLocaleString(), true);

      return message.channel.send(embed);
    }
  if(track.countries(args.join(" ")) === undefined) {
    message.channel.send('give me country name You <:baka:732583768149458945>')
  }
  
};

exports.conf = {
aliases: ["cv"],
cooldown: 3
}