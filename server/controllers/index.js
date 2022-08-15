/*
This file will handle dealing with what it gets from the query in models/index.js
  At this point, probably send back list of movies
  Or if failure, throw an error at the user
*/

var models = require('../models');

var randomYear = () => {return (1900 + Math.floor(Math.random() * 120))};
var randomRuntime = () => {
  var time = (90 + Math.floor(Math.random() * 180)).toString();
  return `${time} min`;
};
var randomMetascore = () => {return (Math.floor(Math.random() * 100))};
var randomIMDB = () => {
  var score = Math.random() * 10;
  return score.toFixed(1);
};

module.exports = {
  getMovies: function(req, res) {
    return models.getMovies((err, response) => {
      if (err) {
        throw(err);
      } else {
        res.json(response);
      }
    });
  },

  postMovie: function(req, res) {
    // var params = [req.body.title, req.body.year, req.body.runtime, req.body.metascore, req.body.imdb];
    var params = [req.body.title, randomYear(), randomRuntime(), randomMetascore(), randomIMDB()];

    models.postMovie(params, (err, response) => {
      if (err) {
        throw(err);
      } else {
        res.json(response);
      }
    });
  },

  changeWatch: function(req, res) {

    //var params = [watched status, movie title]
    var params = [req.body.watched, req.body.title];

    models.changeWatch(params, (err, response) => {
      if (err) {
        throw(err);
      } else {
        res.json(response);
      }
    });
  }
};