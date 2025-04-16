-- Drop table if elect_stations exists
DROP TABLE IF EXISTS elec_stations CASCADE;

-- Create new table
CREATE TABLE elec_stations (
	Fuel_Type_Code VARCHAR (4) NOT NULL,
	State VARCHAR (2) NOT NULL,
	Status_Code VARCHAR (1) NOT NULL,
	ID INT NOT NULL PRIMARY KEY,
	Access_Code VARCHAR(7) NOT NULL
);

-- Delete Puerto Rico (PR) from Table
DELETE FROM elec_stations
WHERE State = 'PR';

-- View table columns and datatypes
SELECT * FROM elec_stations;

-- Drop table if state_stations exists
DROP TABLE IF EXISTS state_stations CASCADE;

-- New Table with Electric Vehicles per State
CREATE TABLE state_stations (
	State VARCHAR(2) NOT NULL,
	station_count INT NOT NULL
);

-- Creating content from elec_stations to go into state_stations
INSERT INTO state_stations (State, station_count)
SELECT State, COUNT(*) AS station_count
FROM elec_stations
GROUP BY State
ORDER BY State;

-- View table state_stations
SELECT * FROM state_stations;

-- Drop table if access_stations exists
DROP TABLE IF EXISTS access_stations CASCADE;

-- New table with Electric Vehicles per State by access code
CREATE TABLE access_stations (
	State VARCHAR(2) NOT NULL,
	Access_Code VARCHAR(7) NOT NULL,
	station_count INT NOT NULL
);

-- Creating content from elec_stations to go into access_stations
INSERT INTO access_stations (State, Access_Code, station_count)
SELECT State, Access_Code, COUNT (*) AS station_count
FROM elec_stations
GROUP BY State, Access_Code
ORDER BY State, Access_Code;

-- View table access_stations
SELECT * FROM access_stations;

-- Drop table if status_stations exists
DROP TABLE IF EXISTS status_stations CASCADE;

-- New table with Electric Vehicles per State by status code
CREATE TABLE status_stations (
	State VARCHAR(2) NOT NULL,
	Status_Code VARCHAR (1) NOT NULL,
	station_count INT NOT NULL
);

-- Creating content from elec_stations to go into status_stations
INSERT INTO status_stations (State, Status_Code, station_count)
SELECT State, Status_Code, COUNT (*) AS station_count
FROM elec_stations
GROUP BY State, Status_Code
ORDER BY State, Status_Code;

-- View table status_stations
SELECT * FROM status_stations;
