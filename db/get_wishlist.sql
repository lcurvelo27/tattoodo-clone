select b.url from wishlist as a 

left outer join images as b on a.image_id = b.id 

where user_id = $1