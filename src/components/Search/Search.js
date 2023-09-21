import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeceasedList = () => {
  const [deceasedList, setDeceasedList] = useState([]);

  useEffect(() => {
    axios.get('/api/deceased') // Replace with your actual API endpoint
      .then((response) => {
        setDeceasedList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Deceased Individuals</h1>
      <ul>
        {deceasedList.map((deceased) => (
          <li key={deceased.id}>{deceased.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeceasedList;
