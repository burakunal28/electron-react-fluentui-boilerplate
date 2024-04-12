import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Navigate, Routes, Route  } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Help from './pages/help/Help';
import Footer from './components/footer/Footer';
import { useCustomLocation } from './components/location/Location';
import { LocationContext } from './components/location/LocationContext';
import './App.css';

const AppContent: React.FC = () => {
  const location = useCustomLocation();
  const [currentLocation, setCurrentLocation] = useState(location);
  
  useEffect(() => {
    setCurrentLocation(location);
  }, [location]);

  useEffect(() => {
    const width = window.screen.width;
    const minWidth = Math.round(width * 0.7);
    const style = document.createElement('style');
    document.head.appendChild(style);
  
    if (style.sheet) {
      style.sheet.insertRule(`
        @media (max-width: ${minWidth}px) {
          .content {
            width: 93vw;
          }
        }
      `, style.sheet.cssRules.length);
    }
  
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <LocationContext.Provider value={currentLocation}>
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes> 
          <Route path="/home" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      
      <Footer />

    </LocationContext.Provider>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;