import React from 'react';

const PersonCard = ({ person }) => {
  const { fullName, profilePicture, dateOfBirth, dateOfPassing } = person;

  return (
    <div className="person-card">
      <img src={profilePicture} alt={fullName} style={{ maxWidth: '100px'}}/>
      <div className="person-details">
        <p>{fullName}</p>
        <p>Date of Birth: {dateOfBirth}</p>
        <p>Date of Passing: {dateOfPassing}</p>
      </div>
    </div>
  );
};

export default PersonCard;
