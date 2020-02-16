import React from 'react';
import '../style/WelcomeBar.css';
import sunRevers from '../img/sunRevers.png';

export const WelcomeBar = ({ hideWelcomeBar }) => (
  <div className="welcomeBar" onAnimationEnd={hideWelcomeBar}>
    <div className="imgSunBox">
      <img src={sunRevers} alt="sun" />
    </div>
  </div>
);
