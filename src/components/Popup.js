import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Contact from './Contact';

function Popup({ show, onClose }) {
    return (
        <Modal
            size="lg"
            show={show}
            onHide={onClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body><Contact /></Modal.Body>
        </Modal>
    );
}

export default Popup;
