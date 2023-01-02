import { NavLink } from 'react-router-dom';

const linkNames = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'Projects', url: '/projects' },
  { id: 3, name: 'My Story', url: '/my-story' },
]

const NavLinks = () => {
  return (
    <div>
      <ul className='nav-link-container'>
        {linkNames.map((link) => {
          return (
            <li key={link.id}>
              <NavLink className='nav-link-styles' to={link.url}>{link.name}
              </NavLink>
            </li>
          )})}
             <a className='nav-link-styles' href="./assets/resume.pdf" target="_blank">Resume</a>
      </ul>
    </div>
  )
}

export default NavLinks;