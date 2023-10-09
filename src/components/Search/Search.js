import React from 'react';
import PersonCard from './PersonCard';
import './searchpage.css'
import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';
import profile3 from '../../assets/profile3.png';
import profile4 from '../../assets/profile4.png';
import union from '../../assets/Union.png';
import profile5 from '../../assets/profile5.png';
import profile6 from '../../assets/profile6.png';



const peopleData = [
  {
    fullName: 'John Doe',
    profilePicture: profile1,
    dateOfBirth: 'January 1, 1980',
    dateOfPassing: 'December 31, 2020',
  },

  {
    fullName: 'Ali Hassan',
    profilePicture: profile2,
    dateOfBirth: 'March 10, 1992',
    dateOfPassing: 'October 15, 2021',
  },
  {
    fullName: 'Fatima Ahmed',
    profilePicture: profile3,
    dateOfBirth: 'November 25, 1985',
    dateOfPassing: 'July 5, 2020',
  },
  {
    fullName: 'Muhammad Khan',
    profilePicture: profile4,
    dateOfBirth: 'April 5, 1978',
    dateOfPassing: 'September 12, 2019',
  },

  {
    fullName: 'Amina Ali',
    profilePicture: union,
    dateOfBirth: 'February 14, 1990',
    dateOfPassing: 'November 30, 2021',
  },
  {
    fullName: 'Ibrahim Malik',
    profilePicture: profile5,
    dateOfBirth: 'July 7, 1983',
    dateOfPassing: 'March 25, 2020',
  },
  {
    fullName: 'Zainab Ahmed',
    profilePicture: profile6,
    dateOfBirth: 'September 18, 1975',
    dateOfPassing: 'December 10, 2019',
  },
  {
    fullName: 'Yusuf Khan',
    profilePicture: profile1,
    dateOfBirth: 'October 23, 1987',
    dateOfPassing: 'June 15, 2020',
  },
  {
    fullName: 'Sara Abbas',
    profilePicture: 'profile8.jpg',
    dateOfBirth: 'May 12, 1995',
    dateOfPassing: 'August 20, 2021',
  },

  {
    fullName: 'Amina Ali',
    profilePicture: 'profile4.jpg',
    dateOfBirth: 'February 14, 1990',
    dateOfPassing: 'November 30, 2021',
  },
  {
    fullName: 'Ibrahim Malik',
    profilePicture: 'profile5.jpg',
    dateOfBirth: 'July 7, 1983',
    dateOfPassing: 'March 25, 2020',
  },
  {
    fullName: 'Zainab Ahmed',
    profilePicture: 'profile6.jpg',
    dateOfBirth: 'September 18, 1975',
    dateOfPassing: 'December 10, 2019',
  },
  {
    fullName: 'Yusuf Khan',
    profilePicture: 'profile7.jpg',
    dateOfBirth: 'October 23, 1987',
    dateOfPassing: 'June 15, 2020',
  },
  {
    fullName: 'Sara Abbas',
    profilePicture: 'profile8.jpg',
    dateOfBirth: 'May 12, 1995',
    dateOfPassing: 'August 20, 2021',
  },

  {
    fullName: 'John Doe',
    profilePicture: 'profile1.jpg',
    dateOfBirth: 'January 1, 1980',
    dateOfPassing: 'December 31, 2020',
  },
  // Add more dummy data here
];

const DeceasedList = () => {
  return (
    <div className="search-page">
      <h2>Search Results</h2>
      <div className="person-list">
        {peopleData.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default DeceasedList ;

