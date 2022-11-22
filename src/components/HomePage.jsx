import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CurrencyConverter from './CurrencyConverter'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faMoneyBillTransfer, faMoneyCheckDollar, faPenToSquare, faRankingStar, faMoneyBillTrendUp, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faBrainArrowCurvedRight, faMessageQuote, faTrophyStar } from '@fortawesome/sharp-solid-svg-icons';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate()

  // Routing to Login page 
  const RouteToLoginPage = () => {
    navigate('/login')
  }

  // Routing to Register page 
  const RouteToSignUpPage = () => {

    navigate('/signup')

  }


  window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function (event) {
    window.history.pushState(null, document.title, window.location.href);
  });


  return (
    <><a name="top"></a>
      <Navbar />
      {/* <div className='container'> */}
      {/*  NavBar Starts here */}
      <br />

      <div className='container'>
        <div className="row mb-4">

          <div className="col-12 col-xl-8">
            <h2><br />Better rates are only the beginning</h2>
            <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>Whether you’re paying someone overseas or making international business payments, CurrencyTransfer has modern-day payment solutions to fit your needs.</p>
          </div>

          <div className="col-12 col-xl-4 mb-xl-1">
            <div style={{ textAlign: "right", fontSize: '100px' }}>

              <Link className="btn btn-lg btn-info my-2 mx-2 mt-4 mb-5" to="/signup" id="GetStartedTop" role="button" style={{ alignContent: 'center' }}><FontAwesomeIcon icon={faPenToSquare} />&nbsp;&nbsp;Get Started</Link>

              {/* <div style={{ textAlign: "center", fontSize: '10px' }}> */}

              {/* <video width="180px" height="200px" autoPlay loop src={moneyTransfer} type='video/mp4'>
                </video> */}
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className='container'>
        <div className="row mb-4">

          <div className="col-12 col-xl-2 mb-xl-1">
            <div style={{ textAlign: "left", fontSize: '120px' }}>


              <FontAwesomeIcon icon={faGlobe} style={{ color: '#1DA1F2' }} />
              {/* &nbsp;&nbsp;
                <FontAwesomeIcon icon={faMoneyBillTrendUp} style={{ color: '#6B8068' }} /> */}

              {/* <video width="170px" height="200px" autoPlay loop src={moneyTransfer} type='video/mp4'>
            </video> */}
            </div>
          </div>

          <div className="col-12 col-xl-2 mb-xl-1">
            <div style={{ textAlign: "left", fontSize: '120px' }}>


              {/* <FontAwesomeIcon icon={faGlobe} style={{ color: '#1DA1F2' }} />&nbsp;&nbsp; */}
              <FontAwesomeIcon icon={faMoneyBillTrendUp} style={{ color: '#6B8068' }} />

              {/* <video width="170px" height="200px" autoPlay loop src={moneyTransferWorldwide} type='video/mp4'>
            </video> */}
            </div>
          </div>

          <div className="col-12 col-xl-8">
            <h2 style={{ textAlign: "center" }}><br />Global Money Transfers Made Easy</h2>
            <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>Every day, individuals and businesses rely on CurrencyTransfer for ease of access to the very best international money transfer deals online. We make international money transfers easy and transparent.</p>
          </div>



        </div>
      </div>

      <br />    <br />



      <div className='container'>
        <div className="row mb-4">


          <div className="col-12 col-xl-3 mb-xl-1">
            <div style={{ textAlign: "center", fontSize: '120px' }}>
              <FontAwesomeIcon icon={faBrainArrowCurvedRight} style={{ color: '#cb2e4b' }} />

            </div>
          </div>


          <div className="col-12 col-xl-3 mb-xl-1">
            <div style={{ textAlign: "center", fontSize: '120px' }}>
              <FontAwesomeIcon icon={faMessageQuote} style={{ color: '#383838' }} />

            </div>
          </div>


          <div className="col-12 col-xl-3 mb-xl-1">
            <div style={{ textAlign: "center", fontSize: '120px' }}>
              <FontAwesomeIcon icon={faMoneyBillTransfer} style={{ color: '#f77f00' }} />

            </div>
          </div>


          <div className="col-12 col-xl-3 mb-xl-1">
            <div style={{ textAlign: "center", fontSize: '120px' }}>
              <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#438a04' }} />

            </div>
          </div>

        </div>
      </div>



      <div className='container'>
        <div className="row mb-4" style={{ textAlign: 'center' }}>


          <div className="col-12 col-xl-3">
            <h7>BUILD A PLAN</h7>
            <p style={{ color: "green", fontWeight: 'bold' }}>Your currency concierge will work with you to make a tailor-made international money transfer service.</p>
          </div>


          <div className="col-12 col-xl-3">
            <h7>GET A LIVE QUOTE</h7>
            <p style={{ color: "green", fontWeight: 'bold' }}>
              Log in and get a quote.<br />Lock it when you’re happy and book your trade online via your personal dashboard.
            </p>
          </div>


          <div className="col-12 col-xl-3">
            <h7>TRANSFER FUNDS</h7>
            <p style={{ color: "green", fontWeight: 'bold' }}>
              Transfer the funds for your payment. Everything will be tracked throughout the process.
            </p>
          </div>

          <div className="col-12 col-xl-3">
            <h7>ALLOCATE RECIPIENT</h7>
            <p style={{ color: "green", fontWeight: 'bold' }}>Allocate and manage your recipients. You can enjoy a simple, easy, and better global money transfer experience.</p>
          </div>

        </div>
      </div>
      <br />

      <div className='container'>
        <div className="row mb-4">

          <div className="col-12 col-xl-8">
            <h2><br />Best Execution From Our Payment Network</h2>
            <p style={{ color: "green", textAlign: "justify", fontWeight: 'bold' }}>CurrencyTransfer’s unique platform gives you access to a global payment network. It means you will benefit from the best deal among several payment institutions. All in one place.</p>
          </div>

          <div className="col-12 col-xl-4 mb-xl-1">

            <div className='container'>
              <div className='container'>
                <div className='container'>
                  <ul style={{ textAlign: 'left', color: 'blue' }}><br /><br />
                    <li>Unmatched on service delivery</li>
                    <li>Speedy payments</li>
                    <li>World class support</li>
                    <li>Competitive Rates. Forever!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <h3 style={{ textAlign: "center", color: 'orangered', fontWeight: 'bold' }}>Try our currency converter to check the exchange rates based on live rates.</h3>


        <div className='d-flex justify-content-around'>
          <div style={{ justifyContent: "left", fontSize: '200px', color: 'rgb(91, 151, 215)' }}>
            <FontAwesomeIcon icon={faMoneyCheckDollar} />
          </div>

          <div style={{ justifyContent: "center", fontSize: 'small' }}>
            <CurrencyConverter />
          </div>

          <div style={{ justifyContent: "left", fontSize: '200px', color: '#383838' }}>
            <FontAwesomeIcon icon={faMoneyCheckDollar} />
          </div>

        </div>

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
      </div>
      <br />



      {/* </div> */}
      <Footer />
    </>
  )
}

export default HomePage