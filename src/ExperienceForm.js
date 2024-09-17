import React from 'react';
import './ExperienceForm.css'; // Import the CSS file

const ExperienceForm = () => {
  return (
    <div className="experience-container">
      <div className="header">
        <span>3/3</span>
        <h2>Enter your experience.</h2>
      </div>
      <hr className="Line"></hr>

      <div className="add-experience-card">
        <div className="add-button">
          <span>+</span>
        </div>
        <p className="Add">ADD EXPERIENCE</p>
      </div>

      <div className="footer">
        <button className="back-button">BACK</button>
        <div className="footer-right">
          <button className="skip-button">SKIP</button>
          <button className="next-button">NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;