DROP TABLE IF EXISTS creatures;

CREATE TABLE creatures(
  id SERIAL PRIMARY KEY,
  species VARCHAR (100) NOT NULL,
  family VARCHAR (100) NOT NULL,
  habitat VARCHAR (100) NOT NULL,
  diet VARCHAR(50) NOT NULL,
  planet VARCHAR(50) NOT NULL
);

COPY creatures
  (species, family, habitat, diet, planet)
FROM '/Users/raymondhendricks/code/wdi/shoebill/u02_d09_homework/creatures.csv'
    DELIMITER ',' CSV;
