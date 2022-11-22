import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faRankingStar, faMoneyBillTrendUp, faUniversalAccess, faArrowsToEye, faBolt, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faTrophyStar, faWindowFrame } from '@fortawesome/sharp-solid-svg-icons';


const About = () => {
    return (
        <div>
            <a name="top"></a>
            <Navbar />
            <br /><br />


            <div className='container'>
                <div className="row mb-4">

                    <div className="col-12 col-xl-8">
                        <h2><small>We built money transfer service out of personal pain</small></h2>
                        <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }} >Every month, co-founders Daniel and Stevan needed to send money abroad to pay our suppliers. The pair logged each month to online banking and were simply mortified at the hidden fees and ludicrous bank markups. 0% commission was a devious way of concealing a terrible rate of exchange. Often up to 5% of the value of the transfer. Ouch..!
                            <br /><br />
                            An alternative money transfer service was needed.Trying to get ‘smart’, the founders would call up 2-3 FCA regulated foreign exchange brokers for sharper rates.The rates were very competitive, but the process of shopping around took a good hour each week.It all became pretty tiring, inefficient and inaccurate as the rates moved by the second.</p>
                    </div>

                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ textAlign: "right", fontSize: '100px' }}>
                            <Link className="btn btn-lg btn-info my-2 mx-2 mt-4 mb-0" to="/signup" role="button" id="GetStartedTop" style={{ alignContent: 'center' }}>
                                <FontAwesomeIcon icon={faPenToSquare} />&nbsp;&nbsp;Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br />

            <div className='container'>
                <div className="row mb-4">

                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ textAlign: "left", fontSize: '145px' }}>
                            <div className='container'>
                                <div className='container'>
                                    <div className='container'>
                                        <div className='container'>
                                            <FontAwesomeIcon icon={faMoneyBillTrendUp} style={{ color: '#383838' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-8">
                        <h2><small>‘CurrencyTransfer’ was born</small></h2>
                        <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>We then thought, wouldn’t it be great to compare money transfer quotes from multiple suppliers, and book a transfer. All at the same venue. In a matter of 60 seconds.
                            <br /><br />
                            And so CurrencyTransfer<small><small><font color="black">dot</font></small></small>com was born.A comparison website where it was easy to compare between deals and secure the best exchange rate available at that time.There’s only one caveat though: price became the only thing easily comparable, ignoring other factors that would also play an important role in the quality of a successful deal.</p>
                    </div>

                </div>
            </div>
            <a name="access"></a>
            <a name="transparency"></a>
            <a name="guidance"></a>
            <br /><br />



            <div className='container'>
                <div className="row mb-4">


                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ textAlign: "center", fontSize: '120px' }}>
                            <FontAwesomeIcon icon={faUniversalAccess} style={{ color: '#0092f9' }} />

                        </div>
                    </div>


                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ textAlign: "center", fontSize: '120px' }}>
                            <FontAwesomeIcon icon={faWindowFrame} style={{ color: '#cb2e4b' }} />

                        </div>
                    </div>


                    <div className="col-12 col-xl-4 mb-xl-1">
                        <div style={{ textAlign: "center", fontSize: '120px' }}>
                            <FontAwesomeIcon icon={faArrowsToEye} style={{ color: '#438a04' }} />

                        </div>
                    </div>

                </div>
            </div>



            <div className='container'>
                <div className="row mb-4">


                    <div className="col-12 col-xl-4">
                        <h2 style={{ textAlign: "center" }}><small>Access</small></h2>
                        <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>At CurrencyTransfer, we believe you deserve the same access to compare money transfer rates as the big FTSE100. Our vision is to democratize international payments, whether you’re sending £20,000 or £20 million abroad each year.</p>
                    </div>


                    <div className="col-12 col-xl-4">
                        <h2 style={{ textAlign: "center" }}><small>Transparency</small></h2>
                        <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>
                            We’re motivated to make your life easier when making and receiving international payments. That’s why we believe in 100% price transparency. We display your rate and the ‘real’ mid-market exchange rate side by side. No hidden fees. No secrets.
                        </p>
                    </div>


                    <div className="col-12 col-xl-4">
                        <h2 style={{ textAlign: "center" }}><small>Guidance</small></h2>
                        <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>Thanks to our network of currency suppliers, we are in a much better position to guarantee you the best execution for your money transfers abroad. You’ll be allocated a currency concierge to help you along your journey, to suit your unique needs.</p>
                    </div>

                </div>
            </div>
            <br /><br />

            <div className='container'>
                <div className="row mb-4">

                    <div className="col-12 col-xl-8">
                        <h2><small>We want to give you the best experience possible</small></h2>
                        <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>We support our happy customers and try every single day to add value. They are building great businesses. Our money transfer services simply help them succeed. Some import from overseas. Others settle payments between international offices and suppliers.
                            <br /> <br />
                            Private clients buy property abroad and pay bills. Whatever your reason for using CurrencyTransfer<small><small><font color="black">dot</font></small></small>com, we’d be humbled if you give our money transfer service a try.</p>
                    </div>

                    <div className="col-12 col-xl-4 mb-xl-1">

                        <div style={{ justifyContent: "right", textAlign: 'center', fontSize: '120px', color: '#1DA1F2' }}>
                            <FontAwesomeIcon icon={faBolt} style={{ color: '#1ebbd7' }} />&nbsp;&nbsp;

                            <FontAwesomeIcon icon={faBoltLightning} style={{ color: '#85bb10' }} />
                        </div>
                        <a name="GIT"></a>
                    </div>
                </div>
            </div>

            <br />

            <div className='container'>

                <h2 style={{ textAlign: "center" }}><small>Get in touch</small></h2>
                <p style={{ color: "green", textAlign: "center", fontWeight: 'bold' }}>In a digital world, we’re only a click or a call away to give you the best human‑to‑human international payments platform for your needs.<br />
                    Meet the team that enables us to provide dedicated personal experience.
                </p>

            </div>



            <div className='container'>
                <div className="row row-cols-2 row-cols-md-2 g-4 ">

                    <div className="col ">
                        <div className="card border rounded-top border-dark">
                            <img src="https://www.currencytransfer.com/wp-content/assets/company/londonoffice.min.jpg" className="card-img-top" alt="londonoffice" /></div>
                        <div className="col-12 col-xl-12 border rounded-bottom border-secondary " >
                            <p></p>
                            <div className='container'>
                                <div className='container'>
                                    <h4><small>London Office</small></h4>
                                    <p style={{ textAlign: "justify" }}>
                                        <b>Currency Transfer Ltd</b><br />
                                        848 Eccleston Square,<br />
                                        London, United Kingdom<br />
                                        <font color="#8530d1"> +44 (0) 20 xxxx 1036</font><br />
                                        <b> <font color="#8530d1"> <small> information@currencytransfer<small><small><small><font color="black">dot</font></small></small></small>com</small></font></b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card border rounded-top border-dark">
                            <img src="https://www.currencytransfer.com/wp-content/assets/company/telavivoffice.min.jpg" className="card-img-top" alt="telavivoffice" /></div>
                        <div className="col-12 col-xl-12 border rounded-bottom border-secondary" >
                            <p></p>
                            <div className='container'>
                                <div className='container'>
                                    <h4><small>Tel Aviv Office</small></h4>
                                    <p style={{ textAlign: "justify" }}>
                                        <b>Currency Transfer Ltd</b><br />
                                        London Ministore, 3000 Gabirol<br />
                                        Tel Aviv, Israel<br />
                                        <font color="#8530d1"> +972 (0) 3 xxx 0671</font><br />
                                        <b> <font color="#8530d1"> <small> information@currencytransfer<small><small><small><font color="black">dot</font></small></small></small>com</small></font></b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br />




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
        </div>

    )
}

export default About;
