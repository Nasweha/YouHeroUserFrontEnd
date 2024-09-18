import React from 'react';
import superhero from '../assets/superhero-71.png';
 import shape6 from '../assets/shape16.png';

import '../static/hero.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='row my-5'>
        <div className='col-md-1'></div>
        <div className='col-md-5 section '>
          <h2 className='text-center'>Your Hero. Your Story. Your Justice.</h2>
          <p className=''>
          Every voice matters, and every grievance deserves attention. At yourHero, we’re here to listen, act, and bring justice to your world. Whether it's a personal issue or a broader injustice, yourHero is ready to step in and make things right. Share your story today—your hero is listening, and together, we'll ensure justice is served.
          </p>
          <h6>Need an Help ? Tell Us In One Click</h6>
         <Link to={'/form'} style={{textDecoration:"none"}}> <button className='px-4 btn btn-outline-danger shadow fw-900 tellme'>Tell Me</button></Link>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-5'>
          <div className='superhero-container'>
            <img src={superhero} alt='no_image' width={'500px'} className='animation' />
            <img src={shape6} alt='shape' className='shape-background' height={'800px'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
