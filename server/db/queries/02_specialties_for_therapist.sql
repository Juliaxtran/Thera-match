-- get all specialties for therapist with therapist id - user show page

SELECT type from
specialties
join therapist_specialties on specialty_id = specialties.id
where therapist_id = 1;