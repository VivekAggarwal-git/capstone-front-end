import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate, BrowserRouter as Router, Link, Poutes, Route } from "react-router-dom"


function AddRecipient() {

    let navigate = useNavigate();

    // hook variables for input fields
    const [rname, setRname] = useState('')
    const [acnum, setAcnum] = useState('')
    const [bcurrency, setBcurrency] = useState('')
    const [country, setCountry] = useState('')
    const [swift, setSwift] = useState('')
    const [bic, setBic] = useState('')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([])
    const postUserData = () => {
        axios.post('http://localhost:8181/recipient',
            {
                rname: document.getElementById("exampleForm.ControlInput1").value,
                acnum: document.getElementById("exampleForm.ControlInput2").value,
                bcurrency: document.getElementById("exampleForm.ControlInput3").value,
                country: document.getElementById("exampleForm.ControlInput4").value,
                swift: document.getElementById("exampleForm.ControlInput5").value,
                bic: document.getElementById("exampleForm.ControlInput6").value
            })
            .then(response => setData(response.data))
            .catch(err => console.log(err))
        navigate("/managepayee");
    };

    return (
        <div>


            {/* <Button variant="primary" size='sm' style={{ textTransform: 'unset', backgroundColor: 'transparent', border: 'none', color: '#383838' }} onClick={handleShow}>
                    Make a Transfer
                </Button> */}

            {/* <a className="nav-link" aria-current="page" onClick={handleShow} href="#!">

                <FontAwesomeIcon icon={faUserPlus} />

                <span data-feather="shopping-cart" className="align-text-bottom"></span>
                &nbsp;Add Recipients
            </a> */}

            <Link variant="primary" size='sm' style={{ textTransform: 'unset', textDecoration: 'none', backgroundColor: 'transparent', border: 'none' }} onClick={handleShow}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faUserPlus} />

                <span data-feather="shopping-cart" className="align-text-bottom"></span>
                &nbsp;Add Recipients
            </Link>


            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Add Recipient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>Recipient Name</Form.Label> */}
                            <Form.Control
                                type="text"
                                value={rname} onChange={(e) => { setRname(e.target.value) }}
                                placeholder="Recipient Name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            {/* <Form.Label>Account Number</Form.Label> */}
                            <Form.Control
                                type="number"
                                value={acnum} onChange={(e) => { setAcnum(e.target.value) }}
                                placeholder="Account Number"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            {/* <Form.Label>Account Number</Form.Label> */}
                            <Form.Control
                                type="text"
                                value={bcurrency} onChange={(e) => { setBcurrency(e.target.value) }}
                                placeholder="Base Currency"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            {/* <Form.Label>Country</Form.Label> */}
                            <Form.Control
                                type="text"
                                value={country} onChange={(e) => { setCountry(e.target.value) }}
                                placeholder="Country"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            {/* <Form.Label>Swift Code</Form.Label> */}
                            <Form.Control
                                type="text"
                                value={swift} onChange={(e) => { setSwift(e.target.value) }}
                                placeholder="SWIFT Code"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                            {/* <Form.Label>Swift Code</Form.Label> */}
                            <Form.Control
                                type="text"
                                value={bic} onChange={(e) => { setBic(e.target.value) }}
                                placeholder="BIC Code"
                                autoFocus
                            />
                        </Form.Group>

                        {/* <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group> */}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" size='sm' style={{ textTransform: 'unset' }} onClick={postUserData}>
                        Add Recipient
                    </Button>
                    <Button type='reset' variant="secondary" size='sm' style={{ textTransform: 'unset' }} onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default AddRecipient
