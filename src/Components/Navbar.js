import React from 'react';
import { NavLink } from 'react-router-dom';

import Home from './Home';

import './Navbar.scss';

import Logo from '../images/vb.png';
import NavLinks from './NavLinks';

function Navbar() {
  const brandTitle = "Vishal";
  const Links = [
      {
          to: '/',
          component: <Home />,
          title: 'Home'
      },
      {
        to: '/About',
        component: <Home />,
        title: 'About'
      },
      {
        to: '/Skills',
        component: <Home />,
        title: 'Skills'
      },
      {
        to: '/Services',
        component: <Home />,
        title: 'Services'
      },
      {
        to: '/Contact',
        component: <Home />,
        title: 'Contact'
      }
  ]
  return (
    <nav role="navigation" className="navigation">
        <div className='logo'>
            <h4><NavLink to={'/'}>
              <img src={Logo} alt='VB' />
              {brandTitle}
            </NavLink></h4>
        </div>
        <NavLinks links={Links} />
    </nav>
  )
}

export default Navbar