const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config.js") 
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log("Bot disponible");
});

client.on("message", msg => {
    if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send("pong!");

});

client.login(TOKEN);