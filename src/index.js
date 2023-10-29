// import discord.js
import {Client, Events, GatewayIntentBits, Partials, EmbedBuilder} from 'discord.js';

//Commands
import { meme } from './commands/users/meme-generator.js';

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


client.on('interactionCreate', async (interaction) => {
   if (!interaction.isChatInputCommand()) return;
   
   if(interaction.commandName === 'ping') {
       await interaction.reply('Pong!');
   }

   if(interaction.commandName === 'meme'){
      await meme(interaction);
   }
});

// login with the token from .env.local
client.login(process.env.DISCORD_TOKEN).then(()=> {
    console.log('Logged in!');
}).catch((e) => {
    console.error(e);
});
