import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';
function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                  <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
                   Goblin Forge Table Top Tools
                   <i class="fas fa-gavel"></i>
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className='nav-item'>
                          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                              Home
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/inventory' className='nav-links' onClick={closeMobileMenu}>
                              Compendium
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/tools' className='nav-links' onClick={closeMobileMenu}>
                              Tools
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/community' className='nav-links' onClick={closeMobileMenu}>
                              Community
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                              Profile
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/help' className='nav-links' onClick={closeMobileMenu}>
                              Help
                          </Link>
                      </li>
                  </ul>
                  {button && <Button buttonStyle='btn--outline'> Play </Button>}

              </div>          
          </nav>              
        </>
    )
}

export default Navbar
