DROP TABLE IF EXISTS messages
CASCADE;

CREATE TABLE messages
(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  recipient_id integer REFERENCES users(id) ON DELETE CASCADE ,
  message text,
  created_at TIMESTAMP,
  conversation_id VARCHAR(250)
);