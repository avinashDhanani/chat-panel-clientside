import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Styles from "./Modal.module.scss";

export default function ModalView(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      size={props.size}
      show={props.show}
      onHide={props.onHide}
      centered
      backdrop="static"
      className={`${Styles[props.moduleClass]} ${props.className}`}
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.modalHead}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.modalBody}</Modal.Body>
      <Modal.Footer className={Styles.modalFooter}>
        {props.modalFooter}
      </Modal.Footer>
    </Modal>
  );
}
