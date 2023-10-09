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
  
    // Insert the registration data into the database (you need to configure your MySQL connection)
    const sql = 'INSERT INTO deceased_individuals (name, date_of_birth, date_of_passing, brief_description) VALUES (?, ?, ?, ?)';
    const values = [deceasedName, dateOfBirth, dateOfPassing, briefDescription];
    console.log( `values : ${values}`);

   const idquery = 'SELECT id FROM deceased_individuals WHERE name = \'' + values[0] + '\'';
    
  
   db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error registering deceased:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // After inserting data into the database and obtaining the generated id
      // Use a parameterized query to retrieve the id
      db.query(idquery, [deceasedName], (err, results) => {
        if (err) {
          console.error('Error:', err);
          // Handle the error
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          if (results.length > 0) {
            const generatedId = results[0].id;
            console.log('Generated ID:', generatedId);
            // Send the response here after both queries are complete
            res.status(201).json({ message: 'Registration successful', generatedId });
          } else {
            console.log('No matching record found.');
            // Send an appropriate response in case of no match
            res.status(404).json({ error: 'No matching record found' });
          }
        }
      });
    }
  });

  });




app.post('/api/registerUser', (req, res) => {
  const { formData, generatedId } = req.body;
  const { idNumber, fullNames, emailAddress, relationship, password } = formData;
  console.log(req.body);

  const sql = 'INSERT INTO users (profilemanagerid, gvtid, username, password, email, relationship_to_deceased) VALUES (NULL, ?, ?, ?, ?, ?)';
  db.query(sql, 
    [idNumber, fullNames, password, emailAddress, relationship],
     (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ message: 'Error registering user' });
      return;
    }
  });

    const profileId = result.insertId;

     // Now, insert the mapping into deceased_individual
    const insertMappingSql = 'INSERT INTO deceased_individuals (profile_manager_id, id) VALUES (?, ?)';
    db.query(insertMappingSql, [profileId, generatedId], (mappingErr) => {
      if (mappingErr) {
        console.error('Error mapping profile to deceased individual:', mappingErr);
        res.status(500).json({ message: 'Error mapping profile to deceased individual' });
        return;
      }
    res.status(200).json({ message: 'Profile manager registered successfully', profileId });
  });
     
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
