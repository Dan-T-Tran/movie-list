const express = require('express');
const app = express();
var morgan = require('morgan');
// var cors = require('cors');
// var db = require('./database');
var controllers = require('./controllers');
const PORT = 3000 || process.env.PORT;

app.set('port', PORT);

//Middleware to log and parse data
app.use(morgan('dev'));
// app.use(cors());
app.use(express.json());

//Render the actual html
app.use(express.static('client/dist'));


//On get request to /movieList...
//  Send query to movieList database
//  Receive list of movies
//  SHOULD DO: figure out what to do with an error
app.get('/movies', controllers.getMovies);

app.post('/movies', controllers.postMovie);

app.put('/movies', controllers.changeWatch);



//Allow server to check for requests
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

//res.cookie(key, value) in Express.js