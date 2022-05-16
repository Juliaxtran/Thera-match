-- get user matches for therapist  - Admin

SELECT user_id from matches
where therapist_id = 1;


UPDATE users SET first_name = 'julia', last_name = 'tran', date_of_birth = '1890-01-23',gender = 'female',about = 'sad', image = '123' WHERE id = 6 returning *;