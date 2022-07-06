import React from 'react';
import './Social.scss';

import LinkedIn from '../../images/linkedin-circled.png';
import Github from '../../images/github-circled.png';
import Instagram from '../../images/instagram-circled.png';


function Social() {

  const linkedIN = process.env.REACT_APP_LINKED_IN;
  const instagram = process.env.REACT_APP_INSTAGRAM;
  const github = process.env.REACT_APP_GITHUB;

  const links = [
    {
      href: linkedIN,
      alt: 'LinkedIN',
      src: LinkedIn,
    },
    {
      href: github,
      alt: 'Github',
      src: Github,
    },
    {
      href: instagram,
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