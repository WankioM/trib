import React, { Component } from 'react';
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';
import UpdateProfile from './Details/UpdateProfile';
import SecondaryManager from './Details/SecondaryManager';
import Comments from './Details/Comments';
import MediaManagement from './Details/Media';
import Sadaqah from './Details/Sadaqah';
import { AuthContext } from '../Context/AuthContext';
import BiologyInput from './Details/Biology';



class ProfileManagerDashboard extends Component {

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      showUpdateProfile: true,
      showAddSecondaryManager: false,
      showViewComments: false,
      showCreateSadaqahLink: false,
      showUpdateCoverImage: false,
      showAddAdditionalMedia: false,

    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  handleUpdateProfile =() => {

    this.setState((prevState) => ({
      showAddAdditionalMedia: false,
    }));

    this.setState((prevState) => ({
      showCreateSadaqahLink: false,
    }));

    this.setState((prevState) => ({
      showViewComments: false,
    }));

    this.setState((prevState) => ({
      showUpdateProfile: true,
    }));

    this.setState((prevState) => ({
      showAddSecondaryManager: false,
    }));

    this.setState((prevState) => ({
      showBiology: false,
    }));

  }

  handleAddSecondaryManager = () => {

    this.setState((prevState) => ({
      showAddAdditionalMedia: false,
    }));

    this.setState((prevState) => ({
      showCreateSadaqahLink: false,
    }));

    this.setState((prevState) => ({
      showViewComments: false,
    }));


    this.setState((prevState) => ({
      showUpdateProfile: false,
    }));
    
    this.setState((prevState) => ({
      showAddSecondaryManager: true,
    }));

    this.setState((prevState) => ({
      showBiology: false,
    }));

  }

  handleViewComments = () => {

    this.setState((prevState) => ({
      showAddAdditionalMedia: false,
    }));

    this.setState((prevState) => ({
      showCreateSadaqahLink: false,
    }));

    this.setState((prevState) => ({
      showAddSecondaryManager: false,
    }));


    this.setState((prevState) => ({
      showUpdateProfile: false,
    }));

    this.setState((prevState) => ({
      showViewComments: true,
    }));

    this.setState((prevState) => ({
      showBiology: false,
    }));
  }

  handleCreateSadaqahLink = () => {

    this.setState((prevState) => ({
      showAddAdditionalMedia: false,
    }));

    this.setState((prevState) => ({
      showViewComments: false,
    }));


    this.setState((prevState) => ({
      showAddSecondaryManager: false,
    }));

    
    this.setState((prevState) => ({
      showUpdateProfile: false,
    }));

    this.setState((prevState) => ({
      showCreateSadaqahLink: true,
    }));

    this.setState((prevState) => ({
      showBiology: false,
    }));
  }



  handleAddAdditionalMedia = () => {
    this.setState((prevState) => ({
      showCreateSadaqahLink: false,
    }));

    this.setState((prevState) => ({
      showAddSecondaryManager: false,
    }));


    this.setState((prevState) => ({
      showViewComments: false,
    }));


    this.setState((prevState) => ({
      showUpdateProfile: false,
    }));

    this.setState((prevState) => ({
      showAddAdditionalMedia: true,
    }));

    this.setState((prevState) => ({
      showBiology: false,
    }));
  }

  handleBiology = () => {
    this.setState((prevState) => ({
      showCreateSadaqahLink: false,
    }));

    this.setState((prevState) => ({
      showAddSecondaryManager: false,
    }));


    this.setState((prevState) => ({
      showViewComments: false,
    }));


    this.setState((prevState) => ({
      showUpdateProfile: false,
    }));

    this.setState((prevState) => ({
      showAddAdditionalMedia: false,
    }));

    this.setState((prevState) => ({
      showBiology: true,
    }));


  }

  

  render() {
    const { generatedId } = (this.context);
    console.log(`This context ${this.context}`);
    for (const key in this.context) {
      const value = this.context[key];
      console.log(`kk ${key}: ${value}`);
    }
    return (
      <div className="dashboard">
        
      <div className="profile-manager-dashboard">
      <i class="bi bi-house-door-fill" style={{ fontSize: '34px', padding: '150px' }}></i>
       
      
        {/* Additional Functionality Buttons */}
        <button onClick={this.handleUpdateProfile}>
        <span className="buttontext">Update Profile</span>
        <i class="bi bi-chevron-right"></i></button>
        <button onClick={this.handleAddSecondaryManager}>Add Secondary Profile Manager
        <i class="bi bi-chevron-right"></i></button>
        <button onClick={this.handleViewComments}>View and Delete Comments
        <i class="bi bi-chevron-right"></i></button>
        <button onClick={this.handleCreateSadaqahLink}>Create Sadaqah Link
        <i class="bi bi-chevron-right"></i></button>
        
        <button onClick={this.handleAddAdditionalMedia}>Upload Media
        <i class="bi bi-chevron-right"></i></button>
        <button onClick={this.handleBiology}>Update Biology
        <i class="bi bi-chevron-right"></i></button>
        <p>Log Out</p>
      </div>
      <div className='cont'>
      {this.state.showUpdateProfile && <UpdateProfile generatedId={this.context.generatedId}/>}
      {this.state.showAddSecondaryManager && <SecondaryManager />}
      {this.state.showViewComments && <Comments />}
      {this.state.showCreateSadaqahLink && <Sadaqah />}
      {this.state.showAddAdditionalMedia && <MediaManagement />}
      {this.state.showBiology && <BiologyInput />}

      </div>
      </div>
    );
  }
}

export default ProfileManagerDashboard;

