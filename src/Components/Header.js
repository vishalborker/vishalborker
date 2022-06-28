import React from 'react'

import './Header.scss';

function Header({ title, subtitle }) {
  return (
    <div className='header'>
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
    </div>
  )
}

export default Header;