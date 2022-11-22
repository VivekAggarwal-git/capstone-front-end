import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';


function WIP1() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <a href="#!" className="text-white" onClick={handleShow}><small>GDPR FAQS</small></a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><small>Work in progress </small> <FontAwesomeIcon icon={faPersonDigging} /></Modal.Title>
                </Modal.Header>
                <Modal.Body><small>Apologies for the inconvenience caused. This page is under maintenance and will be available soon..</small></Modal.Body>

            </Modal>

        </div>
    )
}

export default WIP1
