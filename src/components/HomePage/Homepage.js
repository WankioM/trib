import React from "react";
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./Home.css";

export const Home = () => {

  const history = useHistory();

  const handleHomeClick = () => {
    // Navigate to the home route ("/")
    history.push('/');
  };

  const handleRegisterClick = () => {
    // Navigate to the home route ("/")
    history.push('/register');
  };


  return (
    <div className="desktop">
      <div className="fram">
        <div className="overlap-grouph">
          <img className="backg" alt="Backg" src="backg.png" />
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
          <Link to="/register">Go to Registration</Link>
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