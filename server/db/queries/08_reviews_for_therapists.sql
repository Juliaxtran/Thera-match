SELECT review, therapists.id
FROM reviews
JOIN therapists ON therapists.id = reviews.therapist_id;