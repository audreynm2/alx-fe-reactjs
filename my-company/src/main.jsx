import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Standard entry point to render the App component into the HTML DOM (element with id='root')
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);