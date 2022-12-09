const { ActivityType } = require('discord.js');
const client = require('..');
const chalk = require('chalk');

client.on("ready", () => {
	client.user.setActivity({ name: "over the DerServer",  type: ActivityType.Watching });
	console.log(chalk.red(`Logged in as ${client.user.tag}!`))
});