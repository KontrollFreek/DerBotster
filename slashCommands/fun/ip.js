const { EmbedBuilder, ApplicationCommandType } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    name: "ip",
    description: "Makes up a random IP address",
    options: [
        {
            name: 'user',
            description: 'User you want to generate IP for',
            type: 6,
            required: false
        }
    ],
    
    run: async (client, interaction) => {
        Math.seed = function (seed) {
            var m = 2**35 - 31
            var a = 185852
            var s = seed % m
            return (s = s * a % m) / m
        }

        do var time = Math.floor(Math.random() * 5000)
        while (time < 1000)

        var timeSeconds = Math.round(time / 100) / 10 + 's'

        var user = interaction.user.id
        if (interaction.options.getUser('user') != null) user = interaction.options.getUser('user').id

        var s = user.split('')

        var rnd1 = Math.floor(Math.seed(parseInt(s[0] + s[1] + s[2] + s[3])) * 255)
        var rnd2 = Math.floor(Math.seed(parseInt(s[4] + s[5] + s[6] + s[7] + s[8])) * 255)
        var rnd3 = Math.floor(Math.seed(parseInt(s[9] + s[10] + s[11] + s[12])) * 255)
        var rnd4 = Math.floor(Math.seed(parseInt(s[13] + s[14] + s[15] + s[16] + s[17])) * 255)

        const IP = new EmbedBuilder()
            .setTitle("Finding IP address...")
            .setColor("#294363")
            .setFooter({
                text: `Requested by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp();

        const IP2 = new EmbedBuilder()
            .setTitle("IP Address found!")
            .setDescription(`IP Address: \`${rnd1}.${rnd2}.${rnd3}.${rnd4}\` | User: <@${user}> | Seconds Elapsed: \`${timeSeconds}\``)
            .setColor("#294363")
            .setFooter({
                text: `Requested by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp();

        await interaction.reply({ embeds: [IP] })
        await wait(time)
        interaction.editReply({ embeds: [IP2] })
    }
};