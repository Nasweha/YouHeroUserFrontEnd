// import React from 'react'

// import HeroSection from '../static/HeroSection'
// import HomeSec2 from '../static/HomeSec2'
// import HomeSec3 from '../static/HomeSec3'
// import Chatbot from '../chatbot/Chatbot'

// function Home() {
//   return (
//     <div className=''>
      
//         <HeroSection/>
//         <HomeSec2/>
//         <HomeSec3/>
//         <Chatbot/>

//     </div>
//   )
// }

// export default Home


import React from 'react';
import './Home.css'; // Import the CSS for responsiveness

import HeroSection from '../static/HeroSection';
import HomeSec2 from '../static/HomeSec2';
import HomeSec3 from '../static/HomeSec3';
import Chatbot from '../chatbot/Chatbot';

function Home() {
  return (
    <>
      <section className="hero-section">
        <HeroSection />
      </section>
      <section className="home-sec2">
        <HomeSec2 />
      </section>
      <section className="home-sec3">
        <HomeSec3 />
      </section>
      <section className="chatbot-section">
        <Chatbot />
      </section>
    </>
  );
}

export default Home;
