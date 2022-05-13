INSERT INTO users (first_name, last_name, email, password, date_of_birth, gender, about, phone_number, image)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;