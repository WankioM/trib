import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import homeimage from '../../assets/vintageflowers.png';
import newUser from "../Register/NewUser";


function HomePage() {

  const navigate = useNavigate();
  

  const handleHomeClick = () => {
    // Navigate to the home route ("/")
    navigate('/');
    
  };

  const handleRegisterClick = () => {
    
    
  
    // Navigate to the route ("/register")
    navigate('/register');
   
  };


  return (
    <div className="desktop">
      <div className="fram">
        <div className="overlap-grouph">
        <img
            className="backg"
            alt="Backgrrrrr"
            src={homeimage}
            />
          <div className="tint" />
          <div className="homeleft" />
          <div className="homeright" />
          <p className="tribute-salat">
            <span className="text-wrapperh">The</span>
            <span className="span"> Commemor</span>
            <span className="text-wrapperh">ation Project</span>
          </p>
          <p className="jannat-ul-firdaus">
            <span className="span">Jannat-ul</span>
            <span className="text-wrapperh">-Firdaus</span>
          </p>
          <div className="divh" 
          style={{ cursor: 'pointer' }}
          onClick={handleHomeClick}>Home</div>
          <div className="text-wrapper-2h" 
          style={{ cursor: 'pointer' }}
          onClick={handleRegisterClick}>Register
          
          </div>
          
          <div className="rectangle-wrapper">
            <p>Search by</p>
            <i className="bi bi-search" style={{ color: 'white' }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;