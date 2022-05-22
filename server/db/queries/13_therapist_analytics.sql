select * from messages where recipient_id = 6;

select concat(users.first_name, users.last_name) as user_name, messages.* from messages join users on messages.user_id = users.id where recipient_id = 6 group by created_at, user_name, messages.id, messages.user_id, messages.recipient_id, message, conversation_id order by created_at desc;

select
COUNT(users.*) as num_users from users;

select
COUNT (matches.*) as num_matches from matches where therapist_id = 6;
