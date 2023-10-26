// import discord.js
import {Client, Events, GatewayIntentBits, Partials} from 'discord.js';

// create a new Client instance
const client = new Client({
    intents: [ GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,],
    partials: [Partials.GuildMember, Partials.Message, Partials.User],

});
 
// listen for the client to be ready
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// listen for messages
client.setMaxListeners(0);

client.on('messageCreate', async (message) => {
   console.log(message.content);
     
});

// login with the token from .env.local
client.login(process.env.DISCORD_TOKEN).then(()=> {
    console.log('Logged in!');
}).catch((e) => {
    console.error(e);
});
