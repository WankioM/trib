import React from "react";
import axios from "axios";
import "./Profile.css";
import logo from "../../assets/logo1.PNG" ;
import union from "../../assets/Union.png";


export const Profile = () => {
  

  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <img className="union" alt="Union" src={union}/>
            <div className="text-wrapper">Fatimah Ali</div>
            <p className="p">
              A loving mother and cherished friend, touched the lives of those around her with her kindness and warmth
            </p>
            <div className="frame">
              <div className="text-wrapper-2">Home</div>
              <div className="text-wrapper-3">Register</div>
              <div className="frame-2" >
              <p>Search by Name</p>
              <i className="bi bi-search" style={{ color: 'white' }}></i>
                </div>
                

            </div>
            <div className="rectangle">
            <i className="bi bi-arrow-left" style={{ color: 'white' , fontSize: '22px' }}></i>
            </div>
            <div className="rectangle-2" >
            <i className="bi bi-arrow-right" style={{ color: 'white',  fontSize: '22px' }}></i>
            </div>
          </div>
          <div className="text-wrapper-4">1978-2023</div>
          <div className="text-wrapper-5">TributeSalat</div>
        </div>
        <img className="ellipse" alt="Ellipse" src = {logo} />

      </div>
    </div>
  );
};