import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 col-sm-12">
            <h5 className="footer-title text-dark">Your<span className='text-danger'>Hero</span></h5>
            <p className="footer-text">
              yourHero is dedicated to providing a platform where grievances are heard and resolved by our superheroes. We believe in action and making a difference.
            </p>
          </div>

          <div className="col-md-4 col-sm-12">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to={'/'} >Home</Link></li>
              <li><Link to={'/about'} >About</Link></li>
              <Link to={'/form'} >Form</Link>
             
            </ul>
          </div>

          <div className="col-md-4 col-sm-12">
            <h5 className="footer-title">Follow Us</h5>
            <div className="footer-social">
              <a href="#" className="social-link"><FontAwesomeIcon icon={faFacebook} className=''/></a>
              <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a>
              
            </div>
          </div>
          
        </div>

        <div className="footer-bottom">
          <p className='fw-900 text-danger'>© 2024 yourHero. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
