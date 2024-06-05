import React from 'react';

const ProgressBar = ({ percentage }) => (
  <div className="progress-bar-container">
    <div className="teal-bar" style={{ width: `${percentage}%` }}></div>
  </div>
);

export default ProgressBar;
