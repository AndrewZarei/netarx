import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import LandingPage from './LandingPage';
import ThankYou from './ThankYou';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize AOS with smooth settings
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      mirror: false
    });

    const handleRouteChange = () => {
      AOS.refresh();
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
