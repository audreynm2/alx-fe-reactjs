import React from 'react';
import ProfilePage from './ProfilePage';
// Import the new UserContext
import UserContext from './UserContext'; 

function App() {
  // 1. Define the data here (State or simple object)
  const userData = { name: "Jane Doe (Context)", email: "jane.doe.context@example.com" };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {/* 2. Wrap the components that need the data with the Provider */}
      <UserContext.Provider value={userData}>
        <ProfilePage /> 
      </UserContext.Provider>
    </div>
  );
}

export default App;

