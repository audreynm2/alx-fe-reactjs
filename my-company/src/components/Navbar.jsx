import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0 15px',
    fontWeight: 'bold'
  };

  return (
    <nav style={{ 
      backgroundColor: '#333', 
      padding: '15px 20px', 
      display: 'flex', 
      justifyContent: 'center', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
    }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;