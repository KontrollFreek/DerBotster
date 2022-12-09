const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: "quote",
    description: "Sends a random quote said by DerModster",
    options: [
        {
            name: 'quote',
            description: 'Quote you want to choose',
            type: 4,
            required: false
        }
    ],

	run: async (client, interaction) => {	
        require('../../quotes.js')

		if (interaction.options.getInteger('quote') == null || interaction.options.getInteger('quote') < 1 || interaction.options.getInteger('quote') > q.length) n = Math.floor(Math.random() * q.length)
		else n = interaction.options.getInteger('quote') - 1

		const embed = new EmbedBuilder()
		.setColor("#294363")
        .setTitle(`"${q[n].quote}"`)
        .setDescription(`**#${n + 1}** - <t:${q[n].date}:D>`)
		.setFooter({
			text: `Requested by ${interaction.user.username}`,
			iconURL: interaction.user.displayAvatarURL()
		})
		.setTimestamp()

		if (q[n].link != '') embed.setURL(q[n].link)
		return interaction.reply({ embeds: [embed] })
	}
};