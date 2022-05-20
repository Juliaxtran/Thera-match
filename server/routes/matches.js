const router = require('express').Router();


module.exports = (db) => {

  // Users add therapist to matches by swiping
  router.post('/add', (req, res) => {


    const user_id = req.session.id
    const therapist_id = req.body.therapist_id
    console.log(user_id, "user!!")
    console.log(therapist_id, "therapist!!!")
    const command = "INSERT into matches ( user_id, therapist_id) VALUES ($1, $2) RETURNING * ; "
    values = [user_id, therapist_id];
    db.query(command, values).then(data => {
      res.json(data.rows);

      if (data["rows"].length > 0) {
        //TO FIX: res.status doesnt work
        // return response.status(200).send("Match added")
        console.log("Sucess!")
      } else {
        //TO FIX: res.status doesnt work
        // return res.status(404).send("Unable to send messages")
        console.log("unable to send a match");
      }
    });
  })

  // Users are show matches

  router.get('/show', (req, res) => {
    const user_id = req.session.id
    const command = `select
        matches.user_id, matches.therapist_id, therapists.user_id,
        concat(users.first_name,' ', users.last_name) as users_name,
        STRING_AGG(concat(userst.first_name,' ', userst.last_name), ', ') as therapist_name, therapists.image, therapists.phone_number
        from matches
        join therapists on therapists.id = matches.therapist_id
        join users on users.id = matches.user_id
        join users userst on userst.id = therapists.user_id
        where matches.user_id = $1
        GROUP by matches.user_id, users_name,matches.id, therapists.image, therapists.user_id, therapists.phone_number
        ORDER by matches.id;`;
    const values = [user_id]
    db.query(command, values).then(data => {
      if (data["rows"].length > 0) {
        return res.json(data.rows);

      }
    })
  });



  router.get('/therapists', (req, res) => {
    const user_id = req.session.id
    console.log("##1 user_id", user_id);
    const command = `SELECT id from therapists where user_id = $1;`
    const values = [user_id]
    const command2 = `select user_id , concat(users.first_name, ' ', users.last_name) as user_name, users.image, users.about from matches join users ON users.id = matches.user_id where therapist_id = $1;`

      db.query(command, values).then(data => {
        if (data["rows"].length > 0) {
          const therapist_id = [data.rows[0].id]
          console.log("##2", therapist_id)
          db.query(command2, therapist_id).then(data2 => {
            console.log('##3', data2.rows);
            if (data2.rows.length > 0) {
              res.json(data2.rows);
            }
          })
        }
      })
  })





  return router;
}

