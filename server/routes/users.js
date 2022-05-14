

const router = require('express').Router();
const bcrypt = require('bcryptjs');


module.exports = (db, dbQueries) => {
  // all routes will go here
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send('Wrong email or password');
    }


    dbQueries.getUserByEmail(email, db)
      .then(user => {
        if (user) {
          console.log('RD user', user.password);
          bcrypt.compare(req.body.password, user.password, function (err, response) {
            if (err) {
              res.status(401).send('No user found');

            }
            req.session.userID = user.id;
            res.status(200).send("Sucess");

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
    const command = ' INSERT INTO users (first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *;'
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



  return router;
}


