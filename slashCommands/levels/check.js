const { EmbedBuilder, ApplicationCommandType } = require('discord.js');
const https = require('https');

module.exports = {
	name: 'level-check',
    description: 'Runs through a list of all users on the server and updates their rank roles',

    run: async (interaction) => {        
        https.get('https://mee6.xyz/api/plugins/levels/leaderboard/450404248635703296', res => {
            let data = ''

            res.on('data', c => {
                data += c
            })

            res.on('end', async () => {
                data = JSON.parse(data)
                await interaction.guild.members.fetch()
                let users = []

                for (let i = 0; i < data.players.length; i++) {
                    let player = data.players[i]
                    if (player.level % 5 == 0) users.push(player)
                }

                for (let i = 0; i < users.length; i++) {
                    try {
                        if (interaction.guild.members.cache.find(member => member.id == users[i].id).roles.cache.some(role => role.name == 'Level ' + users[i].level)) delete users[i]
                    } catch { delete users[i] }
                }
                
                const updated = new EmbedBuilder()
                    .setTitle('Updated Users')
                    .setColor('#294363')
                    .setFooter({
                        text: `Requested by ${interaction.user.username}`,
                        iconURL: interaction.user.displayAvatarURL()
                    })
                    .setTimestamp() 

                const empty = new EmbedBuilder()
                    .setTitle('No Users to Update!')
                    .setColor('#294363')
                    .setFooter({
                        text: `Requested by ${interaction.user.username}`,
                        iconURL: interaction.user.displayAvatarURL()
                    })
                    .setTimestamp() 

                let _empty = true

                users.forEach(u => {
                    if (u != undefined) {
                        let user = interaction.guild.members.cache.find(member => member.id == u.id)
                        let role = interaction.guild.roles.cache.find(role => role.name == 'Level ' + u.level)
                        user.roles.add(role)
                        try { user.roles.remove(interaction.guild.roles.cache.find(role => role.name == 'Level ' + (u.level - 5))) } catch { }
                        console.log(u)
                        updated.addFields({
                            name: u.username,
                            value: 'Level '+(u.level - 5)+' -> Level '+u.level
                        })

                        _empty = false
                    }
                })  

                if (_empty) interaction.reply({ embeds: [empty] })
                else interaction.reply({ embeds: [updated] })
            })
        })
	}
};