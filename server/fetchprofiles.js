// Example route to fetch all deceased individuals
app.get('/api/deceased', (req, res) => {
    const query = 'SELECT * FROM deceased_individuals';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(200).json(results);
    });
  });
  