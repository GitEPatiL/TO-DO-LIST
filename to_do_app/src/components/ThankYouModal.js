import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ThankYouModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Thank You!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your details have been submitted successfully.</p>
        <p>We appreciate you taking the time to get in touch.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}