import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos'; // 1. Import AOS library
import 'aos/dist/aos.css'; // 2. Import AOS styles
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// 3. Initialize AOS
AOS.init({
  // Global settings:
  duration: 800, // Animation duration (ms)
  easing: 'ease-in-out', // Default easing
  once: true, // Only animate elements once
  mirror: false, // Don't animate elements when scrolling past them again
});

const basename = '/product/commet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
