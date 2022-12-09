const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: "tip",
    description: "Give a little something",
    
	run: async (client, interaction) => {		
		const embed = new EmbedBuilder()
		.setColor("#294363")
        .setTitle("Support Me")
        .setDescription(
            "Here you can donate to the developers of me to aid in my creation!"
        )
        .addFields(
            {
                name: "Patreon",
                value: "[(Link)](https://patreon.com/derserverbot)",
                inline: true
            },
            {
                name: "Paypal",
                value: "[(Link)](https://paypal.me/KontrollFreek)",
                inline: true
            },
            {
                name: "Ko-Fi",
                value: "[(Link)](https://ko-fi.com/derserver)",
                inline: true
            },
            {
                name: "How else can I support you?",
                value: "Just by using the bot, to give the devs that small bit of dopamine. :)",
                inline: true
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