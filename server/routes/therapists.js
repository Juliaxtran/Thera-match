const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { response } = require('express');


module.exports = (db, dbQueries) => {


  router.get('/', (req, res) => {
    const command = "SELECT therapists.*, STRING_AGG(specialties.type,',') as type from therapists join therapist_specialties ON therapist_id = therapists.id join specialties ON specialties.id = therapist_specialties.specialty_id GROUP BY therapists.id, therapists.first_name, therapists.last_name, therapists.email, therapists.phone_number, therapists.password,therapists.gender, therapists.image, therapists.date_of_birth, therapists.location, therapists.cost_per_session, therapists.years_of_practice, therapists.title, therapists.session_type, therapists.about";
    db.query(command).then(data => {

      if (data["rows"].length > 0) {
        res.json(data.rows);
        //TO FIX
        // return res.status(200).send("it worked")
      }
      //TO FIX
      // res.status(400).send("Trouble loading data")


    })
  });




  // all routes will go here
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send('Wrong email or password');
    }


    dbQueries.getTherapistByEmail(email, db)
      .then(user => {
        if (user) {
          console.log('RD user', user.password);
          bcrypt.compare(req.body.password, user.password, function (err, response) {
            if (err) {
              res.status(401).send('No user found');

            }
            req.session.userID = user.id;
            res.status(200).send("Success!");

          })
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

  router.post('/signup', (req, res) => {

    let { first_name, last_name, email, password } = req.body
    password = bcrypt.hashSync(password, 12);
    const command = ' INSERT INTO therapists (first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *;'
    const values = [first_name, last_name, email, password]
    db.query(command, values).then(data => {


      if (data["rows"].length > 0) {
        req.session.userId = data["rows"][0].id
        console.log("id", data["rows"][0].id)
        return res.status(200).send("it worked")
      }

    })
      .catch((err) => console.log(err));

  })




  router.post('/profile', (req, res) => {
    // const user_id = req.sessions["userId"];
    const user_id = 11;
    const { phone_number, gender, date_of_birth, location, cost_per_session, years_of_practice, title, session_type, about } = req.body
    const command = `UPDATE therapists SET phone_number = $1,gender = $2,date_of_birth = $3, location = $4, cost_per_session = $5, years_of_practice = $6, title = $7, session_type = $8, about = $9  WHERE id = $10 returning *`
    values = [phone_number, gender, date_of_birth, location, cost_per_session, years_of_practice, title, session_type, about, user_id];

    db.query(command, values).then(data => {

      if (data["rows"].length > 0) {
        return res.status(200).send("Profile page created")
      }
      return res.status(404).send("Error creating profile page")


    })
  });

  router.get('/specialties', (req, res) => {
    const user_id = 6;
    values = [user_id]
    dbQueries.getAllSpecialties(values)
      .then((data) => {
        res.json(data.rows);
      })
      .catch(error => {
        console.log(error);
      });
  })



  return router;
}