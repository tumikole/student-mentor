import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ContactForm from './ContactForm'
import "../App.css";


const ModalExample = (props) => {
  const {    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="ModalBody">
      <Button className="modalBtn" style={{backgroundColor:"orange", marginLeft: "2rem !important"}} onClick={toggle}>Form</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Attach question papers</ModalHeader>
        <ModalBody>
            <ContactForm/>
        </ModalBody>
        <ModalFooter>
         
        
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;