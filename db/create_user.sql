INSERT INTO users 
(user_id, email)
VALUES 
( $1, $2 )

RETURNING *;