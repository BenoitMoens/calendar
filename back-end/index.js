const express = require('express');
const app = express();
const port = 5000;
const connection = require('./config')

const router = express.Router();

app.get('/', (request, response) => {
  response.send('Welcome to Express');
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});


app.post('/api/calendars', (req, res) => {
  console.log("I am in the route")
  const newCalendar = req.body.data
  // connection to the database, and selection
  connection.query('INSERT INTO   mycalendar set ?', newCalendar, (err, results) => {

    if (err) {

      //  If an error has occurred, then the user is informed of the error
      res.status(500).send('Erreur lors de la récupération des employés');
    } else {

      // If everything went well, we send the result of the SQL query as JSON.
      res.json(results);
    }
  });
});



app.get('/api/calendars', (req, res) => {
    
    // connection to the database, and selection
    connection.query('SELECT * from mycalendar', (err, results) => {
  
      if (err) {
  
        //  If an error has occurred, then the user is informed of the error
        res.status(500).send('Erreur lors de la récupération des employés');
      } else {
  
        // If everything went well, we send the result of the SQL query as JSON.
        res.json(results);
      }
    });
  });

  