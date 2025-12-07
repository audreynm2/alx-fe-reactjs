import React from 'react';

function Home() {
  return (
    <div style={{ padding: '20px', minHeight: '80vh', textAlign: 'center', backgroundColor: '#eef' }}>
      <h2 style={{ color: '#0056b3' }}>Welcome to NexusTech Solutions</h2>
      <p style={{ fontSize: '1.1em', maxWidth: '800px', margin: '20px auto' }}>
        We are a leading provider of innovative software solutions, dedicated to streamlining your business processes and driving digital transformation.
      </p>
      <img 
        src="https://placehold.co/600x200/4a7ec9/ffffff?text=Innovative+Tech+Solutions" 
        alt="Innovative technology graphic" 
        style={{ borderRadius: '8px', marginTop: '20px' }} 
      />
    </div>
  );
}

export default Home;