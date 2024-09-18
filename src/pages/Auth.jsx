import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import loginuser from '../assets/login31.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi, registerApi } from '../../services/allAPI'
import '../pages/Auth.css'


function Auth({ register }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  // Register
  const handleRegister = async () => {
    const { username, email, password } = userDetails;
    if (!username || !email || !password) {
      toast.info('Please fill the form completely');
    } else {
      const result = await registerApi(userDetails);
      if (result.status === 200) {
        toast.success('Registration successful');
        navigate('/login');
      } else {
        toast.error('Something went wrong. Please try again later');
      }
    }
  };

  // Login
  const handleLogin = async () => {
    const { email, password } = userDetails;
    if (!email || !password) {
      toast.info('Please fill the fields completely');
    } else {
      const result = await loginApi({ email, password });
      if (result.status === 200) {
        toast.success('Login successful');
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
        sessionStorage.setItem("token", result.data.token);
        setUserDetails({ username: "", email: "", password: "" });
        setTimeout(() => navigate('/'), 2000);
      } else {
        toast.error(result.response.data);
      }
    }
  };

  return (
    <div className="d-flex auth-div justify-content-center align-items-center vh-100 ">
      <div className='auth-wrapper'>
        <Link to={'/'} className='text-warning' style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back To Home
        </Link>
        <div className=" rounded auth-container ">
          <Row className="h-100 shadow ">
            <Col sm={12} md={6} className=' first-col d-flex justify-content-center align-items-center flex-column'>
              <img src={loginuser} alt="no image" className='w-75 animated-image' />
              <h3 className='text-center gradient-subtext'>Greetings, Citizen!</h3>
              <h5 className='text-center gradient-text pb-3'>Together, we’ll stand against every challenge. Your journey as a hero begins now!</h5>
            </Col>
            <Col sm={12} md={6} className='second-col d-flex justify-content-center align-items-center flex-column'>
              {/* <h3 className='animated-heading'>Your<span className='text-'>Hero</span></h3> */}
              {register ? <h5 className='animated-subheading mt-3'>Sign Up To Your Account</h5> : <h5 className='animated-subheading'>Sign In To Your Account</h5>}

              <form className='mt-4 w-75  animated-form'>
                {register && <div className='mb-3'>
                  <input type="text" placeholder='User Name' className='form-control' onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
                </div>}
                <div className='mb-3'>
                  <input type="text" placeholder='Email' className='form-control' onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
                </div>
                <div className='mb-3'>
                  <input type="password" placeholder='Password' className='form-control' onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
                </div>
                <div className='mb-3'>
                  {register ? <div>
                    <button className='btn btn-primary btn-outline-danger w-100' type='button' onClick={handleRegister}>Register</button>
                    <p>Already a User? Click here to <Link to={'/login'} className='text-warning'>login</Link></p>
                  </div> : <div>
                    <button className='btn btn-primary btn-outline-danger w-100 text-light fw-900' type='button' onClick={handleLogin}>Login</button>
                    <p>New User? Click here to <Link to={'/register'} className='text-warning'>Register</Link></p>
                  </div>}
                </div>
              </form>
            </Col>
          </Row>
        </div>
        <ToastContainer theme='colored' position='top-center' autoClose='2000' />
      </div>
    </div>
  )
}

export default Auth;
