import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerLinks from './header-components/HamburgerLinks';
import { useMediaQuery } from 'react-responsive';
import NavLinks from './header-components/NavLinks';


const Header = () => {

    const [toggle, setToggle] = useState(false);
    const handleButtonClick = () => setToggle(toggle => !toggle);

    const largeScreen = useMediaQuery({ query: '(min-width: 800px)' })

    return (
        <div>
            <nav>
                <div className="site-top-border"></div>
                
                <div className='logo-container'>
                    <NavLink to='/' className='link-styles'>
                    <img className='img-logo' alt='favicon logo' src='/images/favi.png'/></NavLink>
                    <div>
                        <NavLink to='/' className='link-styles'>
                        <p className='logo-title'>Steph Fajardo</p> 
                        <p className='logo-subtitle'>Full Stack Web Developer</p>
                        </NavLink>
                    </div>
                
                { largeScreen ? <NavLinks /> :
                <NavLink to='#' className='hamburger' onClick={handleButtonClick}> 
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                </NavLink>}
                </div>
            </nav>

            { toggle && <HamburgerLinks />}
        </div>
    )
}

export default Header;