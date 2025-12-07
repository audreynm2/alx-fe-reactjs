// src/components/UserProfile.jsx

import React from 'react';

function UserProfile(props) {
  return (
    // Main container styling
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      {/* Name styling */}
      <h2 style={{ color: 'blue', fontSize: '1.5em' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
