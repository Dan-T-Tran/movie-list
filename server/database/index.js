var mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: 'root',
  database: 'movieList'
});

module.exports = dbConnection;