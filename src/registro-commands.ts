import { REST, Routes } from 'discord.js'

const commands = [
    {
        name: 'meme',
        description: 'Replies with a meme from r/memes'
    }
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
