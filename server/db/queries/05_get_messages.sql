

SELECT  chat -> 'messages' as messages
from messages
where user_id = $1 and therapist_id = $2;


