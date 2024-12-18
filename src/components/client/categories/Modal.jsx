// Modal.jsx
import React from 'react';
import './Modal.css'; // Add styles for the modal

const Modal = ({ isOpen, closeModal, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} />
        <p>{product.description}</p>
        <p><strong>Price: ${product.price}</strong></p>
      </div>
    </div>
  );
};

export default Modal;
