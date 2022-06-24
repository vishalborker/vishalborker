import React from 'react';
import './Social.scss';

import LinkedIn from '../images/linkedin-circled.png';
import Github from '../images/github-circled.png';
import Instagram from '../images/instagram-circled.png';


function Social() {
  const links = [
    {
      href: "https://www.linkedin.com",
      alt: 'LinkedIN',
      src: LinkedIn,
    },
    {
      href: "https://www.github.com",
      alt: 'Github',
      src: Github,
    },
    {
      href: "https://www.instagram.com",
      alt: 'Instagram',
      src: Instagram,
    }
  ]
  return (
    <aside className='social'>
      {
        links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noreferrer">
            <img src={link.src} alt={link.alt} />
          </a>
        ))
      }
    </aside>
  )
}

export default Social;