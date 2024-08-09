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
      <h1>Welcome to Xpense Tracker</h1>
      <button onClick={handleGetStarted}>Let's Get Started</button>
    </div>
  );
};

export default HomePage;
