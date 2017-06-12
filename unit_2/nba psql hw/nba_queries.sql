-- 1. All columns for all players from the New York Knicks (NYK).

nba_db=# SELECT * FROM players WHERE team = 'NYK';

-- 2. All columns for all players from the Indiana Packers (IND) who are under 26 years old.

nba_db=# SELECT * FROM players WHERE team = 'IND' AND age < 26;

-- 3. All columns for all players, ordered from least points scored to most points scored.

nba_db=# SELECT * FROM players ORDER BY points ASC;

-- 4. Name and Points per game (points/games), for the players with the top 20 points per game.

nba_db=# SELECT * FROM players ORDER BY points DESC LIMIT 20;

-- 5. The average age for all players.

nba_db=# SELECT AVG(age) FROM players;

-- 6. The average age for all players on the Oklahoma City Thunder (OKC).

nba_db=# SELECT AVG(age) FROM players WHERE team = 'OKC';

-- 7. The average age for all players who played more than 40 games.

nba_db=# SELECT AVG(age) FROM players WHERE games > 40;

-- PART 4:
-- 8. The team and total points scored from all players on that
-- team (team points) ordered from most team points to least.

nba_db=# SELECT team, SUM(points) FROM players GROUP BY team ORDER BY SUM(points) DESC;

-- 9. The age and the average points per game for that age, ordered from oldest to youngest for all ages.

nba_db=# SELECT age, AVG(points) FROM players GROUP BY age ORDER BY age DESC;

-- 10. The team and the the number of players who score above 12 points per game on that team, ordered from the most number of players to the least number of players.
nba_db=# SELECT team, COUNT(name) FROM players WHERE points > 12 GROUP BY team ORDER BY COUNT(name) DESC;

