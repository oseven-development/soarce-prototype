/** @format */

'use strict'

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
const authToken = 'your_auth_token'
const client = require('twilio')(accountSid, authToken)

module.exports.addRole = async (event, context, callback) => {
  const user = event.body
  client.messages
    .create({
      from: 'whatsapp:+4915773301295',
      body: user.text,
      to: `whatsapp:${user.phoneNumber}`,
    })
    .then(message => console.log(message.sid))

  callback(null, event)
}
