DROP TABLE IF EXISTS matches
CASCADE;

CREATE TABLE matches
(
  id SERIAL NOT NULL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  therapist_id INTEGER REFERENCES therapists(id) ON DELETE CASCADE NOT NULL
);