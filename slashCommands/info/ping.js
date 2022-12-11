const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: "ping",
  	description: "Pings the bot to check it's response time",
	
	run: async (client, interaction) => {	
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true })

		const embed = new EmbedBuilder()
			.setColor("#294363")
			.setTitle("**🏓 Pong!**")
			.setDescription(`**Websocket Heartbeat:** ${client.ws.ping}ms\n**Roundtrip latency:** ${sent.createdTimestamp - interaction.createdTimestamp}ms`)
			.setFooter({
				text: `Requested by ${interaction.user.username}`,
				iconURL: interaction.user.displayAvatarURL()
			})
			.setTimestamp();

		interaction.editReply({ content: '', embeds: [embed] })
	}
};