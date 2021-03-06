
const router = require('express').Router();
const sendBooking = require("./twilio.js");

module.exports = (db) => {

  // Get messages for user when clicking on therapist id

  const createConversationId = (user_id, recipient_id) => {

    highest = user_id, lowest = recipient_id;
    if (user_id < recipient_id) {
      highest = recipient_id, lowest = user_id;
    }
    return `${lowest}_${highest}`
  }


  router.get('/', (req, res) => {
    const user_id = req.session.id;
    const recipient_id = req.query.recipient_id;
    const conversation_id = createConversationId(user_id, recipient_id)
    const command = "SELECT message, messages.user_id, recipient_id, messages.id as id, users.first_name as user_name, users.first_name as recipient_name, created_at from messages  left join users  on users.id = messages.user_id  where conversation_id = $1 ";
    values = [conversation_id]
    db.query(command, values).then(data => {
      res.json(data.rows);
    })
  });

  // Post message  when clicking on therpapist id

  router.post('/', (req, res) => {
    const user_id = req.session.id;
    const recipient_id = req.body.recipient_id
    const conversation_id = createConversationId(user_id, recipient_id)
    const message = req.body.message
    const command = "Insert into messages (user_id, recipient_id, message, created_at, conversation_id) VALUES ($1, $2, $3, now(), $4) RETURNING * ; "
    values = [user_id, recipient_id, message, conversation_id]
    db.query(command, values).then(data => {
      res.status(200).json(data.rows);
    })
  });

  router.post('/book', (req, res) => {
    const customer_name = req.body.recipientInfo.users_name;
    const therapist_name = req.body.recipientInfo.therapist_name;
    const phone = req.body.recipientInfo.phone_number;
    const date = req.body.date

    sendBooking(customer_name, therapist_name, phone, date);

    res.status(200).send("Appointment has been requested")


  });




  return router;
}
