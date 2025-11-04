import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // <-- ✅ You missed this import
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/"> {/* You can change basename if your app runs in a subpath */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
