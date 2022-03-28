import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLinks from './header-components/HeaderLinks';


const Header = () => {

    const [toggle, setToggle] = useState(false);
    const handleButtonClick = () => setToggle(toggle => !toggle);

    return (
        <div>
            <nav>
                <div className="site-top-border"></div>
                
                <div className='logo-container'>
                    <NavLink to='/' className='link-styles'>
                    <img className='img-logo' alt='favicon logo' src='/images/favi.png'/></NavLink>
                    <div>
                        <NavLink to='/' className='link-styles'>
                        <p className='title'>Steph Fajardo</p> 
                        <p className='subtitle'>Full Stack Web Developer</p>
                        </NavLink>
                    </div>
                </div>
                
                <NavLink to='#' className='hamburger' onClick={handleButtonClick}> 
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                </NavLink>
                
            </nav>

            { toggle && <HeaderLinks />}
        </div>
    )
}

export default Header;