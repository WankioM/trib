import React, { Component, useState } from 'react';
import axios from 'axios';
import "./Register.css"
import { useHistory } from 'react-router-dom';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    deceasedName: '',
    dateOfBirth: '',
    dateOfPassing: '',
    briefDescription: '',
    deathCertificateNumber: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Starting submit function');

    // Handle form submission, e.g., send data to the server or perform validation.
    const registrationData = {
      deceasedName: formData.deceasedName,
      dateOfBirth: formData.dateOfBirth,
      dateOfPassing: formData.dateOfPassing,
      briefDescription: formData.briefDescription,
      deathCertificateNumber: formData.deathCertificateNumber,
    };

    // Make a POST request to the server API
    axios
      .post('http://localhost:3001/api/register', registrationData)
      .then((response) => {
        // Registration was successful
        console.log(response.data.message);
        // You can handle success, e.g., redirect to a thank you page
        history.push('/dashboard');
      })
      .catch((error) => {
        // Handle registration error
        console.error('Error registering deceased:', error);
        // You can display an error message to the user
      });
  };

  
    return (
      <div className="registration-container">
        <h2>Register a Death</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="deceasedName">Deceased Name</label>
            <input
              type="text"
              id="deceasedName"
              name="deceasedName"
              value={formData.deceasedName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="dateOfPassing">Date of Passing</label>
            <input
              type="date"
              id="dateOfPassing"
              name="dateOfPassing"
              value={formData.dateOfPassing}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="briefDescription">Brief Description</label>
            <textarea
              id="briefDescription"
              name="briefDescription"
              value={formData.briefDescription}
              onChange={handleInputChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="deathCertificateNumber">Death Certificate Number</label>
            <input
              type="text"
              id="deathCertificateNumber"
              name="deathCertificateNumber"
              value={formData.deathCertificateNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
      </div>
    );
    }


export default RegistrationForm;
