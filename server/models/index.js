/*
This file will query the database to get movies or post movies
*/

var db = require('../database');

module.exports = {
  getMovies: function(callback) {
    var queryString = 'SELECT * FROM movies';
    db.query(queryString, (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    });
  },

  postMovie: function(params, callback) {
    var queryString = 'INSERT INTO movies (title, year, runtime, metascore, imdb, watched) VALUES (?, ?, ?, ?, ?, 0)';
    // console.log(params);
    db.query(queryString, params, (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    });
  },

  changeWatch: function(params, callback) {
    var queryString = 'UPDATE movies SET watched = ? WHERE title = ?';
    db.query(queryString, params, (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    });
  }
};
