import Header from './Header';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import ContactLinks from './header-components/ContactLinks';

function About() {
    return (
      <div>
        <Header />
        <div className='body-container about-res'>
          <img className='headshot mx-auto' alt='headshot of Steph Fajardo' src='/images/headshot.jpg'/>
          <div>
            <h1>Hi, I'm Steph</h1>
            <p><i>I'm passionate about solving problems through efficient code, critical thinking, and finding creative solutions.</i></p>
            <p>I recently graduated from Georgia Institute of Technology's coding bootcamp for full stack web development. Prior to this, I completed the Google UX design certificate course where I learned how to conduct UX research and design apps and websites that center user needs. 
            </p>
            <p>Email me at<a className='blue-link' href="mailto: stfajardo@gmail.com"> stfajardo@gmail.com</a></p> 
            <div className='button-links'>
              <a href="./assets/resume.pdf" target="_blank"><button className='btn' id='resume-btn'>Resume</button></a>
              <NavLink to='/my-story'><button className='btn' id='story-btn'>My Story</button></NavLink>
              <ContactLinks />
            </div>
          </div>
        </div>
      <Footer />
      </div>
    );
  }
  
  export default About;
  