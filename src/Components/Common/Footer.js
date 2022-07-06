import React from 'react';

import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
        Copyright @Vishal Borker {new Date().getFullYear()}
    </footer>
  )
}

export default Footer;