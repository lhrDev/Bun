import { CommandInteraction, EmbedBuilder } from "discord.js";
import { Meme } from "../interfaces/meme.interface";

export const meme = async (interaction: CommandInteraction) => {
    const res = await fetch('https://www.reddit.com/r/memes/random/.json');
    const data: Meme[] = await res.json();

    const post = data[0].data.children[0].data;
    const title = post.title;
    const upvotes = post.ups;
    const downvotes = post.downs;
    const comments = post.num_comments;

    const embed = new EmbedBuilder()
        .setTitle(`${title}`)
        .setColor('Random')
        .setURL(`https://reddit.com${post.permalink}`)
        .setImage(data[0].data.children[0].data.url!)
        .setFooter({
            text: `👍 ${upvotes} 👎 ${downvotes} 💬 ${comments}`,
        });
        

    return await interaction.reply({
        embeds: [embed],
    });

}