import { Modal } from "react-bootstrap";

const ModalComponent = ({ show, onClose }) => {
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
            Congrats!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>You joined successfully!!'</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;