import React, { useState } from 'react'
import { Route, useNavigate } from 'react-router-dom'
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


const Dashboard = (prop) => {
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
                component: <Route path='/dashboard' element={<Dashboard />} />
            }
        ))
    }

    return (
        <div className="container-fluid">
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="javascript:window.location.href=window.location.href">Currency Transfer&nbsp;<FontAwesomeIcon icon={faMoneyBillTrendUp} />&nbsp;</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" /> */}

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

                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-dark">

                            kjhzgxfcngvqlherw



                        </div>
                        {/* </main> */}
                    </div>
                </div>
            </div>


            {/* testing */}
            {/* <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0  ">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="javascript:window.location.href=window.location.href">
                    &nbsp;&nbsp;&nbsp;&nbsp;Currency Transfer &nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faMoneyBillTrendUp} /></a>
            
                <h5 style={{ color: "#FFFFFF" }}>Welcome, {loggedUser.name}</h5>
            
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap ">
            
                        <Link className="btn btn-sm btn-outline-info px-2 mx-2 my-1 mb-1" to="/" role="button" onClick={Logout}>
                            <small>Sign out&nbsp;&nbsp;<FontAwesomeIcon icon={faRightFromBracket} /></small>
                        </Link>
                    </div>
                </div>
            </nav> */}
            {/* <div className=""> */}
            {/* <div className="row" >
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-transparent sidebar collapse container-fluid" >
                    <div className="pt-3 pb-5 sidebar-sticky" style={{ backgroundColor: 'rgba(56, 56, 56, 0.2)' }}>
                        <ul className="nav flex-column" >
                            <li className="nav-item">
                                &nbsp;&nbsp;<small><small><small><u style={{ color: '#383838', textDecoration: 'underline' }}>RECIPIENTS</u></small></small></small> */}
            {/* <a className="nav-link" href="#!">
            
            <FontAwesomeIcon icon={faUserPlus} />
            
            <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        &nbsp;Add Recipients
                                    </a> */}
            {/* <AddRecipient />
                            </li>
                            <li className="nav-item"> */}
            {/* <a className="nav-link" href="#!">
                                        <FontAwesomeIcon icon={faPeopleRoof} />
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        &nbsp;Manage Recipients
                                    </a> */}
            {/* <ManageRecipient />
                            </li>
                            <hr style={{ color: 'black' }} />
                            <li className="nav-item">
                                &nbsp;<small><small><small> <u style={{ color: '#383838', textDecoration: 'underline' }}>RATE ALERTS</u></small></small></small> */}
            {/* <a className="nav-link" href="#!">
                                        <FontAwesomeIcon icon={faCoins} />
                                        <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                        &nbsp; Currency Converter
                                    </a> */}
            {/* <ConverterModal />
            
                                <a className="nav-link" href="#!">
                                    <FontAwesomeIcon icon={faCalendarPlus} />
                                    <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                    &nbsp; Manage Rate Alerts
                                </a>
                            </li>
                            <hr style={{ color: 'black' }} />
                            <li className="nav-item " >
                                &nbsp;&nbsp;<small><small><small><u style={{ color: '#383838', textDecoration: 'underline' }}>TRANSFERS</u></small></small></small>
                                <a className="nav-link" aria-current="page" href="#!">
            
                                    <FontAwesomeIcon icon={faMoneyBillTransfer} />
            
                                    <span data-feather="home" className="align-text-bottom"></span>
                                    &nbsp;Make a Transfer
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">
            
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                    <span data-feather="file" className="align-text-bottom"></span>
                                    &nbsp; Transfer History
                                </a>
                            </li>
                            <hr style={{ color: 'black' }} />
                            <li className="nav-item">
                                &nbsp;<small><small><small> <u style={{ color: '#383838', textDecoration: 'underline' }}>MY SOCIAL</u> </small></small></small>
                                <a className="nav-link" href="#!">
                                    <FontAwesomeIcon icon={faCannabis} />
                                    <span data-feather="layers" className="align-text-bottom"></span>
                                    &nbsp;Refer and Earn
                                </a>
                            </li>
                            <hr style={{ color: 'black' }} />
                            <li className="nav-item">
                                &nbsp;<small><small><small> <u style={{ color: '#383838', textDecoration: 'underline' }}>SETTINGS </u></small></small></small>
                                <a className="nav-link" href="#!">
                                    <FontAwesomeIcon icon={faGears} />
                                    <span data-feather="layers" className="align-text-bottom"></span>
                                    &nbsp;Preferences
                                </a>
                            </li>
                            <hr style={{ color: 'black' }} />
                        </ul>
                    </div>
                </nav>
            
                <main className="col-md-12 col-lg-10 px-md-4">
            
                    <div className=" justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                        <h1 className="h4">My Dashboard</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                            </div>
                        </div>
                    </div> */}

            {/* <div style={{ display: "flex", justifyContent: "right", fontSize: 'small' }}>
                            <CurrencyConverter />
                        </div> */}

            {/* </main>
            
            
            </div> */}

            {/* testing */}





        </div >
    )
}

export default Dashboard