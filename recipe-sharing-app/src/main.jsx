import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'
    // Import BrowserRouter for routing
    import { BrowserRouter } from 'react-router-dom'; 

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        {/* Wrap App with BrowserRouter to enable routing */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
    )