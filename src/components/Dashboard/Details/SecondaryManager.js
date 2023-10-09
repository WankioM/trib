import React, {useState} from 'react';
import "./SecondaryManager.css"

function SecondaryManager() {
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);


  const handleSubmit = () => {
    setIsProfileUpdated(true);
    
  };

  return (
    <div className="profilesection">
      <div className="fram">
        <div className="overlap-grouph">
          {/* ... previous content ... */}
          
          {/* New utilities */}
          <div className="upload-image">
            <h2>Add a Secondary Profile Manager</h2>
            
            <div className='inputdivs'>
              <label htmlFor="idNumber">ID Number:</label>
              <input type="text" id="idNumber" name="idNumber" />
            </div>
            <div className='inputdivs'>
              <label htmlFor="fullNames">Full Names:</label>
              <input type="text" id="fullNames" name="fullNames" />
            </div>

            <div className='inputdivs'>
              <label htmlFor="emailAddress">Email Address:</label>
              <input type="text" id="emailAddress" name="emailAddress" />
            </div>

            <div className='inputdivs'>
              <label htmlFor="relationship">Relationship to Deceased:</label>
              <input type="text" id="relationship" name="relationship" />
            </div>
           
            {isProfileUpdated ? (
              <div className='inputdivs'>
                <p>Profile updated successfully!</p>
                <p style={{ fontStyle: 'italic' }}>A verification email has been sent to their email address.</p>
              </div>
            ) : (
              <button onClick={handleSubmit}>Done</button>
            )}

            
          </div>
          
          {/* ... remaining content ... */}
        </div>
      </div>
    </div>
  );
};

export default SecondaryManager;
