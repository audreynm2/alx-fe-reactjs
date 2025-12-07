import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    // 1. BrowserRouter wraps the entire application for routing
    <BrowserRouter>
      <div style={{ fontFamily: 'sans-serif' }}>
        
        {/* 2. Navbar is rendered outside the Routes so it appears on all pages */}
        <Navbar />

        <main>
          {/* 3. Routes defines the available URL paths */}
          <Routes>
            {/* 4. Route maps the path to the component */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Optional: Add a catch-all route for 404 */}
            <Route path="*" element={<h2 style={{padding: '50px', color: 'red', textAlign: 'center'}}>404 Page Not Found</h2>} />
          </Routes>
        </main>

        <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f4f4f4', borderTop: '1px solid #ddd' }}>
            <p>© 2025 NexusTech Solutions </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

