import React from 'react';
import './styles/ModalPopup.css';

const ModalPopup = ({ isOpen, onClose, children }) => {
  if (!isOpen) { //if modal is NOT set as open through state prop, return nothing
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose/* Closes the modal when user clicks outside of the modal window */}>
      <div className="modal-content" onClick={e => e.stopPropagation() /* Prevent the modal from closing when the modal itself is clicked on */}>
        {children /* Display the children elements from inside the ModalPopup component */}
        <button className="modal-close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default ModalPopup;
