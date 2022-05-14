const getUserByEmail = function (email, db) {
  const queryStringEmail = `SELECT *
  FROM users
  WHERE email = $1`
  const values = [email];
  return db
    .query(queryStringEmail, values)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
}

const getTherapistByEmail = function (email, db) {
  const queryStringEmail = `SELECT *
  FROM therapists
  WHERE email = $1`
  const values = [email];
  return db
    .query(queryStringEmail, values)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
}


module.exports = {
  getUserByEmail,
  getTherapistByEmail
}