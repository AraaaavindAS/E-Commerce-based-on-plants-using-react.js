import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="landing-page">
    <h1>Welcome to Greenify Houseplants</h1>
    <p>Your one-stop shop for beautiful indoor plants!</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;
