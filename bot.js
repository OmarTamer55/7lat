const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on('ready', () => {
     client.user.setActivity("Text",{type: 'WATCHING'})

});






// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
