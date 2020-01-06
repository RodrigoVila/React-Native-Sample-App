//Express is a framework for Node JS. Its great for creating APIs
const express = require('express');
//Body Parser will help us getting data from our request's body
const bodyParser = require('body-parser');
//mySQL to create a connection to our DB.
const mysql = require('mysql');

const connection = mysql.createPool({
  host: '167.250.5.6',
  user: 'fajpriet_rodrigo',
  password: '546235@kd55gkipr4/???',
  database: 'fajpriet_mobile'
});

// Starting our app
const app = express();

//Creating a GET route that returns data from the 'productos' table.
app.get('/productos', function(req, res) {
  //Connection to the DB
  connection.getConnection(function (err, connection) {

    //Running mySQL Query: Select all data from the 'users' table.
    connection.query('SELECT * FROM productos', function (error, results, fields) {
      //If some error occurs, we throw an error.
      if (error) throw error;

      //Getting the 'response' from the database and sending it to our route. This is where the data is.
      res.send(results)
    });
  });
});

//Starting our server
app.listen(3000, () => {
  console.log('Prueba!')
})

