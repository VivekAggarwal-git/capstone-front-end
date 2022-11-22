import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


function ManageRecipient() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [recipients, setRcipients] = useState([])

    useEffect(() => {
        loadRecipients();
    }, []);

    const loadRecipients = async () => {
        const result = await axios.get("http://localhost:8181/recipients");
        console.log(result);
    }

    return (
        <div>


            {/* <Button variant="primary" size='sm' style={{ textTransform: 'unset', backgroundColor: 'transparent', border: 'none', color: '#383838' }} onClick={handleShow}>
                    Make a Transfer
                </Button> */}

            <a className="nav-link" aria-current="page" onClick={handleShow} href="#!">
                <FontAwesomeIcon icon={faPeopleRoof} />
                <span data-feather="users" className="align-text-bottom"></span>
                &nbsp;Manage Recipients
            </a>

            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Manage Recipients</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>Otto</td>
                                    <td>@twitter</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-sm' variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default ManageRecipient
