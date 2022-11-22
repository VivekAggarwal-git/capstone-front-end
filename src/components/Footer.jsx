import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopes } from '@fortawesome/sharp-solid-svg-icons';
import WIP1 from '../modals/WIP1';
import WIP2 from '../modals/WIP2';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div>
            {/* FOOTER STARTS */}

            {/* Footer */}
            <footer className="bg-dark text-center text-white">
                {/* Grid container */}
                <div className="container p-4">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            onClick={() => alert("Coming soon on Facebook")}><FontAwesomeIcon icon={faFacebook} /></a>

                        {/* Twitter */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            onClick={() => alert("Coming soon on Twitter")}><FontAwesomeIcon icon={faTwitter} /></a>

                        {/* Google */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            onClick={() => alert("Coming soon on Google")}><FontAwesomeIcon icon={faGoogle} /></a>

                        {/* Instagram */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            onClick={() => alert("Coming soon on Instagram")}><FontAwesomeIcon icon={faInstagram} /></a>

                        {/* Linkedin */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            onClick={() => alert("Coming soon on Linkedin")}><FontAwesomeIcon icon={faLinkedin} /></a>

                        {/* Github */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            onClick={() => alert("Coming soon on Github")}><FontAwesomeIcon icon={faGithub} /></a>
                    </section>
                    {/* Section: Social media */}

                    {/* Section: Form */}
                    <section className="">
                        <form action="">
                            {/*Grid row*/}
                            <div className="row d-flex justify-content-center">
                                {/*Grid column*/}
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Subscribe to our newsletter</strong>
                                    </p>
                                </div>
                                {/*Grid column*/}

                                {/*Grid column*/}
                                <div className="col-md-5 col-12">
                                    {/* Email input */}
                                    <div className='form-outline form-white mb-4' style={{ border: "white" }}>
                                        <input type="email" id="form5Example21 sub__form" className="form-control" style={{ backgroundColor: "#383838" }} />
                                        <label className="form-label" for="form5Example21">Email address</label>
                                    </div>
                                </div>
                                {/*Grid column*/}

                                {/*Grid column*/}
                                <div className="col-auto">
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-sm btn-outline-info mb-2">
                                        <FontAwesomeIcon icon={faEnvelopes} />&nbsp;&nbsp;Subscribe
                                    </button>
                                </div>
                                {/*Grid column*/}
                            </div>
                            {/*Grid row*/}
                        </form>
                    </section>
                    {/* Section: Form */}

                    {/* Section: Text */}
                    <section className="mb-4">
                        <p>
                            Currency Transfer provides platform access to an international payment network. Any payment services are powered by FCA authorised and regulated Money Service Businesses. Client funds remain within the regulated environment throughout the payment lifecycle and CurrencyTransfer does not touch client funds. Clients deal directly with a clearly identified, regulated counter-party, via the CurrencyTransfer platform.
                        </p>
                    </section>
                    {/* Section: Text */}

                    {/* Section: Links */}
                    <section className="">
                        {/*Grid row*/}
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h6 className="text-uppercase">About Us</h6>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="/about#access" className="text-white"><small>Access</small></a>
                                    </li>
                                    <li>
                                        <a href="/about#transparency" className="text-white"><small>Transparency</small></a>
                                    </li>
                                    <li>
                                        <a href="/about#guidance" className="text-white"><small>Guidance</small></a>
                                    </li>
                                    <li>
                                        <a href="/about#GIT" className="text-white"><small>Our Offices</small></a>
                                    </li>

                                </ul>
                            </div>
                            {/*Grid column*/}

                            {/*Grid column*/}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h6 className="text-uppercase">Our Team</h6>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        {/* <a href="#!" className="text-white"><small>Bertie - BOT</small></a> */}
                                        <WIP2 />
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small>Expert Analysts</small></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small>Marketing Commentary</small></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small>Get in touch</small></a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}

                            {/*Grid column*/}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h6 className="text-uppercase">Policies</h6>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small>Privacy Policy</small></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small>Terms of Service</small></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small>Security and Regulation</small></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small>GDPR Third Party Apps</small></a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}

                            {/*Grid column*/}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h6 className="text-uppercase">Help & FAQs</h6>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small>Money Transfers</small></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small>Jargon Busters</small></a>
                                    </li>
                                    <li>
                                        {/* <a href="#!" className="text-white" onClick={() => alert("Work in progress.. Apologies for the inconvenience caused. This page is under maintenance and will be available soon..")}><small>GDPR FAQS</small></a> */}

                                        <WIP1 />
                                    </li>
                                    <li>
                                        {/* <a href="#top" to="/helpcenter" className="text-white"><small>Help Centre</small></a> */}
                                        <li>
                                            <Link href="#top" style={{ color: 'white' }} to="/helpcenter"><small>Help Centre</small></Link>
                                        </li>

                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                    </section>
                    {/* Section: Links */}
                </div>
                {/* Grid container */}

                {/* Copyright */}
                <div className="container-fluid row text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    <div className='col-md-8 ms-sm-auto col-lg-8 px-md-4' style={{ textAlign: 'right' }}>
                        {/* &nbsp; */}
                        © 2022 Copyright :&nbsp;
                        <a className="text-white" href="#!">Currency Transfer <font color="#00FFFF"><small><small>dot</small></small></font>Com</a>&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className='col-md-4 ms-sm-auto col-lg-4 px-md-4' style={{ textAlign: 'right' }}>

                        <a href="#top"><button style={{ fontSize: 'small', backgroundColor: 'transparent', border: 'none', textAlign: 'right', color: 'white' }}>
                            👆&nbsp;&nbsp;Go to Top
                        </button></a>
                    </div>
                </div>

                {/* Copyright */}
            </footer>
            {/* Footer */}

            {/* FOOTER ENDS */}
        </div >
    )
}

export default Footer
