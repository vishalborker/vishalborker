import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinks({ links }) {
  return (
    <div className='links'>
    <ul>
        {
            links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to} element={link.component}>{link.title}</NavLink>
              </li>
            ))
        }
    </ul>
</div>
  )
}

export default NavLinks;