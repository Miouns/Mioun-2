const Discord = require("discord.js");
const tutorialBot = require("./handler/ClientBuilder.js"); // We're gonna create this soon.
const client = new tutorialBot();
const db = require('quick.db')

//UPTIME ROBOT (WEB)
const { get } = require("snekfetch");
const express = require('express');
const http = require('http');
const app = express();
const Enmap = require('enmap');


client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});

const defaultSettings = {	
  prefix: "mi.",	
  modLogChannel: "mod-log",	
  modRole: "Moderator",	
  adminRole: "Administrator",	
  welcomeChannel: "welcome",	
  welcomeMessage: "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D"	
}

client.on("guildDelete", guild => {
  // Removing an element uses `delete(key)`
  client.settings.delete(guild.id);
});


/*client.on("message", async (message) => {
  // This stops if it's not a guild (obviously), and we ignore all bots.
  if(!message.guild || message.author.bot) return;

  // We can use ensure() to actually grab the default value for settings,
  // if the key doesn't already exist. 
  const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
  
  // We also stop processing if the message does not start with our prefix.
  if(message.content.indexOf(guildConf.prefix) !== 0) return;

  //Then we use the config prefix to get our arguments and command:
  const args = message.content.split(/\s+/g);
  const command = args.shift().slice(guildConf.prefix.length).toLowerCase();
  
  // Alright. Let's make a command! This one changes the value of any key
  // in the configuration.
  if(command === "setconf") {
    // Command is admin only, let's grab the admin value: 
    const adminRole = message.guild.roles.find("name", guildConf.adminRole);
    if(!adminRole) return message.reply("Administrator Role Not Found");
    
    // Then we'll exit if the user is not admin
    if(!message.member.roles.has(adminRole.id)) {
      return message.reply("You're not an admin, sorry!");
    }
    
    // Let's get our key and value from the arguments. 
    // This is array destructuring, by the way. 
    const [prop, ...value] = args;
    // Example: 
    // prop: "prefix"
    // value: ["+"]
    // (yes it's an array, we join it further down!)
    
    // We can check that the key exists to avoid having multiple useless, 
    // unused keys in the config:
    if(!client.settings.has(message.guild.id, prop)) {
      return message.reply("This key is not in the configuration.");
    }
    
    // Now we can finally change the value. Here we only have strings for values 
    // so we won't bother trying to make sure it's the right type and such. 
    client.settings.set(message.guild.id, value.join(" "), prop);
    
    // We can confirm everything's done to the client.
    message.channel.send(`Guild configuration item ${prop} has been changed to:\n\`${value.join(" ")}\``);
  }
  */

//app.get("/", (request, response) => {
  
  //response.sendStatus(200);
//});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 6000);
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.status(200).send("OK");
});


require("./handler/module.js")(client);
require("./handler/Event.js")(client);

client.package = require("./package.json");
client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login(process.env.SECRET).catch(console.error); // This token will leads to the .env file. It's safe in there.










// const Discord = require('discord.js')

// client.on('message', async message => {
//  if(message.content === "mi" ) {
 /*let prefix = client.config.prefix;
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
})
*/


client.on('message', async message => {
  if (message.author.bot) return; // Ignore if the user is a bot.
  
  let pref = db.get(`prefix.${message.guild.id}`);
  let prefix;
  
  if (!pref) {
    prefix = "mi."; // If the server doesn't have any custom prefix, return default.
  } else {
    prefix = pref;
  }
  
  if (!message.content.startsWith(prefix)) return; // use this. so your bot will be only executed with prefix.
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();
  
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1)); // Message Flags: -default, -ban, -parameter
  }
  
  if (msg.startsWith(prefix + "prefix")) {
    if (!message.member.hasPermission("MANAGE_GUILD") || !client.config.owners.includes(message.author.id)) return message.channel.send("You dont any permissions to do this!");
    let data = db.get(`prefix.${message.guild.id}`);
    if (message.flags[0] === "default") {
      await db.delete(`prefix.${message.guild.id}`);
      return message.channel.send("The server prefix has been changed into default.");
    }
    
    let symbol = args.join(" ");
    if (!symbol) return message.channel.send("Please input the prefix.");
    
    db.set(`prefix.${message.guild.id}`, symbol);
    return message.channel.send(`The server prefix has been changed to **${symbol}**`);
  }
 });