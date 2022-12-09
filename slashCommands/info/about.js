const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
	name: "about",
    description: "See information about this Discord bot, and the DerServer",

	run: async (client, interaction) => {		
		const embed = new EmbedBuilder()
		.setColor("#294363")
            .setTitle("About me")
            .setDescription(
                "Hey! I'm DerBotster, a Discord bot for the DerServer by DerModster."
            )
            .addFields(
                {
                    name: "Who created you?",
                    value: "**KontrollFreek**`#0643` and **Catster ♡**`#8603` are my creators.",
                    inline: true
                },
                {
                    name: "When were you created?",
                    value: "Well, I don't know exactly when I was created, but I do know I sent my first message at <t:1632735240:f>",
                    inline: true
                },
                {
                    name: "What's with this bot?",
                    value: "Well, my purpose is to improve the DerServer, as well as have a little fun.",
                    inline: true,
                },
                {
                    name: "What is the DerServer?",
                    value: "According to DerModster,\n\"**[The] DerServer is a community for people to chill and hang out and talk about all sorts of gaming topics.**\nIt's my personal community for my YouTube and Twitch channel as well.\n*Subscribe!*\"",
                    inline: true,
                },
                {
                    name: "How can I support you?",
                    value: "You can support me and the devs with **PayPal**, **KoFi**, or **Patreon**!\nRun the command **`/support`** to find the donation links.",
                    inline: true,
                },
                {
                    name: "Can I see the development of the bot?",
                    value: "Yes! The bot is fully open source, and you can find it in our development discord server at [https://discord.gg/zRqkPdMKzG](https://discord.gg/zRqkPdMKzG).",
                    inline: true,
                }
            )
			.setFooter({
				text: `Requested by ${interaction.user.username}`,
				iconURL: interaction.user.displayAvatarURL()
			})
            .setTimestamp();
		return interaction.reply({ embeds: [embed] })
	}
};
