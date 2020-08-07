const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

    
    if (!client.config.owners.includes(message.author.id)) return message.reply("you do not have perms to use this command, Only The Owner Of The Bot Have Access")
    
        if (!args[0]) return message.reply('Please specify an amount to Remove.')
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send('Negative money can not be Removed.')
    }

    let user = message.mentions.users.first() || message.author
    message.channel.send('Successfully Removed ' + args[1] + ' to ' + args[0])
     db.subtract(`credits_${user.id}`, args[1])

    
    
    
    
  }

exports.help = {
  name: "removemoney",
  description: "remove money From Specific User"
}

exports.conf = {
  aliases: ["rm"],
  cooldown: 3
}