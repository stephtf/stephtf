import { NavLink } from 'react-router-dom';
import ContactLinks from './header-footer/header-components/ContactLinks';

const About = () => {
  return (
    <div>
      <div className='about-res'>
        <img className='headshot mx-auto' alt='headshot of Steph Fajardo' src='/images/headshot.jpg' />
        <div>
          <h1>Hi, I'm Steph</h1>
          <p><i>I'm passionate about solving problems through efficient code, critical thinking, and finding creative solutions.</i></p>
          <p>I recently graduated from Georgia Institute of Technology's coding bootcamp for full stack web development. Prior to this, I completed the Google UX design certificate course where I learned how to conduct UX research and design apps and websites that center user needs.
          </p>
          <p>Email me at<a className='blue-link' href="mailto: stephfajardogarcia@gmail.com"> stephfajardogarcia@gmail.com</a></p>
          <div className='button-links'>
            <ContactLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
