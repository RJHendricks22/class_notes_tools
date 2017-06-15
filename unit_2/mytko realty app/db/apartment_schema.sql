
-- add create tables here
DROP TABLE IF EXISTS buildings CASCADE;
DROP TABLE IF EXISTS apartments CASCADE;
DROP TABLE IF EXISTS doormen CASCADE;
DROP TABLE IF EXISTS tenants CASCADE;

-- add create tables here
CREATE TABLE buildings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  address text,
  num_floors int
);
CREATE TABLE doormen (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  experience int,
  shift VARCHAR(100),
  building_id int, FOREIGN KEY(building_id) REFERENCES buildings(id)
);
CREATE TABLE apartments (
  id SERIAL PRIMARY KEY,
  floor int,
  name VARCHAR(100),
  price int,
  sqft int,
  bedrooms int,
  bathrooms int,
  building_id int,
  FOREIGN KEY(building_id) REFERENCES buildings(id)
);
CREATE TABLE tenants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age int,
  gender VARCHAR(100),
  apartment_id int,
  FOREIGN KEY(apartment_id) REFERENCES apartments(id)
);
