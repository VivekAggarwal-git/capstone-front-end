import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleCheck, faMoneyBillTrendUp, faRightToBracket, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';



const SignUpPage = () => {
    // Getting all the userinputs as a variable    

    const [name, setname] = useState(``);
    const [accNo, setAccNo] = useState(``);
    const [email, setEmail] = useState(``);
    const [mobNo, setMobNo] = useState(``);
    const [password, setPassword] = useState(``);
    const [confirmpassword, setconfirmPassword] = useState(``);

    const [nameerror, setnameerror] = useState(``);
    const [accNoError, setAccNoError] = useState(``);
    const [emailError, setEmailError] = useState(``);
    const [mobNoError, setMobNoError] = useState(``);
    const [passwordError, setPasswordError] = useState(``);
    const [confirmpasswordError, setconfirmPasswordError] = useState(``);


    var [userDetails, setUserDetails] = useState([]);


    var email_exist;


    //Regex Variable to compare
    var regExEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
    var regexname = /[A-Za-z]{3,25}/
    var regex10digits = /^[0-9]\d{09}$/ // to validate both phone no and account no
    var regExPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/


    //setting up base url for request
    const api = axios.create({
        baseURL: `http://localhost:8181/users`
    })

    useEffect(() => {

        api.get(`/`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err))

    })


    for (let i = 0; i < userDetails.length; i++) {
        if (email === userDetails[i].email) {

            email_exist = true

        }

    }





    const SignUp = (event) => {

        event.preventDefault()
        if (regexname.test(name) && regExEmail.test(email) && regex10digits.test(accNo) && regex10digits.test(mobNo) && regExPwd.test(password) && password !== '' && password === confirmpassword) {

            var newUser = {
                "name": name,
                "accountNo": accNo,
                "email": email,
                "mobileNo": mobNo,
                "password": password,
                "confirmpassword": confirmpassword,


            }


            api.post(`/`, newUser)
                .then(response => console.log(response))
                .catch(err => console.log(err))



            alert("Registration successful....")
            navigate("/login")


        } else {
            console.log('test')
            console.log(password)
            console.log(email_exist)

            if (!regexname.test(name)) {
                setnameerror(`Name length must be between 3 - 20 characters`)
            }


            if (!regExEmail.test(email)) {
                setEmailError(`Please enter a valid email id`)

            }

            if (email_exist) {
                setEmailError(`Email ID already exist. Please use a different email Id or login to continue`)
            }

            if (!regex10digits.test(accNo)) {
                setAccNoError(`Please Enter a valid 10 digit account number`)
            }
            if (!regex10digits.test(mobNo)) {
                setMobNoError(`Please Enter a valid 10 digit mobile number`)
            }
            if (!regExPwd.test(password)) {
                setPasswordError(`Your password should contain atleast 8 characters`)
            }
            if (password !== confirmpassword) {
                setconfirmPasswordError(`Confirm password should match the password`)
            }
        }


    }

    // Routing to diff components
    const navigate = useNavigate()

    const RouteToLoginPage = () => {
        navigate('/login')
    }


    return (
        <>
            <Navbar />
            <Container fluid    >
                <Row className="mt-4  pt-4 bg-transparent round">
                    <Col lg={4} md={6} sm={9} className="p-3 m-auto shadow-lg rounded bg-transparent">
                        <Form className='bg-transparent'>

                            <h4 className='text-center ' style={{ color: 'blue' }}>
                                <FontAwesomeIcon icon={faFileCircleCheck} style={{ color: '#198754' }} />
                                &nbsp;&nbsp;Register</h4>
                            <h6 className='mb-3 text-center ' style={{ color: '#383838' }}>with Currency Transfer&nbsp;&nbsp;<FontAwesomeIcon icon={faMoneyBillTrendUp} /></h6>

                            <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3" autoComplete="off" >
                                <Form.Control type="text" placeholder="Name"
                                    style={{ backgroundColor: "transparent" }}
                                    onChange={(e) => {
                                        setname(e.target.value);
                                        setnameerror(``)
                                    }}
                                    isInvalid={!!nameerror}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {nameerror}
                                </Form.Control.Feedback>

                            </FloatingLabel>

                            <br /><br />

                            <FloatingLabel controlId="floatingInput2" label="Account Number" className="mb-3" autoComplete="off" >
                                <Form.Control type="number" placeholder="Account Number"
                                    style={{ backgroundColor: "transparent" }}
                                    onChange={(e) => {
                                        setAccNo(e.target.value);
                                        setAccNoError(``)
                                    }}
                                    isInvalid={!!accNoError}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {accNoError}
                                </Form.Control.Feedback>

                            </FloatingLabel>

                            <br /><br />

                            <FloatingLabel controlId="floatingInput3" label="Email Address" className="mb-3" autoComplete="off" >
                                <Form.Control type="email" placeholder="text@example.com"
                                    style={{ backgroundColor: "transparent" }}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailError(``)
                                    }}


                                    isInvalid={!!emailError}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {emailError}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <br /><br />

                            <FloatingLabel controlId="floatingInput4" label="Mobile Number" className="mb-3" autoComplete="off" >
                                <Form.Control type="number" placeholder="Mobile Number"
                                    style={{ backgroundColor: "transparent" }}
                                    onChange={(e) => {
                                        setMobNo(e.target.value);
                                        setMobNoError(``)
                                    }}
                                    isInvalid={!!mobNoError}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {mobNoError}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <br /><br />

                            <FloatingLabel controlId="floatingPassword1" label="Password" className="mb-3" autoComplete="off" >
                                <Form.Control type="password" placeholder="Password"
                                    style={{ backgroundColor: "transparent" }}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setPasswordError(``)
                                    }}
                                    isInvalid={!!passwordError}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {passwordError}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <br /><br />

                            <FloatingLabel controlId="floatingPassword2" label="Confirm Password" className="mb-3" autoComplete="off" >
                                <Form.Control type="password" placeholder="ConfirmPassword"
                                    style={{ backgroundColor: "transparent" }}
                                    onChange={(e) => {
                                        setconfirmPassword(e.target.value);
                                        setconfirmPasswordError(``)
                                    }}
                                    isInvalid={!!confirmpasswordError}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {confirmpasswordError}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <br />




                            <div className='text-center span2'>
                                <Button type='submit' variant="primary" className='mb-2 mt-2 m-3 btn' onClick={SignUp} ><FontAwesomeIcon icon={faFileCircleCheck} />
                                    &nbsp;&nbsp;Register</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button type='reset' variant="secondary" className='mb-2 mt-2 btn' > &nbsp;
                                    <FontAwesomeIcon icon={faArrowRotateLeft} />&nbsp;&nbsp;Reset&nbsp;&nbsp;</Button>


                            </div>
                            <div className='text-center mt-3'>
                                <h6 style={{ color: 'blue' }}>Already have an account?</h6>
                                <Button variant="success" className='mb-3 btn-sm' onClick={RouteToLoginPage} ><FontAwesomeIcon icon={faRightToBracket} />&nbsp;&nbsp;Login</Button>

                            </div>

                        </Form>
                    </Col>
                </Row>

            </Container>
            <br /><br /><br />
            <Footer />
        </>
    )
}

export default SignUpPage