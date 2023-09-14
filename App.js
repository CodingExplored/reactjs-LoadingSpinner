import React, { useState } from 'react';
import './App.css';
import ModalPopup from './components/ModalPopup';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <button onClick={toggleModal}>Open Modal</button>
        <ModalPopup isOpen={isOpen} onClose={toggleModal}>
          <LoadingSpinner isLoading={isLoading} />
        </ModalPopup>
      </div>
    </div>
  );
}

export default App;
