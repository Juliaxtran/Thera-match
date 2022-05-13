DROP TABLE IF EXISTS therapists CASCADE;

CREATE TABLE therapists (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  gender VARCHAR(255),
  image VARCHAR(255),
  date_of_birth DATE ,
  location VARCHAR(255),
  cost_per_session INTEGER DEFAULT 0 ,
  years_of_practice SMALLINT DEFAULT 0,
  title VARCHAR(255) ,
  session_type VARCHAR(255),
  about text
);