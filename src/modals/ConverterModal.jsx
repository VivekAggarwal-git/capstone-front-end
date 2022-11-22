import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import CurrencyConverter from '../components/CurrencyConverter';

function ConverterModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            {/* <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button> */}

            <a className="nav-link" aria-current="page" onClick={handleShow} href="#!">
                <FontAwesomeIcon icon={faCoins} />
                <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                &nbsp; Currency Converter
            </a>

            <Modal show={show} onHide={handleClose} animation={false}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Currency Converter Tool</Modal.Title>
                </Modal.Header> */}
                <Modal.Body closeButton >
                    <div style={{ display: "flex", justifyContent: "center", fontSize: 'small' }}>
                        <CurrencyConverter />
                    </div>
                    {/* </Modal.Body> */}
                    {/* <Modal.Footer> */}
                    <div style={{ display: "flex", justifyContent: "right" }}>
                        <Button className='justify-content-md-end btn-sm' variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                    {/* </Modal.Footer> */}
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default ConverterModal
