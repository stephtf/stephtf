import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

function Projects() {
    return (
      <div>
        <Header />
        <div className='body-container'>
          <h1 className='mt-4 text-center'>Web Development</h1>
          <div className='project-container'>
            <NavLink to='/project-1' className='link-styles'>
              <img className='project-thumbnails mt-3' src='images/gogirl-thumb.png' alt='a woman working on a computer'/>
              <h2 className='mb-4'>Go Girl</h2>
            </NavLink>
            <NavLink to='/project-2' className='link-styles'>
              <img className='project-thumbnails mt-4' src='images/mm-thumb.png' alt='a woman working on a computer'/>
              <h2 className='mb-4'>mentorMonkey</h2>
            </NavLink>
            <NavLink to='/project-3' className='link-styles'>
              <img className='project-thumbnails mt-4' src='images/historiography-thumb.png' alt='the sign-in page of historiography'/>
              <h2 className='mb-4'>historiography</h2>
            </NavLink>
            <NavLink to='/project-4' className='link-styles'>
              <img className='project-thumbnails mt-4' src='images/urban-thumb.jpg' alt='a mobile phone screen displaying an online dictionary'/>
              <h2 className='last-project'>Ultimate Urban Dictionary</h2>
            </NavLink>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
  
  export default Projects;