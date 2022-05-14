<<<<<<< HEAD
const { query } = require('express');
const express = require('express');
const router = require('.');
const app = express()


module.exports = function (db) {
  const addToMessages = (message, user_id, therapist_id) => {
    const queryString = `
    INSERT INTO MESSAGES >>><<<`;

    return db.query(queryString, [message, user_id, therapist_id]);
  };

  const getMessages = (messages) => {
    const queryString = `SELECT  chat -> 'messages' as messages
    from messages
    where user_id = $1 and therapist_id = $2,`

    return db.query(queryString, [messages]).then(res => res.rows);
  };


  router.get('/', (req, res) => {
    let id = req.params.user_id;
    let user = req.session.userID;
    let message = req.params.message;
    Promise
    .all([getMessages(messages)])
    .then(([resultData, resultMessage, activeUser]) => {
      const data = resultData[0];
      const messages = resultMessage;
      res.render('test', { data, messages, activeUser });
    });
  });

  router.post('/:messages', (req, res) => {
    const messageID = req.params.messages_ID; 
    const userID = req.session.userID;
  })

  return router;
}
=======

const router = require('express').Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    // const user_id = req.sessions["userId"];
    const user_id = 1
    const {therapist_id} = req.body
    const command = "SELECT message from messages where user_id = $1 AND therapist_id = $2";
    values = [user_id, therapist_id]
    db.query(command, values).then(data => {
      console.log(data, "Data");
      res.json(data.rows);
    })
  });

  router.post('/', (req, res) => {
    // const user_id = req.sessions["userId"];
    const user_id = 1
    const {therapist_id, message} = req.body
    const command = "Insert into messages (user_id, therapist_id, message, created_at) VALUES ($1, $2, $3, now()) RETURNING * ; "
    values = [user_id, therapist_id, message]
    db.query(command, values).then(data => {
      console.log(data, "Data");
      res.json(data.rows);
    })
  });


  router.get('/therapist', (req, res) => {
    // const therapist_id = req.sessions["userId"];
    const therapist_id = 1
    const {user_id} = req.body
    const command = "SELECT message from messages where user_id = $1 AND therapist_id = $2";
    values = [user_id, therapist_id]
    db.query(command, values).then(data => {
      console.log(data, "Data");
      res.json(data.rows);
    })
  });

  router.post('/therapist', (req, res) => {
    // const therapist_id = req.sessions["userId"];
    const therapist_id = 1
    const {user_id, message} = req.body
    const command = "Insert into messages (user_id, therapist_id, message, created_at) VALUES ($1, $2, $3, now()) RETURNING * ; "
    values = [user_id, therapist_id, message]
    db.query(command, values).then(data => {
      console.log(data, "Data");
      res.json(data.rows);

      if (data["rows"].length > 0) {
        return res.status(200).send("Message sent")
      } else {
        return res.status(404).send("Unable to send messages")
      }



    })
  });





  return router;
}
>>>>>>> 4e1a47ab3eb91c557d93fed1a8fc4e3e3e7ee668
