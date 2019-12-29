import * as admin from 'firebase-admin'
import Discord from 'discord.js'

const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', (message:any) => {
  if (message.content === 'glootie') {
    message.channel.send('Do you want to develop an app?')
  }
})

client.login(process.env.BOT_TOKEN);
