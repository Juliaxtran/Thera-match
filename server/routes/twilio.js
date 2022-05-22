require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);


const sendBooking = function( customer_name , therapist_name , phone, date ) {
  console.log("sending message...");
  client.messages
    .create({
      body: `Hello ${therapist_name}! ${customer_name} is interesting in booking a appointment with you on ${date}. Please reach out to them if this works for you.`,
      from: process.env.TWILIO_NUMBER,
      to: `${phone}`
    })
    .then(message => console.log("message id: " + message.sid))
    .catch(err => {
      console.log(err);
    });
};


module.exports =  sendBooking ;
