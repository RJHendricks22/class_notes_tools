-- empty out DB
DROP TABLE IF EXISTS players;

-- add create table here

CREATE TABLE players(
  name varchar(100),
  age integer,
  team varchar(50),
  games integer,
  points integer
);

-- this needs to include YOUR PATH!! YOURS! NOT THE PATH LISTED BELOW!
COPY players
  (name, age, team, games, points)
FROM '/Users/raymondhendricks/code/wdi/shoebill/u02_d03_homework/nba_season_2011_2012.csv'
    DELIMITER ',' CSV;
