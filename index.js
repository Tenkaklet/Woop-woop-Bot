const Discord = require('discord.js');
const dotenv = require('dotenv');

// Create a new client instance
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

// Able to read .env file with credentials with process now.
dotenv.config();

// Client or bot is ready to be used, is connected to the server.
client.once('ready', (e) => {
    console.log('Bot online!' + ' ' + e.user.tag);
});

// Bot logins
client.login(process.env.TOKEN);

// when a message is sent within the server.
client.on('messageCreate', async message => {
    const userMsg = message.content.toLowerCase();
    if(userMsg === 'vad är jag?' || userMsg === 'Vad är jag?') {
        message.reply(`Du är grym ${message.author.username}. Bäst i hela världen!`);
    }
});