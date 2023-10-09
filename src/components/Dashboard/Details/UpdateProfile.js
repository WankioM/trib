import React , { useState ,  useContext}from "react";
import axios from "axios";
import { useAuth , AuthContext } from '../../Context/AuthContext';
import "./UpdateProfile.css";


export const UpdateProfile = ({ generatedId }) => {
  
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const { login } = useContext(AuthContext);
  

  const [formData, setFormData] = useState({
    idNumber: '',
    fullNames: '',
    emailAddress: '',
    relationship: '',
    password: 'defAult',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsProfileUpdated(true);

    axios
      .post('http://localhost:3001/api/registerUser', {formData, generatedId})
      .then((response) => {
        console.log(response.data); // Assuming the API returns a response with status or message
        const profileId = response.data.profileId;
        login(profileId);
        console.log(`profile is at div ${profileId}`)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
    
  };

  return (
    <div className="profilesection">
      <div className="fram">
        <div className="overlap-grouph">
          {/* ... previous content ... */}
          
          {/* New utilities */}
          <div className="upload-image">
            <h3> Account Details</h3>
            
            <div className ='inputdiv'>
              <label htmlFor="idNumber">ID Number:</label>
              <input type="text" id="idNumber" name="idNumber" 
              value={formData.idNumber}
              onChange={handleChange}/>
            </div>
            
            <div className ='inputdiv'>
              <label htmlFor="fullNames">Full Names:</label>
              <input type="text" id="fullNames" name="fullNames" 
              value={formData.fullNames}
              onChange={handleChange}/>
            </div>

            <div className ='inputdiv'>
              <label htmlFor="emailAddress">Email Address:</label>
              <input type="text" id="emailAddress" name="emailAddress" 
              value={formData.emailAddress}
              onChange={handleChange}/>
            </div>

            <div className ='inputdiv'>
              <label htmlFor="relationship">Relationship to Deceased:</label>
              <input type="text" id="relationship" name="relationship" 
              value={formData.relationship}
              onChange={handleChange}/>
            </div>
            
            {isProfileUpdated ? (
              <div className ='inputdiv'>
                <p>Profile updated successfully!</p>
                <p style={{ fontStyle: 'italic' }}>Wait 24 hours for information verification</p>
              </div>
            ) : (
              <button onClick={handleSubmit}>Submit</button>
            )}

            
          </div>
          
          {/* ... remaining content ... */}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

