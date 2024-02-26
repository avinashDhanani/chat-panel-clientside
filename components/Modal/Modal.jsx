import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalView(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={props.show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalHead}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.modalBody}
      </Modal.Body>
      <Modal.Footer>
        {props.modalFooter}
      </Modal.Footer>
    </Modal>
  );
}
