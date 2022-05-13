SELECT therapists.*, specialties.type as type
from therapists
join therapist_specialties ON therapist_id = therapists.id
join specialties ON specialties.id = therapist_specialties.specialty_id;





