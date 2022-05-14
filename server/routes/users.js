

const router = require('express').Router();
const bcrypt = require('bcryptjs');


module.exports = (db, dbQueries) => {
  // all routes will go here
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send('Wrong email or password');
    }



    dbQueries.getUserByEmail(email, password, db)
      .then(user => {
        if (user && bcrypt.compare(password, user.password)) {
          req.session.userID = user.id;
          return res.status(200).send('Login Succesful');
        } else {
          return res.status(401).send('No user found');
        }
      })
      .catch(error => {
        console.log(error);
      });
    });

      router.post('/signup', (req, res) => {

        let { first_name, last_name, email, password} = req.body
        password = bcrypt.hashSync(password, 12);
        const command = ' INSERT INTO users (first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *;'
        const values = [first_name, last_name, email, password]
        db.query(command, values).then(data => {


          if(data["rows"].length > 0) {
            req.session.userId = data["rows"][0].id
            console.log("id",  data["rows"][0].id )
            return res.status(200).send("it worked")
          }
            return res.status(404).send("Error signing up")
        })
        .catch((err) => console.log(err));

      })




        router.post('/profile', (req, res) => {
          const user_id = req.sessions["userId"];
          const {date_of_birth, gender, about, phone_number} = req.body
          const command = `UPDATE users SET date_of_birth = $1,gender = $2,about = $3, phone_number = $4 WHERE id = $5 returning *`
          values = [date_of_birth, gender, about, phone_number, user_id]

          db.query(command, values).then(data => {

            if (data["rows"].length > 0) {
              return res.status(200).send("Profile page created")
            }
            return res.status(404).send("Error creating profile page")


          })
        });





  return router;
}


