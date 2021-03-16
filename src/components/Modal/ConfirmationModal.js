import { Button, Modal } from "react-bootstrap";

const ConfirmationModal = ({ show, onClose, handleConfirmation }) => {
  return (
    <>
      <Modal
        size="sm"
        show={show}
        onHide={onClose}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Are you sure?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Please click on confirm to accept</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirmation}>
            Confirm!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmationModal;

