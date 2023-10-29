import { EmbedBuilder } from 'discord.js'

const meme = async (interaction) => {
    await fetch('https://www.reddit.com/r/memes/random/.json')
    .then(async res =>{
        let meme = await res.json();

        let title = meme[0].data.children[0].data.title;
        let memeUrl = meme[0].data.children[0].data.url;
        let author = meme[0].data.children[0].data.author;

        const embed = new EmbedBuilder()
        .setTitle(title)
        .setURL(memeUrl)
        .setImage(memeUrl)
        .setFooter({
            text: `Posted by u/${author}`,
            iconURL: meme[0].data.children[0].data.author_avatar
        })

        await interaction.reply({embeds: [embed]});
    })
}

export { meme };