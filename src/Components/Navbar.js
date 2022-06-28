import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Home from './Home';

import './Navbar.scss';

import Logo from '../images/vb.png';
import NavLinks from './NavLinks';

function Navbar() {
  const brandTitle = "Vishal";
  const [activeLink, setActiveLink] = useState(1);
  const Links = [
      {
        to: '/',
        component: <Home />,
        title: 'Home',
        class: 'profile',
        order: 1,
      },
      {
        to: '/About',
        component: <Home />,
        title: 'About',
        class: 'about',
        order: 2,
      },
      {
        to: '/Skills',
        component: <Home />,
        title: 'Skills',
        class: 'skills',
        order: 3,
      },
      {
        to: '/Services',
        component: <Home />,
        title: 'Services',
        class: 'services',
        order: 4,
      },
      {
        to: '/Contact',
        component: <Home />,
        title: 'Contact',
        class: 'contact',
        order: 5,
      }
  ];


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
    console.log({link});
    setActiveLink(link.order);
    const element = document.querySelector(`.${link.class}`);
    const offsetTop = element.offsetTop;
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
        <NavLinks links={Links} onNavigate={onNavigate}/>
    </nav>
  )
}

export default Navbar