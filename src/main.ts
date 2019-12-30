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

// TODO: Put your prefix on Firestore and make it so that servers are able to define their own prefix
const prefix = `$`

client.once(`ready`, () => {
  console.log(`Ready!`)
})

client.on(`message`, (message:any) => {
  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send('Pong.')
  } else if (message.content.startsWith(`${prefix}beep`)) {
    message.channel.send(`Boop.`)
  }
  // TODO: Use db properly. For now this is just a way to use Firestore so you don't forget.
  db.collection(`message`).add({
    message: message.content
  })
  .then(function(docRef) {
    console.log(`Document written with ID: `, docRef.id)
  })
  .catch(function(error) {
    console.error(`Error adding document: `, error)
  })
})

client.login(process.env.DISCORD_BOT_TOKEN)
