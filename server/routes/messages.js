
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
