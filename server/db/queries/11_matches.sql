
---- Users matching with therapists
select
concat(users.first_name,' ', users.last_name)as users_name,
STRING_AGG(concat(therapists.first_name,' ', therapists.last_name), ', ') as therapists_name, therapists.image
from matches
join therapists on therapists.id = therapist_id
join users on users.id = user_id

GROUP by users_name,matches.id
ORDER by matches.id;

----- Therapists matching with users

select
concat(therapists.first_name,' ', therapists.last_name)as therapists_name,
STRING_AGG(concat(users.first_name,' ', users.last_name), ', ') as users_name
from matches
join therapists on therapists.id = therapist_id
join users on users.id = user_id
where therapist_id = 3
GROUP BY therapists_name;

select
user_id,
concat(users.first_name,' ', users.last_name)as users_name,
STRING_AGG(concat(therapists.first_name,' ', therapists.last_name), ', ') as therapists_name, therapists.image
from matches
join therapists on therapists.id = therapist_id
join users on users.id = user_id
where user_id = 6
GROUP by user_id, users_name,matches.id, therapists.image
ORDER by matches.id;