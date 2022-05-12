DROP TABLE IF EXISTS messages
CASCADE;

CREATE TABLE messages
(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  therapist_id integer REFERENCES therapists(id) ON DELETE CASCADE NOT NULL,
  chat jsonb
);