import React from 'react';
import { NavLink } from 'react-router-dom';

import Home from './Home';

import './Navbar.scss';

function Navbar() {
  const brandTitle = "Vishal";
  return (
    <nav role="navigation" className="navigation">
        <div className='logo'>
            <h4><NavLink to={'/'}>{brandTitle}</NavLink></h4>
        </div>
        <div className='links'>
            <ul>
                <li>
                    <NavLink to={'/'} element={<Home />}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/About'} element={<Home />}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/Skills'} element={<Home />}>Skills</NavLink>
                </li>
                <li>
                    <NavLink to={'/Services'} element={<Home />}>Services</NavLink>
                </li>
                <li>
                    <NavLink to={'/Contact'} element={<Home />}>Contact</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar