import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div> 
            <ul className='nav-link-container'>
                <li>
                    <NavLink className='nav-link-styles' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link-styles' to='/projects'>Projects</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks;