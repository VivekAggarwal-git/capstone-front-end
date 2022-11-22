import React, { useState, useEffect } from 'react'
import { Route, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '../features/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Link } from "react-router-dom";
import CurrencyConverter from './CurrencyConverter';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCalendarPlus, faCannabis, faCoins, faGears, faMoneyBillTransfer, faMoneyBillTrendUp, faPeopleRoof, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import AddRecipient from '../modals/AddRecipient'
import ManageRecipient from '../modals//ManageRecipient'
import ConverterModal from '../modals/ConverterModal'


const ManagePayee = (prop) => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    const [loggedUser, setLoggedUser] = useState({})

    console.log(loggedUser)

    const RouteToManagePayee = () => {
        navigate('/managepayee')
    }

    var userid = localStorage.getItem('email')
    console.log(userid);
    var token = localStorage.getItem('Token')
    console.log(token);

    axios.get(`http://localhost:8181/users/${userid}`)
        .then(response =>

            setLoggedUser(response.data))

        .catch(error => console.log(error))

    const Logout = () => {
        navigate('/')
        alert("You have been Logout")
        localStorage.clear()
        dispatch(logout(
            {
                id: "",
                username: "",
                loginStatus: false,
                component: <Route path='/managepayee' element={<ManagePayee />} />
            }
        ))
    }

    const [recipients, setRecipients] = useState([])

    const { id } = useParams()

    useEffect(() => {
        loadRecipients();
    }, []);

    const loadRecipients = async () => {
        const result = await axios.get("http://localhost:8181/recipients");
        setRecipients(result.data);
        console.log(result.data);
    }

    const deleteRecipient = async (id) => {
        await axios.delete(`http://localhost:8181/recipient/${id}`)
        loadRecipients()
    }

    return (
        <div className="container-fluid">
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="javascript:window.location.href=window.location.href">Currency Transfer&nbsp;<FontAwesomeIcon icon={faMoneyBillTrendUp} />&nbsp;</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h5 className=" form-control-light w-100 rounded-0 border-0" type="text" style={{ color: "#FFFFFF", textAlign: 'center' }}>Welcome, {loggedUser.name}</h5>

                <div className="navbar-nav navbar-toggler collapsed">
                    <div className="nav-item text-nowrap">
                        <small>
                            <a className="nav-link px-3" href="/" to="/" onClick={Logout}>Sign out&nbsp;&nbsp;<FontAwesomeIcon icon={faRightFromBracket} /></a>
                        </small>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">

                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-transparent sidebar collapse">
                        <div className="position-sticky pt-3 sidebar-sticky" style={{ backgroundColor: 'rgba(56, 56, 56, 0.2)' }}>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    &nbsp;&nbsp;<small><small><small><u style={{ color: '#383838', textDecoration: 'underline' }}>RECIPIENTS</u></small></small></small>

                                    <a className="nav-link" aria-current="page" href="#">
                                        <span data-feather="home" className="align-text-bottom"></span>
                                        <small><small><AddRecipient />
                                        </small></small>
                                    </a>
                                    {/* <a className="nav-link" aria-current="page" href="#">
                                        <span data-feather="home" className="align-text-bottom"></span>
                                        <small><small>
                                            <ManageRecipient /></small></small>
                                    </a> */}

                                    <a className="nav-link" aria-current="page" onClick={RouteToManagePayee} href="#" style={{ textAlign: 'center' }} >
                                        <small><small> <FontAwesomeIcon icon={faPeopleRoof} />
                                            <span data-feather="users" className="align-text-bottom"></span>
                                            &nbsp;Manage Recipients  &nbsp; &nbsp;</small></small>
                                    </a>
                                </li>
                                <hr style={{ color: 'black' }} />
                                <li className="nav-item">
                                    &nbsp;&nbsp;<small><small><small><u style={{ color: '#383838', textDecoration: 'underline' }}>RATE ALERTS</u></small></small></small>

                                    <a className="nav-link" aria-current="page" href="#">
                                        <span data-feather="home" className="align-text-bottom"></span>
                                        <small><small><ConverterModal />
                                        </small></small>
                                    </a>
                                    <a className="nav-link" aria-current="page" href="#" style={{ textAlign: 'center' }}>

                                        <span data-feather="home" className="align-text-bottom"></span>
                                        <small><small>
                                            <FontAwesomeIcon icon={faCalendarPlus} />&nbsp; Manage Rate Alerts &nbsp;</small></small>
                                    </a>
                                </li>
                                <hr style={{ color: 'black' }} />
                                <li className="nav-item">
                                    &nbsp;&nbsp;<small><small><small><u style={{ color: '#383838', textDecoration: 'underline' }}>TRANSFERS</u></small></small></small>

                                    <a className="nav-link" aria-current="page" href="#" style={{ textAlign: 'center' }}>
                                        <span data-feather="home" className="align-text-bottom"></span>
                                        <small><small> <FontAwesomeIcon icon={faMoneyBillTransfer} />&nbsp; Make a Transfer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </small></small>
                                    </a>
                                    <a className="nav-link" aria-current="page" href="#" style={{ textAlign: 'center' }}>

                                        <span data-feather="home" className="align-text-bottom"></span>
                                        <small><small>
                                            <FontAwesomeIcon icon={faCalendarDays} />&nbsp; Transfer History &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></small>
                                    </a>
                                </li>
                                <hr style={{ color: 'black' }} />
                                <li className="nav-item">
                                    &nbsp;&nbsp;<small><small><small><u style={{ color: '#383838', textDecoration: 'underline' }}>MY SOCIAL</u></small></small></small>

                                    <a className="nav-link" aria-current="page" href="#" style={{ textAlign: 'center' }}>
                                        <span data-feather="home" className="align-text-bottom"></span>
                                        <small><small> <FontAwesomeIcon icon={faCannabis} />&nbsp; Refer and Earn &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </small></small>
                                    </a>
                                </li>
                                <hr style={{ color: 'black' }} />
                                <li className="nav-item">
                                    &nbsp;&nbsp;<small><small><small><u style={{ color: '#383838', textDecoration: 'underline' }}>SETTINGS</u></small></small></small>

                                    <a className="nav-link" aria-current="page" href="#" style={{ textAlign: 'center' }}>
                                        <span data-feather="home" className="align-text-bottom"></span>
                                        <small><small> <FontAwesomeIcon icon={faGears} />&nbsp; Preferences &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </small></small>
                                    </a>
                                </li>
                                <hr style={{ color: 'black' }} />
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                                <span>
                                    {/* Saved reports */}
                                </span>
                                <a className="link-secondary" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle" className="align-text-bottom"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        {/* Current month */}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        {/* Last quarter */}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        {/* Social engagement */}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        {/* Year-end sale */}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className='col ms-sm-auto px-md-2'>
                        {/* <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"> */}

                        <div className=" justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">

                            <div style={{ textAlign: 'center' }}>
                                <br /><br />
                                <table class="table border shadow" style={{ textAlign: 'center' }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Account No.</th>
                                            <th scope="col">Base Currency</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">SWIFT</th>
                                            <th scope="col">BIC</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            recipients.map((recipient, index) => (

                                                <tr>
                                                    <th scope="row" key={index}>{index + 1}</th>
                                                    <td>{recipient.rname}</td>
                                                    <td>{recipient.acnum}</td>
                                                    <td>{recipient.bcurrency}</td>
                                                    <td>{recipient.country}</td>
                                                    <td>{recipient.swift}</td>
                                                    <td>{recipient.bic}</td>
                                                    <td>
                                                        {/* <button className='btn btn-info mx-2 btn-sm'>View</button> */}
                                                        {/* <button className='btn btn-primary mx-2 btn-sm'>Edit</button> */}
                                                        <button className='btn btn-danger mx-2 btn-sm'

                                                            onClick={() => deleteRecipient(recipient.id)}
                                                        >Delete</button>
                                                    </td>
                                                </tr>

                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* </main> */}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ManagePayee


//https://www.youtube.com/watch?v=4LZKnegAm4g