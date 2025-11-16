import React from 'react';
import UserInfo from './UserInfo';

// Prop removed: function ProfilePage({ userData }) { ... }
function ProfilePage() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e9e9e9' }}>
      <h2>User Profile Page (Context API Setup)</h2>
      {/* Prop passing removed: <UserInfo userData={userData} /> */}
      <UserInfo />
    </div>
  );
}

export default ProfilePage;