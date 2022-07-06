import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

import Logo from '../../images/vb.png';
import NavLinks from './NavLinks';
import { LINKS } from '../../Constants/NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import Overlay from './Overlay';

function Navbar() {
  const brandTitle = "Vishal";
  const [menuOpen, setMenuOpen] = useState(false);
  const links = LINKS;
  const isMobileScreen = window.innerWidth <= 480;

  const smoothScroll = (width, destinationY) => {
    const isGoingUp = destinationY - window.scrollY < 0;
    // let addOffset = 50;
    if (isGoingUp < 0) {
        // addOffset = -50
    } else {
        // addOffset = 50;
    }
    window.scrollTo(width, destinationY);
  }

  const onNavigate = (link) => {
    if (menuOpen) {
      setMenuOpen(open => !open);
    }
    const element = document.querySelector(`.${link.class}`);
    const offsetTop = element && element.offsetTop;
    smoothScroll(0, offsetTop);
  }


  return (
    <nav role="navigation" className="navigation">
        <div className='logo'>
            <h4><NavLink to={'/'}>
              <img src={Logo} alt='VB' />
              {brandTitle}
            </NavLink></h4>
        </div>
        <NavLinks links={links} onNavigate={onNavigate}/>

      {
        isMobileScreen ? <>      
            <div className='hamburger' onClick={() => setMenuOpen(open => !open)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={`sidebar ${menuOpen ? 'open' : 'close'}`} >
              <Sidebar links={links} onNavigate={onNavigate}/>
            </div>
          </> : null
      }

        {
          menuOpen ? <Overlay closeSidebar={() => setMenuOpen(open => !open)}/> : null
        }
    </nav>
  )
}

export default Navbar