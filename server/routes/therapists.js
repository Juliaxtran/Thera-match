const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { response } = require('express');


module.exports = (db, dbQueries) => {


  // router.get('/', (req, res) => {
  //   const command = "SELECT therapists.*, STRING_AGG(specialties.type,',') as type from therapists join therapist_specialties ON therapist_id = therapists.id join specialties ON specialties.id = therapist_specialties.specialty_id GROUP BY therapists.id, therapists.first_name, therapists.last_name, therapists.email, therapists.phone_number, therapists.password,therapists.gender, therapists.image, therapists.date_of_birth, therapists.location, therapists.cost_per_session, therapists.years_of_practice, therapists.title, therapists.session_type, therapists.about";
  //   db.query(command).then(data => {

  //     if (data["rows"].length > 0) {
  //       res.json(data.rows);
  //       //TO FIX
  //       // return res.status(200).send("it worked")
  //     }
  //     //TO FIX
  //     // res.status(400).send("Trouble loading data")


  //   })
  // });





  // all routes will go here
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send('Wrong email or password');
    }


    dbQueries.getTherapistByEmail(email, db)
      .then(therapist => {
        if (req.body.password === therapist.password) {

          console.log('RD user', therapist.password);

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

    let options = { type: req.query.specialties };
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



  router.get('/info', (req, res) => {
    const user_id = req.session.id
    const command = `SELECT id from therapists where user_id = $1;`
    const values = [user_id]
    const command2 = `select
    COUNT (matches.*) as num_matches from matches where therapist_id = $1;`
    const command3 = `select COUNT(users.*) as num_users from users;`

      db.query(command, values).then(data => {
        if (data["rows"].length > 0) {
          const therapist_id = [data.rows[0].id]
          console.log("##2", therapist_id)
          db.query(command2, therapist_id).then(data2 => {
            console.log('##3', data2.rows);
            if (data2.rows.length > 0) {
              db.query(command3).then(data3 => {
                console.log('##4', data3.rows);
                if (data3.rows.length > 0) {
                    res.status(200).send([data2.rows, data3.rows]);
                }
              })
            }
          })
        }
      })
  })



  return router;
}