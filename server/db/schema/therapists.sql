DROP TABLE IF EXISTS therapists CASCADE;

CREATE TABLE therapists (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number INTEGER(10) NOT NULL,
  password VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  image VARCHAR(255),
  date_of_birth DATE NOT NULL,
  location VARCHAR(255) NOT NULL,
  cost_per_session INTEGER DEFAULT 0 NOT NULL,
  years_of_practice SMALLINT DEFAULT 0,
  title VARCHAR(255) NOT NULL,
  session_type VARCHAR(255) NOT NULL
);