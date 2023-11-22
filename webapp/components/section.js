import React from 'react';
import './section.css'

function Section({ image, header, text }) {
  return (
    <div className="section">
      <div className="section-content">
        <img src={image} alt={header} />
          <h1>{header}</h1>
          <p>{text}</p>
      </div>
    </div>
  );
}

export default Section;