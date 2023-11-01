import { Client, IntentsBitField } from 'discord.js';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
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

    if (interaction.commandName === 'add') {
        
        const firstNumber = interaction.options.get('first-number', true).value as number;
        const secondNumber = interaction.options.get('second-number', true).value as number;

        interaction.reply(`The sum is ${firstNumber + secondNumber}`);
    }
    

});

client.login(Bun.env.TOKEN);

