




import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../navbar/navbar.css';

function Navbar1() {
  const location = useLocation();
  const navigate = useNavigate();

  
  const authPages = ['/login', '/register'];

  
  const isAuthPage = authPages.includes(location.pathname);

 
  const isLoggedIn = !!sessionStorage.getItem('token'); 


  const handleFormClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); 
      toast.info('Please log in or register to access the form page.');
    }
  };

  return (
    <div>
      <Navbar className='transparent-navbar' expand="lg">
        <Container>
          <Navbar.Brand href="/" className='logo'>
            Your<span className="text-danger">Hero</span>
          </Navbar.Brand>
          <Navbar.Toggle className='navbar-toggler' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
           
            {!isAuthPage && (
              <Nav className="ms-auto">
                <Link to={'/'} className="nav-link hover-effect"> Home</Link>
                <Link to={'/about'} className="nav-link hover-effect"> About</Link>
                <Link to={'/form'} className="nav-link hover-effect" onClick={handleFormClick}>Form</Link>
                {!isLoggedIn ? (
                  <Link to={'/login'} className="nav-link1 hover-effect"> Login</Link>
                ) : (
                  <span className="nav-link hover-effect" onClick={() => {
                    sessionStorage.clear(); 
                    navigate('/');
                    toast.success('Logged out successfully!');
                  }}>Logout</span>
                )}
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </div>
  );
}

export default Navbar1;
