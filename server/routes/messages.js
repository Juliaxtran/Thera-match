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