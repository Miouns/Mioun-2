const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!client.config.owners.includes(message.author.id)) return message.channel.send("You don't have permission");
  
  let user = message.mentions.users.first();
  if(!user)
    return message.channel.send("Please mentions the user!")

  let amount = args[1];
  if(!amount) return message.channel.send("Please specify amount")
  
  // db.add(`money_${user.id}`, amount);
  // db.add()
  // db.add(`account.${message.author.id}.balance`, amount)
  db.add(`account.${user.id}.balance`, amount)

  message.channel.send(
    `<:success:733601079887134762> | Successfully Added 💴 **${amount}** To ${user}`
    );
  /* if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You don't have permission");
  
  let user1 = message.mentions.users.first();
  if(!user)
    return message.channel.send("Please mentions the user!")

  let amount1 = args[1];
  if(!amount) return message.channel.send("Please specify amount")
  
  // db.add(`money_${user.id}`, amount);
  // db.add()
  // db.add(`account.${message.author.id}.balance`, amount)
  db.add(`account.${user1.id}.balance`, amount1)

  message.channel.send(
    `<:success:733601079887134762> | Successfully Added 💴 **${amount1}** To ${user1}`
  );
  */
};

exports.help = {
  name: "addmoney",
  description: "Adding money to ur balance",
  usage: "addmoney <amount>"
};

exports.conf = {
  aliases: ["cheat"],
  cooldown: 0
};