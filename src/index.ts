import { Client, IntentsBitField, Partials } from 'discord.js';
import { meme } from './commands/meme-generator';


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
    partials: [
        Partials.GuildMember,
        Partials.Message,
        Partials.User,
    ]
});

client.on('ready', (c) => {
    console.log(`Logged in as ${c.user?.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === 'ping') message.reply('pong');

});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isCommand()) return;

    if ( interaction.commandName === 'meme') {
        meme(interaction);
    };
    
});

client.login(Bun.env.TOKEN);

