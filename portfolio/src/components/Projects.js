import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

function Projects() {
    return (
      <div>
        <Header />
        <div className='body-container'>
          <div className='project-res mx-auto'>
            <NavLink to='/project-1' className='link-styles'>
              <img className='project-thumbnails mt-4' src='images/filamblog.png' alt='website logo for Fil-Am Food Blog'/>
              <p className='mb-4 project-titles'>Fil-Am Foodie</p>
            </NavLink>
            <NavLink to='/project-2' className='link-styles'>
              <img className='project-thumbnails mt-4' src='images/mm-thumb.png' alt='a woman working on a computer'/>
              <p className='mb-4 project-titles'>MentorMonkey</p>
            </NavLink>
            <NavLink to='/project-3' className='link-styles'>
              <img className='project-thumbnails mt-4' src='images/historiography-thumb.png' alt='the sign-in page of historiography'/>
              <p className='mb-4 project-titles'>Historiography</p>
            </NavLink>
            <NavLink to='/project-4' className='link-styles'>
              <img className='project-thumbnails mt-4' src='images/urban-thumb.jpg' alt='a mobile phone screen displaying an online dictionary'/>
              <p className='last-project project-titles'>Ultimate Urban Dictionary</p>
            </NavLink>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
  
  export default Projects;