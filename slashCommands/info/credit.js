const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    name: "credit",
    description: "Everyone who helped to make this bot possible. Thanks!",

    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setColor("#294363")
            .setTitle("Credits")
            .setDescription("Everyone who helped make this bot possible!")
            .addFields(
                {
                    name: "KontrollFreek`#0643`",
                    value: "Developer\nFluffy Girl",
                    inline: true,
                },

                {
                    name: "Catster ♡`#8603`",
                    value: "Developer\nThigh Highs Enthusiast",
                    inline: true,
                },

                {
                    name: "Bloody`#0680`",
                    value: "Artist",
                    inline: true
                },

                {
                    name: "DerModster`#1000`",
                    value: "Epic Gamer",
                    inline: true
                }
            )
            .setFooter({
                text: `Requested by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp();

        interaction.reply({ embeds: [embed] })
    }
};