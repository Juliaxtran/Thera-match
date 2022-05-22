const router = require('express').Router();


module.exports = (db) => {

  router.get('/specialties', (req, res) => {
    const command = "SELECT * from specialties;";

    db.query(command).then(data => {
      console.log(data, "Data");
      res.json(data.rows);
    })
  });



  return router;
}