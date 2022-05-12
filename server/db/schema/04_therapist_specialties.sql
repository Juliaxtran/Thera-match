DROP TABLE IF EXISTS therapist_specialties CASCADE;

CREATE TABLE therapist_specialties (
  id SERIAL PRIMARY KEY NOT NULL,
  therapist_id INTEGER REFERENCES therapists(id) ON DELETE CASCADE NOT NULL,
  specialty_id INTEGER REFERENCES specialties(id) ON DELETE CASCADE NOT NULL
);