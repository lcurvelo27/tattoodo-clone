INSERT INTO wishlist 
(image_id, user_id)
VALUES 
($1, $2)

RETURNING * 