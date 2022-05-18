
const router = require('express').Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    const user_id = req.session.id;
    const therapist_id = req.query.therapist_id;
    const command = "SELECT message, user_id, therapist_id, messages.id as id, users.first_name as name from messages join users ON user_id = users.id where user_id = $1 AND therapist_id = $2 Limit 5;";
    values = [user_id, therapist_id]
    db.query(command, values).then(data => {
      console.log("data", data)
      res.json(data.rows);
    })
  });

  router.post('/', (req, res) => {
   const user_id = req.session.id ;
    const therapist_id = req.body.therapist_id
    const message = req.body.message
    const command = "Insert into messages (user_id, therapist_id, message, created_at) VALUES ($1, $2, $3, now()) RETURNING * ; "
    values = [user_id, therapist_id, message]
    db.query(command, values).then(data => {
      res.status(200).json(data.rows);
    })
  });


  // router.get('/therapist', (req, res) => {
  //   // const therapist_id = req.sessions["userId"];
  //   const therapist_id = 1
  //   const {user_id} = req.body
  //   const command = "SELECT message from messages where user_id = $1 AND therapist_id = $2";
  //   values = [user_id, therapist_id]
  //   db.query(command, values).then(data => {
  //     console.log(data, "Data");
  //     res.json(data.rows);
  //   })
  // });

  // router.post('/therapist', (req, res) => {
  //   // const therapist_id = req.sessions["userId"];
  //   const therapist_id = 1
  //   const {user_id, message} = req.body
  //   const command = "Insert into messages (user_id, therapist_id, message, created_at) VALUES ($1, $2, $3, now()) RETURNING * ; "
  //   values = [user_id, therapist_id, message]
  //   db.query(command, values).then(data => {
  //     console.log(data, "Data");
  //     res.json(data.rows);

  //     if (data["rows"].length > 0) {
  //       return res.status(200).send("Message sent")
  //     } else {
  //       return res.status(404).send("Unable to send messages")
  //     }



  //   })
  // });





  return router;
}
