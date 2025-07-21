import React from 'react';
import { FiLock, FiCheckCircle, FiClipboard } from 'react-icons/fi';
import './InfoPanel.css';

const InfoPanel = () => {
  return (
    <div className="info-panel-content">
      <div className="free-case-review">
        <h2>Free<br/>Case<br/>Review</h2>
      </div>
      <div className="slots-circle">
        <span>ONLY 6 SLOTS LEFT</span>
      </div>
      <div className="help-text">We are here to help!</div>
      <ul className="badges-list">
        <li><FiLock className="icon confidential" />100% Confidential</li>
        <li><FiCheckCircle className="icon nowin" />No Win, No Fee</li>
        <li><FiClipboard className="icon evaluation" />Free Case Evaluation</li>
      </ul>
      <button className="contact-btn">Contact us</button>
    </div>
  );
};

export default InfoPanel; 