DROP TABLE IF EXISTS specialties CASCADE;

CREATE TABLE specialties (
  id SERIAL PRIMARY KEY REFERENCES therapist_specialties(specialty_id) ON DELETE CASCADE NOT NULL ,
  type VARCHAR(255) NOT NULL
);