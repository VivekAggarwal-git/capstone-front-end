import { faMoneyBillTrendUp, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);


    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Currency Transfer&nbsp;&nbsp; <FontAwesomeIcon icon={faMoneyBillTrendUp} /></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item bg-transparent" >
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} style={{ backgroundColor: 'transparent' }} to="/about">About Us</Link>

                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/personal" ? "active" : ""}`} style={{ backgroundColor: 'transparent' }} to="/personal">Personal</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Solutions
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#!">Spot Transfers</a></li>
                                <li><a className="dropdown-item" href="#!">Forward Contracts</a></li>
                                <li><a className="dropdown-item" href="#!">Rate Alerts</a></li>
                                <li><a className="dropdown-item" href="#!">Market Orders</a></li>
                                <li><a className="dropdown-item" href="#!">Mass Payments</a></li>
                                <li><a className="dropdown-item" href="#!">Currency Options</a></li>
                            </ul>
                        </li>

                    </ul>
                    <ul class="navbar-nav me-0 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <form className="d-flex" role="search">

                                <Link className="btn btn-sm btn-outline-info mx-2" to="/login" role="button">
                                    <FontAwesomeIcon icon={faRightToBracket} />&nbsp;&nbsp;Sign in</Link>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
