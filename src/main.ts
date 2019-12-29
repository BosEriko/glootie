import * as firebase from "firebase/app"
import Discord from 'discord.js'

const client = new Discord.Client()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "glootie-bot.firebaseapp.com",
  databaseURL: "https://glootie-bot.firebaseio.com",
  projectId: "glootie-bot",
  storageBucket: "glootie-bot.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', (message:any) => {
  if (message.content === 'glootie') {
    message.channel.send('Do you want to develop an app?')
  }
})

client.login(process.env.DISCORD_BOT_TOKEN)
