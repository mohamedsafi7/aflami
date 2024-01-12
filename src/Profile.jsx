// Profile.js
import React, { useState, useEffect } from 'react';

const Profile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdateProfile = () => {
    // Make API request to update user profile with new name and email
    // This is a placeholder, replace it with your actual API endpoint and logic
    fetch('YOUR_UPDATE_PROFILE_API_ENDPOINT', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Profile updated successfully:', data);
        // You may want to handle success or show a notification to the user
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        // Handle error or show an error message to the user
      });
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <button onClick={handleUpdateProfile}>Update</button>
      </div>
    </div>
  );
};

export default Profile;
