const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: "ping",
  	description: "Pings the bot to check it's response time",
	
	run: async (client, interaction) => {		
		const embed = new EmbedBuilder()
		.setColor("#294363")
        .setTitle("**🏓 Pong!**")
		.setDescription(`Response time is **${Math.round(client.ws.ping / 10)}0ms**.`)
		.setFooter({
			text: `Requested by ${interaction.user.username}`,
			iconURL: interaction.user.displayAvatarURL()
		})
		.setTimestamp();
		return interaction.reply({ embeds: [embed] })
	}
};