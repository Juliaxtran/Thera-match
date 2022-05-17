const { response } = require('express');

const router = require('express').Router();


module.exports = (db) => {


  router.post('/add', (req, res) => {
    /// add a new match to the user

    const user_id = req.session.id
    // const user_id = 6;
    const  therapist_id  = req.body.therapist_id
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

      router.get('/show', (req, res) => {
        const user_id = req.session.id
        // const user_id = 6;
        const command = `select
        user_id, therapist_id,
        concat(users.first_name,' ', users.last_name)as users_name,
        STRING_AGG(concat(therapists.first_name,' ', therapists.last_name), ', ') as therapist_name, therapists.image
        from matches
        join therapists on therapists.id = therapist_id
        join users on users.id = user_id
        where user_id = $1
        GROUP by user_id, users_name,matches.id, therapists.image
        ORDER by matches.id;`;
        values = [user_id]
        db.query(command, values).then(data => {
          if (data["rows"].length > 0) {
            return res.json(data.rows);

          }
        })
      });









  // router.get('/therapists', (req, res) => {

  //   const command =
  //     `select
  //     therapists.id as therapist_id,
  //   concat(therapists.first_name, ' ', therapists.last_name) as therapists_name,
  //   STRING_AGG(concat(users.first_name, ' ', users.last_name), ', ') as users_name
  //   from matches
  //   join therapists on therapists.id = therapist_id
  //   join users on users.id = user_id
  //   GROUP BY therapists_name,therapists.id
  //   ORDER BY therapists.id`;
  //   db.query(command).then(data => {
  //     if (data["rows"].length > 0) {
  //       res.json(data.rows);

  //     }
  //   })
  // });

  return router;
}