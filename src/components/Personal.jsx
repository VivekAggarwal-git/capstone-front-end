import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faRankingStar, faUserShield, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckDollar, faMoneyCheckDollarPen, faShieldCheck, faTrophyStar } from '@fortawesome/sharp-solid-svg-icons';


const Personal = () => {
    return (
        <div><a name="top"></a>
            <Navbar />
            <br /><br />


            <div className='container'>
                <div className="row mb-4">

                    <div className="col-12 col-xl-8">
                        <h2>Personal Transfers</h2>
                        <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>Looking for the best way to transfer money abroad? Whether you are emigrating abroad or buying an overseas property, banks overcharge on currency transfers. We’re here to change that. Whatever your client profile, we provide amazing customer service. We want you to feel like you are our only client. </p>
                    </div>

                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ textAlign: "right", fontSize: '100px' }}>
                            <Link className="btn btn-lg btn-info my-2 mx-2 mt-4 mb-4" to="/signup" role="button" id="GetStartedTop" style={{ alignContent: 'center' }}><FontAwesomeIcon icon={faPenToSquare} />&nbsp;&nbsp;Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br />

            <div className='container'>
                <div className="row mb-4">

                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ textAlign: "left", fontSize: '120px' }}>
                            <FontAwesomeIcon icon={faMoneyCheckDollarPen} style={{ color: '#85bb65' }} />&nbsp;
                            <FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: '#6B8068' }} />

                        </div>
                    </div>

                    <div className="col-12 col-xl-8">
                        <h2>Benefit from our online currency exchange tool</h2>
                        <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>Our live currency exchange platform provides you access to a network of FCA regulated payment providers. We offer everything from a same-day spot transfer all the way up to a 12-month forward contract for clients who want to protect against volatile exchange rates. It’s never been easier to transfer money overseas. </p>
                    </div>

                </div>
            </div>
            <br />


            <div className='container'>
                <div className="row mb-4">

                    <div className="col-12 col-xl-8">
                        <h2>Get the best service with our payment network</h2>
                        <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>You can put a stop to hidden fees and charges today! Thousands of expats, property buyers, students and businesses are saving huge amounts of money with CurrencyTransfer.
                            <br /> <br />
                            We also believe in the personal touch: each client is allocated their own Personal Currency Concierge. We’re here to help you find the best solution for your transfer requirements, with world class support.</p>
                    </div>

                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ justifyContent: "right", textAlign: 'right', fontSize: '130px', color: '#1DA1F2' }}>
                            <div className='container'>
                                <div className='container'>
                                    <div className='container'>
                                        <div className='container'>
                                            <div className='container'>
                                                <FontAwesomeIcon icon={faGlobe} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />

            <div className='container'>
                <div className="row mb-4">

                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ textAlign: "left", fontSize: '120px' }}>

                            <FontAwesomeIcon icon={faShieldCheck} style={{ color: '#1ebbd7' }} />&nbsp;
                            <FontAwesomeIcon icon={faUserShield} style={{ color: '#85bb10' }} />
                        </div>
                    </div>

                    <div className="col-12 col-xl-8">
                        <h2>We’re committed to security</h2>
                        <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>We only stream LIVE prices from Top-Tier FCA authorised payment institutions. Our guiding principle: we never list currency suppliers we wouldn’t use ourselves.
                            <br /><br />
                            At CurrencyTransfer, securing your data is our highest priority. All data is encrypted with investment banking grade tools and engineering practices. Your funds are safeguarded and protected in client accounts, separate from the day-to-day running of the payment partners business.
                        </p>
                    </div>
                </div>
            </div>
            <hr />


            <div className='d-flex justify-content-around'>
                <div style={{ justifyContent: "left", fontSize: '120px', color: '#f77f00' }}>
                    <FontAwesomeIcon icon={faTrophyStar} />
                </div>

                <div style={{ textAlign: "center", fontSize: '100px' }}>
                    <Link className="btn btn-lg btn-success mt-2 mb-2" to="/signup" role="button" id="GetStartedTop1" style={{ alignContent: 'center', textAlign: 'center' }}><FontAwesomeIcon icon={faPenToSquare} />&nbsp;&nbsp;Get Started</Link>
                    <br />
                    <p style={{ fontSize: '15px', fontWeight: 'bold' }}><small>CurrencyTransfer makes it easier, faster, and more cost efficient to transfer money across borders. <br /><br />Get started today!</small></p>
                </div>

                <div style={{ justifyContent: "left", fontSize: '120px', color: '#f77f00' }}>
                    <FontAwesomeIcon icon={faRankingStar} />
                </div>

            </div>
            <br />
            <Footer />
        </div >
    )
}

export default Personal
