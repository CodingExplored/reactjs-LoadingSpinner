// Importing the React library to create a React component.
import React from 'react';

// Importing the CSS file that contains styles for the LoadingSpinner component.
import './styles/LoadingSpinner.css';

// Defining a functional React component called LoadingSpinner.
const LoadingSpinner = ({ isLoading }) => {
  // Checking if the isLoading prop is false.
  if (!isLoading) {
    // If isLoading is false, return null, which effectively hides the spinner.
    return null;
  }

  // If isLoading is true, render the following JSX code.
  return (
    // Creating a div element with a class name of "spinner-container".
    <div className="spinner-container">
      {/* Inside the "spinner-container" div, creating another div element with a class name of "spinner". */}
      <div className="spinner"></div>
    </div>
  );
};

// Exporting the LoadingSpinner component so it can be used in other parts of the application.
export default LoadingSpinner;
