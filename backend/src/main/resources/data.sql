INSERT IGNORE INTO users (id, name, email, password) VALUES
  (1,'Test User','test@example.com','password123');

INSERT IGNORE INTO categories (id,name,slug) VALUES
  (1,'Restaurants','restaurants'),
  (2,'Movie Theatres','theatres'),
  (3,'Tourist Attractions','attractions'),
  (4,'Nightlife & Daylife','nightlife'),
  (5,'Religious & Spiritual','religious');

INSERT IGNORE INTO places (id,name,type,description,lat,lng,rating,price_range,image_url,category_id) VALUES
  (1,'Golden Spoon','Restaurant','Authentic Indian cuisine',37.781,-122.41,4.50,'$$','',1),
  (2,'Sushi Bay','Restaurant','Fresh sushi & sashimi',37.770,-122.420,4.20,'$$$','',1),
  (3,'Grand Cinema','Theatre','IMAX and Dolby',37.780,-122.430,4.30,NULL,'',2),
  (4,'City Museum','Attraction','History and art exhibits',37.790,-122.410,4.60,NULL,'',3),
  (5,'Neon Club','Nightlife','Dance club',37.782,-122.418,4.10,'$$$','',4),
  (6,'St. Mary Cathedral','Religious','Historic church',37.792,-122.412,4.40,NULL,'',5);

INSERT IGNORE INTO reviews (user_id, place_id, rating, review_text) VALUES
  (1,1,5,'Loved the butter chicken!'),
  (1,3,4,'Great sound, comfy seats.');

INSERT IGNORE INTO season_info (city, season, climate, best_time_to_visit) VALUES
  ('San Francisco','Spring','Mild, blooming parks','Mar–May'),
  ('San Francisco','Summer','Foggy mornings, cool evenings','Jun–Aug'),
  ('San Francisco','Autumn','Clear skies, warm days','Sep–Nov'),
  ('San Francisco','Winter','Cool, rainy','Dec–Feb');

INSERT IGNORE INTO events (name,date,venue,category) VALUES
  ('Summer Street Festival','2025-08-10','Downtown','Festival'),
  ('Open Air Movie Night','2025-08-15','Central Park','Movies');
