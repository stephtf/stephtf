import { NavLink } from 'react-router-dom';

const HeaderLinks = () => {

    return (
        <div> 
            <ul className='headerlink-container'>
                <li className='mb-3 mt-3'>
                    <NavLink className='link-styles' to='/'>About</NavLink>
                </li>
                <li>
                    <NavLink className='link-styles' to='/projects'>Projects</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default HeaderLinks;