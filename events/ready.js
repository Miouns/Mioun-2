module.exports = client => {
  console.log(`bot ${client.user.username} is ready!`);
  client.user.setActivity(`${client.config.prefix}help`, { type: "STREAMING" });
}
