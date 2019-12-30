import * as firebase from 'firebase/app'
import 'firebase/firestore'
import Discord from 'discord.js'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_PROJECT_NAME}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE_PROJECT_NAME}.firebaseio.com`,
  projectId: process.env.FIREBASE_PROJECT_NAME,
  storageBucket: `${process.env.FIREBASE_PROJECT_NAME}.appspot.com`,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', (message:any) => {
  if (message.content === 'glootie') {
    message.channel.send('Do you want to develop an app?')
  }
})

client.login(process.env.DISCORD_BOT_TOKEN)
