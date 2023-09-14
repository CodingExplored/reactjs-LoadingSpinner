import React, { useState } from 'react';
import './App.css';
import ModalPopup from './components/ModalPopup';

function App() {
  const [isOpen, setIsOpen] = useState(false); //init a state variable to track the open/close state of modal

  const toggleModal = () => {
    setIsOpen(!isOpen); //set the current value to the opposite of current value
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <button onClick={toggleModal}>Open Modal</button>
        <ModalPopup isOpen={isOpen} onClose={toggleModal}>
          <h1>Hello, I'm a Modal!</h1>
        </ModalPopup>
      </div>
    </div>
  );
}

export default App;
