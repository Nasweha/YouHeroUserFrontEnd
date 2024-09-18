


import React from 'react';
import about from '../assets/about11.png';
import './HomeSec2.css';
import { Link } from 'react-router-dom';


function HomeSec2() {
  return (
    <div className='homeSec-container'>
      <div className='row'>
      <h3 className='section-title text-center mb-5' >About Us</h3>
      <div className='col-md-1'></div>
        <div className='col-md-11 col-lg-5'>
          <div className='image-container'>
            <img src={about} alt="About Us" className='about-image' />
          </div>
        </div>
        
        
        <div className='col-md-11 col-lg-5'>
         
          <p className='section-text'>
            At YourHero, we are driven by a commitment to empower every individual and ensure their concerns are addressed with care and urgency. Our platform is designed to provide a straightforward, compassionate, and effective way for users to submit their grievances and seek resolution. We believe in the power of every voice and are dedicated to making sure that each one is heard and acted upon.
            <br/><br/>
            Learn more about how we operate, our mission, and how we are working to make a difference. Together, we can ensure that every concern receives the attention it deserves.
          </p>
         <Link to={'/about'} style={{textDecoration:'none'}}> <button className='cta-button d-flex m-auto'>Know Us More</button></Link>
        </div>
        {/* <div className='col-md-1'></div> */}
      </div>
    </div>
  );
}

export default HomeSec2;
