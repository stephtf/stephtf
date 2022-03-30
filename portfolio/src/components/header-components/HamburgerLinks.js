import { NavLink } from 'react-router-dom';

const HamburgerLinks = () => {

    return (
        <div> 
            <ul className='hamburgerlink-container'>
                <li className='mb-3 mt-3'>
                    <NavLink className='link-styles' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='link-styles' to='/projects'>Projects</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerLinks;