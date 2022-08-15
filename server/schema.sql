DROP DATABASE IF EXISTS movieList;

CREATE DATABASE movieList;

USE movieList;

CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR (50) NOT NULL,
  year INTEGER,
  runtime TEXT,
  metascore INTEGER,
  imdb INTEGER,
  watched TINYINT(1)
);