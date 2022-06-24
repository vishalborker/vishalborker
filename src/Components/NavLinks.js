import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinks({ links }) {
  return (
    <div className='links'>
        <ul>
            {
                links.map((link, index) => (
                <li key={index}>
                    <button>{link.title}</button>
                </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavLinks;