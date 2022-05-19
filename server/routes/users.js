
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

              req.session.id = user.id;
              res.status(200).send({success: true, message:'Login succesful', user: user});
            } else {
              return res.status(400).send({ success: false, message: 'passwords do not match' });
            }
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

  router.post('/signup', (req, res) => {

    let {  email, password } = req.body
    password = bcrypt.hashSync(password, 12);
    const command = ' INSERT INTO users (email, password) VALUES($1, $2) RETURNING *;'
    const values = [ email, password]
    db.query(command, values).then(data => {

      if (data["rows"].length > 0) {

        req.session.id = data["rows"][0].id
        return res.status(200).send({
          "success": true,
          "message": "Sign up successful",
           "user": data["rows"][0]
        })
      }

    })
      .catch((err) => console.log(err));

  })




  router.post('/profile', (req, res) => {
    let user_id = req.session["id"];
    const {first_name, last_name, date_of_birth, gender, about, image} = req.body.formData;
    const command = `UPDATE users SET first_name = $1, last_name = $2, date_of_birth = $3,gender = $4,about = $5, image = $6 WHERE id = $7 returning *;`
    values = [first_name, last_name, date_of_birth, gender, about, image, user_id]

    db.query(command, values).then(data => {
      if (data["rows"].length > 0) {
        return res.status(200).send({"success": true,
        "message": "Profile page created successfully!",
        "user": data.rows[0]} )
      }
      return res.status(404).send({"message": "Error creating login page"})


    })
  });

    router.post('/logout', (req, res) => {
    req.session = null;
    return res.status(200).send({"message" : "Logout successful"});
  });




  return router;
}