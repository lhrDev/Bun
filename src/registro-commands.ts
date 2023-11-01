import { REST, Routes, ApplicationCommandOptionType } from 'discord.js'

const commands = [
    {
        name: 'add',
        description: 'Adds two numbers',
        options: [
            {
                name: 'first-number',
                description: 'The first number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'second-number',
                description: 'The second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
];

const rest = new REST({ version: '10' }).setToken(Bun.env.TOKEN as string);
    
    console.log('Started refreshing application (/) commands.');
    try {
        await rest.put(
            Routes.applicationGuildCommands(
                Bun.env.CLIENT_ID as string,
                Bun.env.GUILD_ID as string,
                ),
            { body: commands }        
        )

        console.log('Successfully reloaded application (/) commands.');
                

    } catch (error) {
      console.error(`There was an error while registering commands: ${error}`);  
    }
