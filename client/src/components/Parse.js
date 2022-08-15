const axios = require('axios');

// var url = '127.0.0.1:3000/movies';
//full url not used

module.exports = {
  getAll: function() {
    return axios.get('/movies');
  },

  /*
  movieData = {
    title:
    year:
    ...
  }
  */
  postMovie: function(movieData) {
    return axios.post('/movies', movieData);
  },

  changeWatch: function(watchData) {
    return axios.put('/movies', watchData);
  }
};