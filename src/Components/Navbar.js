import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

import Logo from '../images/vb.png';
import NavLinks from './NavLinks';
import { LINKS } from '../Constants/NavLinks';

function Navbar() {
  const brandTitle = "Vishal";
  const [activeLink, setActiveLink] = useState(1);
  const links = LINKS;

  const smoothScroll = (width, destinationY, positive) => {
    const isGoingUp = destinationY - window.scrollY < 0;
    let addOffset = 20;
    if (isGoingUp < 0) {
        addOffset = -20
    } else {
        addOffset = 20;
    }

    window.scrollTo(width, destinationY);

    // const interval = setInterval(() => {
    //     const nextHeight = window.scrollY + addOffset;

    //     if (!isGoingUp) {
    //         if (nextHeight <  destinationY) {
    //             window.scrollTo(width, nextHeight);
    //             console.log('What1');
    //         } else {
    //             clearInterval(interval);
    //             console.log('What2');
    //         }
    //     } else {
    //         if (nextHeight > destinationY) {
    //             window.scrollTo(width, nextHeight);
    //             console.log('What11');
    //         } else {
    //             clearInterval(interval);
    //             console.log('What21');
    //         }
    //     }
    // }, 20);
  }

  const onNavigate = (link) => {
    setActiveLink(link.order);
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
    </nav>
  )
}

export default Navbar