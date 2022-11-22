import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link, Route, useNavigate } from 'react-router-dom'
import { login } from '../features/userSlice'
import { useDispatch } from 'react-redux'
import Dashboard from './Dashboard';
import bcrypt from 'bcryptjs';
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleCheck, faMoneyBillTrendUp, faRightToBracket, faArrowRotateLeft, faUnlockKeyhole, faHouseChimneyCrack } from '@fortawesome/free-solid-svg-icons';
import { faCabinetFiling, faFaceThinking, faMoneyCheckDollar, faMoneyCheckDollarPen, faShieldCheck, faTrophyStar } from '@fortawesome/sharp-solid-svg-icons';

const LoginPage = () => {


    const [userEmail, setUserEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [userDetails, setUserDetails] = useState([]);

    const [emailError, setEmailError] = useState(``)
    const [passwordError, setPasswordError] = useState(``)

    var loginValidationStatus = false
    const dispatch = useDispatch();
    var db_id = ""
    var db_encryptedpwd = ""
    var emailId = false
    var db_username = ""

    const api = axios.create({
        baseURL: `http://localhost:8181/users`
    })

    useEffect(() => {
        api.get(`/`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err))
    })

    // const Login = (event) => {
    async function Login(event) {
        event.preventDefault();

        for (let i = 0; i < userDetails.length; i++) {
            if (userEmail.toLowerCase() === (userDetails[i].email).toLowerCase()) {

                db_id = userDetails[i].email;
                db_encryptedpwd = userDetails[i].password;
                db_username = userDetails[i].name;
                emailId = true
            }
        }


        loginValidationStatus = await bcrypt.compare(password, db_encryptedpwd)


        if (loginValidationStatus) {
            // setSuccessMsg("login success. Navigating to dashboard...")

            axios.post(`http://localhost:8181/login`,
                {
                    "email": userEmail,
                    "password": password

                }
            )
                .then((response) => {

                    console.log(response.data.jwtToken);
                    localStorage.setItem('Token', response.data.jwtToken);
                    localStorage.setItem('email', userEmail);
                })
                .catch(error => console.log(error))
            axios.get(`http://localhost:8181/users/${userEmail}`).then((response) => {

                console.log(response);

            })
                .catch(error => console.log(error))


            dispatch(login(
                {
                    id: db_id,
                    username: db_username,
                    loginStatus: true,
                    component: <Route path='/dashboard' element={<Dashboard />} />
                }



            ))
            navigate("/dashboard")

        }
        else if (!(emailId)) {
            setEmailError(`Email id doesn't exist. Please Sign Up`)
        }
        else if (!loginValidationStatus) {
            setPasswordError(`Invalid Credentials`)
        }

        else {
            // alert(`Password doesnt match our records`)

        }
    }


    // Routing to diff components
    const navigate = useNavigate()


    const RouteToHomePage = () => {
        navigate('/')
    }

    const RouteToSignupPage = () => {
        navigate('/signup')
    }

    return (
        <>
            <Navbar />
            <Container fluid >
                <Row className="mt-5 mb-10 pb-10 pt-5 ">
                    <Col lg={4} md={6} sm={9} className="p-3 m-auto shadow-lg rounded bg-transparent">
                        <Form className='bg-transparent'>
                            <h4 className='text-center' style={{ color: 'blue' }}>
                                <FontAwesomeIcon icon={faUnlockKeyhole} style={{ color: '#198754 ' }} />
                                &nbsp;&nbsp;Login</h4><p>&nbsp;</p>
                            <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" autoComplete="off" style={{ color: "primary" }}>
                                <Form.Control type="email" placeholder="name@example.com"
                                    style={{ backgroundColor: "transparent" }}
                                    onChange={(e) => {
                                        setUserEmail(e.target.value);
                                        setEmailError(``)
                                    }}
                                    isInvalid={!!emailError}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {emailError}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <br /><br />

                            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" autoComplete="off" >
                                <Form.Control type="password" placeholder="Password"
                                    style={{ backgroundColor: "transparent" }}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        setPasswordError(``)
                                    }}
                                    isInvalid={!!passwordError}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {passwordError}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <br />
                            {/* <Form.Control.Feedback type='valid'>
                                {successMsg}
                            </Form.Control.Feedback> */}
                            <div className='text-center span2'>

                                <Button type='submit' variant="success" className='mb-2 mt-2 m-10 btn' onClick={Login} ><FontAwesomeIcon icon={faRightToBracket} />&nbsp;&nbsp;Login</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="primary" className='mb-2 mt-2 m-10 btn' onClick={RouteToSignupPage} ><FontAwesomeIcon icon={faFileCircleCheck} />&nbsp;&nbsp;Register</Button>
                            </div>
                            <br />

                            <div className='text-center'>
                                <h5>Changed your mind..?&nbsp;&nbsp;<FontAwesomeIcon icon={faFaceThinking} /></h5>
                                <Button variant="secondary" style={{ textTransform: 'unset' }} className='mb-3 btn-sm' onClick={RouteToHomePage} ><FontAwesomeIcon icon={faHouseChimneyCrack} />&nbsp;&nbsp;Back to Home</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
    )
}

export default LoginPage