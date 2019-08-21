const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
    if (msg.content === "ping") msg.channel.send("pong!");
    if (msg.content === "everyone") msg.channel.send("@everyone");
    if (msg.content === "noteveryone") msg.channel.send("@everyone (noteveryone)");
});

client.login("NjEzNzA0MTQyMzk3MTEyMzYx.XV0yow.qZKnJEsaSOxDzhZnxWvy9ccZ9V0");