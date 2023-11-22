import React from 'react';
import notes from './notes.jpg'; // Import the image
import './banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src={notes} alt="banner" />
      <div className="banner-text">my music journey</div>  
    </div>
  );
}

export default Banner;

