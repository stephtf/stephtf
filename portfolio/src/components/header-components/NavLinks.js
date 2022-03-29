import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div> 
            <ul className='nav-link-container'>
                <li>
                    <NavLink className='nav-link-styles'  activeClassName='active' to='/'>About</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link-styles' activeClassName='active' to='/projects'>Projects</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks;