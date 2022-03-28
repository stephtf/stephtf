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
              <img className='project-thumbnails mt-3' src='images/mm-thumb.png' alt='a woman working on a computer'/>
              <h2 className='mb-4'>mentorMonkey</h2>
            </NavLink>
            <NavLink to='/project-2' className='link-styles'>
              <img className='project-thumbnails mt-4' src='images/urban-dict-img.jpg' alt='a mobile phone screen displaying an online dictionary'/>
              <h2 className='mb-4'>Ultimate Urban Dictionary</h2>
            </NavLink>
            <NavLink to='/project-3' className='link-styles'>
              <img className='project-thumbnails mt-4' src='images/coding-quiz-img.png' alt='the coding quiz website home page'/>
              <h2 className='mb-4'>Coding Quiz</h2>
            </NavLink>
            <NavLink to='/project-4' className='link-styles'>
              <img className='project-thumbnails mt-4' src='images/readme-generator-img.png' alt='javascript code for the readme-generator project'/>
              <h2 className='last-project'>Readme Generator</h2>
            </NavLink>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
  
  export default Projects;