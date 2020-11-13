const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
    if (message.content === `#ping`) {
        message.channel.send(`pong.`);
    }
else if (message.content === `#server`) {
    message.channel.send(`Nom du server : ${message.guild.name}\n Nombre d'utilisateurs: ${message.guild.memberCount}`);
    }
});

client.login(token);