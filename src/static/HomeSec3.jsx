



import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import lap from '../assets/lap.webp';
import review from '../assets/video4.avif';
import action from '../assets/superhro12.jpg';
import './HomeSec3.css';

function HomeSec3() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='home3-container'>
        <h3 className='text'>How It Works </h3>
      <div className='home3-content'>
        
        <div className='home3-item' data-aos="fade-up">
          <img src={lap} alt="Submit Grievance" className='home3-img'/>
          <h4 className='home3-title'>Submit Your Grievance</h4>
        </div>

        <div className='home3-item' data-aos="fade-up" data-aos-delay="200">
          <img src={review} alt="We Review It" className='home3-img' />
          <h4 className='home3-title'>We Review It</h4>
        </div>

        <div className='home3-item' data-aos="fade-up" data-aos-delay="400">
          <img src={action} alt="Action Taken" className='home3-img' />
          <h4 className='home3-title'>Action is Taken</h4>
        </div>
      </div>
    </div>
  );
}

export default HomeSec3;
