import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px', minHeight: '80vh', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333' }}>Our Story and Vision</h2>
      <p>
        Founded in 2018, NexusTech was built on the principle of using technology to solve complex problems simply. Our team of passionate developers and strategists works tirelessly to deliver high-quality, scalable products.
      </p>
      <ul style={{ listStyleType: 'none', padding: '0', marginTop: '20px' }}>
        <li style={{ marginBottom: '10px' }}>✅ Mission-driven development</li>
        <li style={{ marginBottom: '10px' }}>✅ Customer-centric approach</li>
        <li style={{ marginBottom: '10px' }}>✅ Commitment to quality</li>
      </ul>
    </div>
  );
}

export default About;