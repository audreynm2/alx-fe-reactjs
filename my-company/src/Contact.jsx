import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '20px', minHeight: '80vh', textAlign: 'center', backgroundColor: '#fafafa' }}>
      <h2 style={{ color: '#d9534f' }}>Get In Touch</h2>
      <p>We'd love to hear from you! Reach out to us via email or phone.</p>
      
      <div style={{ border: '1px solid #ddd', padding: '20px', display: 'inline-block', borderRadius: '8px', marginTop: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>Email:</p>
        <p>info@nexustech.com</p>
        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Phone:</p>
        <p>+1 (555) 123-4567</p>
      </div>
    </div>
  );
}

export default Contact;