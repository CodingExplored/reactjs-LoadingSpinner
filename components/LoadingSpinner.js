import React from 'react';
import './styles/LoadingSpinner.css';

const LoadingSpinner = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
