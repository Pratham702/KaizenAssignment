import React from 'react';
import { FiCheck } from 'react-icons/fi';
import './InfoSection.css';

const InfoSection = () => (
  <div className="info-section-card">
    <h3>Have you or a loved one been affected by Mesothelioma?</h3>
    <p className="info-section-desc">
      As a woman, you’ve carried the weight of care, love, and resilience. Now it’s time someone stands with you.
    </p>
    <ul className="info-section-list">
      <li><FiCheck className="info-section-icon" /> Secondary Asbestos exposure is common</li>
      <li><FiCheck className="info-section-icon" /> Misdiagnosis delays are more frequent in women</li>
      <li><FiCheck className="info-section-icon" /> Women have won significant legal settlements</li>
    </ul>
  </div>
);

export default InfoSection; 