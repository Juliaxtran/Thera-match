const { response } = require("express");
// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'labber',
//   password: 'labber',
//   host: 'localhost',
//   database: 'final'
// });

// pool.connect();


const getUserByEmail = function (email, db) {
  const queryStringEmail = `SELECT *
  FROM users
  WHERE email = $1`
  const values = [email];
  return db
    .query(queryStringEmail, values)
    .then((result) => {
      if (result.rows.length === 0) {
        console.log("Email does not exist");
        return "No email found";
      } else {
        return result.rows[0];
      }

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
      if (result.rows.length === 0) {
        console.log("Email does not exist");
        return "No email found";
      } else {
        return result.rows[0];
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
}


const getAllSpecialties = function (db, options) {
  const queryParams = [];

  let queryString =
    `
    SELECT therapists.*, users.first_name, users.last_name,
    STRING_AGG(specialties.type,',') as type
    FROM therapists
    JOIN therapist_specialties ON therapist_id = therapists.id
    JOIN users ON users.id = therapists.user_id
    JOIN specialties ON specialties.id = therapist_specialties.specialty_id
  `

  if (options.type) {
    const newType = options.type.map((item) => `'${item}'`).join(', ');
    // queryParams.push(`${newType}`);
    // queryParams.push(options.type);
    queryString += `WHERE specialties.type IN (${newType})`
  }

  queryString +=
    `
    GROUP BY therapists.id, therapists.first_name, therapists.last_name, therapists.email, therapists.phone_number, therapists.gender, therapists.image, therapists.date_of_birth, therapists.location, therapists.cost_per_session, therapists.years_of_practice, therapists.title, therapists.session_type, therapists.about, users.first_name, users.last_name;
    `
  console.log(queryString);
  console.log(queryParams);
  return db.query(queryString, queryParams).then((res) => res.rows);
}





module.exports = {
  getUserByEmail,
  getTherapistByEmail,
  getAllSpecialties
}