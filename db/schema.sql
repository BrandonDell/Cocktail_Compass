DROP DATABASE IF EXISTS cocktail_compass_db;
CREATE DATABASE cocktail_compass_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
