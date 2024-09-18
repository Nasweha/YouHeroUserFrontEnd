


import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'; // Import your external CSS file
import 'animate.css/animate.min.css'; // Import animate.css
import super1 from '../assets/superhero-8.jpg'
import super2 from '../assets/review.jpg'


function About() {
  return (
    <div>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8 my-5'>
          <Carousel interval={3000} className='custom-carousel'>
            <Carousel.Item className='slide1'>
              <div className='back-img'>
                <h4 className='text-center animate__animated animate__lightSpeedInRight'>
                  Meet Our Hero
                </h4>


                <p className='text-center   para1 animate__animated animate__fadeIn animate__delay-1s'>
                  Welcome to yourHero, a place where every cry for help meets action. In a world full of challenges, injustices, and unheard voices, our hero stands tall—an invisible force dedicated to fighting for what's right. This website is the bridge between you and your guardian, ensuring that no grievance goes unnoticed.

                  At yourHero, we believe that every concern matters, no matter how big or small. Whether it's an issue affecting your daily life or something that feels too overwhelming to tackle alone, our superhero is here to listen, respond, and make things right.

                  Through this platform, you can share your story, raise your concerns, and trust that help is on the way. Your voice will be heard, and your problem will be handled with the care and attention it deserves.

                  Step into the world of yourHero—where your safety, peace, and justice are always the top priority. Your journey to resolution starts here.
                </p>

              </div>
            </Carousel.Item>
            <Carousel.Item className='slide2'>
              <div className='container-Slide'>
                <div className='image-wrapper'>
                  <img className='d-block' src={super1} width={'300px'} height={'400px'} alt='Slide 1' />
                </div>
                <div className='text-overlay1'>
                  <h4 className='text-center animate__animated animate__bounceInDown'>
                    Our Hero Mission
                  </h4>
                  <p className='text-center para animate__animated animate__fadeIn animate__delay-1s'>
                  At yourHero, our mission is simple but powerful: to ensure that no grievance goes unheard, and no call for help goes unanswered. We believe in standing up for justice, supporting those in need, and acting with integrity and strength. Whether it’s tackling everyday challenges or facing larger threats, our goal is to create a safe space where everyone’s voice can be raised without fear. Your problems are our priority, and we are here to bring resolution, peace, and hope back into your world.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className='slide2'>
              <div className='container-Slide2'>
                <div className='image-wrapper2'>
                  <img className='d-block' src={super2} width={'500px'} height={'400px'} alt='Slide 1' />
                </div>
                <div className='text-overlay2'>
                  <h4 className='text-center animate__animated animate__zoomIn'>
                    How We Handle Grievances
                  </h4>
                  <p className='text-center para animate__animated animate__fadeIn animate__delay-1s'>
                    <span className='text-primary fw-bolder'> Listening Closely : </span>We start by really listening to you, understanding what’s wrong and how it affects you.
                    <span className='text-primary fw-bolder'>Acting Quickly : </span> We know that speed matters, so we jump into action right away to fix the issue.
                    <span className='text-primary fw-bolder'> Keeping You Informed :</span> We make sure you’re always in the loop, explaining what’s happening at every stage.
                    <span className='text-primary fw-bolder'> Finding Fair Solutions:</span> Our goal is to offer fair solutions that get to the heart of the problem.
                    Always Improving: We learn from your feedback to keep getting better and make our service even more effective.

                  </p>
                </div>
              </div>
            </Carousel.Item>


          </Carousel>
        </div>
        <div className='col-md-2'></div>
      </div>
    </div>
  );
}

export default About;

