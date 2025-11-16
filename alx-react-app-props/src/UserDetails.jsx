import React, { useContext } from 'react';
import UserContext from './UserContext'; // Import the context

// No longer accepts props!
function UserDetails() {
  // 1. Consume the context directly using the hook
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '2px solid #004d99', padding: '15px', margin: '15px', borderRadius: '8px', backgroundColor: '#e6f2ff' }}>
      <h3>User Details (Context API Refactored)</h3>
      <p>Name: <strong>{userData.name}</strong></p>
      <p>Email: <em>{userData.email}</em></p>
    </div>
  );
}

export default UserDetails;