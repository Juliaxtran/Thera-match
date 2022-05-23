const router = require('express').Router();
const bcrypt = require('bcryptjs');



module.exports = (db, dbQueries) => {

  // all routes will go here
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send('Wrong email or password');
    }


    dbQueries.getTherapistByEmail(email, db)
      .then(therapist => {
        if (req.body.password === therapist.password) {
          req.session.id = therapist.id;
          res.status(200).send("Success!");

        }
      })
  });


  router.post('/signup', (req, res) => {

    let { email, password } = req.body
    password = bcrypt.hashSync(password, 12);
    const command = ' INSERT INTO therapists (email, password) VALUES($1, $2) RETURNING *;'
    const values = [email, password]
    db.query(command, values).then(data => {
      if (data["rows"].length > 0) {

        req.session.id = data["rows"][0].id
        return res.status(200).send({
          "success": true,
          "message": "Sign up successful",
          "therapistId": req.session.id
        })
      }

    })
      .catch((err) => console.log(err));

  })

  router.post('/profile', (req, res) => {
    let therapist_id = req.session.id
    const { first_name, last_name, date_of_birth, gender, about, image, location, title, cost_per_session, years_of_practice, session_type } = req.body.formData;
    const command = `UPDATE therapists SET first_name = $1, last_name = $2, date_of_birth = $3, gender = $4, about = $5, image = $6, location = $7, title = $8, cost_per_session = $9, years_of_practice = $10, session_type = $11 WHERE id = $12 returning *;`
    values = [first_name, last_name, date_of_birth, gender, about, image, location, title, cost_per_session, years_of_practice, session_type, therapist_id];

    db.query(command, values).then(data => {
      if (data["rows"].length > 0) {
        return res.status(200).send({
          "success": true,
          "message": "Profile page created successfully!",
          "therapistID": req.session.id
        })
      }
      return res.status(404).send("Error creating profile page")

    })
  });

  router.get('/specialties', (req, res) => {

    let options = { type: req.query.specialties, gender: req.query.gender, session: req.query.session, minimum: req.query.minimum, maximum: req.query.maximum };
    // console.log("HELLLOOOOOOOOOO", req.query);
    dbQueries.getAllSpecialties(db, options)
      .then((rows) => {
        res.json(rows);
      })
      .catch(error => {
        console.log(error);
      });
  })
  router.post('/logout', (req, res) => {
    req.session.id = null;
    return res.status(200).send({ "message": "Logout successful" });
  });


  router.get('/reviews', (req, res) => {
    const command = "SELECT concat(users.first_name,' ', users.last_name) as name, review  from reviews join users on user_id = users.id;"

    db.query(command).then(data => {
      res.json(data.rows);
    })
  });



  return router;
}