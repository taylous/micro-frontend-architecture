// react
import React from 'react';

// react-router, react-router-dom
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// custom components
import App from './App';

// global css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
