import React from 'react';
import profileImage from '../assets/IMG/userprofile.webp';

const UserProfile = () => {
    return (
      <div className="user-profile">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="user-details">
          <h3>Cheeroot Official</h3>
          <p className="username">@username</p>
          <p><b>Birthdate:</b> January 1, 1990</p>
          <p><b>Bio:</b> A passionate chef and food lover.</p>
        </div>
      </div>
    );
  }
  
  export default UserProfile;
