const { EmbedBuilder, ApplicationCommandType } = require('discord.js');
const https = require('https');

module.exports = {
	name: 'level-check',
    description: 'Runs through a list of all users on the server and updates their rank roles',

    run: async (client, interaction) => {        
        https.get('https://mee6.xyz/api/plugins/levels/leaderboard/450404248635703296', res => {
            let data = ''

            res.on('data', c => {
                data += c
            })

            res.on('end', () => {
                // const data = new EmbedBuilder()
                //     .setTitle('Response')
                //     .setDescription()
                //     .setColor('#294363')
                //     .setFooter({
                //         text: `Requested by ${interaction.user.username}`,
                //         iconURL: interaction.user.displayAvatarURL()
                //     })
                //     .setTimestamp()     
                data = JSON.parse(data)
                let users = []

                for (let i = 0; i < data.players.length; i++) {
                    let player = data.players[i]
                    users.push(`${player.username}'s level is ${player.level % 5 == 0 ? 'not ' : ''}a multiple of 5 (${player.level})`)
                }

                interaction.reply(users.join('\n').slice(0, 1997) + '...')
            })
        })
	}
};