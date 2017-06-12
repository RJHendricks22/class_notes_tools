DROP TABLE IF EXISTS jedis;

CREATE TABLE jedis (
  id serial PRIMARY KEY,
  name varchar(50) NOT NULL,
  lightsaber_color varchar(50) NOT NULL,
  years_training integer NOT NULL,
  tempted_by_dark_side boolean NOT NULL,
  temptation varchar(50) NOT NULL
);

INSERT INTO jedis (name, lightsaber_color, years_training, tempted_by_dark_side, temptation) VALUES
  ('Darth Ali', 'white', 14, FALSE, 'green slime'),
  ('Artur Fett', 'blue', 12, FALSE, 'negative film'),
  ('Barry Sideous', 'gray', 15, FALSE, 'soccer'),
  ('Ben-3P0', 'purple', 18, FALSE, 'graffiti'),
  ('Brooklynebacca','red',7,TRUE, 'kickflips'),
  ('Chelsea Binks', 'green', 14, FALSE, 'Dos Toros'),
  ('Craig Kenobi', 'red', 7, TRUE, 'crashing space shuttles'),
  ('Dany Solo', 'red', 19, TRUE, 'German'),
  ('Liz Windu', 'red', 9, TRUE, 'sports'),
  ('Erin Ren', 'orange', 14, FALSE, 'C++'),
  ('Jessica Maul', 'green', 8, FALSE, 'cheating at pokemon'),
  ('Khem-the-Hutt', 'red', 19, TRUE, 'Colorado'),
  ('Kristyn Kenobi', 'blue', 10, FALSE, 'photography '),
  ('Laura-Gon-Jinn', 'orange', 14, FALSE, 'anime'),
  ('Luke-TR8R', 'red', 8, TRUE, 'magic'),
  ('Maria Skywalker', 'blue', 6, TRUE, 'accurate physics'),
  ('Mo-Mo-D2', 'red', 2, TRUE, 'tourists'),
  ('Nigel Tarkin', 'purple',20, FALSE, 'The Office'),
  ('Ray Calrissian', 'red',14, TRUE, 'fine whiskey'),
  ('Scotta Kota', 'yellow', 100, FALSE, 'Tom Sawyer'),
  ('Shannon Aoun', 'purple',9, FALSE, 'basketball'),
  ('Stacey Gunray', 'brown',13, FALSE, 'Corgis'),
  ('Sith Lord Adam', 'gray', 12, FALSE, 'Guinea Pigs');
