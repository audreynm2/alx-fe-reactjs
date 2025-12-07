import React from 'react';
import UserDetails from './UserDetails';

// Prop removed: function UserInfo({ userData }) { ... }
function UserInfo() {
  return (
    <div style={{ padding: '10px', border: '1px solid #ffcc00', margin: '10px', borderRadius: '4px', backgroundColor: '#fffbe6' }}>
      <h4>User Info Wrapper (No Props Passed)</h4>
      {/* Prop passing removed: <UserDetails userData={userData} /> */}
      <UserDetails />
    </div>
  );
}

export default UserInfo;