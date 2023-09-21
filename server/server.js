const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Database configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kenya2030',
  database: 'myappdb', // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware for parsing JSON requests
app.use(bodyParser.json());
app.use(cors());

// Define your API routes and logic here

// Define a route for handling registration requests
app.post('/api/register', (req, res) => {
    const { deceasedName, dateOfBirth, dateOfPassing, briefDescription, deathCertificateNumber } = req.body;
  
    // You can perform data validation here
  
    // Insert the registration data into the database (you need to configure your MySQL connection)
    const sql = 'INSERT INTO deceased_individuals (name, date_of_birth, date_of_passing, brief_description) VALUES (?, ?, ?, ?)';
    const values = [deceasedName, dateOfBirth, dateOfPassing, briefDescription];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error registering deceased:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Registration successful' });
      }
    });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
