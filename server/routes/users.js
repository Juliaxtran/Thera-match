
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
              return res.status(401).send({
                sucess: false, message: 'No user found'
              });
            } if (response) {
              userObj = {
                "id" : user.id,
                "first_name" : user.first_name,
                "last_name" : user.last_name
              }
              req.session.user = userObj;

              res.status(200).send({success: true, message:'Login succesful', user: req.session.user});
            } else {
              return res.json({ success: false, message: 'passwords do not match' });
            }
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
        let userObj = {
          "id" : data["rows"][0].id,
          "first_name" : data["rows"][0].first_name,
          "last_name" : data["rows"][0].last_name
        }
        req.session.user = userObj
        return res.status(200).send({
          "success": true,
          "message": "Sign up successful",
          "user": req.session.user
        })
      }

    })
      .catch((err) => console.log(err));

  })




  router.post('/profile', (req, res) => {
    const user_id = req.session.user["id"];
    const { date_of_birth, gender, about, phone_number } = req.body
    const command = `UPDATE users SET date_of_birth = $1,gender = $2,about = $3, phone_number = $4 WHERE id = $5 returning *;`
    values = [date_of_birth, gender, about, phone_number, user_id]

    db.query(command, values).then(data => {

      if (data["rows"].length > 0) {
        return res.status(200).send({"success": true,
        "message": "Profile Page succesfully created",
        "user": req.session.user} )
      }
      return res.status(404).send({"message": "Error creating login page"})


    })
  });





  return router;
}