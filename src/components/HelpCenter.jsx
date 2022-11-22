import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faRankingStar, faMoneyBillTrendUp, faUniversalAccess, faArrowsToEye, faBolt, faBoltLightning, faRightLeft, faUserPlus, faPlay, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenDollar, faTrophyStar, faWindowFrame } from '@fortawesome/sharp-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { faCompass } from '@fortawesome/free-regular-svg-icons';


const HelpCenter = () => {
    return (
        <div><a name="top"></a>
            <a name="top"></a>
            <Navbar />
            <br /><br />
            <div className='container'>

                <h1 style={{ textAlign: "center" }}>Help Centre</h1>
                <br />

                <h2 style={{ textAlign: "center" }}>Learn How to Use Our Platform:</h2>

            </div>


            <br /><br />



            <div className='container'>
                <div className="row mb-4">


                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ textAlign: "center", fontSize: '120px' }}>
                            <FontAwesomeIcon icon={faRightLeft} style={{ color: '#0092f9' }} />

                        </div>
                    </div>


                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ textAlign: "center", fontSize: '120px' }}>
                            <FontAwesomeIcon icon={faUserPlus} style={{ color: '#cb2e4b' }} />

                        </div>
                    </div>


                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ textAlign: "center", fontSize: '120px' }}>
                            <FontAwesomeIcon icon={faEnvelopeOpenDollar} style={{ color: '#438a04' }} />

                        </div>
                    </div>

                </div>
            </div>



            <div className='container'>
                <div className="row mb-4">


                    <div className="col-12 col-xl-4">
                        <a href=''><h2 style={{ textAlign: "center" }} onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small><small><small><FontAwesomeIcon icon={faPlay} style={{ color: '#1695CA' }} />&nbsp;&nbsp;How to make your first transfer</small></small></small></h2></a>

                    </div>


                    <div className="col-12 col-xl-4">
                        <a href=''><h2 style={{ textAlign: "center" }} onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small><small><small><FontAwesomeIcon icon={faPlay} style={{ color: '#1695CA' }} />&nbsp;&nbsp;How to add a new recipient</small></small></small></h2></a>

                    </div>


                    <div className="col-12 col-xl-4">
                        <a href=''><h2 style={{ textAlign: "center" }} onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small><small><small><FontAwesomeIcon icon={faPlay} style={{ color: '#1695CA' }} />&nbsp;&nbsp;How to allocate a payment</small></small></small></h2></a>

                    </div>

                </div>
            </div>
            <br /><hr /><br /><br />

            <div className='container' style={{ textAlign: 'center' }}>

                <Button variant="primary" size='lg' style={{ textTransform: 'unset', backgroundColor: '#a2d4ea', border: 'none', color: '#383838' }} onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")} >
                    Show more Videos&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRightLong} style={{ color: '#438a04' }} />
                </Button>

            </div>

            <br /><br /><hr /><br />

            <div className='container'>

                <h1 style={{ textAlign: "center" }}>Frequently Asked Questions:</h1>

            </div>


            <br />


            <div className='container'>
                <div className="row mb-4">


                    <div className="col-12 col-xl-6">
                        <h2 style={{ textAlign: "center", textDecoration: 'underline', color: '	#4c6169' }} ><small><small><small>Money Transfers</small></small></small></h2>
                        <div >
                            <ul style={{ fontSize: '13px' }}><hr />
                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    What’s the difference between a personal and business money transfer?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    How does the registration and on-boarding work?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    Is there a minimum or maximum transfer amount?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    What bank account details do I need to make an international money transfer?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    What Proof of Address verification do I need to provide and what is acceptable?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    Why do I need to provide payment reason verification?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    Can I make a bank transfer from an account that is not in my name?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    Am I able to cancel or get a refund on my transfer?
                                </li></a><hr />
                            </ul>
                        </div>
                    </div>


                    <div className="col-12 col-xl-6">
                        <h2 style={{ textAlign: "center", textDecoration: 'underline', color: '	#4c6169' }} ><small><small><small>Jargon Busters</small></small></small></h2>
                        <div>
                            <ul style={{ fontSize: '13px' }}><hr />
                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    What does 0% commission money transfers mean?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    What does FCA Authorised Payment Institution mean?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    What are SWIFT transfers?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    What is an IBAN number?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    What is an ABA number?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    How do I make SEPA Transfers?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    What is an MT103 and when do I need it?
                                </li></a><hr />

                                <a href="#!" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><li style={{ color: '#013f38', fontWeight: 'bold' }}>
                                    What is an EIN number?
                                </li></a><hr />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <br />
            <hr />




            <div className='d-flex justify-content-around'>
                <div style={{ justifyContent: "left", fontSize: '120px', color: '#f77f00' }}>
                    <FontAwesomeIcon icon={faTrophyStar} />
                </div>


                <div style={{ textAlign: "center", fontSize: '100px' }}>
                    <Link className="btn btn-lg btn-success mt-2 mb-2" to="/signup" id="GetStartedBottom" role="button" style={{ alignContent: 'center', textAlign: 'center' }}><FontAwesomeIcon icon={faPenToSquare} />&nbsp;&nbsp;Get Started</Link>
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

export default HelpCenter
