import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/main');
  };

  return (
    <div className="home-container">
      <h3>Welcome to Xpense Tracker</h3>
      <button onClick={handleGetStarted}>Let's Get Started</button>
    </div>
  );
};

export default HomePage;
