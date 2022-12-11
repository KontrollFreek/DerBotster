const { EmbedBuilder } = require('discord.js');
const client = require('..');
const https = require('https');

client.on('messageCreate', async message => {
	if (message.guild.id != '450404248635703296') return
	https.get('https://mee6.xyz/api/plugins/levels/leaderboard/450404248635703296', res => {
		let data = ''

		res.on('data', c => {
			data += c
		})

		res.on('end', async () => {
			data = JSON.parse(data)
			await message.guild.members.fetch()
			let users = []

			for (let i = 0; i < data.players.length; i++) {
				let player = data.players[i]
				if (player.level % 5 == 0) users.push(player)
			}

			for (let i = 0; i < users.length; i++) {
				try {
					if (message.guild.members.cache.find(member => member.id == users[i].id).roles.cache.some(role => role.name == 'Level ' + users[i].level)) delete users[i]
				} catch { delete users[i] }
			}

			users.forEach(u => {
				if (u != undefined) {
					let user = message.guild.members.cache.find(member => member.id == u.id)
					let role = message.guild.roles.cache.find(role => role.name == 'Level ' + u.level)
					user.roles.add(role)
					try { user.roles.remove(message.guild.roles.cache.find(role => role.name == 'Level ' + (u.level - 5))) } catch { }
					console.log(u)
				}
			})
		})
	})
});