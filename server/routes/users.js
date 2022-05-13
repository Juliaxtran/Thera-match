

const router = require('express').Router();
const bcrypt = require('bcryptjs');


module.exports = (db, dbQueries) => {
  // all routes will go here
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send('Wrong email or password');
    }

    console.log("EMAIL PASSWORD ", req.body);

    dbQueries.getUserByEmail(email, password, db)
      .then(user => {
        if (user) {
          console.log("Hello")
          req.session.userID = user.id;
          console.log("Sucess")
        } else {
          return res.status(401).send('No user found');
        }
      })
      .catch(error => {
        console.log(error);
      });

    router.post('/', (req, res) => {
      const user = req.body;
      user.password = bcrypt.hashSync(user.password, 12);
    })




  });

  return router;
}


