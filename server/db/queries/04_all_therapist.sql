SELECT therapists.*, STRING_AGG(specialties.type,',') as type
from therapists
  join therapist_specialties ON therapist_id = therapists.id
  join specialties ON specialties.id = therapist_specialties.specialty_id
GROUP BY therapists.id, therapists.first_name, therapists.last_name, therapists.email, therapists.phone_number, therapists.password,therapists.gender, therapists.image, therapists.date_of_birth, therapists.location, therapists.cost_per_session, therapists.years_of_practice, therapists.title, therapists.session_type, therapists.about  ;





