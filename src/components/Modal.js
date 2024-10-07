import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Repo</a>
            </div>
        </div>
    );
};

export default Modal;
